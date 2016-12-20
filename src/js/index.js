import '../less/init.less';
import React from 'react';
import ReactDom from 'react-dom';
import Navigator from '../component/Navigator.js';
import Wrapper from '../component/Wrapper.js';

var App = React.createClass({
    render: function () {
        return (
            <div>
                <Navigator/>
                <Wrapper/>
            </div>
        )
    }
})

ReactDom.render(
    <App/>,
    document.getElementById('root')
)