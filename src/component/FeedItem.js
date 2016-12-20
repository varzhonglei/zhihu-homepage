import React from 'react';
import '../less/FeedItem.less';

var FeedItem = React.createClass({
    render: function () {
        return (
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
        )
    }
})

export default FeedItem;