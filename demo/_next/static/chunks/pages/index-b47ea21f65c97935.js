(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(3170)}])},3170:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return ex}});var t,i,o=r(7568),a=r(828),s=r(9815),l=r(655),c=r(5893),u=r(7294),d=r(9008),h=r.n(d),p=r(8872),m=r(2317),f=(0,p.iv)({display:"inline-flex",width:"100%",alignItems:"center"}),g=(0,p.iv)({marginRight:"8px"}),x=(0,p.iv)({flexGrow:1,height:"2.375rem",border:0,outline:"none",borderRadius:0,borderBottom:"solid 1px ".concat(m.Z.searchInputBorderColor)});function v(e){var n=e.label,r=e.value,t=e.onChange,i=e.placeholder;return(0,c.jsxs)("label",{className:f,children:[(0,c.jsx)("span",{className:g,children:void 0===n?"":n}),(0,c.jsx)("input",{className:x,placeholder:void 0===i?"":i,value:void 0===r?"":r,onChange:t})]})}var w=(0,p.iv)({display:"flex",flexDirection:"column",gap:"1.25rem",padding:0,margin:0,width:"100%"}),b=(0,u.forwardRef)(function(e,n){var r=e.children;return(0,c.jsx)("ul",{ref:n,className:w,children:r})}),j=new Intl.RelativeTimeFormat("en",{numeric:"auto",localeMatcher:"best fit"}),y=[{amount:60,name:"seconds"},{amount:60,name:"minutes"},{amount:24,name:"hours"},{amount:7,name:"days"},{amount:4.34524,name:"weeks"},{amount:12,name:"months"},{amount:Number.POSITIVE_INFINITY,name:"years"},],C=function(e){for(var n=(e.getTime()-new Date().getTime())/1e3,r=0;r<=y.length;r++){var t=y[r];if(Math.abs(n)<t.amount)return j.format(Math.round(n),t.name);n/=t.amount}},Z=function(e){return e>999?"".concat((e/1e3).toPrecision(3),"k"):"".concat(e)},N=(0,p.iv)({backgroundColor:m.Z.topicBgColor,color:m.Z.topicTextColor,fontWeight:"bold",fontSize:"0.875rem",borderRadius:"2px",textAlign:"center",padding:"0.25rem 0.5rem",whiteSpace:"nowrap",textDecoration:"none","&:hover":{backgroundColor:m.Z.topicHoverBgColor,color:m.Z.topicTextHoverColor}});function k(e){var n=e.children;return(0,c.jsx)("a",{href:"https://github.com/topics/".concat(n),target:"_blank",rel:"noopener noreferrer",className:N,children:n})}var S=(0,p.iv)({padding:"1.25rem 0.75rem",listStyle:"none",borderRadius:"0.25rem",border:"1px ".concat(m.Z.repoBorderColor," solid"),display:"flex",flexDirection:"column",gap:"0.375rem"}),R=(0,p.iv)({color:"#0969da",marginRight:"auto",textDecoration:"none",wordBreak:"break-all",":hover":{textDecoration:"underline"}}),_=(0,p.iv)({marginTop:"0.25rem",fontSize:"0.875rem",wordBreak:"break-word"}),B=(0,p.iv)({display:"inline-flex",flexWrap:"wrap",gap:"0.375rem"}),I=(0,p.iv)({flexGrow:1,flexWrap:"wrap",display:"inline-flex",alignItems:"flex-end",color:m.Z.textBodyLightColor,fontSize:"0.75rem",gap:"8px"});function T(e){var n=e.fullName,r=e.description,t=e.htmlUrl,i=e.stargazersCount,o=e.language,a=void 0===o?null:o,s=e.license,l=void 0===s?"":s,u=e.topics,d=void 0===u?[]:u,h=e.pushedAt,p=e.issue,m=h&&!isNaN(Date.parse(h));return m||console.warn("RepoListItem: prop pushedAt should be a date string."),(0,c.jsxs)("li",{className:S,children:[(0,c.jsx)("a",{href:t,className:R,children:n}),r&&(0,c.jsx)("div",{className:_,children:r}),d.length>0&&(0,c.jsx)("div",{className:B,children:d.map(function(e,n){return(0,c.jsx)(k,{children:e},e+n)})}),(0,c.jsxs)("div",{className:I,children:[void 0!==i&&Number.isInteger(i)&&(0,c.jsxs)("span",{children:["☆",Z(i)]}),a&&(0,c.jsx)("span",{children:a}),""!==l&&(0,c.jsx)("span",{children:"".concat(l," license")}),h&&m&&(0,c.jsx)("span",{children:"Updated ".concat(C(new Date(h)))}),void 0!==p&&Number.isInteger(p)&&(0,c.jsx)("span",{children:"".concat(Z(p),"  issue").concat(p>1?"s":""," need help")})]})]})}var D=function(e){var n,r=null!==(n=null==e?void 0:e.spdx_id)&&void 0!==n?n:"";return"NOASSERTION"===r&&(r=""),r},z=r(1438),E=r(196),A=r(129),L=r.n(A),P=new function e(){var n=this;(0,z.Z)(this,e),this.listRepos=function(e){return n.apiInstance.get("/search/repositories",{headers:{"Content-Type":"application/vnd.github+json"},params:e})},this.jwt="",this.apiInstance=E.Z.create({baseURL:"https://api.github.com",timeout:1e4,paramsSerializer:function(e){return L().stringify(e)}})},M=r(2670),W=r(6042),F=r(9396),X=function(){return{ids:[],idToRepo:{},totalCount:0,page:-1}},O=r(7297);function U(){var e=(0,O.Z)(["\n  0% {\n    transform: translateX(-100%);\n  }\n\n  20% {\n    transform: translateX(-100%);\n  }\n\n  80% {\n    transform: translateX(100%);\n  }\n\n  100% {\n    transform: translateX(100%);\n  }\n"]);return U=function(){return e},e}var G=(0,p.F4)(U()),H=(0,p.iv)({position:"relative",backgroundColor:m.Z.skeletonBgColor,height:"1rem",listStyle:"none",borderRadius:"0.25rem",overflow:"hidden","::after":{content:'""',position:"absolute",backgroundColor:m.Z.skeletonBgColorLight,borderRadius:"0.25rem",animation:"".concat(G,"  2.5s linear infinite"),transform:"translateX(-100%)",width:"100%",height:"100%",zIndex:1}});function q(e){var n=e.width;return(0,c.jsx)("div",{className:(0,p.cx)(H,(0,p.iv)({width:void 0===n?"100%":n}))})}var K=(0,p.iv)({listStyle:"none",width:"100%",display:"flex",flexDirection:"column",gap:"1rem",visibility:"visible","&.hidden":{display:"none"}});function V(e){var n=e.hidden;return(0,c.jsxs)("li",{className:(0,p.cx)(K,{hidden:void 0!==n&&n}),children:[(0,c.jsx)(q,{width:"20%"}),(0,c.jsx)(q,{width:"100%"}),(0,c.jsx)(q,{width:"60%"}),(0,c.jsx)(q,{width:"30%"})]})}var Y=(0,p.iv)({display:"flex",flexDirection:"column",gap:"1rem",alignItems:"center",listStyle:"none"}),J=(0,p.iv)({fontSize:"0.875rem",color:m.Z.textBodyLightColor}),Q=(0,p.iv)({marginLeft:"8px",fontSize:"0.875rem",textDecoration:"none",color:m.Z.textBodyLightColor,fontWeight:"bold"}),$=(0,p.iv)({width:"100%",textAlign:"left",padding:"0.75rem 1.75rem",color:m.Z.detailMessageColor,backgroundColor:m.Z.detailMessageBgColor,fontSize:"0.875rem",display:"none","&.show":{display:"initial"}}),ee=(0,p.iv)({width:"100px",height:"35px",borderRadius:"100px",fontWeight:"bold",fontSize:"0.875rem",cursor:"pointer",color:m.Z.btnColor,backgroundColor:m.Z.btnBgColor,border:"1px solid ".concat(m.Z.btnBorderborder),"&:hover":{backgroundColor:m.Z.btnHoverBgColor},"&:active":{backgroundColor:m.Z.btnActiveBgColor}});function en(e){var n=e.children,r=e.onClick;return(0,c.jsx)("button",{className:ee,onClick:r,children:n})}function er(e){var n=e.error,r=e.onRetryClick,t=(0,u.useState)(!1),i=t[0],o=t[1];return(0,c.jsxs)("li",{className:Y,children:[(0,c.jsxs)("div",{children:[(0,c.jsx)("span",{className:J,children:"Something went wrong. Try reloading."}),(0,c.jsx)("a",{href:"",className:Q,onClick:function(e){e.preventDefault(),o(function(e){return!e})},children:"Show More ▼"})]}),(0,c.jsx)("div",{className:(0,p.cx)($,{show:i}),children:n}),(0,c.jsx)(en,{onClick:function(){o(!1),null==r||r()},children:"Retry"})]})}var et=(0,p.iv)({display:"flex",flexDirection:"column",gap:"1rem",alignItems:"center",listStyle:"none",color:m.Z.textBodyLightColor});function ei(e){var n=e.search;return(0,c.jsx)("li",{className:et,children:'We couldn’t find any repositories matching "'.concat(n,'"')})}var eo=function(e){var n=new URL(window.location.toString());n.searchParams.set("q",e),window.history.pushState({},"",n)},ea=function(){var e=new URLSearchParams(window.location.search).get("q");return null!=e?e:""},es=r(4924),el={laptop:1024,desktop:1440};window.matchMedia("(min-width: ".concat(el.laptop,"px)")),window.matchMedia("(min-width: ".concat(el.desktop,"px)"));var ec={laptop:"@media (min-width: ".concat(el.laptop,"px)"),desktop:"@media (min-width: ".concat(el.desktop,"px)")},eu=(0,p.iv)({padding:"0 2rem"}),ed=(0,p.iv)((t={minHeight:"100vh",padding:"4rem 0",flex:1,display:"flex",flexDirection:"column",alignItems:"center"},(0,es.Z)(t,ec.laptop,{maxWidth:"900px",margin:"0 auto"}),(0,es.Z)(t,ec.desktop,{maxWidth:"1280px",margin:"0 auto"}),t)),eh=(0,p.iv)((i={margin:0,marginBottom:"2rem",fontSize:"1.75rem",lineHeight:1.15,textAlign:"center"},(0,es.Z)(i,ec.laptop,{fontSize:"2rem"}),(0,es.Z)(i,ec.desktop,{fontSize:"3.5rem"}),i)),ep=(0,p.iv)({display:"flex",flexDirection:"column",gap:"1.25rem"}),em=(0,p.iv)({display:"flex",flexDirection:"column",gap:"2rem",width:"100%"}),ef=(0,p.iv)({height:0,listStyle:"none"}),eg=(0,p.iv)({padding:0,margin:0}),ex=function(){var e,n,r,t,i,d,p,m,f,g,x,w,j,y,C,Z,N,k,S,R,_,B,I,z,A,L,O,U,G,H,q,K,Y,J=(e=(0,o.Z)(function(){var e,n,r,t,i=arguments;return(0,l.__generator)(this,function(o){for(n=Array(e=i.length),r=0;r<e;r++)n[r]=i[r];return eo(Q),[2,(t=P).listRepos.apply(t,(0,s.Z)(n))]})}),t=(r=(0,u.useState)(X()))[0],i=r[1],p=(d=(0,u.useState)(null))[0],m=d[1],g=(f=(0,u.useState)(!1))[0],x=f[1],j=(w=(0,u.useState)(!1))[0],y=w[1],C=(0,u.useCallback)(function(e){E.Z.isAxiosError(e)&&e.response?m(e.response.data.message):(0,M.Z)(e,Error)?m(e.message):m("uncertain error")},[p]),Z=(0,o.Z)(function(r){var t,o,a,s;return(0,l.__generator)(this,function(o){switch(o.label){case 0:if(o.trys.push([0,4,5,6]),!(""!==r))return[3,2];return y(!0),[4,e({q:r,per_page:100,page:1})];case 1:return a=(0,(t=o.sent()).data.items).reduce(function(e,n){return e.ids.push(n.id),e.idToRepo[n.id]=n,e},(0,F.Z)((0,W.Z)({},X()),{totalCount:t.data.total_count})),i((0,F.Z)((0,W.Z)({},a),{page:1})),null==n||n(a),[3,3];case 2:i(X()),o.label=3;case 3:return[3,6];case 4:return C(o.sent()),i(X()),[3,6];case 5:return x(!1),y(!1),[7];case 6:return[2]}})}),N=function(e){return Z.apply(this,arguments)},I=(B=(0,a.Z)((R=(S=(0,u.useState)(""))[0],_=S[1],(0,u.useEffect)(function(){var e=setTimeout((0,o.Z)(function(){return(0,l.__generator)(this,function(e){switch(e.label){case 0:return[4,N(R)];case 1:return e.sent(),[2]}})}),500);return function(){clearTimeout(e)}},[R]),[R,_]),2))[0],z=B[1],A=(0,o.Z)(function(){var n,r,o;return(0,l.__generator)(this,function(n){switch(n.label){case 0:return n.trys.push([0,2,3,4]),y(!0),[4,e({q:I,per_page:100,page:t.page})];case 1:return r=n.sent().data.items,i(function(e){var n=r.reduce(function(e,n){return e.ids.push(n.id),e.idToRepo[n.id]=n,e},(0,F.Z)((0,W.Z)({},e),{ids:(0,s.Z)(e.ids),idToRepo:(0,W.Z)({},e.idToRepo)}));return n.ids=Array.from(new Set((0,s.Z)(n.ids))),n}),[3,4];case 2:return C(n.sent()),[3,4];case 3:return y(!1),[7];case 4:return[2]}})}),L=function(){return A.apply(this,arguments)},(0,u.useEffect)(function(){m(null),x(!0)},[I]),(0,u.useEffect)(function(){""!==I&&t.page>1&&L()},[t.page]),O=(0,u.useCallback)(function(){null===p&&i(function(e){var n=(0,W.Z)({},e);return n.page++,n})},[]),U=(0,u.useCallback)(function(){m(null),-1===t.page?N(I):L()},[t.page,I]),{search:I,setSearch:z,repoStatus:t,isFetching:j,error:p,fetchNextPage:O,reFetchPage:U,isKeying:g}),Q=J.search,$=J.setSearch,ee=J.repoStatus,en=J.fetchNextPage,et=J.isKeying,es=J.isFetching,el=J.error,ec=J.reFetchPage,ex=es||et,ev=0===ee.ids.length&&""!==Q&&!ex&&!el,ew=(0,a.Z)((G=function(e){if(e[0].isIntersecting)try{ee.ids.length<ee.totalCount&&-1!==ee.page&&!ex&&en()}catch(n){console.error(n)}},H=(0,u.useRef)(),q=(0,u.useRef)(),K=(0,u.useRef)(),q.current=G,Y=(0,u.useCallback)(function(e){null!==e&&(K.current||(K.current=new IntersectionObserver(function(){for(var e,n=arguments.length,r=Array(n),t=0;t<n;t++)r[t]=arguments[t];return null===(e=q.current)||void 0===e?void 0:e.call.apply(e,[q].concat((0,s.Z)(r)))},void 0)),e!==H.current&&(H.current&&K.current.unobserve(H.current),H.current=e,K.current.observe(H.current)))},[]),[H,Y]),2)[1],eb=function(e){$(e.target.value)};return(0,u.useEffect)(function(){$(ea())},[]),(0,c.jsxs)("div",{className:eu,children:[(0,c.jsxs)(h(),{children:[(0,c.jsx)("title",{children:"Browse Github Repos"}),(0,c.jsx)("meta",{name:"description",content:"Browse Github Repos"}),(0,c.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,c.jsxs)("main",{className:ed,children:[(0,c.jsx)("h1",{className:eh,children:"Browse Github Repos"}),(0,c.jsxs)("div",{className:em,children:[(0,c.jsx)(v,{label:"Search Repos",placeholder:"Input your keywords",value:Q,onChange:eb}),(0,c.jsxs)("div",{className:ep,children:[!et&&(0,c.jsx)(b,{children:ee.ids.map(function(e){var n=ee.idToRepo[e],r=D(n.license);return(0,c.jsx)(T,{fullName:n.full_name,htmlUrl:n.html_url,description:n.description,stargazersCount:n.stargazers_count,language:n.language,license:r,pushedAt:n.pushed_at,issue:n.open_issues,topics:n.topics},n.id)})}),(0,c.jsxs)("ul",{className:eg,children:[(0,c.jsx)("li",{className:ef,ref:ew}),(0,c.jsx)(V,{hidden:!ex}),null!==el&&(0,c.jsx)(er,{error:el,onRetryClick:function(){ec()}}),ev&&(0,c.jsx)(ei,{search:Q})]})]})]})]})]})}},4654:function(){}},function(e){e.O(0,[475,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);