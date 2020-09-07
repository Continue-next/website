(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{147:function(e,r,n){"use strict";n.d(r,"a",(function(){return d}));var s=n(149),t=n(148),i=n(0),a=n.n(i),o=n(150);class d extends i.Component{render(){return a.a.createElement(t.a,{children:this.props.children,transformCode:e=>`\nfunction () {\n  ${e}\n \n  const wrapperRef = useRef(null);\n   \n  useEffect(() => {\n    if (wrapperRef && wrapperRef.current && wrapperRef.current.childNodes.length === 0) {\n      grid.render(wrapperRef.current);\n    }\n  });\n  \n  return (\n    <div ref={wrapperRef} />\n  );\n}\n`,live:!0,scope:{Grid:s.d,html:s.h,h:s.g,gCreateRef:s.f,gComponent:s.c,PluginPosition:s.e,BaseComponent:s.a,BaseProps:s.BaseProps,CodeBlock:t.a,useEffect:i.useEffect,useRef:i.useRef,faker:o,...this.props.scope}})}}},75:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return o})),n.d(r,"metadata",(function(){return d})),n.d(r,"rightToc",(function(){return c})),n.d(r,"default",(function(){return u}));var s=n(2),t=n(6),i=(n(0),n(146)),a=n(147),o={id:"server-side-search",title:"Server Side Search",keywords:["javascript","table","javascript table","gridjs","grid js","server side search","server search"]},d={unversionedId:"examples/server-side-search",id:"examples/server-side-search",isDocsHomePage:!1,title:"Server Side Search",description:"Add server config to your search definition to enable server-side search:",source:"@site/docs/examples/server-side-search.md",slug:"/examples/server-side-search",permalink:"/docs/examples/server-side-search",editUrl:"https://github.com/grid-js/website/edit/master/docs/examples/server-side-search.md",version:"current",lastUpdatedBy:"Afshin Mehrabani",lastUpdatedAt:1593637169,sidebar:"sidebar",previous:{title:"Import server-side data",permalink:"/docs/examples/server"},next:{title:"Server Side Pagination",permalink:"/docs/examples/server-side-pagination"}},c=[],p={rightToc:c};function u(e){var r=e.components,n=Object(t.a)(e,["components"]);return Object(i.b)("wrapper",Object(s.a)({},p,n,{components:r,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Add ",Object(i.b)("inlineCode",{parentName:"p"},"server")," config to your search definition to enable server-side search:"),Object(i.b)(a.a,{children:"\nconst grid = new Grid({\n  pagination: true,\n  search: {\n    server: {\n      url: (prev, keyword) => `${prev}?search=${keyword}`\n    }\n  },\n  columns: ['Title', 'Director', 'Producer'],\n  server: {\n    url: 'https://swapi.dev/api/films/',\n    then: data => data.results.map(movie => [movie.title, movie.director, movie.producer])\n  } \n});\n",mdxType:"LiveExample"}))}u.isMDXComponent=!0}}]);