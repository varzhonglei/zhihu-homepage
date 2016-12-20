import React from 'react';
import '../less/FeedBox.less';
import FeedItem from './FeedItem.js'

var FeedBox = React.createClass({
    render: function () {
        return (
            <div className="feed-box">
               <div className="feed-head">
                   <span className="feed-head-icon"></span>
                   <div className="feed-head-text"><a href="">最新动态</a></div>
                   <div className="feed-head-set"><a href="">设置</a></div>
               </div>
               <div className='feed-item-box'>
                   <FeedItem/>
               </div>
               <div id="feed-load"></div>
           </div>                    
        )
    }
})

export default FeedBox;