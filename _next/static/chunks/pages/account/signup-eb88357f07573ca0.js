(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[298],{8817:function(e,t,n){"use strict";n.d(t,{_:function(){return c}});var r=n(9499),i=n(1806),a=n(8767);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var o=function(e,t){var n=t.data,r=t.options;return i.h.post(e,n,r)},c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,a.useMutation)(function(t){return o(e,t)},function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},t))}},4017:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return N}});var r=n(9499);n(7294);var i=n(4731),a=n(5084),s=n(793),o=n(3123),c=n(2841),u=n(1362),l=n(9072),p=n(1953),m=n(3845),d=n(9630),f=n(6336),j=n(9762),h=n(8452),x=n(1664),b=n.n(x),g=n(8817),O=n(1163),y=n(5893);function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function v(e){return(0,y.jsxs)(d.Z,P(P({variant:"body2",color:"text.secondary",align:"center"},e),{},{children:["Copyright \xa9 ",(0,y.jsx)(b(),{href:"/",passHref:!0,children:"MiageTube"})," ",new Date().getFullYear(),"."]}))}var Z=(0,j.Z)();function N(){var e=(0,O.useRouter)(),t=(0,g._)("/user/signup",{onSuccess:function(t){200===t.status&&t.data&&e.push("/account/signin")}}).mutate,n=function(e){e.preventDefault();var n=new FormData(e.currentTarget);t({data:{email:n.get("email"),password:n.get("password"),firstName:n.get("firstName"),lastName:n.get("lastName")},options:{headers:{"Content-Type":"application/json"}}})};return(0,y.jsx)(h.Z,{theme:Z,children:(0,y.jsxs)(f.Z,{component:"main",maxWidth:"xs",children:[(0,y.jsx)(s.ZP,{}),(0,y.jsxs)(p.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,y.jsx)(i.Z,{sx:{m:1,bgcolor:"secondary.main"},children:(0,y.jsx)(m.Z,{})}),(0,y.jsx)(d.Z,{component:"h1",variant:"h5",children:"Sign up"}),(0,y.jsxs)(p.Z,{component:"form",noValidate:!0,onSubmit:n,sx:{mt:3},children:[(0,y.jsxs)(l.ZP,{container:!0,spacing:2,children:[(0,y.jsx)(l.ZP,{item:!0,xs:12,sm:6,children:(0,y.jsx)(o.Z,{autoComplete:"given-name",name:"firstName",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0})}),(0,y.jsx)(l.ZP,{item:!0,xs:12,sm:6,children:(0,y.jsx)(o.Z,{required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"family-name"})}),(0,y.jsx)(l.ZP,{item:!0,xs:12,children:(0,y.jsx)(o.Z,{required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email"})}),(0,y.jsx)(l.ZP,{item:!0,xs:12,children:(0,y.jsx)(o.Z,{required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"new-password"})}),(0,y.jsx)(l.ZP,{item:!0,xs:12,children:(0,y.jsx)(c.Z,{control:(0,y.jsx)(u.Z,{value:"allowExtraEmails",color:"primary"}),label:"I want to receive inspiration, marketing promotions and updates via email."})})]}),(0,y.jsx)(a.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Sign Up"}),(0,y.jsx)(l.ZP,{container:!0,justifyContent:"flex-end",children:(0,y.jsx)(l.ZP,{item:!0,children:(0,y.jsx)(b(),{href:"/account/signin",children:"Already have an account? Sign in"})})})]})]}),(0,y.jsx)(v,{sx:{mt:5}})]})})}N.getUserLayout=function(e){return(0,y.jsx)(y.Fragment,{children:e})}},243:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account/signup",function(){return n(4017)}])}},function(e){e.O(0,[822,642,774,888,179],function(){return e(e.s=243)}),_N_E=e.O()}]);