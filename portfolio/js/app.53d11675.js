(function(t){function e(e){for(var s,o,r=e[0],l=e[1],c=e[2],f=0,d=[];f<r.length;f++)o=r[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],s=!0,r=1;r<n.length;r++){var l=n[r];0!==a[l]&&(s=!1)}s&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var s={},a={app:0},i=[];function o(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=s,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(n,s,function(e){return t[e]}.bind(null,s));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"00a3":function(t,e,n){"use strict";var s=n("abeb"),a=n.n(s);a.a},"034f":function(t,e,n){"use strict";var s=n("85ec"),a=n.n(s);a.a},"08b1":function(t,e,n){},"28f6":function(t,e,n){},"2f73":function(t,e,n){"use strict";var s=n("08b1"),a=n.n(s);a.a},4583:function(t,e,n){"use strict";var s=n("ecdd"),a=n.n(s);a.a},"4a91":function(t,e,n){},"4bfe":function(t,e,n){"use strict";var s=n("b626"),a=n.n(s);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Navbar",{attrs:{onRoute:t.onRoute}}),n("Container",{attrs:{route:t.route}})],1)},i=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav-bar"},[t._m(0),n("div",{staticClass:"menu-btn",class:{"x-icon":t.showMenu},on:{click:function(e){return t.onMenu()}}},[n("div",{staticClass:"line line-1"}),n("div",{staticClass:"line line-2"}),n("div",{staticClass:"line line-3"})]),n("nav",{class:{shown:t.showMenu}},[n("div",{staticClass:"nav-home",class:{selected:"Home"===t.route},on:{click:t.onHome}},[n("big",[n("fa-icon",{attrs:{icon:"home"}})],1),t._m(1)],1),n("div",{staticClass:"nav-about",class:{selected:"About"===t.route},on:{click:t.onAbout}},[n("big",[n("fa-icon",{attrs:{icon:"user"}})],1),t._m(2)],1),n("div",{staticClass:"nav-code",class:{selected:"Code"===t.route},on:{click:t.onCode}},[n("big",[n("fa-icon",{attrs:{icon:"code"}})],1),t._m(3)],1),n("div",{staticClass:"nav-skills",class:{selected:"Skills"===t.route},on:{click:t.onSkills}},[n("big",[n("fa-icon",{attrs:{icon:"tools"}})],1),t._m(4)],1)]),n("div",{staticClass:"contact",class:{shown:t.showMenu}},[n("div",[n("big",[n("fa-icon",{attrs:{icon:["fab","facebook"]}})],1)],1),n("div",[n("big",[n("fa-icon",{attrs:{icon:["fab","instagram"]}})],1)],1),n("div",[n("big",[n("fa-icon",{attrs:{icon:["fab","linkedin"]}})],1)],1),n("div",[n("big",[n("fa-icon",{attrs:{icon:["fab","git"]}})],1)],1)])])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"logo"},[n("span",[t._v("NC")]),n("br"),n("small",[t._v("Nouar")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("small",[t._v("HOME")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("small",[t._v("ABOUT")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("small",[t._v("PORTFOLIO")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("small",[t._v("SKILLS")])])}],l=n("ecee"),c=n("f2d1"),u=n("c074");l["c"].add(u["c"],u["a"],u["b"],u["e"],u["d"],c["a"],c["d"],c["c"],c["b"]);var f={name:"Navbar",props:{onRoute:Function},data:function(){return{route:"Home",showMenu:!1}},methods:{onMenu:function(){this.showMenu=!this.showMenu},onHome:function(){this.route="Home",this.onRoute(this.route)},onCode:function(){this.route="Code",this.onRoute(this.route)},onAbout:function(){this.route="About",this.onRoute(this.route)},onSkills:function(){this.route="Skills",this.onRoute(this.route)}}},d=f,m=(n("d202"),n("2877")),p=Object(m["a"])(d,o,r,!1,null,"8d6b9696",null),v=p.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-root"},[n("transition",{attrs:{mode:"out-in"},on:{"before-enter":t.beforeEnter,enter:t.enterAnimation,leave:t.leaveAnimation}},["Home"==t.route?n("div",{key:"home",ref:"page",staticClass:"route"},[n("Home")],1):"Code"==t.route?n("div",{key:"code",ref:"page",staticClass:"route"},[n("Gallery")],1):"About"==t.route?n("div",{key:"about",ref:"page",staticClass:"route"},[n("About")],1):"Skills"==t.route?n("div",{key:"skills",ref:"page",staticClass:"route"},[n("Skills")],1):t._e()])],1)},g=[],b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"root",staticClass:"home-root"},[n("div",{ref:"image",staticClass:"deco"},[n("img",{attrs:{src:"images/dev-img.png",alt:"",srcset:""}})]),n("div",{ref:"wrapper",staticClass:"info"},[n("div",[n("div",{staticClass:"name"},[n("SplitText",{ref:"name",attrs:{text:"Nouar Chabane"}})],1),n("h1",{staticClass:"greeting"},[n("SplitText",{ref:"intro",attrs:{text:"I'm a Software Engineer"}})],1),n("p",[n("small",{staticClass:"fields"},[n("SplitText",{ref:"expertises",attrs:{text:"Fullstack Developer / Desktop / Mobile / Web / Freelancer."}})],1)])]),n("button",{ref:"portfolio",staticClass:"portfolio-btn",on:{click:t.onWorkClicked}},[t._v("SEE MY WORK")])])])},k=[],C=(n("b0c0"),n("a5cf")),_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"st-root"},t._l(t.split(),(function(e,s){return n("span",{key:s,ref:"words",refInFor:!0,staticClass:"text-word"},t._l(e,(function(e,s){return n("span",{key:s,ref:"chars",refInFor:!0,staticClass:"text-char"},[t._v(" "+t._s(e)+" ")])})),0)})),0)},S=[],w=(n("d81d"),n("ac1f"),n("1276"),{name:"SplitText",props:{text:String},data:function(){return{chars:[],words:[]}},mounted:function(){this.words=this.$refs.words,this.chars=this.$refs.chars},methods:{split:function(){return this.text.split(" ").map((function(t){return t.split("")}))}}}),y=w,x=(n("4bfe"),Object(m["a"])(y,_,S,!1,null,"fef1ff7e",null)),O=x.exports,$={name:"Home",components:{SplitText:O},data:function(){return{}},mounted:function(){this.animate()},methods:{onWorkClicked:function(){document.getElementsByClassName("nav-code")[0].click()},animate:function(){var t=new C["e"];t=window.matchMedia("(max-width: 800px)").matches?t.from(this.$refs.image,.5,{translateY:"50%"},1):t.from(this.$refs.image,.5,{translateX:"50%"},1),t.from(this.$refs.wrapper,.25,{scaleY:0},1.5).from(this.$refs.name.chars,1.5,{translateY:-100,opacity:0,ease:C["a"].easeOut,stagger:.1},2).from(this.$refs.intro.chars,1,{scaleY:0,ease:C["a"].easeOut,stagger:.05},2.5).from(this.$refs.expertises.words,1,{translateY:100,opacity:0,ease:C["c"].easeOut,stagger:.15},2).from(this.$refs.portfolio,.5,{scaleX:0})}}},E=$,j=(n("4583"),Object(m["a"])(E,b,k,!1,null,"459b2a22",null)),M=j.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{appear:""},on:{enter:t.animate}},[n("div",{staticClass:"gallery-root"},[n("h1",[t._v("MY WORK")]),n("div",{staticClass:"gallery"},t._l(t.projects,(function(t,e){return n("div",{key:e,ref:"item",refInFor:!0},[n("Item",{attrs:{idx:e,item:t}})],1)})),0)])])},A=[],R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item-container"},[n("img",{staticClass:"item-thumbnail",attrs:{src:t.item.img,alt:"",srcset:""}}),n("div",{staticClass:"tag-list"},t._l(t.item.tags,(function(e,s){return n("div",{key:s,staticClass:"tag"},[t._v(" "+t._s(e)+" ")])})),0),n("div",{staticClass:"item-desc"},[n("h3",{staticClass:"item-title"},[t._v(t._s(t.item.title))]),n("p",{staticClass:"item-info"},[t._v(" "+t._s(t.item.desc)+" ")]),n("div",{staticClass:"controls"},[t.item.codeLink?n("a",{attrs:{href:t.item.codeLink}},[t._v("VIEW CODE")]):t._e(),t.item.demoLink?n("a",{attrs:{href:t.item.demoLink}},[t._v("TRY OUT")]):t._e()])])])},L=[],P={name:"Item",props:["idx","item"]},Y=P,H=(n("00a3"),Object(m["a"])(Y,R,L,!1,null,"1bcd99ef",null)),I=H.exports,N=n("b29c"),F={name:"Gallery",components:{Item:I},data:function(){return{projects:N}},mounted:function(){this.animate()},methods:{animate:function(t,e){new C["e"]({onComplete:e}).fromTo(this.$refs.item,.5,{scale:0},{scale:1,ease:"elastic.out(1, 0.8)",stagger:.09},1)}}},G=F,J=(n("7d8a"),Object(m["a"])(G,T,A,!1,null,null,null)),K=J.exports,W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about-root"},[n("div",{ref:"image",staticClass:"about-deco"},[n("img",{attrs:{src:"images/dev-img-about.png",alt:"",srcset:""}})]),n("div",{ref:"about",staticClass:"about-intro"},[n("div",{staticClass:"section-title"},[n("SplitText",{ref:"title",attrs:{text:"ABOUT ME"}})],1),n("p",[n("SplitText",{ref:"p1",attrs:{text:"Passion for creation and innovation, solid academic background in computer science and artifial intelligence techniques, a variaty of skills in frontend and backend development, adabtability, fast learning of new technologies, team player, prefer remote jobs if possible."}})],1),n("p",[n("SplitText",{ref:"p2",attrs:{text:"Interested in software development from backend to frontend, mainly web and mobile development."}})],1),n("button",{ref:"resume"},[t._v("CHECKOUT MY RESUME")])])])},X=[],D={name:"About",components:{SplitText:O},mounted:function(){this.animate()},methods:{animate:function(){var t=new C["e"];t.from(this.$refs.title.chars,1.5,{translateY:-100,opacity:0,ease:C["a"].easeOut,stagger:.01},2).from(this.$refs.resume,1.5,{scaleX:0,ease:C["b"].easeOut},2).from([this.$refs.p1.words,this.$refs.p2.words],.5,{translateX:1e3,opacity:0,ease:C["b"].easeOut,stagger:.01},2.5).from(this.$refs.image,.5,{translateX:"50%"},1).from(this.$refs.about,.5,{scaleY:0},1.5)}}},U=D,V=(n("deee"),Object(m["a"])(U,W,X,!1,null,"4f2fadea",null)),B=V.exports,q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{appear:""},on:{enter:t.animate}},[n("div",{staticClass:"skills-root"},[n("div",{staticClass:"section-title"},[t._v("SKILL SET")]),n("div",{staticClass:"skill-list"},[n("Skill",{attrs:{icon:"skills/javascript.svg",name:"Javascript",grade:90}}),n("Skill",{attrs:{icon:"skills/c++.svg",name:"C/C++",grade:75}}),n("Skill",{attrs:{icon:"skills/java.svg",name:"Java",grade:75}}),n("Skill",{attrs:{icon:"skills/kotlin.svg",name:"Kotlin",grade:65}}),n("Skill",{attrs:{icon:"skills/golang.svg",name:"Golang",grade:37}}),n("Skill",{attrs:{icon:"skills/python.svg",name:"Python",grade:80}}),n("Skill",{attrs:{icon:"skills/vue.svg",name:"Vue",grade:72}}),n("Skill",{attrs:{icon:"skills/react.svg",name:"React",grade:70}}),n("Skill",{attrs:{icon:"skills/react.svg",name:"React Native",grade:60}}),n("Skill",{attrs:{icon:"skills/php.svg",name:"Php",grade:76}}),n("Skill",{attrs:{icon:"skills/android_studio.svg",name:"Android",grade:75}})],1)])])},z=[],Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"skill-root"},[n("div",{staticClass:"skill-icon"},[n("img",{attrs:{src:t.icon,alt:"",srcset:""}})]),n("div",{staticClass:"skill-info"},[n("div",{staticClass:"skill-name"},[t._v(t._s(t.name))]),n("div",{staticClass:"skill-progressbar"},[n("transition",{attrs:{appear:""},on:{enter:t.animateProgress}},[n("div",{staticClass:"skill-progress",style:t.progress})])],1)]),n("div",{staticClass:"skill-grade"},[t._v(t._s(t.grade)+"%")])])},Z=[],tt=(n("a9e3"),{name:"Skill",props:{icon:String,name:String,grade:{type:Number,validator:function(t){return t>=0&&t<=100},default:0}},data:function(){return{progress:{width:"".concat(this.grade,"%")}}},methods:{animateProgress:function(t,e){new C["d"]({onComplete:e}).set(t,{transformOrigin:"left"}).from(t,.5,{scaleX:0,ease:"power2.out"},.5)}}}),et=tt,nt=(n("b67e"),Object(m["a"])(et,Q,Z,!1,null,"0d7ff656",null)),st=nt.exports,at={name:"Skills",components:{Skill:st},methods:{animate:function(t,e){(new C["d"]).from(t,.5,{scale:.75,onComplete:e},1)}}},it=at,ot=(n("2f73"),Object(m["a"])(it,q,z,!1,null,null,null)),rt=ot.exports,lt={name:"Container",components:{Home:M,Gallery:K,About:B,Skills:rt},props:{route:String},methods:{beforeEnter:function(t){(new C["e"]).to(t,0,{translateY:"500%"},0)},enterAnimation:function(t,e){console.log("enter animation",t),new C["e"]({onComplete:e}).to(t,.1,{translateY:"0%"},0)},leaveAnimation:function(t,e){console.log("leave animation",t),new C["e"]({onComplete:e}).to(t,.2,{translateY:"-500%"},0)}}},ct=lt,ut=(n("8f3f"),Object(m["a"])(ct,h,g,!1,null,"a90489b4",null)),ft=ut.exports,dt={name:"App",components:{Navbar:v,Container:ft},mounted:function(){this.onRoute.bind(this)},data:function(){return{route:"Home"}},methods:{onRoute:function(t){this.route=t}}},mt=dt,pt=(n("034f"),Object(m["a"])(mt,a,i,!1,null,null,null)),vt=pt.exports,ht=n("ad3d");s["a"].component("fa-icon",ht["a"]),s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(vt)}}).$mount("#app")},"5e43":function(t,e,n){},"7d8a":function(t,e,n){"use strict";var s=n("5e43"),a=n.n(s);a.a},"85ec":function(t,e,n){},"8f3f":function(t,e,n){"use strict";var s=n("28f6"),a=n.n(s);a.a},"90b5":function(t,e,n){},abeb:function(t,e,n){},b29c:function(t){t.exports=JSON.parse('[{"title":" My Portfolio","img":"images/portfolio.png","desc":"My portfolio website, developed using Vuejs.","codeLink":"https://github.com/nouar-ch/my-portfolio","demoLink":"","tags":["HTML","CSS","Javascript","npm","Vuejs","gsap"]},{"title":"A* algorithm","img":"images/astar.png","desc":"visual implementation of A* algorithm with Go and SDL.","codeLink":"https://github.com/nouar-ch/astar_visual","tags":["Go","SDL","A*"]}]')},b626:function(t,e,n){},b67e:function(t,e,n){"use strict";var s=n("4a91"),a=n.n(s);a.a},d202:function(t,e,n){"use strict";var s=n("d432"),a=n.n(s);a.a},d432:function(t,e,n){},deee:function(t,e,n){"use strict";var s=n("90b5"),a=n.n(s);a.a},ecdd:function(t,e,n){}});
//# sourceMappingURL=app.53d11675.js.map