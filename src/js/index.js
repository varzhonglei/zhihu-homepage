import '../less/homepage-not-optimize.less';
import React from 'react';
import ReactDom from 'react-dom';
import Navigator from '../component/Navigator.js';

var App = React.createClass({
    render: function () {
        return (
            <div>
                <Navigator/>
                <div className='wrapper'>
                    <div className="content">
                        <div className="con-left">
                            <div className="con-left-in" id="power">
                                <div className="menu">
                                    <div className="home-entry-avatar">
                                        <img src="https://pic3.zhimg.com/v2-1dd60974573d2c18a5bf4b7d6ccaf7c6_xs.jpg" alt="" className="home-entry-img"/>
                                    </div>
                                    <div className="home-entry-menu">
                                        <span className="arrow"></span>
                                        <ul>
                                            <li className="home-entry-instance"><div className="menu-icon menu-icon-first"></div><a href="">提问</a></li>
                                            <li className="home-entry-instance"><div className="menu-icon menu-icon-second"></div><a href="">回答</a></li>
                                            <li className="home-entry-instance"><div className="menu-icon menu-icon-third"></div><a href="">写文章</a></li>
                                        </ul>
                                        <div className="home-entry-draft"><a href="">草稿</a></div>
                                    </div>
                                </div>
                                <div className="feed-box">
                                    <div className="feed-head">
                                        <span className="feed-head-icon"></span>
                                        <div className="feed-head-text"><a href="">最新动态</a></div>
                                        <div className="feed-head-set"><a href="">设置</a></div>
                                    </div>
                                    <div className='feed-box'>
                                        <div className="feed-item-inner">
                                            <div className="feed-main">
                                                <div className="avatar">
                                                    <a href="">
                                                        <img src="https://pic3.zhimg.com/v2-1dd60974573d2c18a5bf4b7d6ccaf7c6_xs.jpg" alt=""/>
                                                    </a>
                                                </div>
                                                <div className="feed-source"> <span className="feed-gray-text">热门回答，来自：</span><a href="" className="feed-gray-text">source</a></div>
                                                <div className="feed-content">
                                                    <h2 className="feed-title"><a href="#">我是title</a></h2>
                                                    <div className="feed-content-detailed">
                                                        <div className="feed-author-info feed-gray-text"><a href="#" className="author-name">author-name</a> author的其他介绍</div>
                                                        <div className="feed-summary"> 我是文字 我是文字 我是文字 我是文字 我是文字 我是文字 我是文字
                                                            我是文字 我是文字 我是文字 我是文字 我是文字 我是文字 我是文字
                                                            我是文字 我是文字 我是文字 我是文字 我是文字 我是文字 我是文字
                                                        </div>
                                                        <div className="feed-meta">
                                                            <div>
                                                                <a href="#"><div className="icon-meta-add"></div>关注问题</a>
                                                            </div>
                                                            <div>                                    
                                                                <a href="#"><div className="icon-meta-comment"></div>57条评论</a>
                                                            </div>
                                                            <div>                                          
                                                                <a href="#"><div className="icon-meta-thanks"></div>感谢</a>
                                                            </div>
                                                            <div>                                                
                                                                <a href="#"><div className="icon-meta-share"></div>分享</a>
                                                            </div>
                                                            <div>                                                 
                                                                <a href="#"><div className="icon-meta-collect"></div>收藏</a>
                                                            </div>
                                                            <div>                                            
                                                                <a href="#"><div className="icon-meta-report">•</div>举报</a>
                                                            </div>
                                                            <div>                                                    
                                                                <a href="#"><div className="icon-meta">•</div>没有帮助</a>
                                                            </div>
                                                            <div>
                                                                <a href="#"><div className="icon-meta">•</div>作者保留权</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="feed-load"></div>
                                </div>
                            </div>
                        </div>
                        <div className="con-right">
                            <div className="advertisement"></div>
                            <div className="nav-right-content">
                                <div className="func-right">
                                    <div className="func-right-box"><a href="#" className="func-item"><div className="func-item-icon func-icon-collect"></div>我的收藏</a></div>
                                    <div className="func-right-box"><a href="#" className="func-item"><div className="func-item-icon func-icon-question"></div>我关注的问题</a></div>
                                    <div className="func-right-box"><a href="#" className="func-item"><div className="func-item-icon func-icon-askme"></div>邀请我回答的问题</a></div>
                                </div>
                                <div className="func-right">
                                    <div className="func-right-box"><a href="#" className="func-item"><div className="func-item-icon func-icon-collect"></div>公共编辑动态</a></div>
                                    <div className="func-right-box"><a href="#" className="func-item"><div className="func-item-icon func-icon-question"></div>社区服务中心</a></div>
                                    <div className="func-right-box"><a href="#" className="func-item"><div className="func-item-icon func-icon-askme"></div>版权服务中心</a></div>
                                </div>
                                <div className="func2-right">
                                    <h3 className="func2-title">知乎专栏</h3>
                                    <div className="func2-right-box">
                                        <div className="func2-right-item"><a href="#"><div className="zhihu-zhuanlan-icon"></div>专栏・发现</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
})


ReactDom.render(
    <App/>,
    document.getElementById('root')
)