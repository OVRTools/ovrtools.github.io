import{S as t,i as e,s as n,e as o,t as r,c as a,a as c,g as i,d as s,b as l,f as m,D as h,k as d,n as p,h as u,E as g,M as f}from"./vendor-246bcad0.js";function T(t){let e,n,d,p;return{c(){e=o("p"),n=r("A project from "),d=o("a"),p=r("OVRTools"),this.h()},l(t){e=a(t,"P",{});var o=c(e);n=i(o,"A project from "),d=a(o,"A",{href:!0});var r=c(d);p=i(r,"OVRTools"),r.forEach(s),o.forEach(s),this.h()},h(){l(d,"href","/")},m(t,o){m(t,e,o),h(e,n),h(e,d),h(d,p)},d(t){t&&s(e)}}}function E(t){let e,n,f,E,v,A,y,M,b,w,O,U=t[4]&&T();return{c(){e=o("div"),n=o("img"),E=d(),v=o("h1"),A=o("a"),y=r(t[0]),M=d(),U&&U.c(),b=d(),w=o("p"),O=r(t[1]),this.h()},l(o){e=a(o,"DIV",{class:!0});var r=c(e);n=a(r,"IMG",{src:!0,alt:!0,class:!0}),E=p(r),v=a(r,"H1",{});var l=c(v);A=a(l,"A",{href:!0,target:!0,rel:!0});var m=c(A);y=i(m,t[0]),m.forEach(s),l.forEach(s),M=p(r),U&&U.l(r),b=p(r),w=a(r,"P",{});var h=c(w);O=i(h,t[1]),h.forEach(s),r.forEach(s),this.h()},h(){n.src!==(f=t[2])&&l(n,"src",f),l(n,"alt","logo"),l(n,"class","logo svelte-1iti8ce"),l(A,"href",t[3]),l(A,"target","_blank"),l(A,"rel","noopener noreferrer"),l(e,"class","hero svelte-1iti8ce")},m(t,o){m(t,e,o),h(e,n),h(e,E),h(e,v),h(v,A),h(A,y),h(e,M),U&&U.m(e,null),h(e,b),h(e,w),h(w,O)},p(t,[o]){4&o&&n.src!==(f=t[2])&&l(n,"src",f),1&o&&u(y,t[0]),8&o&&l(A,"href",t[3]),t[4]?U||(U=T(),U.c(),U.m(e,b)):U&&(U.d(1),U=null),2&o&&u(O,t[1])},i:g,o:g,d(t){t&&s(e),U&&U.d()}}}function v(t,e,n){let{title:o}=e,{subtitle:r}=e,{imageUrl:a}=e,{link:c}=e,{showOvrToolsSubtitle:i=!1}=e;return t.$$set=t=>{"title"in t&&n(0,o=t.title),"subtitle"in t&&n(1,r=t.subtitle),"imageUrl"in t&&n(2,a=t.imageUrl),"link"in t&&n(3,c=t.link),"showOvrToolsSubtitle"in t&&n(4,i=t.showOvrToolsSubtitle)},[o,r,a,c,i]}class A extends t{constructor(t){super(),e(this,t,v,E,n,{title:0,subtitle:1,imageUrl:2,link:3,showOvrToolsSubtitle:4})}}function y(t){let e,n,r,c,i,m,d,p,u,T,E,v;return document.title=e=t[0],{c(){n=o("meta"),r=o("meta"),c=o("meta"),i=o("meta"),m=o("meta"),d=o("meta"),p=o("meta"),u=o("meta"),T=o("meta"),E=o("meta"),v=o("meta"),this.h()},l(t){const e=f('[data-svelte="svelte-1ob8vre"]',document.head);n=a(e,"META",{property:!0,content:!0}),r=a(e,"META",{property:!0,content:!0}),c=a(e,"META",{property:!0,content:!0}),i=a(e,"META",{property:!0,content:!0}),m=a(e,"META",{property:!0,content:!0}),d=a(e,"META",{property:!0,content:!0}),p=a(e,"META",{name:!0,content:!0}),u=a(e,"META",{name:!0,content:!0}),T=a(e,"META",{name:!0,content:!0}),E=a(e,"META",{name:!0,content:!0}),v=a(e,"META",{name:!0,content:!0}),e.forEach(s),this.h()},h(){l(n,"property","og:title"),l(n,"content",t[0]),l(r,"property","og:description"),l(r,"content",t[1]),l(c,"property","og:site_name"),l(c,"content","OVRTools"),l(i,"property","og:locale"),l(i,"content","en_US"),l(m,"property","og:type"),l(m,"content","website"),l(d,"property","og:image"),l(d,"content",t[2]),l(p,"name","twitter:card"),l(p,"content","summary"),l(u,"name","twitter:creator"),l(u,"content","@tjhorner"),l(T,"name","twitter:title"),l(T,"content",t[0]),l(E,"name","twitter:description"),l(E,"content",t[1]),l(v,"name","twitter:image"),l(v,"content",t[2])},m(t,e){h(document.head,n),h(document.head,r),h(document.head,c),h(document.head,i),h(document.head,m),h(document.head,d),h(document.head,p),h(document.head,u),h(document.head,T),h(document.head,E),h(document.head,v)},p(t,[o]){1&o&&e!==(e=t[0])&&(document.title=e),1&o&&l(n,"content",t[0]),2&o&&l(r,"content",t[1]),4&o&&l(d,"content",t[2]),1&o&&l(T,"content",t[0]),2&o&&l(E,"content",t[1]),4&o&&l(v,"content",t[2])},i:g,o:g,d(t){s(n),s(r),s(c),s(i),s(m),s(d),s(p),s(u),s(T),s(E),s(v)}}}function M(t,e,n){let{title:o=""}=e,{description:r=""}=e,{imageUrl:a="/img/logo.png"}=e;return o=""!==o?`${o} - OVRTools`:"OVRTools",t.$$set=t=>{"title"in t&&n(0,o=t.title),"description"in t&&n(1,r=t.description),"imageUrl"in t&&n(2,a=t.imageUrl)},[o,r,a]}class b extends t{constructor(t){super(),e(this,t,M,y,n,{title:0,description:1,imageUrl:2})}}export{A as H,b as M};
