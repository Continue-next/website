(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{135:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return d}));var a=t(2),r=t(6),o=(t(0),t(146)),i=t(147),s={id:"cell-formatting",title:"Cell formatting",keywords:["javascript","table","javascript table","gridjs","grid js","formatting","cell formatting"]},c={unversionedId:"examples/cell-formatting",id:"examples/cell-formatting",isDocsHomePage:!1,title:"Cell formatting",description:"You can customize cells and format them at runtime using formatter property:",source:"@site/docs/examples/cell-formatting.md",slug:"/examples/cell-formatting",permalink:"/docs/examples/cell-formatting",editUrl:"https://github.com/grid-js/website/edit/master/docs/examples/cell-formatting.md",version:"current",lastUpdatedBy:"Afshin Mehrabani",lastUpdatedAt:1593637169,sidebar:"sidebar",previous:{title:"CSS-in-JS",permalink:"/docs/examples/css-in-js"},next:{title:"Row buttons",permalink:"/docs/examples/row-buttons"}},l=[],m={rightToc:l};function d(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},m,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"You can customize cells and format them at runtime using ",Object(o.b)("inlineCode",{parentName:"p"},"formatter")," property:"),Object(o.b)(i.a,{children:"\nconst grid = new Grid({\n  columns: [\n      { \n        name: 'Name',\n        formatter: (cell) => `Name: ${cell}`\n      },\n      'Email',\n   ],\n  data: Array(5).fill().map(x => [\n    faker.name.findName(),\n    faker.internet.email(),\n  ])\n});\n",mdxType:"LiveExample"}),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"It is also possible to add HTML content to cells. See ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/examples/html-cells"}),"Populating cells with HTML"),"."))),Object(o.b)("p",null,"You can also get access to other cells in the same row:"),Object(o.b)(i.a,{children:"\nconst grid = new Grid({\n  columns: [\n      'Salary 1',\n      'Salary 2',\n      { \n        name: 'Sum',\n        formatter: (_, row) => `$${(row.cells[0].data + row.cells[1].data).toLocaleString()} USD`\n      },\n   ],\n  data: Array(5).fill().map(x => [\n    Math.round(Math.random() * 100000),\n    Math.round(Math.random() * 100000),\n    null\n  ])\n});\n",mdxType:"LiveExample"}))}d.isMDXComponent=!0},147:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var a=t(149),r=t(148),o=t(0),i=t.n(o),s=t(150);class c extends o.Component{render(){return i.a.createElement(r.a,{children:this.props.children,transformCode:e=>`\nfunction () {\n  ${e}\n \n  const wrapperRef = useRef(null);\n   \n  useEffect(() => {\n    if (wrapperRef && wrapperRef.current && wrapperRef.current.childNodes.length === 0) {\n      grid.render(wrapperRef.current);\n    }\n  });\n  \n  return (\n    <div ref={wrapperRef} />\n  );\n}\n`,live:!0,scope:{Grid:a.d,html:a.h,h:a.g,gCreateRef:a.f,gComponent:a.c,PluginPosition:a.e,BaseComponent:a.a,BaseProps:a.BaseProps,CodeBlock:r.a,useEffect:o.useEffect,useRef:o.useRef,faker:s,...this.props.scope}})}}}}]);