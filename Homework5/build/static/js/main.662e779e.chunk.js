(this.webpackJsonpmy=this.webpackJsonpmy||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a(9),s=a.n(i),r=(a(14),a(6)),o=a(2),c=a(3),l=a(5),h=a(4),u=(a(15),a(0)),d=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props,t=e.items,a=e.ondeleteNews;return Object(u.jsx)("div",{className:"newsSection",children:t.map((function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{children:e.title}),Object(u.jsx)("div",{children:e.content}),Object(u.jsx)("div",{children:e.description}),Object(u.jsx)("img",{src:e.photo}),Object(u.jsx)("p",{children:e.hashtag.map((function(e){return"#"+e+" "}))}),Object(u.jsx)("div",{children:e.author}),Object(u.jsx)("button",{onClick:function(){return a(e.id)},children:"Delete"}),Object(u.jsx)("hr",{})]},e.id)}))})}}]),a}(n.Component),j=d;d.defaultProps={};var b=[{id:"60a178bdae5f012e6d3ae912",title:"elit ea elit minim reprehenderit",content:"Proident voluptate ad commodo ea velit eu nulla velit est. Eiusmod pariatur anim ullamco enim consectetur est incididunt. Do duis ex cupidatat consectetur anim consectetur culpa nisi irure voluptate consequat.",photo:"https://picsum.photos/500/500/?blur=2",hashtag:["commodo","proident","reprehenderit"],author:"Harriet Brooks"},{id:"60a178bd21a50b295dd67414",title:"eu ullamco laborum anim elit",content:"Voluptate in eiusmod laborum minim magna est ut incididunt quis cupidatat cillum minim occaecat fugiat.Nisi culpa sunt sunt elit esse. Deserunt nulla ut enim ex.",photo:"https://picsum.photos/500/500/?blur=2",hashtag:["commodo","aliqua","proident"],author:"Willis Simmons"},{id:"60a178bdb6b51a0338774f9b",title:"cillum duis sit tempor ipsum",content:"Ad consequat commodo reprehenderit fugiat et. Veniam minim laborum laborum magna Lorem proident esse et fugiat qui deserunt ullamco culpa. Sit anim laborum occaecat laborum ut amet sunt commodo quis ex eu officia.",hashtag:["aliqua","proident","reprehenderit"],photo:"https://picsum.photos/500/500/?blur=2",author:"Vargas Cote"}],m=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={filter:""},e.handleChangeSearch=function(t){(0,e.props.onChangeSearch)(t.currentTarget.value)},e.handleFilterHashtag=function(t){(0,e.props.onChangeFilterHashtag)(t.currentTarget.value)},e.handleFilterAuthor=function(t){var a=t.currentTarget.value;(0,e.props.onChangeFilterAuthor)(a),e.setState({filter:a})},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.search;return Object(u.jsxs)("div",{className:"filtersSection",children:[Object(u.jsx)("input",{className:"inpt",value:e,onChange:this.handleChangeSearch}),Object(u.jsxs)("div",{className:"filtersHashtag",children:[Object(u.jsx)("input",{type:"checkbox",value:"commodo",onClick:this.handleFilterHashtag}),"#commodo",Object(u.jsx)("br",{}),Object(u.jsx)("input",{type:"checkbox",value:"proident",onChange:this.handleFilterHashtag}),"#proident",Object(u.jsx)("br",{}),Object(u.jsx)("input",{type:"checkbox",value:"reprehenderit",onChange:this.handleFilterHashtag}),"#reprehenderit",Object(u.jsx)("br",{}),Object(u.jsx)("input",{type:"checkbox",value:"aliqua",onChange:this.handleFilterHashtag}),"#aliqua"]}),Object(u.jsxs)("div",{className:"filtersAuthor",children:[Object(u.jsx)("input",{type:"radio",checked:"Harriet Brooks"===this.state.filter,onChange:this.handleFilterAuthor,value:"Harriet Brooks"}),"Harriet Brooks",Object(u.jsx)("br",{}),Object(u.jsx)("input",{type:"radio",checked:"Vargas Cote"===this.state.filter,onChange:this.handleFilterAuthor,value:"Vargas Cote"}),"Vargas Cote",Object(u.jsx)("br",{}),Object(u.jsx)("input",{type:"radio",checked:"Willis Cote"===this.state.filter,onChange:this.handleFilterAuthor,value:"Willis Cote"}),"Willis Cote",Object(u.jsx)("br",{}),Object(u.jsx)("input",{type:"radio",checked:"Willis Simmons"===this.state.filter,onChange:this.handleFilterAuthor,value:"Willis Simmons"}),"Willis Simmons"]})]})}}]),a}(n.Component),p=m;m.defaultProps={};var f=a(8);function g(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},n=new FileReader;n.readAsDataURL(e),n.onload=function(){t(n.result)},n.onerror=function(e){a(e)}}var O=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={title:"",content:"",description:"",photo:"",hashtag:[],author:""},e.handleSubmit=function(t){t.preventDefault();var a=Math.floor(100*Math.random())+1,n=Object(f.a)(Object(f.a)({id:a},e.state),{},{hashtag:e.state.hashtag});e.props.oncreateNew(n),t.target.reset()},e.setTitle=function(t){var a=t.target.value;e.setState({title:a})},e.setContent=function(t){var a=t.target.value;e.setState({content:a})},e.setDescription=function(t){var a=t.target.value;e.setState({description:a})},e.setAuthor=function(t){var a=t.target.value;e.setState({author:a}),console.log(a)},e.setHashtag=function(t){var a,n=t.target.value;a=[].concat(Object(r.a)(e.state.hashtag),[n]),e.setState({hashtag:a})},e.handlePhoto=function(t){g(t.currentTarget.files[0],(function(t){e.setState({photo:t})}))},e}return Object(c.a)(a,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"form-news",children:Object(u.jsxs)("form",{onSubmit:this.handleSubmit,className:"movie-form__cont",autoComplete:"off",children:[Object(u.jsxs)("div",{className:"form-news-row",onChange:this.setTitle,children:[Object(u.jsx)("label",{htmlFor:"form-news-title",children:"Title: "}),Object(u.jsx)("br",{}),Object(u.jsx)("input",{type:"text",name:"title",id:"form-news-title"})]}),Object(u.jsxs)("div",{className:"form-news-row",children:[Object(u.jsx)("label",{htmlFor:"form-news-content",children:"Content: "}),Object(u.jsx)("br",{}),Object(u.jsx)("textarea",{name:"content",id:"form-news-content",onChange:this.setContent})]}),Object(u.jsxs)("div",{className:"form-news-row",children:[Object(u.jsx)("label",{htmlFor:"form-news-desription",children:"Desription: "}),Object(u.jsx)("br",{}),Object(u.jsx)("textarea",{name:"desription",id:"form-news-desription",onChange:this.setDescription})]}),Object(u.jsxs)("div",{className:"form-news-row",children:[Object(u.jsx)("label",{children:"Photo: "}),Object(u.jsx)("br",{}),Object(u.jsx)("input",{type:"file",accept:".jpeg,.png",onChange:this.handlePhoto})]}),Object(u.jsxs)("div",{className:"form-news-row",children:[Object(u.jsx)("label",{children:"Hashtags: "}),Object(u.jsx)("br",{}),Object(u.jsx)("input",{type:"checkbox",onChange:this.setHashtag,value:"commodo"}),"#commodo",Object(u.jsx)("input",{type:"checkbox",onChange:this.setHashtag,value:"proident"}),"#proident",Object(u.jsx)("input",{type:"checkbox",onChange:this.setHashtag,value:"reprehenderit"}),"#reprehenderit",Object(u.jsx)("input",{type:"checkbox",onChange:this.setHashtag,value:"aliqua"}),"#aliqua"]}),Object(u.jsx)("div",{className:"form-news-row",children:Object(u.jsxs)("label",{children:["Author:",Object(u.jsx)("br",{}),Object(u.jsx)("input",{type:"radio",onChange:this.setAuthor,checked:"Harriet Brooks"===this.state.author,value:"Harriet Brooks"}),"Harriet Brooks",Object(u.jsx)("input",{type:"radio",onChange:this.setAuthor,checked:"Vargas Cote"===this.state.author,value:"Vargas Cote"}),"Vargas Cote",Object(u.jsx)("input",{type:"radio",onChange:this.setAuthor,checked:"Willis Cote"===this.state.author,value:"Willis Cote"}),"Willis Cote",Object(u.jsx)("input",{type:"radio",onChange:this.setAuthor,checked:"Willis Simmons"===this.state.author,value:"Willis Simmons"}),"Willis Simmons"]})}),Object(u.jsx)("br",{}),Object(u.jsx)("button",{type:"submit",children:"Create news"})]})})}}]),a}(n.Component),x=O;O.defaultProps={};var v=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={items:b,search:"",filterAuthor:"",filterHashtag:[]},e.createNews=function(t){e.setState({items:[t].concat(Object(r.a)(e.state.items))})},e.deleteNews=function(t){e.setState({items:e.state.items.filter((function(e){return e.id!==t}))})},e.handleChangeSearch=function(t){e.setState({search:t}),console.log(e.state)},e.handleFilterAuthor=function(t){e.setState({filterAuthor:t})},e.handleFilterHashtag=function(t){e.setState({filterHashtag:[t].concat(Object(r.a)(e.state.filterHashtag))})},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state,t=e.items,a=e.search,n=e.filterAuthor,i=e.filterHashtag,s=t.filter((function(e){return(e.author===n||""===n)&&(i.forEach((function(t){return e.hashtag.forEach((function(e){return t!==e}))})),!(e.title.toLowerCase().indexOf(a.toLowerCase())<0&&e.content.toLowerCase().indexOf(a.toLowerCase())<0))}));return Object(u.jsxs)("div",{className:"newsPage",children:[Object(u.jsx)("div",{className:"filtersSection",children:Object(u.jsx)(p,{search:a,filterAuthor:n,onChangeSearch:this.handleChangeSearch,onChangeFilterAuthor:this.handleFilterAuthor,onChangeFilterHashtag:this.handleFilterHashtag})}),Object(u.jsxs)("div",{className:"newsSection",children:[Object(u.jsx)(x,{oncreateNew:this.createNews}),Object(u.jsx)(j,{items:s,ondeleteNews:this.deleteNews})]})]})}}]),a}(n.Component),C=v;s.a.render(Object(u.jsx)(C,{}),document.getElementById("newsPage"))}},[[17,1,2]]]);
//# sourceMappingURL=main.662e779e.chunk.js.map