import React from 'react';
import '../less/Input.less';

var Input = React.createClass({
    render: function () {
        return (
            <div className="search">
                 <form action="#" method="GET">
                     <input type="text" name='q'/>
                     <button className="btn-search"><span className="icon-search"></span></button>
                 </form>
            </div>          
        )
    }
})

export default Input;