import { connect } from 'dva'
import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { List, Input, WhiteSpace, Button } from 'antd-mobile';
import footer from './Footer.css'
export default class Footer extends React.Component {
    constructor(props) {
    super(props)
    this.state={
        disabled:true
    }
  }
    changeText = (e) => { 
        if(e.target.value==null||e.target.value==''){
            console.log('1')
             this.setState({ disabled: true })
        }else{
            this.setState({ disabled: false })
        }
    }
    btnClick = () => {
        let input = ReactDOM.findDOMNode(this.refs.input);//获取input
        // console.log(input.value)
        let putInfo = {
            name:'我',
            info:input.value
        }
        this.props.inputVal(putInfo)//传值给父组件
        input.value = ''//清空input
        this.setState({ disabled: true })//设置按钮不可使用
    }
    render() {
        return (<div className={footer.footer}>
            <input type='text' onChange={this.changeText} className={footer.input} ref='input' />
            <Button className={footer.btn} type="primary" size='small' onClick={this.btnClick.bind(this)} disabled={this.state.disabled}>发送</Button>
        </div>)
    }
}