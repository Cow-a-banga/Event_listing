(this["webpackJsonpevent-listing"]=this["webpackJsonpevent-listing"]||[]).push([[0],[,,function(e,t,r){e.exports={filter:"Filters_filter__2xqsf",filter_block:"Filters_filter_block__1dLd3",select_text:"Filters_select_text__2lxCi",favorites_checkbox:"Filters_favorites_checkbox__3Zzhg"}},,function(e,t,r){e.exports={card:"Card_card__1jVws",day:"Card_day__3E_yb",card_header:"Card_card_header__3khR3",card_title:"Card_card_title__1bXpB"}},,function(e,t,r){e.exports={title:"Header_title__2CmRb"}},,,,function(e,t,r){e.exports={cards:"Cards_cards__2HQc6"}},,,,,,,function(e,t,r){},,function(e,t,r){},function(e,t,r){"use strict";r.r(t);var a=r(1),c=r.n(a),n=r(7),s=r.n(n),i=(r(17),r(8)),l=r(9),o=r(12),u=r(11),d=r(6),j=r.n(d),b=r(0),h=function(){return Object(b.jsx)("header",{className:j.a.header,children:Object(b.jsx)("h1",{className:j.a.title,children:"Event Listing"})})},f=r(3),_=r.p+"static/media/markbook_unchecked.405cea49.svg",m=r.p+"static/media/markbook_checked.e1bc097d.svg",v=r(4),x=r.n(v),O=function(e){var t=e.card,r=Object(a.useState)(null!==localStorage.getItem(t.id)),c=Object(f.a)(r,2),n=c[0],s=c[1];return Object(b.jsxs)("div",{className:x.a.card,style:{backgroundImage:"url("+t.image+")"},children:[Object(b.jsxs)("div",{className:x.a.card_header,children:[Object(b.jsx)("span",{className:x.a.day,children:t.date.slice(0,2)}),Object(b.jsx)("img",{src:null!==localStorage.getItem(t.id)?m:_,onClick:function(e){return n?localStorage.removeItem(t.id):localStorage.setItem(t.id,"true"),void s(!n)}})]}),Object(b.jsx)("span",{className:x.a.card_title,children:t.name})]})},p=r(10),y=r.n(p),g=function(e){var t=e.data,r=e.currentCity,a=e.currentMonth,c=e.isFavorites,n={1:"January",2:"February",3:"March",4:"April",5:"May",6:"June",7:"July",8:"August",9:"September",10:"October",11:"November",12:"December"};return Object(b.jsx)("div",{className:y.a.cards,children:function(){var e=[];return t.forEach((function(t){"All"!==r&&t.city!==r||"All"!==a&&function(e){var t=e.split("."),r=Number(t[1]);return n[r]}(t.date)!==a||(!c||"true"!==localStorage.getItem(t.id))&&c||e.push(t)})),e}().map((function(e){return Object(b.jsx)(O,{card:e})}))})},k=r(2),C=r.n(k),N=function(e){var t=e.data,r=e.currentCity,a=e.currentMonth,c=e.isFavorites,n=e.setCurrentCity,s=e.setCurrentMonth,i=e.setIsFavorites,l=new Set(["All"]),o=new Set,u={1:"January",2:"February",3:"March",4:"April",5:"May",6:"June",7:"July",8:"August",9:"September",10:"October",11:"November",12:"December"};t.forEach((function(e){l.add(e.city),o.add(function(e){var t=e.split(".");return Number(t[1])}(e.date))}));var d=Array.from(o).sort((function(e,t){return e-t})),j=["All"];d.forEach((function(e){return j.push(u[e])}));var h=function(e){var t=[];return e.forEach((function(e){t.push(Object(b.jsxs)("option",{children:[" ",e," "]},e))})),t};return Object(b.jsxs)("div",{className:C.a.filter,children:[Object(b.jsxs)("div",{className:C.a.filter_block,children:[Object(b.jsx)("span",{className:C.a.select_text,children:"City:"}),Object(b.jsx)("select",{value:r,onChange:function(e){return n(e.target.value)},children:h(l)})]}),Object(b.jsxs)("div",{className:C.a.filter_block,children:[Object(b.jsx)("span",{className:C.a.select_text,children:"Month:"}),Object(b.jsx)("select",{value:a,onChange:function(e){return s(e.target.value)},children:h(j)})]}),Object(b.jsxs)("div",{className:C.a.filter_block,children:[Object(b.jsx)("span",{className:C.a.select_text,children:"Favorites:"}),Object(b.jsx)("input",{className:C.a.favorites_checkbox,type:"checkbox",onClick:function(e){return i(!c)}})]})]})},S=function(e){var t=e.data,r=Object(a.useState)("All"),c=Object(f.a)(r,2),n=c[0],s=c[1],i=Object(a.useState)("All"),l=Object(f.a)(i,2),o=l[0],u=l[1],d=Object(a.useState)(!1),j=Object(f.a)(d,2),h=j[0],_=j[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)(N,{data:t,currentCity:n,currentMonth:o,isFavorites:h,setCurrentCity:s,setCurrentMonth:u,setIsFavorites:_}),Object(b.jsx)(g,{data:t,currentCity:n,currentMonth:o,isFavorites:h})]})},F=(r(19),function(e){Object(o.a)(r,e);var t=Object(u.a)(r);function r(e){var a;return Object(i.a)(this,r),(a=t.call(this,e)).state={error:null,isLoaded:!1,items:[]},a}return Object(l.a)(r,[{key:"componentDidMount",value:function(){var e=this;fetch("https://raw.githubusercontent.com/xsolla/xsolla-frontend-school-2021/main/events.json").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,items:t})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e=this.state,t=e.error,r=e.isLoaded,a=e.items;return t?Object(b.jsx)("p",{children:"\u041e\u0448\u0438\u0431\u043a\u0430, \u043f\u043e\u0442\u0432\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u0437\u0434\u043d\u0435\u0435"}):r?Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(h,{}),Object(b.jsx)(S,{data:a})]}):Object(b.jsx)("p",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."})}}]),r}(c.a.Component));s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(F,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.fd4b0fb9.chunk.js.map