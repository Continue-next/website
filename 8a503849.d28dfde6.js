(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{101:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return r})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return p}));var n=a(2),b=a(6),i=(a(0),a(146)),l={id:"pagination",title:"pagination"},r={unversionedId:"config/pagination",id:"config/pagination",isDocsHomePage:!1,title:"pagination",description:"To enable the pagination plugin",source:"@site/docs/config/pagination.md",slug:"/config/pagination",permalink:"/docs/config/pagination",editUrl:"https://github.com/grid-js/website/edit/master/docs/config/pagination.md",version:"current",lastUpdatedBy:"Afshin Mehrabani",lastUpdatedAt:1593380764,sidebar:"sidebar",previous:{title:"sort",permalink:"/docs/config/sort"},next:{title:"Plugin basics",permalink:"/docs/plugin/basics"}},o=[],c={rightToc:o};function p(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"To enable the pagination plugin"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"optional")),Object(i.b)("li",{parentName:"ul"},"Type: ",Object(i.b)("inlineCode",{parentName:"li"},"boolean")," or ",Object(i.b)("inlineCode",{parentName:"li"},"PaginationConfig")),Object(i.b)("li",{parentName:"ul"},"Example: ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/examples/pagination"}),"Pagination")," and ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/examples/server-side-pagination"}),"Server-side pagination"))),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"PaginationConfig")," type has the following properties:"),Object(i.b)("div",{className:"full-width"},Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"enabled"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"to enable/disable pagination"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"limit ",Object(i.b)("inlineCode",{parentName:"td"},"optional")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"rows per page"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"page ",Object(i.b)("inlineCode",{parentName:"td"},"optional")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"initial page"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"summary ",Object(i.b)("inlineCode",{parentName:"td"},"optional")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"to show/hide the pagination summary"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"nextButton ",Object(i.b)("inlineCode",{parentName:"td"},"optional")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"to show/hide the next button"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"prevButton ",Object(i.b)("inlineCode",{parentName:"td"},"optional")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"to show/hide the previous button"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"buttonsCount ",Object(i.b)("inlineCode",{parentName:"td"},"optional")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number of buttons to display"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"resetPageOnUpdate ",Object(i.b)("inlineCode",{parentName:"td"},"optional")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"to reset the pagination when table is updated"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"server ",Object(i.b)("inlineCode",{parentName:"td"},"optional")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"to enable server-side integration"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ServerConfig"))))),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"new Grid({\n  data: [\n    ['John', 'john@example.com', '(353) 01 222 3333'],\n    ['Mark', 'mark@gmail.com',   '(01) 22 888 4444'],\n    ['Eoin', 'eo3n@yahoo.com',   '(05) 10 878 5554'],\n    ['Nisen', 'nis900@gmail.com',   '313 333 1923']\n  ],\n  pagination: {\n    enabled: true,\n    limit: 2,\n    summary: false\n  }\n});\n")))}p.isMDXComponent=!0}}]);