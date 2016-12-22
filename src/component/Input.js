import React from 'react';
import '../less/Input.less';

var Input = React.createClass({
    ownHandlerChange: function () {
        var seekContent = this.refs.inp.value;
        this.props.handlerChange(seekContent)
    },
    render: function () {
        return (
            <div className="search">
                     <input type="text" name='q' ref='inp'/>
                     <button className="btn-search" onClick={this.ownHandlerChange}><span className="icon-search"></span></button>
            </div>          
        )
    }
})

export default Input;