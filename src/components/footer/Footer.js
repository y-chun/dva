import { connect } from 'dva'
import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { List, Input, WhiteSpace, Button, Toast, Icon, ActionSheet } from 'antd-mobile';
import footer from './Footer.css'
const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let wrapProps;
if (isIPhone) {
    wrapProps = {
        onTouchStart: e => e.preventDefault(),
    };
}
export default class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            disabled: true
        }
    }
    changeText = (e) => {
        if (e.target.value == '') {
            this.setState({ disabled: true })
        } else {
            this.setState({ disabled: false })
        }
    }
    btnClick = () => {
        let input = ReactDOM.findDOMNode(this.refs.input);//获取input
        // console.log(input.value)
        let putInfo = {
            name: '我',
            id: "1",
            type:"text",
            info: input.value
        }
        this.props.inputVal(putInfo)//传值给父组件
        input.value = ''//清空input
        this.setState({ disabled: true })//设置按钮不可使用
    }
    sendImg = () => {
        let fileDate = ReactDOM.findDOMNode(this.refs.inputImg);//获取input
        let file = fileDate.files[0];
        let render = new FileReader();
        render.onload = (e) => {
            // console.log(e.target.result)
            let putInfo = {
                name: '我',
                id: "1",
                type:'img',
                info: e.target.result
            }
            this.props.inputVal(putInfo)//传值给父组件
        }
        render.readAsDataURL(file);
    }
    showActionSheet = () => {
        const BUTTONS = ['操作一', '操作二', '操作三', '删除', '取消'];
        ActionSheet.showActionSheetWithOptions({
            options: BUTTONS,
            cancelButtonIndex: BUTTONS.length - 1,
            destructiveButtonIndex: BUTTONS.length - 2,
            // title: '标题',
            message: '我是描述我是描述',
            maskClosable: true,
            'data-seed': 'logId',
            wrapProps,
        },
            (buttonIndex) => {
                this.setState({ clicked: BUTTONS[buttonIndex] });
            });
    }
    render() {
        return (<div className={footer.footer}>
            <div className={footer.footerTop}>
                <input type='text' onChange={this.changeText} className={footer.input} ref='input' />
                <Button className={footer.btn} type="primary" size='small' onClick={this.btnClick.bind(this)} disabled={this.state.disabled}>发送</Button>
            </div>
            <div className={footer.footerBom}>
                <ul>
                    <li>
                        <input type='file' onChange={this.sendImg} ref='inputImg' accept="image/*"/>
                        <p>图片</p>
                    </li>
                    <li onClick={this.showActionSheet}></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>)
    }
}