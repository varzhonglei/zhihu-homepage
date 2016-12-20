import React from 'react';
import '../less/RightFunc1.less';

var RightFunc1 = React.createClass({
    render: function () {
        return (
            <div>
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
            </div>      
        )
    }
})

export default RightFunc1;