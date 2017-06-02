import Head from '../components/Head'
import Content from '../components/Content/Content'
import Footer from '../components/footer/Footer'
import ReactDOM from 'react-dom'
import { connect } from 'dva'
import io from 'socket.io-client'
const mapDispatchToProps = (dispatch, ownProps) => {
        return {
            query : () => {
                dispatch({
                    type: 'products/setName',
                });
            }
        }
    }
const mapStateToProps = ()=>{
    return{}
}
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            info: [],
            name: ''
        }
        this.socket = io('http://10.1.10.181:3000');
    }
    

    componentWillMount() {//在完成首次渲染之前调用,相当于onload
        let _this = this
        this.socket.on('connect', function () { console.log('连接成功') });
        this.socket.on('newMessage', function (data) {
            let info = _this.state.info;//获取state
            // let infoState = info.some((i) => {
            //     return i.bs == data.bs
            // })//判断信息是否为自己发出
            // if (!infoState) {//不是自己发出的则显示
            //     info.push(data)//添加state
            //     _this.setState({
            //         info: info
            //     })//设置state
            // }
            // else {
            //     if (data.bs == '0' && info.length >= 1) {
            //         console.log('1')
            //         data.bs = info.length
            //         info.push(data)//添加state
            //         _this.setState({
            //             info: info
            //         })//设置state
            //     }
            // }
            info.push(data)//添加state
            _this.setState({
                info: info
            })//设置state
        });
        this.socket.on('disconnect', function () { });
    }
    inputVal = (val) => {
        let info = this.state.info;//获取state
        // val.bs = (info.length > 0) ? parseInt(info[info.length - 1].bs) + 1 : '0'//添加信息标识
        info.push(val)//添加state
        this.setState({
            info: info
        })//设置state
        this.socket.emit('newMessage', val);
        this.props.query()
    }
    scrollContent = () => {
        let contentDom = ReactDOM.findDOMNode(this.refs.content);
        let contScrollTop = contentDom.scrollHeight - contentDom.offsetHeight;//获取Content组件滚动高度与实际高度差值
        contentDom.scrollTop = contScrollTop;
    }
    componentDidUpdate() {//新的prop和state渲染完成后调用
        this.scrollContent()
    }
    render() {
        return (
            <div >
                <Head></Head>
                <Content info={this.state.info} ref='content'></Content>
                <Footer inputVal={this.inputVal}></Footer>
            </div>
        )
    }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)