(this["webpackJsonpmeme-generator"]=this["webpackJsonpmeme-generator"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),m=a.n(r),o=(a(14),a(4)),c=a(5),s=a(6),i=a(1),u=a(8),h=a(7),p=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={topText:"",bottomText:"",randomImg:"https://i.ytimg.com/vi/O1hCLBTD5RM/maxresdefault.jpg",allMemeImgs:[]},e.componentDidMount=e.componentDidMount.bind(Object(i.a)(e)),e.changeHandler=e.changeHandler.bind(Object(i.a)(e)),e.chooseMeme=e.chooseMeme.bind(Object(i.a)(e)),e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.imgflip.com/get_memes").then((function(e){return e.json()})).then((function(t){var a=t.data.memes;e.setState({allMemeImgs:a}),console.log(e.state.allMemeImgs)}))}},{key:"changeHandler",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(o.a)({},a,n))}},{key:"chooseMeme",value:function(e){e.preventDefault();var t=Math.floor(Math.random()*this.state.allMemeImgs.length);this.setState({randomImg:this.state.allMemeImgs[t].url})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",{className:"meme-form",onSubmit:this.chooseMeme},l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"topText",value:this.state.topText,placeholder:"Enter top line text",onChange:this.changeHandler}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"bottomText",value:this.state.bottomText,placeholder:"Enter bottom line text",onChange:this.changeHandler}),l.a.createElement("button",null,"Generate")),l.a.createElement("div",{className:"meme"},l.a.createElement("img",{src:this.state.randomImg,alt:""}),l.a.createElement("h2",{className:"top"},this.state.topText),l.a.createElement("h2",{className:"bottom"},this.state.bottomText)))}}]),a}(l.a.Component);var d=function(e){return l.a.createElement("header",null,l.a.createElement("img",{src:"http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png",alt:"Problem?"}),l.a.createElement("p",null,"Meme Generator"))};var g=function(){return l.a.createElement("div",null,l.a.createElement(d,null),l.a.createElement(p,null))};m.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(g,null)),document.getElementById("root"))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.3ef3cd16.chunk.js.map