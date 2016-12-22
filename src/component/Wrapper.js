import React from 'react';
import '../less/Wrapper.less';
import FunctionMenu from './FunctionMenu.js';
import FeedBox from './FeedBox.js';
import RightFunc1 from './RightFunc1.js';
import RightFunc2 from './RightFunc2.js';

var Wrapper = React.createClass({
    render: function () {
        return (
                <div className='wrapper'>
                    <div className="content">
                        <div className="con-left">
                            <div className="con-left-in" id="power">
                                <FunctionMenu/>
                                <FeedBox seekContent={this.props.seekContent} loadMore={this.props.loadMore} reLoadFeed={this.props.reLoadFeed}/>
                            </div>
                        </div>
                        <div className="con-right">
                            <div className="advertisement"></div>
                            <div className="nav-right-content">
                                <RightFunc1/>
                                <RightFunc2/>
                            </div>
                        </div>
                    </div>
                </div>         
        )
    }
})

export default Wrapper;


