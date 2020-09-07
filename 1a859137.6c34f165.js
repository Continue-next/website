(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{147:function(e,r,n){"use strict";n.d(r,"a",(function(){return l}));var t=n(149),a=n(148),o=n(0),s=n.n(o),i=n(150);class l extends o.Component{render(){return s.a.createElement(a.a,{children:this.props.children,transformCode:e=>`\nfunction () {\n  ${e}\n \n  const wrapperRef = useRef(null);\n   \n  useEffect(() => {\n    if (wrapperRef && wrapperRef.current && wrapperRef.current.childNodes.length === 0) {\n      grid.render(wrapperRef.current);\n    }\n  });\n  \n  return (\n    <div ref={wrapperRef} />\n  );\n}\n`,live:!0,scope:{Grid:t.d,html:t.h,h:t.g,gCreateRef:t.f,gComponent:t.c,PluginPosition:t.e,BaseComponent:t.a,BaseProps:t.BaseProps,CodeBlock:a.a,useEffect:o.useEffect,useRef:o.useRef,faker:i,...this.props.scope}})}}},70:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return i})),n.d(r,"metadata",(function(){return l})),n.d(r,"rightToc",(function(){return p})),n.d(r,"default",(function(){return d}));var t=n(2),a=n(6),o=(n(0),n(146)),s=n(147),i={id:"import-xml",title:"XML",keywords:["javascript","table","javascript table","gridjs","grid js","import","import data","import xml","xml"]},l={unversionedId:"examples/import-xml",id:"examples/import-xml",isDocsHomePage:!1,title:"XML",description:"Using the handler callback you can parse and handle HTTP calls yourself. The default handler tries to cast the response",source:"@site/docs/examples/import-xml.md",slug:"/examples/import-xml",permalink:"/docs/examples/import-xml",editUrl:"https://github.com/grid-js/website/edit/master/docs/examples/import-xml.md",version:"current",lastUpdatedBy:"Afshin Mehrabani",lastUpdatedAt:1593637169,sidebar:"sidebar",previous:{title:"JSON",permalink:"/docs/examples/import-json"},next:{title:"From HTML Table",permalink:"/docs/examples/from"}},p=[],c={rightToc:p};function d(e){var r=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},c,n,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Using the ",Object(o.b)("inlineCode",{parentName:"p"},"handler")," callback you can parse and handle HTTP calls yourself. The default handler tries to cast the response\nto a JSON format, but you can override it to parse the data in a different format."),Object(o.b)("p",null,"In this example, we are parsing ",Object(o.b)("inlineCode",{parentName:"p"},"https://gridjs.io/sitemap.xml")," which is a XML formatted document:"),Object(o.b)(s.a,{children:"\nconst grid = new Grid({\n  sort: true,\n  search: true,\n  pagination: true,\n  columns: ['Location', 'Change Frequency', 'Priority'],\n  server: {\n    url: 'https://gridjs.io/sitemap.xml',\n    handle: (res) => {\n      return res.text().then(str => (new window.DOMParser()).parseFromString(str, \"text/xml\"));\n    },\n    then: data => {\n      return Array.from(data.querySelectorAll('url'))\n        .map(row => [\n          row.querySelector('loc').innerHTML,\n          row.querySelector('changefreq').innerHTML,\n          row.querySelector('priority').innerHTML,\n        ]);\n    }\n  }\n});\n",mdxType:"LiveExample"}),Object(o.b)("br",null))}d.isMDXComponent=!0}}]);