!function(e){function t(t){for(var r,u,c=t[0],i=t[1],l=t[2],s=0,p=[];s<c.length;s++)u=c[s],o[u]&&p.push(o[u][0]),o[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(f&&f(t);p.length;)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var i=n[c];0!==o[i]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={4:0};var a=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=o[e]=[t,r]});t.push(n[2]=r);var a=document.getElementsByTagName("head")[0],c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=function(e){return u.p+""+({}[e]||e)+"."+{1:"f2cebf5d2a5a44214f3c",2:"7950f9f71dc6a16bd00e",3:"ad3013e3f8d36ae13507"}[e]+".js"}(e);var i=setTimeout(function(){l({type:"timeout",target:c})},12e4);function l(t){c.onerror=c.onload=null,clearTimeout(i);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,u=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");u.type=r,u.request=a,n[1](u)}o[e]=void 0}}c.onerror=c.onload=l,a.appendChild(c)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},u.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var c=window.webpackJsonp=window.webpackJsonp||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var f=i;a.push([159,0]),n()}({115:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ProductActionPage=t.ProductListPage=t.HomePage=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),a=c(o),u=c(n(13));function c(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function f(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=a.default.createElement("div",null,"Loading..."),p=(0,u.default)({loader:function(){return n.e(3).then(function(){var e=n(162);return"object"==typeof e&&e&&e.__esModule?e:Object.assign({},"object"==typeof e&&e,{default:e})})},loading:function(){return s}}),d=(0,u.default)({loader:function(){return Promise.all([n.e(0),n.e(2)]).then(function(){var e=n(161);return"object"==typeof e&&e&&e.__esModule?e:Object.assign({},"object"==typeof e&&e,{default:e})})},loading:function(){return s}}),h=(0,u.default)({loader:function(){return Promise.all([n.e(0),n.e(1)]).then(function(){var e=n(160);return"object"==typeof e&&e&&e.__esModule?e:Object.assign({},"object"==typeof e&&e,{default:e})})},loading:function(){return s}});t.HomePage=function(e){function t(){return i(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return f(t,o.Component),r(t,[{key:"render",value:function(){return a.default.createElement(p,null)}}]),t}(),t.ProductListPage=function(e){function t(){return i(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return f(t,o.Component),r(t,[{key:"render",value:function(){return a.default.createElement(d,null)}}]),t}(),t.ProductActionPage=function(e){function t(){return i(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return f(t,o.Component),r(t,[{key:"render",value:function(){return a.default.createElement(h,this.props)}}]),t}()},116:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.default=function(e){var t=function(t){function n(){var e,t,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);for(var o=arguments.length,a=Array(o),u=0;u<o;u++)a[u]=arguments[u];return r=c(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(a))),t=r,r.state={Component:n.Component},c(r,t)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,t),r(n,[{key:"componentWillMount",value:function(){var t=this;this.state.Component||e().then(function(e){n.Component=e,t.setState({Component:e})})}},{key:"render",value:function(){var e=this.state.Component;return e?u.default.createElement(e,this.props):u.default.createElement("div",null,"Loading...")}}]),n}(a.Component);return t.Component=null,t};var o,a=n(0),u=(o=a)&&o.__esModule?o:{default:o};function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}},117:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),u=(r=a)&&r.__esModule?r:{default:r};var c=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),o(t,[{key:"render",value:function(){return u.default.createElement("div",{className:"alert alert-warning"},u.default.createElement("button",{type:"button",className:"close","data-dismiss":"alert","aria-hidden":"true"},"×"),u.default.createElement("strong",null,u.default.createElement("h2",null,"404-Not Found")))}}]),t}();t.default=c},118:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(n(0)),o=u(n(117)),a=(u(n(116)),u(n(13)),n(115));function u(e){return e&&e.__esModule?e:{default:e}}var c=[{path:"/",exact:!0,main:function(){return r.default.createElement(a.HomePage,null)}},{path:"/product-list",exact:!1,main:function(){return r.default.createElement(a.ProductListPage,null)}},{path:"/product/add",exact:!1,main:function(e){var t=e.history;return r.default.createElement(a.ProductActionPage,{history:t})}},{path:"/product/edit/:id",exact:!1,main:function(e){var t=e.match,n=e.history;return r.default.createElement(a.ProductActionPage,{match:t,history:n})}},{path:"",exact:!1,main:function(){return r.default.createElement(o.default,null)}}];t.default=c},146:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),u=(r=a)&&r.__esModule?r:{default:r},c=n(10);function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var l=[{name:"Trang chủ",to:"/",exact:!0},{name:"Quản lý sản phẩm",to:"/product-list",exact:!1}],f=function(e){var t=e.label,n=e.to,r=e.activeOnlyWhenExact;return u.default.createElement(c.Route,{path:n,exact:r,children:function(e){var r=e.match;return u.default.createElement("li",{className:r?"active":""},u.default.createElement(c.Link,{to:n},t))}})},s=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),c=0;c<o;c++)a[c]=arguments[c];return n=r=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),r.showMenus=function(e){var t=null;return e.length>0&&(t=e.map(function(e,t){return u.default.createElement(f,{key:t,to:e.to,label:e.name,activeOnlyWhenExact:e.exact})})),t},i(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),o(t,[{key:"render",value:function(){return u.default.createElement("div",{className:"navbar navbar-default"},u.default.createElement("a",{className:"navbar-brand"},"CALL API"),u.default.createElement("ul",{className:"nav navbar-nav"},this.showMenus(l)))}}]),t}();t.default=s},148:function(e,t,n){(e.exports=n(47)(!1)).push([e.i,".App{text-align:center}.App-logo{animation:App-logo-spin infinite 20s linear;height:80px}.App-header{background-color:#222;height:150px;padding:20px;color:#fff}.App-title{font-size:1.5em}.App-intro{font-size:large}.mr-10{margin-right:10px}.mb-5{margin-bottom:10px}@keyframes App-logo-spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}",""])},149:function(e,t,n){var r=n(148);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(46)(r,o);r.locals&&(e.exports=r.locals)},150:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),a=l(o);n(149);var u=l(n(146)),c=l(n(118)),i=n(10);l(n(13));function l(e){return e&&e.__esModule?e:{default:e}}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var s=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,u=Array(o),c=0;c<o;c++)u[c]=arguments[c];return n=r=f(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),r.showContentMenus=function(e){var t=null;return console.log(e.main),e.length>0&&(t=e.map(function(e,t){return a.default.createElement(i.Route,{key:t,path:e.path,exact:e.exact,component:e.main})})),a.default.createElement(i.Switch,null,t)},f(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"render",value:function(){return a.default.createElement(i.HashRouter,null,a.default.createElement(a.default.Fragment,null,a.default.createElement(u.default,null),a.default.createElement("div",{className:"container"},a.default.createElement("div",{className:"row"},this.showContentMenus(c.default)))))}}]),t}();t.default=s},159:function(e,t,n){"use strict";var r=f(n(0)),o=f(n(48)),a=f(n(150)),u=n(8),c=f(n(75)),i=n(23),l=f(n(25));function f(e){return e&&e.__esModule?e:{default:e}}n(72),n(65),n(2);var s=(0,u.createStore)(c.default,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),(0,u.applyMiddleware)(l.default));o.default.render(r.default.createElement(i.Provider,{store:s},r.default.createElement(a.default,null)),document.getElementById("root"))},22:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.FETCH_ALL_PRODUCTS="FETCH_ALL_PRODUCTS",t.ADD_PRODUCT="ADD_PRODUCT",t.DELETE_PRODUCT="DELETE_PRODUCT",t.UPDATE_PRODUCT="UPDATE_PRODUCT",t.GET_PRODUCT="GET_PRODUCT"},73:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(22));var o=[];t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments[1];switch(t.type){case r.GET_PRODUCT:return t.product;default:return[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(e))}}},74:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(22));function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var a=[],u=function(e,t){var n=-1;return e.forEach(function(e,r){e.id===t&&(n=r)}),n};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments[1],n=-1;switch(t.type){case r.FETCH_ALL_PRODUCTS:return e=t.products,[].concat(o(e));case r.DELETE_PRODUCT:var c=t.id;return-1!==(n=u(e,c))&&e.splice(n,1),[].concat(o(e));case r.ADD_PRODUCT:return e.push(t.product),[].concat(o(e));case r.UPDATE_PRODUCT:return e[n=u(e,t.product.id)]=t.product,[].concat(o(e));default:return e}}},75:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(8),o=u(n(74)),a=u(n(73));function u(e){return e&&e.__esModule?e:{default:e}}var c=(0,r.combineReducers)({products:o.default,itemEditting:a.default});t.default=c}});