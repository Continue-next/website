(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{136:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(201),c=t(207),m=t(191);a.default=function(e){const{metadata:a,items:t}=e,{allTagsPath:r,name:o,count:s}=a;return n.a.createElement(l.a,{title:`Posts tagged "${o}"`,description:`Blog | Tagged "${o}"`},n.a.createElement("div",{className:"container margin-vert--lg"},n.a.createElement("div",{className:"row"},n.a.createElement("main",{className:"col col--8 col--offset-2"},n.a.createElement("h1",null,s," ",function(e,a){return e>1?a+"s":a}(s,"post"),' tagged with "',o,'"'),n.a.createElement(m.a,{href:r},"View All Tags"),n.a.createElement("div",{className:"margin-vert--xl"},t.map(({content:e})=>n.a.createElement(c.a,{key:e.metadata.permalink,frontMatter:e.frontMatter,metadata:e.metadata,truncated:!0},n.a.createElement(e,null))))))))}},205:function(e,a,t){"use strict";var r=t(2),n=t(0),l=t.n(n),c=t(191),m=t(187),o=t(192),s=t(190),i=(t(93),t(94)),d=t.n(i);var h=e=>function({id:a,...t}){const{siteConfig:{themeConfig:{navbar:{hideOnScroll:r=!1}={}}={}}={}}=Object(s.a)();return a?l.a.createElement(e,t,l.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:Object(o.a)("anchor",{[d.a.enhancedAnchor]:!r}),id:a}),t.children,l.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:"hash-link",href:"#"+a,title:"Direct link to heading"},"#")):l.a.createElement(e,t)},u=t(95),g=t.n(u);a.a={code:e=>{const{children:a}=e;return"string"==typeof a?a.includes("\n")?l.a.createElement(m.a,e):l.a.createElement("code",e):a},a:e=>/\.[^./]+$/.test(e.href)?l.a.createElement("a",e):l.a.createElement(c.a,e),pre:e=>l.a.createElement("div",Object(r.a)({className:g.a.mdxCodeBlock},e)),h1:h("h1"),h2:h("h2"),h3:h("h3"),h4:h("h4"),h5:h("h5"),h6:h("h6")}},207:function(e,a,t){"use strict";var r=t(0),n=t.n(r),l=t(192),c=t(185),m=t(206),o=t(191),s=t(205),i=t(195),d=t(96),h=t.n(d);const u=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){const{children:a,frontMatter:t,metadata:r,truncated:d,isBlogPostPage:g=!1}=e,{date:E,permalink:p,tags:b,readingTime:v}=r,{author:f,title:N,image:_}=t,k=t.author_url||t.authorURL,w=t.author_title||t.authorTitle,y=t.author_image_url||t.authorImageURL,T=Object(i.a)(_,{absolute:!0});return n.a.createElement(n.a.Fragment,null,n.a.createElement(m.a,null,_&&n.a.createElement("meta",{property:"og:image",content:T}),_&&n.a.createElement("meta",{property:"twitter:image",content:T}),_&&n.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+N})),n.a.createElement("article",{className:g?void 0:"margin-bottom--xl"},(()=>{const e=g?"h1":"h2",a=E.substring(0,10).split("-"),t=a[0],r=u[parseInt(a[1],10)-1],c=parseInt(a[2],10);return n.a.createElement("header",null,n.a.createElement(e,{className:Object(l.a)("margin-bottom--sm",h.a.blogPostTitle)},g?N:n.a.createElement(o.a,{to:p},N)),n.a.createElement("div",{className:"margin-vert--md"},n.a.createElement("time",{dateTime:E,className:h.a.blogPostDate},r," ",c,", ",t," ",v&&n.a.createElement(n.a.Fragment,null," \xb7 ",Math.ceil(v)," min read"))),n.a.createElement("div",{className:"avatar margin-vert--md"},y&&n.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:k,target:"_blank",rel:"noreferrer noopener"},n.a.createElement("img",{src:y,alt:f})),n.a.createElement("div",{className:"avatar__intro"},f&&n.a.createElement(n.a.Fragment,null,n.a.createElement("h4",{className:"avatar__name"},n.a.createElement("a",{href:k,target:"_blank",rel:"noreferrer noopener"},f)),n.a.createElement("small",{className:"avatar__subtitle"},w)))))})(),n.a.createElement("section",{className:"markdown"},n.a.createElement(c.a,{components:s.a},a)),(b.length>0||d)&&n.a.createElement("footer",{className:"row margin-vert--lg"},b.length>0&&n.a.createElement("div",{className:"col"},n.a.createElement("strong",null,"Tags:"),b.map(({label:e,permalink:a})=>n.a.createElement(o.a,{key:a,className:"margin-horiz--sm",to:a},e))),d&&n.a.createElement("div",{className:"col text--right"},n.a.createElement(o.a,{to:r.permalink,"aria-label":"Read more about "+N},n.a.createElement("strong",null,"Read More"))))))}}}]);