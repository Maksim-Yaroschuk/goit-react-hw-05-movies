"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[736],{9736:function(n,t,e){e.r(t),e.d(t,{default:function(){return g}});var r,a,c,u=e(885),o=e(470),i=e(2791),s=e(6324),p=e(168),f=e(6444),h=f.ZP.ul(r||(r=(0,p.Z)(["\n  margin-top: 16px;\n  margin-bottom: 16px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  justify-content: center;\n  list-style: none;\n"]))),x=f.ZP.img(a||(a=(0,p.Z)(["\n  box-shadow: 0px 3px 4px 1px rgba(44, 133, 200, 0.2);\n  max-width: 200px;\n  height: 300px;\n"]))),d=f.ZP.p(c||(c=(0,p.Z)(["\n  font-weight: 500;\n  text-align: center;\n  max-width: 200px;\n"]))),l=e(155),v=e(184),g=function(){var n=(0,i.useState)([]),t=(0,u.Z)(n,2),e=t[0],r=t[1],a=(0,o.bx)();return(0,i.useEffect)((function(){try{(0,s.M1)(a).then((function(n){r(n.cast)}))}catch(n){console.log(n)}}),[a]),(0,v.jsxs)("div",{children:[!e.length&&(0,v.jsx)(l.v,{children:"Sorry! Information not found"}),(0,v.jsx)(h,{children:e.map((function(n){var t=n.id,e=n.original_name,r=n.profile_path;return(0,v.jsxs)("li",{children:[(0,v.jsx)(x,{src:null!==r?"".concat(s.YQ).concat(s.nP).concat(r):"https://houseofzayn.co.nz/wp-content/uploads/2019/08/nopicture.gif",alt:e}),(0,v.jsx)(d,{children:e})]},t)}))})]})}},155:function(n,t,e){e.d(t,{U:function(){return o},v:function(){return i}});var r,a,c=e(168),u=e(6444),o=u.ZP.form(r||(r=(0,c.Z)(["\n  display: flex;\n  justify-content: center;\n"]))),i=u.ZP.div(a||(a=(0,c.Z)(["\n  display: flex;\n  justify-content: center;\n  margin-top: 16px;\n  font-size: 16px;\n  font-weight: 700;\n"])))},6324:function(n,t,e){e.d(t,{Hg:function(){return h},M1:function(){return d},QN:function(){return p},YQ:function(){return s},gH:function(){return v},nP:function(){return f},ts:function(){return x},tx:function(){return l}});var r=e(5861),a=e(7757),c=e.n(a),u=e(4569),o=e.n(u),i="029dc938f69f80a53ec2361c42a2c79e";o().defaults.baseURL="https://api.themoviedb.org/3";var s="https://image.tmdb.org/t/p",p="/w300",f="/w200",h=function(){var n=(0,r.Z)(c().mark((function n(){var t,e,r,a=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:1,n.next=3,o().get("/trending/movie/week?api_key=".concat(i,"&page=").concat(t));case 3:return e=n.sent,r=e.data,n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("/movie/".concat(t,"?api_key=").concat(i));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("/movie/".concat(t,"/credits?api_key=").concat(i));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("/movie/".concat(t,"/reviews?api_key=").concat(i));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(c().mark((function n(t,e){var r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("/search/movie?api_key=".concat(i,"&language=en-US&query=").concat(t,"&page=").concat(e));case 2:return r=n.sent,a=r.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=736.db072e19.chunk.js.map