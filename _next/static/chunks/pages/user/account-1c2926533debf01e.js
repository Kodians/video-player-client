(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[906],{7013:function(e,t,n){"use strict";n.d(t,{N:function(){return d}});var i,r=n(29),o=n(7794),a=n.n(o),s=n(8767),l=n(1806),c=(i=(0,r.Z)(a().mark(function e(t,n){var i,r;return a().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=void 0===(i=n.pageParam)?1:i,e.abrupt("return",l.h.get(t,{params:{page:r,limit:4,cacheId:"".concat(t.replaceAll("/","-")).concat(r)}}));case 2:case"end":return e.stop()}},e)})),function(e,t){return i.apply(this,arguments)}),d=function(e,t){return(0,s.useInfiniteQuery)([e],function(t){return c(e,t)},t)}},8817:function(e,t,n){"use strict";n.d(t,{_:function(){return l}});var i=n(9499),r=n(1806),o=n(8767);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}var s=function(e,t){var n=t.data,i=t.options;return r.h.post(e,n,i)},l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,o.useMutation)(function(t){return s(e,t)},function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach(function(t){(0,i.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},t))}},7122:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return eI}});var i=n(7294),r=n(2640),o=n(9499),a=n(4730),s=n(2722),l=n(8661),c=n(9630),d=n(1953),u=n(6638),h=n(3540),x=n(6540),f=n(8201),p=n(1565),m=n(3123),j=n(60),v=n(9072),g=n(7598),y=n(5084),b=n(9874),Z=n(6322),w=n(8817),O=n(1120),P=n(2741),C=n(1506),I=n(754),F=n(5893);function S(e){var t=e.open;return(0,F.jsx)("div",{children:(0,F.jsx)(C.Z,{sx:{color:"#fff",zIndex:function(e){return e.zIndex.drawer+1}},open:t,children:(0,F.jsx)(I.Z,{color:"inherit"})})})}var E=(0,b.Z)(function(){return{root:{display:"flex",flexDirection:"column"},textFields:{width:"100%"},alert:{margin:"10px 0 10px 0"}}}),D=function(){var e,t=E(),n=(0,i.useState)(""),r=n[0],o=n[1],a=(0,i.useState)(""),s=a[0],l=a[1],c=(0,i.useState)("Choisir une cat\xe9gorie"),d=c[0],u=c[1],h=(0,i.useState)(),x=h[0],f=h[1],p=(0,i.useState)(),b=p[0],C=p[1],I=(0,i.useState)(),D=I[0],N=I[1],T=(0,i.useState)(),k=T[0],q=T[1],_=(0,Z.i)("/categories",{staleTime:1/0}).data,K=(0,w._)("/user/".concat(D,"/videos")),U=K.mutate,z=K.isLoading,V=K.isError,L=K.data,M=(0,w._)("/user/".concat(D,"/videos/").concat(null==L?void 0:L.data.lastUploadedFileId,"/thumbnail")),Q=M.mutate,W=M.isLoading,R=(0,i.useState)(!1),A=R[0],H=R[1],B=function(e){o(e.target.value)},X=function(e){u(e.target.value)},G=function(e){f(e.target.files[0])},Y=function(e){C(e.target.files[0])},J=function(e){l(e.target.value)},$=function(){if(null!=D){if(null!=x&&null!=b){if(null!=r&&""!==r&&null!=s&&""!==s&&null!=d&&"Choisir une cat\xe9gorie"!==d){var e=new FormData;e.append("file",x),U({data:e,options:{headers:{"Content-Type":"multipart/form-data"},params:{title:r,description:s,categoryId:d}}}),H(!0)}else q("Veuillez remplir tous les champs"),setTimeout(function(){q("")},3e3)}else q("Veuillez choisir une video et une miniature"),setTimeout(function(){q("")},3e3)}else q("Vous devez \xeatre connect\xe9 pour publier une vid\xe9o"),setTimeout(function(){q("")},3e3)},ee=(0,i.useCallback)(function(){if(null!=b){if(null!=d&&"Choisir une cat\xe9gorie"!==d&&null!=s&&null!=r){if(!0===A){var e=new FormData;e.append("file",b),Q({data:e,options:{headers:{"Content-Type":"multipart/form-data"},params:{title:r,description:s,categoryId:d}}})}H(!1)}else q("Veuillez remplir tous les champs"),setTimeout(function(){q("")},3e3)}else q("Veuillez choisir une miniature"),setTimeout(function(){q("")},3e3)},[d,s,Q,A,r,b]);return((0,i.useEffect)(function(){var e=O.Z.getUser();e&&e.userId&&N(e.userId),(null==L?void 0:L.data.lastUploadedFileId)!==void 0&&(null==L?void 0:L.data.lastUploadedFileId)!==null&&(null==L?void 0:L.data.lastUploadedFileId)!==""&&ee()},[null==L?void 0:L.data.lastUploadedFileId,ee]),V)?(0,F.jsx)("div",{children:"Une erreur est survenue"}):(0,F.jsxs)("div",{className:t.root,children:[(0,F.jsxs)(v.ZP,{container:!0,flexDirection:"column",spacing:6,component:"form",sx:{"& .MuiTextField-root":{m:1,width:"25ch"}},noValidate:!0,autoComplete:"off",children:[(0,F.jsxs)(v.ZP,{item:!0,container:!0,spacing:2,children:[(0,F.jsx)(v.ZP,{item:!0,xs:12,sm:6,children:(0,F.jsx)(m.Z,{className:t.textFields,sx:{width:"100% !important"},id:"outlined-multiline-flexible",label:"Titre de la vid\xe9o",maxRows:4,value:r,onChange:B})}),(0,F.jsx)(v.ZP,{item:!0,xs:12,sm:6,children:(0,F.jsx)(m.Z,{className:t.textFields,sx:{width:"100% !important"},id:"outlined-select-categoryId",select:!0,label:"Cat\xe9gorie",value:d,onChange:X,children:null==_?void 0:null===(e=_.data)||void 0===e?void 0:e.categories.map(function(e){var t=e._id,n=e.name;return(0,F.jsx)(j.Z,{value:t,children:n},t)})})})]}),(0,F.jsxs)(v.ZP,{item:!0,container:!0,spacing:2,children:[(0,F.jsxs)(v.ZP,{item:!0,xs:12,sm:6,children:[(0,F.jsx)("label",{htmlFor:"contained-button-file",children:"Charger la vid\xe9o"}),(0,F.jsx)("br",{}),(0,F.jsx)("input",{accept:"video/*",id:"contained-button-file",type:"file",onChange:G})]}),(0,F.jsxs)(v.ZP,{item:!0,xs:12,sm:6,children:[(0,F.jsx)("label",{htmlFor:"contained-button-file",children:"Charger la photo de couverture"})," ",(0,F.jsx)("br",{}),(0,F.jsx)("input",{accept:"image/*",id:"contained-button-file",type:"file",onChange:Y})]})]}),(0,F.jsx)(v.ZP,{item:!0,container:!0,justifyContent:"center",children:(0,F.jsx)(v.ZP,{item:!0,sx:{width:"100%"},children:(0,F.jsx)(g.Z,{minRows:10,"aria-label":"maximum height",placeholder:"D\xe9crivez la vid\xe9o",style:{width:"100%",minWidth:300,maxWidth:700,maxHeight:300},onChange:J})})})]}),k&&(0,F.jsx)(P.Z,{severity:"error",className:t.alert,children:k}),(0,F.jsx)(y.Z,{variant:"contained",onClick:$,children:"Publier"}),(0,F.jsx)(S,{open:z||W||!1})]})},N=n(5214),T=n(3265),k=n(9144),q=n(562),_=n(594),K=n(5675),U=n.n(K),z={src:"/video-player-client//_next/static/media/video.7b07cff3.svg",height:24,width:24},V=n(85),L=n(7976),M=n(1733),Q=n(7957),W=n(8767),R=n(1806);function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}var H=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,W.useMutation)(function(t){var n,i;return R.h.delete("".concat(e,"/").concat(t))},function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach(function(t){(0,o.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},t))};function B(e){var t=e.videoId,n=e.setIsShowingEditForm,o=e.setVideoToEditMetadata,a=i.useState(),s=(0,r.Z)(a,2),l=s[0],d=s[1],u=i.useState(null),h=(0,r.Z)(u,2),x=h[0],f=h[1],p=(0,W.useQueryClient)(),m=H("/user/".concat(l,"/videos"),{onSuccess:function(){var e=p.getQueryCache().findAll().find(function(e){return void 0!==e.queryKey&&("string"==typeof e.queryKey?e.queryKey.includes(l):"object"==typeof e.queryKey&&e.queryKey[0].includes(l))});p.invalidateQueries(null==e?void 0:e.queryKey)}}).mutate,j=function(){n(!0),o(t),f(null)},v=function(e){f(e.currentTarget)},g=function(){f(null)},y=Boolean(x),b=function(){m(t)};return i.useEffect(function(){var e=O.Z.getUser();e&&e.userId&&d(e.userId)},[t]),(0,F.jsxs)("div",{children:[(0,F.jsx)(q.Z,{onClick:v,children:(0,F.jsx)(L.Z,{})}),(0,F.jsx)(V.ZP,{id:y?"simple-popover":void 0,open:y,anchorEl:x,onClose:g,anchorOrigin:{vertical:"bottom",horizontal:"left"},children:(0,F.jsx)(c.Z,{component:"div",sx:{p:2},children:(0,F.jsxs)(N.Z,{children:[(0,F.jsx)(T.ZP,{children:(0,F.jsxs)(q.Z,{size:"small",sx:{"& > *":{p:1}},onClick:j,children:[(0,F.jsx)(Q.Z,{}),(0,F.jsx)(c.Z,{children:"Edit"})]})}),(0,F.jsx)(T.ZP,{children:(0,F.jsxs)(q.Z,{size:"small",sx:{"& > *":{p:1}},onClick:b,children:[(0,F.jsx)(M.Z,{}),(0,F.jsx)(c.Z,{children:"Delete"})]})})]})})})]})}var X=n(1664),G=n.n(X),Y=n(7013),J=n(29),$=n(7794),ee=n.n($);function et(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}var en=function(e,t){var n=t.data,i=t.options;return R.h.put(e,n,i)},ei=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,W.useMutation)(function(t){return en(e,t)},function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?et(Object(n),!0).forEach(function(t){(0,o.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):et(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},t))};function er(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function eo(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?er(Object(n),!0).forEach(function(t){(0,o.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):er(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var ea=(0,b.Z)(function(){return{root:{display:"flex",flexDirection:"column",border:"1px solid #D1D1D1",padding:20},textFields:{width:"100%"},alert:{margin:"10px 0 10px 0"}}}),es=function(e){var t,n=e.videoMetadata,r=e.setIsShowingEditForm,a=ea(),s=(0,W.useQueryClient)(),l=n.id,c=n.title,d=n.description,u=n.userId,h=n.videoId,x=n.categoryId,f=(0,i.useState)({title:c,description:d,categoryId:x,thumbnail:null}),p=f[0],b=f[1],O=(0,i.useState)(),C=O[0],I=O[1],S=ei("/user/".concat(u,"/videos/").concat(h),{onSuccess:function(){I("Les informations ont \xe9t\xe9 modifi\xe9es avec succ\xe8s"),setTimeout(function(){I("")},3e3);var e=s.getQueryCache().findAll().find(function(e){return void 0!==e.queryKey&&("string"==typeof e.queryKey?e.queryKey.includes(u):"object"==typeof e.queryKey&&e.queryKey[0].includes(u))});s.invalidateQueries(null==e?void 0:e.queryKey)},onError:function(){I("Une erreur est survenue")}}).mutate,E=(0,w._)("/user/".concat(u,"/videos/").concat(h,"/thumbnail/").concat(l),{onSuccess:function(){I("La miniature a \xe9t\xe9 modifi\xe9e avec succ\xe8s"),setTimeout(function(){I("")},3e3);var e=s.getQueryCache().findAll().find(function(e){return void 0!==e.queryKey&&("string"==typeof e.queryKey?e.queryKey.includes(u):"object"==typeof e.queryKey&&e.queryKey[0].includes(u))});s.invalidateQueries(null==e?void 0:e.queryKey)},onError:function(){I("Une erreur est survenue")}}).mutate,D=(0,Z.i)("/categories",{staleTime:3e5,refetchOnMount:!0,select:function(e){return e.data.categories}}).data,N=function(e){if("thumbnail"===e.target.name){var t=e.target;b(eo(eo({},p),{},(0,o.Z)({},e.target.name,t.files[0])))}else b(eo(eo({},p),{},(0,o.Z)({},e.target.name,e.target.value)))},T=(t=(0,J.Z)(ee().mark(function e(){var t,n,i,o,a;return ee().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=p.title,n=p.description,i=p.categoryId,o=p.thumbnail;try{"Choisir une cat\xe9gorie"!==i&&""!==i&&void 0!==i&&""!==t&&void 0!==t&&""!==n&&void 0!==n&&null==o?(S({data:eo({},p),options:{headers:{"Content-Type":"application/json"}}}),r(!1)):null!=o&&"Choisir une cat\xe9gorie"!==i&&""!==i&&void 0!==i&&""!==t&&void 0!==t&&""!==n&&void 0!==n?((a=new FormData).append("file",o),E({data:a,options:{headers:{"Content-Type":"multipart/form-data"},params:{title:t,description:n,categoryId:i}}}),r(!1)):(I("Veuillez remplir tous les champs"),setTimeout(function(){I("")},3e3))}catch(s){console.log(s)}case 2:case"end":return e.stop()}},e)})),function(){return t.apply(this,arguments)});return(0,F.jsxs)("div",{className:a.root,children:[(0,F.jsxs)(v.ZP,{container:!0,flexDirection:"column",spacing:6,component:"form",sx:{"& .MuiTextField-root":{m:1,width:"25ch"}},noValidate:!0,autoComplete:"off",children:[(0,F.jsxs)(v.ZP,{item:!0,container:!0,spacing:2,children:[(0,F.jsx)(v.ZP,{item:!0,xs:12,sm:4,children:(0,F.jsx)(m.Z,{className:a.textFields,sx:{width:"100% !important"},id:"outlined-multiline-flexible",label:"Titre de la vid\xe9o",maxRows:4,name:"title",value:p.title,onChange:function(e){return N(e)}})}),(0,F.jsx)(v.ZP,{item:!0,xs:12,sm:4,children:(0,F.jsx)(m.Z,{className:a.textFields,sx:{width:"100% !important"},id:"outlined-select-categoryId",select:!0,label:"Cat\xe9gorie",value:p.categoryId,name:"categoryId",onChange:function(e){return N(e)},children:D&&D.map(function(e){var t=e._id,n=e.name;return(0,F.jsx)(j.Z,{value:t,children:n},t)})})}),(0,F.jsxs)(v.ZP,{item:!0,xs:12,sm:4,children:[(0,F.jsx)("label",{htmlFor:"contained-button-file",children:"Changer la miniature"})," ",(0,F.jsx)("br",{}),(0,F.jsx)("input",{accept:"image/*",id:"contained-button-file",type:"file",name:"thumbnail",onChange:function(e){return N(e)}})]})]}),(0,F.jsx)(v.ZP,{item:!0,container:!0,justifyContent:"center",children:(0,F.jsx)(v.ZP,{item:!0,sx:{width:"100%"},children:(0,F.jsx)(g.Z,{minRows:10,"aria-label":"maximum height",placeholder:"D\xe9crivez la vid\xe9o",style:{width:"100%",minWidth:300,maxWidth:"100%",minHeight:50,maxHeight:80},name:"description",value:p.description,onChange:function(e){return N(e)}})})})]}),C&&(0,F.jsx)(P.Z,{severity:"error",className:a.alert,children:C}),(0,F.jsx)(y.Z,{variant:"contained",color:"primary",onClick:T,children:"Enregistrer"})]})},el=(0,b.Z)(function(){return{listItem:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%","& >:nth-child(n+1)":{marginLeft:20,padding:10},"& >:nth-child(1), & >:nth-child(2), & >:nth-child(5)":{width:"calc(100% / 100)"},"& >:nth-child(3), & >:nth-child(4)":{width:"calc(100% / 3)"}},editForm:{marginTop:10}}}),ec=function(){var e=el(),t=(0,i.useState)(),n=t[0],r=t[1],o=(0,Y.N)("/user/".concat(n,"/videos/metadata/info"),{enabled:!!n,staleTime:1/0,getNextPageParam:function(e,t){if(t.length<4)return t.length+1}}),a=o.data,s=o.isLoading,l=o.isError,c=o.error,d=o.isFetching,u=o.isFetchingNextPage,h=o.hasNextPage,x=o.fetchNextPage,f=(0,i.useState)(!1),p=f[0],m=f[1],j=(0,i.useState)(),v=j[0],g=j[1],y=function(){m(!1)};return((0,i.useEffect)(function(){var e=O.Z.getUser();e&&e.userId&&r(e.userId)},[]),s)?(0,F.jsx)("div",{children:"Loading..."}):l?(0,F.jsx)("h2",{children:c instanceof Error&&c.message}):(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(N.Z,{children:[null==a?void 0:a.pages.map(function(t,i){return t.data.map(function(r,o){var a=r.id,s=r.videoId,l=r.title,c=r.description,d=r.categoryId;return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(T.ZP,{className:e.listItem,divider:!0,children:[(0,F.jsx)("p",{children:0===i?o+1:o+t.data.length+1}),(0,F.jsx)("p",{children:(0,F.jsx)(G(),{href:"/videos/".concat(s),children:(0,F.jsx)("a",{children:(0,F.jsx)(U(),{src:z,layout:"fixed",width:20,height:20,alt:"video.svg"})})})}),(0,F.jsx)("p",{children:l}),(0,F.jsx)("p",{children:c}),(0,F.jsx)("p",{children:(0,F.jsx)(B,{videoId:s,setIsShowingEditForm:m,setVideoToEditMetadata:g})})]},l),p&&v===s&&(0,F.jsxs)("div",{className:e.editForm,children:[(0,F.jsx)(k.Z,{direction:"row",justifyContent:"flex-end",children:(0,F.jsx)(q.Z,{"aria-label":"delete",size:"medium",onClick:y,children:(0,F.jsx)(_.Z,{fontSize:"inherit",color:"error"})})}),(0,F.jsx)(es,{videoMetadata:{title:l,description:c,userId:n,videoId:s,id:a,categoryId:d},setIsShowingEditForm:m})]})]})})}),(0,F.jsx)(T.ZP,{sx:{display:"flex",justifyContent:"center"},children:(0,F.jsx)("div",{children:d&&u?"Fetching...":null})})]}),(0,F.jsx)("button",{disabled:!h,onClick:function(){return x()},children:"Load More"})]})},ed=n(4373),eu=n(9837),eh=n(4731),ex=n(1359),ef=n(9647),ep=n(1225),em=function(){var e=i.useState(!1),t=(0,r.Z)(e,2),n=t[0],o=t[1],a=(0,ep.Z)("(max-width:1000px)"),s=(0,ep.Z)("(min-width:1000px)"),l=(0,ep.Z)("(max-width:999px)");return i.useEffect(function(){o(!n)},[a]),(0,F.jsxs)("div",{children:[(0,F.jsxs)(v.ZP,{container:!0,alignItems:"center",direction:a?"column-reverse":"row",spacing:2,sx:{overflowX:"scroll"},children:[(0,F.jsx)(v.ZP,{item:!0,style:a?{width:"100%"}:{},width:"width: 720",children:(0,F.jsxs)(eu.Z,{elevation:0,style:{backgroundColor:"#F4F4F2",width:a?"100%":500},sx:{width:"700px",height:"321px"},children:[(0,F.jsx)(d.Z,{sx:{my:1,mx:2},children:(0,F.jsx)(v.ZP,{container:!0,alignItems:"center",children:(0,F.jsx)(v.ZP,{item:!0,xs:!0,children:(0,F.jsx)(c.Z,{gutterBottom:!0,variant:"h6",component:"div",children:"Photo"})})})}),(0,F.jsx)(ed.Z,{}),(0,F.jsxs)("div",{style:{display:"flex"},children:[(0,F.jsx)(d.Z,{sx:{m:2},children:(0,F.jsx)(k.Z,{direction:"row",spacing:5,children:(0,F.jsx)(eh.Z,{alt:"Photo",src:"",sx:{width:80,height:80}})})}),(0,F.jsxs)(d.Z,{sx:{mt:3,ml:1,mb:1},children:[(0,F.jsx)(c.Z,{variant:"h6",component:"div",children:"Choose an image in your computer"}),(0,F.jsxs)(k.Z,{direction:"row",spacing:2,margin:"10px",children:[(0,F.jsxs)(y.Z,{variant:"contained",component:"label",children:["Upload",(0,F.jsx)("input",{hidden:!0,accept:"image/*",multiple:!0,type:"file"})]}),(0,F.jsx)(y.Z,{variant:"outlined",startIcon:(0,F.jsx)(M.Z,{}),children:"Delete"})]})]})]})]})}),(0,F.jsx)(v.ZP,{item:!0,children:(0,F.jsxs)(eu.Z,{sx:{width:"300px",height:"250px"},elevation:0,style:{margin:"15px 0",backgroundColor:"#F4F4F2",height:"fit-content",width:l?720:""},children:[(0,F.jsx)(ef.Z,{component:"img",height:"140",image:"https://img-4.linternaute.com/SZUPUJxUH6c3YlxZEN9YTlQmxqM=/1500x/smart/04a476b128c74d28a9b3ea8d30864092/ccmcms-linternaute/34766541.jpg",alt:"green iguana"}),(0,F.jsxs)(ex.Z,{style:{padding:"2px"},children:[(0,F.jsx)("div",{style:{marginTop:"-25px"},children:(0,F.jsx)(eh.Z,{alt:"Photo",src:"",sx:{width:90,height:90,marginLeft:"auto",marginRight:"auto"}})}),(0,F.jsxs)(c.Z,{gutterBottom:!0,variant:"h6",component:"div",style:{marginTop:"10px"},children:["Nom :",(0,F.jsx)("br",{}),"Prenom :",(0,F.jsx)("br",{}),"Email:"]})]})]})})]}),(0,F.jsx)(v.ZP,{container:!0,width:"width: 720",children:(0,F.jsx)(v.ZP,{item:!0,style:s?{width:820}:{width:720},children:(0,F.jsxs)(eu.Z,{elevation:0,style:{margin:"15px 0",backgroundColor:"#F4F4F2"},children:[(0,F.jsx)(d.Z,{sx:{my:3,mx:2},children:(0,F.jsx)(v.ZP,{container:!0,alignItems:"center",children:(0,F.jsx)(v.ZP,{item:!0,xs:!0,children:(0,F.jsx)(c.Z,{gutterBottom:!0,variant:"h6",component:"div",children:"Information"})})})}),(0,F.jsx)(ed.Z,{}),(0,F.jsx)(d.Z,{component:"form",sx:{"& .MuiTextField-root":{m:2,width:"35ch"}},noValidate:!0,autoComplete:"off",children:(0,F.jsxs)("div",{children:[(0,F.jsxs)(d.Z,{children:[(0,F.jsx)(m.Z,{id:"outlined-required",label:"Username",defaultValue:"Username",fullWidth:!0}),(0,F.jsx)(m.Z,{id:"outlined",label:"Fistname",defaultValue:"Frist name",fullWidth:!0})]}),(0,F.jsxs)(d.Z,{children:[(0,F.jsx)(m.Z,{id:"outlined-password-input",label:"Lastname",defaultValue:"Last name",autoComplete:"current-password",fullWidth:!0}),(0,F.jsx)(m.Z,{id:"outlined-read-only-input",label:"Password",type:"password",fullWidth:!0})]}),(0,F.jsx)(d.Z,{sx:{width:500,maxWidth:"100%"},children:(0,F.jsx)(m.Z,{id:"outlined-number",label:"Adresse email",type:"email",defaultValue:"email@gmail.com",fullWidth:!0})})]})}),(0,F.jsx)("div",{style:{float:"right",padding:"10px"},children:(0,F.jsx)(y.Z,{variant:"contained",color:"success",children:"Save"})})]})})})]})},ej=["children","value","index"];function ev(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function eg(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ev(Object(n),!0).forEach(function(t){(0,o.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ev(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var ey=(0,b.Z)(function(){return{root:{flexGrow:1,bgcolor:"background.paper",minHeight:"100vh"},tabs:{overflow:"visible"},tab:{display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"center"},buttonIcon:{fontSize:23,marginRight:10},buttonTypography:{fontSize:17}}});function eb(e){var t=e.children,n=e.value,i=e.index,r=(0,a.Z)(e,ej);return(0,F.jsx)("div",eg(eg({role:"tabpanel",hidden:n!==i,id:"vertical-tabpanel-".concat(i),"aria-labelledby":"vertical-tab-".concat(i)},r),{},{style:{overflow:"auto"},children:n===i&&(0,F.jsx)(d.Z,{sx:{p:3},children:(0,F.jsx)(c.Z,{component:"div",children:t})})}))}function eZ(e){return{id:"vertical-tab-".concat(e),"aria-controls":"vertical-tabpanel-".concat(e)}}var ew=function(){var e=ey(),t=i.useState(0),n=(0,r.Z)(t,2),o=n[0],a=n[1],m=function(e,t){a(t)};return(0,F.jsxs)(d.Z,{sx:{flexGrow:1,bgcolor:"background.paper",display:"flex",height:"100vh"},children:[(0,F.jsx)(G(),{href:"/",children:(0,F.jsxs)(q.Z,{sx:{position:"absolute",top:10,left:10},children:[(0,F.jsx)(u.Z,{className:e.buttonIcon}),(0,F.jsx)(c.Z,{variant:"h6",className:e.buttonTypography,children:"Accueil"})]})}),(0,F.jsxs)(s.Z,{orientation:"vertical",variant:"scrollable",value:o,onChange:m,"aria-label":"Vertical tabs example",className:e.tabs,sx:{borderRight:1,borderColor:"divider",overflow:"visible",mt:8},children:[(0,F.jsx)(l.Z,eg({className:e.tab,icon:(0,F.jsx)(x.Z,{className:e.buttonIcon}),label:"Ajouter"},eZ(0))),(0,F.jsx)(l.Z,eg({className:e.tab,icon:(0,F.jsx)(p.Z,{className:e.buttonIcon}),label:"Vid\xe9os"},eZ(1))),(0,F.jsx)(l.Z,eg({className:e.tab,icon:(0,F.jsx)(f.Z,{className:e.buttonIcon}),label:"Profile"},eZ(2)))]}),(0,F.jsx)(G(),{href:"/",children:(0,F.jsxs)(q.Z,{sx:{position:"absolute",top:285,left:10},children:[(0,F.jsx)(h.Z,{className:e.buttonIcon}),(0,F.jsx)(c.Z,{variant:"h6",className:e.buttonTypography,children:"Logout"})]})}),(0,F.jsxs)("div",{style:{display:"flex",justifyContent:"center",width:"100%"},children:[(0,F.jsx)(eb,{value:o,index:0,children:(0,F.jsx)(D,{})}),(0,F.jsx)(eb,{value:o,index:1,children:(0,F.jsx)(ec,{})}),(0,F.jsx)(eb,{value:o,index:2,children:(0,F.jsx)(em,{})})]})]})},eO=n(9578),eP=n(1163);function eC(){var e=(0,i.useContext)(eO.y).state.userInfo,t=(0,eP.useRouter)();return(0,i.useEffect)(function(){if(!e)return function(){t.push("/account/signin")}},[t,e]),(0,F.jsx)("div",{children:(0,F.jsx)(ew,{})})}var eI=eC;eC.getUserLayout=function(e){return(0,F.jsx)(F.Fragment,{children:e})}},4206:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/account",function(){return n(7122)}])}},function(e){e.O(0,[822,346,774,888,179],function(){return e(e.s=4206)}),_N_E=e.O()}]);