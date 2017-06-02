import { connect } from 'dva'
import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import content from './Content.css'
export default class Content extends React.Component {
    constructor(props) {
        super(props)
        // console.log(props)
    }
    typeFun = (value) => {
        if (value.type == 'text') {
            return (
                <div className={content.contInfo}>
                    {value.info}
                </div>
            )
        }else if(value.type = 'img'){
            return (
                <div className={content.contInfo}>
                    <img src={value.info}/>
                </div>
            )
        }
    }
    render() {
        return (
            <div style={{ top: '90px', background: '', position: 'absolute', width: '100%', bottom: '178px', padding: '20px', overflowY: 'auto' }}>
                {this.props.info.map((value, i) => {
                    if (value.id == '2') {
                        return (
                            <div className={content.chat} key={i}>
                                <div style={{ width: '8%', height: '8%', borderRadius: '50%', overflow: 'hidden' }}>
                                    <img src='./assets/1.jpg' style={{ maxWidth: '100%' }} />
                                </div>
                                <div className={content.contbox}>
                                    <p>{value.name}</p>
                                    {this.typeFun(value)}
                                </div>
                            </div>
                        )
                    }
                    else {
                        return (
                            <div className={content.chatRight} key={i}>
                                <div style={{ width: '8%', height: '8%', borderRadius: '50%', overflow: 'hidden' }}>
                                    <img src='./assets/1.jpg' style={{ maxWidth: '100%' }} />
                                </div>
                                <div className={content.contbox}>
                                    <p>{value.name}</p>
                                    {this.typeFun(value)}
                                </div>
                            </div>
                        )
                    }
                })}

            </div>
        )
    }
}