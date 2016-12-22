import React from 'react';
import '../less/FeedBox.less';
import FeedItem from './FeedItem.js'

var FeedBox = React.createClass({
    getInitialState: function () {
        return {
            oStart: 0,
            oCount: 10,
            allInfo: {}
        }
	},

    componentDidMount: function() {
        if(this.flag){
        	this.flag = false;
        	$.ajax.call(this, {
        		url: 'https://api.douban.com/v2/book/search',
        		type: "GET",
        		dataType: "JSONP",
        		data: {q: this.props.seekContent, start: this.state.oStart, count: this.state.oCount},
        		success : this.reLoadCallback
        	});
        }	
    },

    componentWillReceiveProps:function (nextProps) {
        let newCallback;
        if(nextProps.reLoadFeed === true){
            newCallback = this.reLoadCallback;
        }else{
            newCallback = this.loadMoreCallback;
        }
        if(this.flag){
        	this.flag = false;
        	$.ajax.call(this, {
        		url: 'https://api.douban.com/v2/book/search',
        		type: "GET",
        		dataType: "JSONP",
        		data: {q: nextProps.seekContent, start: this.state.oStart, count: this.state.oCount },
        		success : newCallback
        	});
        }	
    },

    loadMoreCallback:function (json) {
        console.log(json, 'ajax返回数据');  
        var anotherS = this.deepclone(this.state);   
		let	books = json.books;
        books.forEach((ele, index) => {
            anotherS.allInfo[anotherS.oStart + index] = {};
            anotherS.allInfo[anotherS.oStart + index].image = ele.image;
            anotherS.allInfo[anotherS.oStart + index].title = ele.subtitle ? ele.subtitle : ele.title;
            anotherS.allInfo[anotherS.oStart + index].source = ele.publisher;
            anotherS.allInfo[anotherS.oStart + index].author = ele.author[0] ? ele.author[0] : 'no anthor';
            anotherS.allInfo[anotherS.oStart + index].summary = ele.summary;
            anotherS.allInfo[anotherS.oStart + index].id = ele.id;
        })
        anotherS.oStart += json.count;
		this.flag = true;
        this.setState({allInfo: anotherS.allInfo, oStart: anotherS.oStart})
    },

    reLoadCallback: function (json) {
        console.log(json, 'ajax返回数据');  
        var anotherS = {
            oStart: 0,
            oCount: 10,
            allInfo: {}
        };   
		let	books = json.books;
        books.forEach((ele, index) => {
            anotherS.allInfo[index] = {};
            anotherS.allInfo[index].image = ele.image;
            anotherS.allInfo[index].title = ele.subtitle ? ele.subtitle : ele.title;
            anotherS.allInfo[index].source = ele.publisher;
            anotherS.allInfo[index].author = ele.author[0] ? ele.author[0] : 'no anthor';
            anotherS.allInfo[index].summary = ele.summary;
            anotherS.allInfo[anotherS.oStart + index].id = ele.id;
        })
		this.flag = true;
        this.setState({allInfo: anotherS.allInfo, oStart: anotherS.oStart})
    },
    
    flag: true,

    deepclone: function (p, c) {
        var c = c || {};
        var toString = Object.prototype.toString;
        for (var prop in p){
            if (p.hasOwnProperty(prop)){
                if(typeof p[prop] === 'object'){
                    c[prop] = (toString.call(p[prop]) === '[object Array]') ? [] : {};
                    this.deepclone(p[prop], c[prop])  // 这里递归调用加了一个this，因为这个克隆函数是定义在组件当中的；
                }else{
                    c[prop] = p[prop]
                }
            }
        }
        return c
    },

    render: function () {
        console.log(this.state,' feedbox 当前状态')
        let allInfo =  this.state.allInfo;
        let feedAll = [];
        for(var prop in allInfo){
            if(allInfo.hasOwnProperty(prop)){
                feedAll.push(<FeedItem key={prop + 1000} info={allInfo[prop]}/>)
            }
        }
        return (
            <div className="feed-box">
               <div className="feed-head" id='feed-head'>
                   <span className="feed-head-icon"></span>
                   <div className="feed-head-text"><a href="">最新动态</a></div>
                   <div className="feed-head-set"><a href="">设置</a></div>
               </div>
               <div className='feed-item-box'>
                   {feedAll}
               </div>
               <div id="feed-load" onClick={this.props.loadMore}>加载更多</div>
               <div><a href="#feed-head" className="anchor">回顶部↑</a></div>
           </div>                    
        )
    }
})

export default FeedBox;