(this.webpackJsonpseep=this.webpackJsonpseep||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(9),s=n.n(i),r=(n(20),n(8)),j=n(6),l=n(7),d=n(14),u=n(15),b=(n(21),n(22),n(1));var o=function(){var e=Object(c.useState)(0),t=Object(r.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)("No_One"),s=Object(r.a)(i,2),o=s[0],h=s[1],O=Object(c.useState)([]),p=Object(r.a)(O,2),m=p[0],x=p[1],g=Object(c.useState)([]),v=Object(r.a)(g,2),f=v[0],B=v[1],y=Object(c.useState)("Team A"),A=Object(r.a)(y,2),S=A[0],I=A[1],T=Object(c.useState)("Team B"),k=Object(r.a)(T,2),C=k[0],E=k[1],N=0,w=0;return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)(j.a,{className:"heading",children:[Object(b.jsx)(l.a,{align:"center",children:Object(b.jsx)("h1",{className:"heading",onClick:function(){var e=prompt("What would you like to rename Team A , Sagar ?");""!=e&&I(e)},children:S})}),Object(b.jsx)(l.a,{align:"center",children:Object(b.jsx)("h1",{className:"heading",onClick:function(){var e=prompt("What would you like to rename Team B , Sagar ?");""!=e&&E(e)},children:C})})]}),Object(b.jsxs)("div",{className:"restapp",children:[Object(b.jsx)(j.a,{children:Object(b.jsx)("br",{})}),Object(b.jsxs)(j.a,{children:[Object(b.jsx)(l.a,{children:Object(b.jsx)("div",{class:"ui input",children:Object(b.jsx)("input",{type:"number",placeholder:"Team A Round Score",id:"inputA"})})}),Object(b.jsx)(l.a,{children:Object(b.jsx)("div",{class:"ui input",children:Object(b.jsx)("input",{type:"number",placeholder:"Team B Round Score",id:"inputB"})})})]}),Object(b.jsx)(j.a,{children:Object(b.jsx)("br",{})}),Object(b.jsx)(j.a,{children:Object(b.jsx)(d.a,{variant:"secondary",size:"lg",onClick:function(){if(""!==document.getElementById("inputA").value&&""!==document.getElementById("inputB").value){var e;(e=m).push(parseInt(document.getElementById("inputA").value)),x(e),(e=f).push(parseInt(document.getElementById("inputB").value)),B(e);for(var t=0;t<m.length;t++)N+=m[t];for(t=0;t<f.length;t++)w+=f[t];N>w?(a(N-w),h(S)):(a(w-N),h(C)),document.getElementById("inputB").value="",document.getElementById("inputA").value=""}else alert("What is this Sagar ? Are you dumb ? Add Values for both Team A and Team B. You CheAteR !!")},children:"Add Round Result"})}),Object(b.jsxs)(j.a,{children:[Object(b.jsx)(l.a,{align:"center",children:Object(b.jsx)("ol",{children:m.map((function(e,t){return Object(b.jsx)("li",{children:e},t)}))})}),Object(b.jsx)(l.a,{align:"center",children:Object(b.jsx)("ol",{children:f.map((function(e,t){return Object(b.jsx)("li",{children:e},t)}))})})]}),Object(b.jsx)(j.a,{children:Object(b.jsxs)(u.a,{variant:"secondary",children:[Object(b.jsx)("b",{children:o})," is winning by ",Object(b.jsx)("b",{children:n})]})})]})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};n(26),n(27);s.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(o,{})}),document.getElementById("root")),h()}},[[28,1,2]]]);
//# sourceMappingURL=main.63612dd2.chunk.js.map