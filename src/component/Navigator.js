import React from 'react';
import '../less/Navigator.less';
import Input from './Input.js';

var Navigator = React.createClass({
    render: function () {
        return (
                <div className='navigator'>
                    <div className='nav-center'>
                        <div className='nav-left'>
                            <a href="#" className="logo">知乎</a>
                            <Input/>
                            <ul className="nav-menu">
                                <li className="nav-instance"><a href="#">首页</a></li>
                                <li className="nav-instance"><a href="#">发现</a></li>
                                <li className="nav-instance"><a href="#">话题</a></li>
                                <li className="nav-instance"><a href="#">消息</a></li>
                            </ul>
                        </div>
                        <div className="nav-right">
                            <div className="user-info">
                                <div className="user-box">
                                    <div className="user-img"><img src="https://pic3.zhimg.com/v2-1dd60974573d2c18a5bf4b7d6ccaf7c6_s.jpg" alt="用户头像"/></div>
                                    <a href="#" className="user-name">钟磊</a>
                                </div>
                                <ul className="user-more">
                                    <li className="user-more-instance"><a href="#">我的主页</a></li>
                                    <li className="user-more-instance"><a href="#">私信</a></li>
                                    <li className="user-more-instance"><a href="#">设置</a></li>
                                    <li className="user-more-instance"><a href="#">退出</a></li>
                                </ul>
                            </div>
                            <div className="question"><button>提问</button></div>
                        </div>                       
                    </div> 
                </div>            
        )
    }
})

export default Navigator;