(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{MWG5:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return u})),n.d(t,"default",(function(){return f}));var i=n("Fcif"),l=n("+I+c"),r=n("mXGw"),a=n("/FXl"),o=n("TjRS"),s=n("ZFoC"),c=n("Sk1m"),b=n("FMa6"),u=(n("aD51"),{});void 0!==u&&u&&u===Object(u)&&Object.isExtensible(u)&&!u.hasOwnProperty("__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/components/Alert.mdx"}});var p={_frontmatter:u},d=o.a;function f(e){var t,n,f=e.components,m=Object(l.a)(e,["components"]);return Object(a.b)(d,Object(i.a)({},p,m,{components:f,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"alert"},"Alert"),Object(a.b)("h2",{id:"属性"},"属性"),Object(a.b)(s.d,{of:c.a,mdxType:"Props"}),Object(a.b)("h2",{id:"基础用法"},"基础用法"),Object(a.b)(s.c,{__position:1,__code:'() => {\n  const [visible, setVisible] = React.useState(false)\n  return (\n    <>\n      <Button\n        onClick={() => setVisible(pre => !pre)}\n        style={{ marginBottom: 20 }}\n      >\n        打开Alert\n      </Button>\n      <Alert\n        title="closeable:true"\n        description="默认"\n        visible={visible}\n        onClose={() => setVisible(false)}\n      />\n      <Alert\n        title="closeable:false"\n        visible={visible}\n        closeable={false}\n        onClose={() => setVisible(false)}\n      />\n    </>\n  )\n}',__scope:(t={props:m,DefaultLayout:o.a,Playground:s.c,Props:s.d,Alert:c.a,Button:b.a},t.DefaultLayout=o.a,t._frontmatter=u,t),mdxType:"Playground"},(function(){var e=r.useState(!1),t=e[0],n=e[1];return Object(a.b)(r.Fragment,null,Object(a.b)(b.a,{onClick:function(){return n((function(e){return!e}))},style:{marginBottom:20},mdxType:"Button"},"打开Alert"),Object(a.b)(c.a,{title:"closeable:true",description:"默认",visible:t,onClose:function(){return n(!1)},mdxType:"Alert"}),Object(a.b)(c.a,{title:"closeable:false",visible:t,closeable:!1,onClose:function(){return n(!1)},mdxType:"Alert"}))})),Object(a.b)("h2",{id:"类型"},"类型"),Object(a.b)(s.c,{__position:2,__code:'<Alert\n  title="default"\n  visible={true}\n  alertType="default"\n  description="默认"\n/>\n<Alert\n  title="success"\n  visible={true}\n  alertType="success"\n  description="成功"\n/>\n<Alert title="danger" visible={true} alertType="danger" description="危险" />\n<Alert\n  title="warning"\n  visible={true}\n  alertType="warning"\n  description="警告"\n/>',__scope:(n={props:m,DefaultLayout:o.a,Playground:s.c,Props:s.d,Alert:c.a,Button:b.a},n.DefaultLayout=o.a,n._frontmatter=u,n),mdxType:"Playground"},Object(a.b)(c.a,{title:"default",visible:!0,alertType:"default",description:"默认",mdxType:"Alert"}),Object(a.b)(c.a,{title:"success",visible:!0,alertType:"success",description:"成功",mdxType:"Alert"}),Object(a.b)(c.a,{title:"danger",visible:!0,alertType:"danger",description:"危险",mdxType:"Alert"}),Object(a.b)(c.a,{title:"warning",visible:!0,alertType:"warning",description:"警告",mdxType:"Alert"})))}void 0!==f&&f&&f===Object(f)&&Object.isExtensible(f)&&!f.hasOwnProperty("__filemeta")&&Object.defineProperty(f,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/components/Alert.mdx"}}),f.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-components-alert-mdx-a465236791b0dd187ccf.js.map