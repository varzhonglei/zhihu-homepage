import React from 'react';
import '../less/RightFunc2.less';

var RightFunc2 = React.createClass({
    render: function () {
        return (
             <div className="func2-right">
                 <h3 className="func2-title">知乎专栏</h3>
                 <div className="func2-right-box">
                     <div className="func2-right-item"><a href="#"><div className="zhihu-zhuanlan-icon"></div>专栏・发现</a></div>
                 </div>
             </div>        
        )
    }
})

export default RightFunc2;