(this["webpackJsonp05-036"]=this["webpackJsonp05-036"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),n=a(7),i=a.n(n),r=(a(13),a(0));var l=function(){return Object(r.jsx)("nav",{className:"blue lighten-2",children:Object(r.jsxs)("div",{className:"nav-wrapper",children:[Object(r.jsx)("a",{href:"#",className:"brand-logo",children:"React Movies"}),Object(r.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"!#",children:"Repo"})})})]})})};var o=function(){return Object(r.jsx)("footer",{className:"page-footer blue lighten-3",children:Object(r.jsx)("div",{className:"footer-copyright",children:Object(r.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear()," Copyright Text",Object(r.jsx)("a",{className:"grey-text text-lighten-4 right",href:"#!",children:"Repo"})]})})})},h=a(2),j=a(3),d=a(5),m=a(4);function b(e){var t=e.title,a=e.year,s=e.imdbID,c=e.type,n=e.poster;return Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("div",{className:"col s12 m6",children:Object(r.jsxs)("div",{className:"card card-item","data-filmId":s,children:[Object(r.jsx)("div",{className:"card-image card-image-container",children:"N/A"===n?Object(r.jsx)("img",{className:"card-image-item",src:"https://via.placeholder.com/300x350?text=".concat(t)}):Object(r.jsx)("img",{className:"card-image-item",src:n})}),Object(r.jsxs)("div",{className:"card-content",children:[Object(r.jsx)("div",{children:Object(r.jsx)("p",{children:t})}),Object(r.jsxs)("div",{className:"card__info",children:[Object(r.jsx)("p",{children:a}),Object(r.jsx)("p",{children:c})]})]})]})})})}function O(e){var t=e.listOfFilms,a=void 0===t?[]:t;return Object(r.jsx)("div",{className:"card-image-wrapper",children:a.length?a.map((function(e){return Object(r.jsx)(b,{title:e.Title,year:e.Year,imdbID:e.imdbID,type:e.Type,poster:e.Poster},e.imdbID)})):Object(r.jsx)("h4",{children:"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043d\u0430\u0439\u0442\u0438 \u0447\u0442\u043e-\u0442\u043e \u0434\u0440\u0443\u0433\u043e\u0435"})})}var p=function(){return Object(r.jsx)("div",{className:"progress",children:Object(r.jsx)("div",{className:"indeterminate"})})},u=a(8),x=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var s;return Object(h.a)(this,a),(s=t.call(this)).state={search:"",typeOfFilm:""},s.searchCurrentFilm=function(){s.props.loadFilms(s.state.search,s.state.typeOfFilm)},s.handleChange=function(e){s.setState(Object(u.a)({},e.target.name,e.target.value))},s.handleKey=function(e){"Enter"===e.key&&s.searchCurrentFilm()},console.log("props from",e),console.log(e.loadFilms),s}return Object(j.a)(a,[{key:"render",value:function(){var e=this;return Object(r.jsxs)("div",{className:"search__container",children:[Object(r.jsxs)("div",{className:"search__wrapper",children:[Object(r.jsx)("input",{placeholder:"\u0418\u0449\u0443 \u0444\u0438\u043b\u044c\u043c...",type:"search",value:this.state.search,onChange:function(t){return e.setState({search:t.target.value})},onKeyDown:this.handleKey}),Object(r.jsx)("a",{className:"waves-effect waves-light btn search__btn",onClick:this.searchCurrentFilm,children:"\u041f\u043e\u0438\u0441\u043a"})]}),Object(r.jsxs)("div",{className:"search__type",children:[Object(r.jsx)("p",{children:Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{className:"with-gap",name:"typeOfFilm",type:"radio",value:"",onChange:this.handleChange,checked:""===this.state.typeOfFilm}),Object(r.jsx)("span",{children:"all"})]})}),Object(r.jsx)("p",{children:Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{className:"with-gap",name:"typeOfFilm",type:"radio",value:"movie",onChange:this.handleChange,checked:"movie"===this.state.typeOfFilm}),Object(r.jsx)("span",{children:"movie"})]})}),Object(r.jsx)("p",{children:Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{className:"with-gap",name:"typeOfFilm",type:"radio",value:"series",onChange:this.handleChange,checked:"series"===this.state.typeOfFilm}),Object(r.jsx)("span",{children:"series"})]})}),Object(r.jsx)("p",{children:Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{className:"with-gap",name:"typeOfFilm",type:"radio",value:"game",onChange:this.handleChange,checked:"game"===this.state.typeOfFilm}),Object(r.jsx)("span",{children:"game"})]})})]})]})}}]),a}(c.a.Component),f="1b6309d4",g=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(h.a)(this,a);for(var s=arguments.length,c=new Array(s),n=0;n<s;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={filmList:[],loading:!1,totalResults:""},e.loadFilms=function(t,a){console.log("\u041a\u043b\u0438\u043a\u043d\u0443\u043b"),e.setState({loading:!0}),fetch("http://www.omdbapi.com/?apikey=".concat(f,"&s=").concat(t).concat(""!==a?"&type=".concat(a):"")).then((function(e){return e.json()})).then((function(t){return new Promise((function(a,s){var c=t.Search,n=t.totalResults;e.setState({filmList:c,loading:!1,totalResults:n}),a(e.setState({filmList:c,loading:!1,totalResults:n}))}))}))},e}return Object(j.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),fetch("http://www.omdbapi.com/?apikey=".concat(f,"&s=matrix&type=")).then((function(e){return e.json()})).then((function(t){return new Promise((function(a,s){console.log("data.Search",t.Search);var c=t.Search,n=t.totalResults;e.setState({filmList:c,loading:!1,totalResults:n}),a(e.setState({filmList:c,loading:!1,totalResults:n}))}))}))}},{key:"render",value:function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("main",{className:"content container",children:[Object(r.jsx)(x,{loadFilms:this.loadFilms}),this.state.loading?Object(r.jsx)(p,{}):Object(r.jsx)(O,{listOfFilms:this.state.filmList})]})})}}]),a}(c.a.Component);var v=function(){return Object(r.jsxs)(c.a.Fragment,{children:[Object(r.jsx)(l,{}),Object(r.jsx)(g,{}),Object(r.jsx)(o,{})]})};i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(v,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.e62a2620.chunk.js.map