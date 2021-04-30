(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{Wd7X:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return d})),n.d(t,"default",(function(){return f}));var c=n("Fcif"),a=n("+I+c"),i=n("mXGw"),u=n("/FXl"),o=n("TjRS"),r=n("ZFoC"),s=n("Gec9"),d=(n("aD51"),{});void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/components/useClickOutside.mdx"}});var l={_frontmatter:d},b=o.a;function f(e){var t,n=e.components,f=Object(a.a)(e,["components"]);return Object(u.b)(b,Object(c.a)({},l,f,{components:n,mdxType:"MDXLayout"}),Object(u.b)("h1",{id:"useclickoutside"},"useClickOutside"),Object(u.b)("h2",{id:"描述"},"描述"),Object(u.b)("pre",null,Object(u.b)("code",{parentName:"pre",className:"language-bash"},"传入元素的ref，点击元素以外的部分触发hanler函数\n")),Object(u.b)("h2",{id:"类型"},"类型"),Object(u.b)("pre",null,Object(u.b)("code",{parentName:"pre",className:"language-ts"},"\nuseClickOutside:(ref: RefObject<HTMLElement>, handler: Function) => void\n\n")),Object(u.b)("h2",{id:"基础用法"},"基础用法"),Object(u.b)(r.c,{__position:0,__code:"() => {\n  const [value, setValue] = React.useState('点击')\n  const divRef = React.useRef(null)\n  useClickOutside(divRef, () => setValue('点击了div的外部'))\n  return (\n    <div\n      ref={divRef}\n      onClick={() => setValue('点击了div的内部')}\n      style={{ width: 160, height: 30, background: '#0d6efd' }}\n    >\n      {value}\n    </div>\n  )\n}",__scope:(t={props:f,DefaultLayout:o.a,Playground:r.c,useClickOutside:s.a},t.DefaultLayout=o.a,t._frontmatter=d,t),mdxType:"Playground"},(function(){var e=i.useState("点击"),t=e[0],n=e[1],c=i.useRef(null);return Object(s.a)(c,(function(){return n("点击了div的外部")})),Object(u.b)("div",{ref:c,onClick:function(){return n("点击了div的内部")},style:{width:160,height:30,background:"#0d6efd"}},t)})))}void 0!==f&&f&&f===Object(f)&&Object.isExtensible(f)&&!f.hasOwnProperty("__filemeta")&&Object.defineProperty(f,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/components/useClickOutside.mdx"}}),f.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-components-use-click-outside-mdx-7035aca6303818c21e00.js.map