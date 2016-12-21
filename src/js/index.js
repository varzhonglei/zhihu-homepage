import '../less/init.less';
import React from 'react';
import ReactDom from 'react-dom';
import Navigator from '../component/Navigator.js';
import Wrapper from '../component/Wrapper.js';


var App = React.createClass({
    getInitialState: function () {
        return {
            seekContent: '思考的艺术',
            oStart: 0,
            oCount: 10,
            flag: true,
            allInfo: {}
        }
	},

    deepclone: function (p, c) {
        var c = c || {};
        var toString = Object.prototype.toString;
        for (var prop in p){
            if (p.hasOwnProperty(prop)){
                if(typeof p[prop] === 'object'){
                    c[prop] = (toString.call(p[prop]) === '[object Array]') ? [] : {};
                    this.deepclone(p[prop], c[prop])
                }else{
                    c[prop] = p[prop]
                }
            }
        }
        return c
    },
	initCallback:	function (json){     
        var anotherS = this.deepclone(this.state);   
		console.log(json, 'ajax返回数据');
		anotherS.oStart += json.count;
		let	books = json.books;
        books.forEach((ele, index) => {
            anotherS.allInfo[index] = {};
            anotherS.allInfo[index].image = ele.image;
            anotherS.allInfo[index].title = ele.subtitle ? ele.subtitle : ele.title;
            anotherS.allInfo[index].source = ele.publisher;
            anotherS.allInfo[index].author = ele.author[0] ? ele.author[0] : 'no anthor';
            anotherS.allInfo[index].summary = ele.summary;
        })
		anotherS.flag = true;
        this.setState({allInfo: anotherS.allInfo})
    },
    componentWillMount: function() {
        var anotherS = this.deepclone(this.state);
        if(anotherS.flag){
        	anotherS.flag = false;
        	$.ajax.call(this, {
        		url: 'https://api.douban.com/v2/book/search',
        		type: "GET",
        		dataType: "JSONP",
        		data: {q: anotherS.seekContent, start: anotherS.oStart, count: anotherS.oCount},
        		success : this.initCallback
        	});
        }	
    },
    componentDidMount:function() {
        console.log(this.state, 'did')
    },
    render: function () {
        console.log(this.state, 'render');
        return (
            <div>
                <Navigator/>
                <Wrapper state={this.state}/>
            </div>
        )
    }
})

ReactDom.render(
    <App/>,
    document.getElementById('root')
)
