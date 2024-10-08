(()=>{"use strict";var e={935:(e,t,o)=>{o.d(t,{A:()=>l});var r=o(427),n=o(582),a=o(143),s=o(87),i=o(790);const l=()=>{const e=(0,s.useRef)(null),{editPost:t}=(0,a.useDispatch)("core/editor"),o=(0,a.useSelect)((t=>(e.current||(e.current=t("core/editor").getCurrentPostType()),e.current)),[]),[l,d]=(0,n.useEntityProp)("postType",o,"meta"),c=(e,o)=>{const r={...l,[e]:o};d(r),t({meta:r})};return(0,s.useEffect)((()=>{e.current=o}),[o]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.TextControl,{label:"Meta Title",value:l.meta_title||"",onChange:e=>c("meta_title",e)}),(0,i.jsx)(r.TextareaControl,{label:"Meta Description",value:l.meta_description||"",onChange:e=>c("meta_description",e)}),(0,i.jsx)(r.TextControl,{label:"Meta Keywords",value:l.meta_keywords||"",onChange:e=>c("meta_keywords",e)}),(0,i.jsx)(r.TextControl,{label:"Canonical URL",value:l.canonical_url||"",onChange:e=>c("canonical_url",e)}),(0,i.jsx)(r.ToggleControl,{label:"Robots Meta",checked:l.robots_meta||!1,onChange:e=>c("robots_meta",e)})]})}},790:e=>{e.exports=window.ReactJSXRuntime},427:e=>{e.exports=window.wp.components},582:e=>{e.exports=window.wp.coreData},143:e=>{e.exports=window.wp.data},309:e=>{e.exports=window.wp.editPost},87:e=>{e.exports=window.wp.element},723:e=>{e.exports=window.wp.i18n},279:e=>{e.exports=window.wp.plugins}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,o),a.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var r=o(279),n=o(309),a=o(723),s=o(935),i=o(790);(0,r.registerPlugin)("seo-meta-fields",{render:()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.PluginSidebarMoreMenuItem,{target:"seo-meta-fields-sidebar",icon:"admin-site",children:(0,a.__)("SEO Meta Fields","gutenberg-seo-plugin")}),(0,i.jsx)(n.PluginSidebar,{name:"seo-meta-fields-sidebar",title:(0,a.__)("SEO Meta Fields","gutenberg-seo-plugin"),icon:"admin-site",children:(0,i.jsx)("div",{className:"seo-meta-fields",children:(0,i.jsx)(s.A,{})})})]})})})();
//# sourceMappingURL=index.js.map