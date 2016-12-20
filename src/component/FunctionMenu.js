import React from 'react';
import '../less/FunctionMenu.less';

var FunctionMenu = React.createClass({
    render: function () {
        return (
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
        )
    }
})

export default FunctionMenu;