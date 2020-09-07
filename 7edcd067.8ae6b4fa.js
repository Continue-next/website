(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{147:function(e,n,a){"use strict";a.d(n,"a",(function(){return p}));var t=a(149),i=a(148),r=a(0),o=a.n(r),s=a(150);class p extends r.Component{render(){return o.a.createElement(i.a,{children:this.props.children,transformCode:e=>`\nfunction () {\n  ${e}\n \n  const wrapperRef = useRef(null);\n   \n  useEffect(() => {\n    if (wrapperRef && wrapperRef.current && wrapperRef.current.childNodes.length === 0) {\n      grid.render(wrapperRef.current);\n    }\n  });\n  \n  return (\n    <div ref={wrapperRef} />\n  );\n}\n`,live:!0,scope:{Grid:t.d,html:t.h,h:t.g,gCreateRef:t.f,gComponent:t.c,PluginPosition:t.e,BaseComponent:t.a,BaseProps:t.BaseProps,CodeBlock:i.a,useEffect:r.useEffect,useRef:r.useRef,faker:s,...this.props.scope}})}}},99:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return s})),a.d(n,"metadata",(function(){return p})),a.d(n,"rightToc",(function(){return c})),a.d(n,"default",(function(){return l}));var t=a(2),i=a(6),r=(a(0),a(146)),o=a(147),s={id:"pagination",title:"Pagination",keywords:["javascript","table","javascript table","gridjs","grid js","page","table page","pagination"]},p={unversionedId:"examples/pagination",id:"examples/pagination",isDocsHomePage:!1,title:"Pagination",description:"Pagination can be enabled by setting pagination",source:"@site/docs/examples/pagination.md",slug:"/examples/pagination",permalink:"/docs/examples/pagination",editUrl:"https://github.com/grid-js/website/edit/master/docs/examples/pagination.md",version:"current",lastUpdatedBy:"Afshin Mehrabani",lastUpdatedAt:1593637169,sidebar:"sidebar",previous:{title:"From HTML Table",permalink:"/docs/examples/from"},next:{title:"Search",permalink:"/docs/examples/search"}},c=[],d={rightToc:c};function l(e){var n=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(t.a)({},d,a,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Pagination can be enabled by setting ",Object(r.b)("inlineCode",{parentName:"p"},"pagination: true"),":"),Object(r.b)(o.a,{children:"\nconst grid = new Grid({\n  columns: ['Name', 'Email', 'Phone Number'],\n  pagination: true,\n  data: [\n    ['John', 'john@example.com', '(353) 01 222 3333'],\n    ['Mark', 'mark@gmail.com',   '(01) 22 888 4444']\n  ]\n});\n",mdxType:"LiveExample"}),Object(r.b)("p",null,"You can also change the default settings of the pagination plugin:"),Object(r.b)(o.a,{children:"\nconst grid = new Grid({\n  columns: ['Name', 'Email', 'Phone Number'],\n  pagination: {\n    limit: 1\n  },\n  data: [\n    ['John', 'john@example.com', '(353) 01 222 3333'],\n    ['Mark', 'mark@gmail.com',   '(01) 22 888 4444']\n  ]\n});\n",mdxType:"LiveExample"}))}l.isMDXComponent=!0}}]);