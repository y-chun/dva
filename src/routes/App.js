import Head from '../components/Head'
import Content from '../components/Content/Content'
import Footer from '../components/footer/Footer'
const App = ({dispatch,props}) => {
    const info = []
    function inputVal(val){
        info.push(val)
        console.log(info);
    }
    return (
        <div>
            <Head></Head>
            <Content info = {info}></Content>
            <Footer inputVal={inputVal}></Footer>
        </div>
    )
}
export default App;