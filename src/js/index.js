/* 
    ******auther: ZhongLei                    
    ******使用了多行打点，浏览器版本要高              
    ******内容是ajax获取的豆瓣开放的api里的内容        
 */


import '../less/init.less';
import React from 'react';
import ReactDom from 'react-dom';
import Navigator from '../component/Navigator.js';
import Wrapper from '../component/Wrapper.js';


var App = React.createClass({
    getInitialState: function () {
        return {
            seekContent: '思考的艺术',
            reLoadFeed: true
        }
	},
    handlerChange: function (inputValue) {
        this.setState({seekContent: inputValue, reLoadFeed: true})
    },
    loadMore: function () {
        this.setState({reLoadFeed: false})
    },
    render: function () {
        return (
            <div>
                <Navigator handlerChange={this.handlerChange}/>
                <Wrapper seekContent={this.state.seekContent} loadMore={this.loadMore} reLoadFeed={this.state.reLoadFeed} />
            </div>
        )
    }
})

ReactDom.render(
    <App/>,
    document.getElementById('root')
)
