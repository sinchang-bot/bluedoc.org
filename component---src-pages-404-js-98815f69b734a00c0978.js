(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{141:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(166),i=a(163),l=a(149);t.default=Object(l.c)(function(){return r.a.createElement(o.a,null,r.a.createElement(i.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))})},145:function(e,t,a){var n=[].concat(a(159),a(160));e.exports={localeData:n,languages:[{value:"en",text:"English"},{value:"zh",text:"简体中文"}]}},147:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),o=a(4),i=a.n(o),l=a(32),c=a.n(l);a.d(t,"a",function(){return c.a});a(148);var s=r.a.createContext({}),u=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},148:function(e,t,a){var n;e.exports=(n=a(150))&&n.default||n},149:function(e,t,a){"use strict";a(33);var n=a(73),r=a.n(n),o=a(0),i=a.n(o),l=a(4),c=a.n(l),s=a(147),u=function(e,t){var a=e.to,n=e.children,o=r()(e,["to","children"]),l=t.language,c=l.locale?"/"+l.locale+a:""+a;return i.a.createElement(s.a,Object.assign({to:c},o),n)};u.propTypes={to:c.a.string.isRequired,children:c.a.node.isRequired},u.contextTypes={language:c.a.object};var d=u,p=a(7),m=a.n(p),f=a(146),g=a(145);a(74),a(54),a(161);var h=function e(t,a){return void 0===a&&(a=""),Object.keys(t).reduce(function(n,r){var o=t[r],i=a?a+"."+r:r;return"string"==typeof o?n[i]=o:Object.assign(n,e(o,i)),n},{})};Object(f.c)(g.localeData);var v=function(e){var t=function(t){function n(e){var a;a=t.call(this)||this;var n=e.pageContext,r=n.locale,o=n.languages,i=n.originalPath;return a.state={language:{locale:r,languages:o,originalPath:i}},a}m()(n,t);var r=n.prototype;return r.getChildContext=function(){return{language:this.state.language}},r.render=function(){var t=this.state.language.locale||"en",n=a(151)("./"+t+".js");return i.a.createElement(f.b,{locale:t,messages:h(n)},i.a.createElement(e,this.props))},n}(o.Component);return t.childContextTypes={language:c.a.object},t};a.d(t,"a",function(){return d}),a.d(t,"c",function(){return v}),a.d(t,"b",function(){return g.languages})},150:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),o=a(4),i=a.n(o),l=a(55),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},151:function(e,t,a){var n={"./en.js":152,"./index.js":145,"./zh.js":153};function r(e){var t=o(e);return a(t)}function o(e){var t=n[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}r.keys=function(){return Object.keys(n)},r.resolve=o,e.exports=r,r.id=151},152:function(e,t){e.exports={Header:{Enterprise:"Enterprise",Pricing:"Pricing",About:"About",Help:"Help",LogIn:"Log In",SignUp:"Sign Up"},Home:{Section1:{Title:"BlueDoc, Your One-Stop File \nManagement Platform",SubTitle:"BlueDoc is an enterprise file management platform that allows sharing, creating and editing your files with your co-workers in real time. ",Btn:"Sign Up For Free"},Section2:{Title:"BlueDoc is designed as a business solution. ",SubTitle:"With comprehensive functions and intuitive interface, BlueDoc helps you achieve the best working results. ",Lists:[{Title:"Safe Archives",Des:"BlueDoc ensures a secure archive of your files. You can choose to upload your files to either the cloud or your company's intranet. "},{Title:"Smart Organization",Des:"BlueDoc organizes your files according to projects or teams. "},{Title:"Standardized File Directory",Des:"BlueDoc has a standardized directory for your files. You can find important information faster. "}]},Section3:{Lists:[{Title:"Handy File Editing Mode",Des:"BlueDoc adopts an intuitive interface, allowing you to edit and create files with ease. "},{Title:"Markdown Style Enabled",Des:"BlueDoc supports Markdown shortcuts. People who are familiar with Markdown will pick up BlueDoc editing easily."},{Title:"Complete Document History",Des:"BlueDoc keeps a complete history of revisions, allowing you to recover or cancel your amendments at a later time. "}]},Section4:{Title:"Well-designed layout.",SubTitle:"Different from other documenting tools, BlueDoc is designed for online editing and reading, hence better compatible with the web browser. "},Section5:{Lists:[{Title:"Support Markdown Import",Des:"Markdown import is available, allowing you to import your existing contents quickly in one go."},{Title:"Support PDF/Markdown Export",Des:"BlueDoc allows you to export your contents in PDF or Markdown format."}]},Section6:{Title:"More functions available for exploration."},Section7:{Title:"Try BlueDoc Now",SubTitle:"Take your work under control. Register now to start your free trial. Support multiple devices.",Btn:"Get Start"}}}},153:function(e,t){e.exports={Header:{Enterprise:"企业",Pricing:"价格",About:"关于",Help:"帮助",LogIn:"登录",SignUp:"注册"},Home:{Section1:{Title:"优雅高效\n轻松编写、分享、管理文档",SubTitle:"BlueDoc 是一个用于解决企业内分散在各处的文档，通过统一平台的方式，将企业所有的文档汇聚在一起，形成一个便于交流、分享、协作的文档平台。",Btn:"免费注册"},Section2:{Title:"为企业私有化部署而设计的文档管理工具",SubTitle:"凭借强大丰富的功能、直观界面，BlueDoc 可让你从最初的想法到最终文档，创造最佳工作成果",Lists:[{Title:"私有化部署文档",Des:"最安全的方式来为您和您的团队创建、编辑和协作文档，你可以自由选择在云平台部署或在企业内部部署"},{Title:"团队到知识库的组织方式",Des:"我们通过组建不同项目组（团队），划分具体项目（知识库）的方式来组织文档"},{Title:"规范化的文档目录组织方式",Des:"我们通过目录编辑器让文档组织、结构变得更加的规范、清晰"}]},Section3:{Lists:[{Title:"简单快捷的文档编辑模式",Des:"当您开始输入时，界面逐渐消失，让你沉浸式完成编写文档"},{Title:"Markdown 风格的键盘快捷键",Des:"我们支持类似 Markdown 风格的快捷编辑方式，让熟悉 Markdown 的人能快速入手"},{Title:"完整的文档历史记录",Des:"在你每次发布文档以后，BlueDoc 将会为文档创建历史版本，便于某天可以用来恢复、撤销编辑"}]},Section4:{Title:"更精致易用的文档编辑、阅读排版",SubTitle:"不同于各类文档工具，BlueDoc 是为在线编辑、阅读而设计，我们有更符合于浏览器阅读的排版"},Section5:{Lists:[{Title:"Markdown 导入支持",Des:"支持 Markdown 文件打包导入，让已有内容快速迁移进去"},{Title:"PDF / Markdown 导出",Des:"当你需要对外传播的时候，PDF 或 Markdown 打包导出能给你带来很大的帮助"}]},Section6:{Title:"更多功能等待你探索..."},Section7:{Title:"立即开始",SubTitle:"只需几分钟即可掌控您的未来工作。现在注册开始，他是免费的，适用于许多设备",Btn:"开始"}}}},156:function(e,t){},157:function(e,t){},158:function(e,t){},162:function(e,t,a){e.exports=a.p+"static/logo-7a7fdbbb9bb3b9b1df27be1cc7680ffc.svg"},163:function(e,t,a){"use strict";var n=a(164),r=a(0),o=a.n(r),i=a(4),l=a.n(i),c=a(174),s=a.n(c),u=a(147);function d(e){var t=e.description,a=e.lang,r=(e.meta,e.keywords,e.title);return o.a.createElement(u.b,{query:p,render:function(e){var n=t||e.site.siteMetadata.description;return o.a.createElement(s.a,{title:r,titleTemplate:"%s | "+e.site.siteMetadata.title},o.a.createElement("html",{lang:a}),o.a.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"}),o.a.createElement("meta",{name:"description",content:n}),o.a.createElement("script",{src:"/iconfont.js"}))},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=d;var p="1025518380"},164:function(e){e.exports={data:{site:{siteMetadata:{title:"BlueDoc",description:"",author:"@5th"}}}}},166:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(4),i=a.n(o),l=a(146),c=(a(169),a(170),a(154),a(155),a(149)),s=a(7),u=a.n(s),d=(a(75),a(171)),p=a.n(d),m=function(e){var t=e.name,a=e.className,n=void 0===a?"":a;return r.a.createElement("svg",{className:"icon "+n},r.a.createElement("use",{xlinkHref:"#icon"+t}))},f=function(e){function t(t){var a;(a=e.call(this,t)||this).handleChange=function(e){var t=a.props.onChange;a.state.value!==e&&(t?t(e):a.setState({value:e,open:!1}))},a.handleToggleOpen=function(){return a.setState({open:!a.state.open})};var n=t.value,r=t.options;return a.state={open:!1,value:n||r[0].value},a}return u()(t,e),t.prototype.render=function(){var e=this,t=this.props,a=t.options,n=void 0===a?[]:a,o=t.desLabel,i=this.state.open,l=n.find(function(t){return t.value===e.state.value}).text;return r.a.createElement("div",{className:p.a.wrap},r.a.createElement("div",{className:p.a.label,onClick:this.handleToggleOpen},l,r.a.createElement(m,{className:p.a.arrow+" "+(i?p.a.open:""),name:"down"})),r.a.createElement("ul",{className:p.a.optionsBox+" "+(i?"":p.a.hidden)},o&&r.a.createElement("label",{className:p.a.des},o),n.map(function(t){var a=t.value,n=t.text;return r.a.createElement("li",{className:""+p.a.item,key:a,onClick:function(){return e.handleChange(a)}},a===e.state.value&&r.a.createElement(m,{className:p.a.selected,name:"select"}),n)})))},t}(r.a.PureComponent),g=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={value:""},t.handleChange=function(e){var a=t.context.language.originalPath;t.setState({value:e},function(){localStorage.setItem("language",e),window.location.href="/"+e+a})},t}u()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this.context.language;this.setState({value:e.locale||e.detected})},a.render=function(){var e=this.context.language.languages,t=this.state.value;return t?r.a.createElement(f,{onChange:this.handleChange,options:e,value:t,desLabel:"Language"}):null},t}(n.PureComponent);g.contextTypes={language:i.a.object};var h=g,v=a(172),y=a.n(v),w=a(162),E=a.n(w),b=[],T=function(){return r.a.createElement("header",{className:y.a.wrap},r.a.createElement("div",{className:"wrap-container "+y.a.header},r.a.createElement(c.a,{to:"/",className:y.a.logo},r.a.createElement("img",{src:E.a})),r.a.createElement("nav",{className:y.a.nav},b.map(function(e){var t=e.link,a=e.name;return r.a.createElement(c.a,{className:y.a.link,key:t,to:t,activeClassName:"active"},r.a.createElement(l.a,{id:"Header."+a}))}),r.a.createElement("a",{className:y.a.lnk,href:"https://bluedoc.io/bluedoc/help"},r.a.createElement(l.a,{id:"Header.Help"}))),r.a.createElement(h,null)))},D=a(173),k=a.n(D),S=function(){return r.a.createElement("footer",{className:k.a.wrap},r.a.createElement("div",{className:"wrap-container "+k.a.footer},r.a.createElement("span",{className:k.a.copyright},"© 2019 Bluedoc. All rights reserved."),r.a.createElement("div",{className:k.a.links},r.a.createElement("a",{className:k.a.link,href:"#"},"Feedback"),r.a.createElement("a",{className:k.a.link,href:"#"},"Help"),r.a.createElement("a",{className:k.a.link,href:"#"},"About Bluedoc"))))},N=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(T,null),r.a.createElement("main",null,t),r.a.createElement(S,null))};N.propTypes={children:i.a.node.isRequired};t.a=Object(l.d)(N)}}]);
//# sourceMappingURL=component---src-pages-404-js-98815f69b734a00c0978.js.map