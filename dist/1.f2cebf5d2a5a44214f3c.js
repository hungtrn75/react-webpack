(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{160:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,c=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=n(0),o=(r=a)&&r.__esModule?r:{default:r},u=n(10),l=n(166),i=n(23);var d=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.onChange=function(t){var e=t.target,r=e.name,c="checkbox"===e.type?e.checked:e.value;n.setState(function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}({},r,c))},n.onSave=function(t){t.preventDefault();var e=n.state,r=e.id,c=e.txtName,a=e.txtPrice,o=e.ckStatus,u=n.props.history,l={id:r,name:c,price:a,status:o};r?(n.props.onUpdateProduct(l),u.goBack()):(n.props.onAddProduct(l),u.push("/product-list"))},n.state={id:"",txtName:"",txtPrice:"",ckStatus:""},n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,a.Component),c(e,[{key:"componentDidMount",value:function(){var t=this.props.match;t&&this.props.onEditProduct(t.params.id)}},{key:"componentWillReceiveProps",value:function(t){if(t&&t.itemEditting){var e=t.itemEditting,n=e.id,r=e.name,c=e.price,a=e.status;this.setState({id:n,txtName:r,txtPrice:c,ckStatus:a})}}},{key:"render",value:function(){var t=this.state,e=t.txtName,n=t.txtPrice,r=t.ckStatus;return o.default.createElement("div",{className:"row"},o.default.createElement("div",{className:"col-xs-6 col-sm-6 col-md-6 col-lg-6"},o.default.createElement("form",{onSubmit:this.onSave},o.default.createElement("div",{className:"form-group"},o.default.createElement("label",null,"Tên sản phẩm:"),o.default.createElement("input",{type:"text",className:"form-control",name:"txtName",value:e,onChange:this.onChange})),o.default.createElement("div",{className:"form-group"},o.default.createElement("label",null,"Giá sản phẩm:"),o.default.createElement("input",{type:"number",className:"form-control",name:"txtPrice",value:n,onChange:this.onChange})),o.default.createElement("div",{className:"form-group"},o.default.createElement("label",null,"Trạng thái sản phẩm:"),o.default.createElement("div",{className:"checkbox"},o.default.createElement("label",null,o.default.createElement("input",{type:"checkbox",value:r,name:"ckStatus",onChange:this.onChange,checked:r}),"Còn hàng"))),o.default.createElement("button",{type:"submit",className:"btn btn-primary mr-10"},o.default.createElement("i",{className:"glyphicon glyphicon-floppy-saved mr-10"}),"Lưu"),o.default.createElement(u.Link,{to:"/product-list",className:"btn btn-danger"},o.default.createElement("i",{className:"glyphicon glyphicon-circle-arrow-left mr-10"}),"Trở lại"))))}}]),e}();e.default=(0,i.connect)(function(t){return{itemEditting:t.itemEditting}},function(t,e){return{onAddProduct:function(e){t((0,l.actAddProductReq)(e))},onEditProduct:function(e){t((0,l.actGetProductReq)(e))},onUpdateProduct:function(e){t((0,l.actUpdateProductReq)(e))}}})(d)},164:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.API_URL="https://5ab4badfacec78001424aac6.mockapi.io/api/"},165:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments[2];return(0,a.default)({method:e,url:o.API_URL+"/"+t,data:n}).catch(function(t){console.log(t)})};var r,c=n(51),a=(r=c)&&r.__esModule?r:{default:r},o=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(164))},166:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.actUpdateProduct=e.actUpdateProductReq=e.actGetProduct=e.actGetProductReq=e.actAddProduct=e.actAddProductReq=e.actDeleteProduct=e.actFetchProducts=e.actDeleteProductReq=e.actFetchProductsReq=void 0;var r,c=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(22)),a=n(165),o=(r=a)&&r.__esModule?r:{default:r};e.actFetchProductsReq=function(){return function(t){return(0,o.default)("products","GET",null).then(function(e){404!==e.status&&t(u(e.data))}).catch(function(t){console.log(t)})}},e.actDeleteProductReq=function(t){return function(e){return(0,o.default)("products/"+t,"DELETE",null).then(function(n){e(l(t))})}};var u=e.actFetchProducts=function(t){return{type:c.FETCH_ALL_PRODUCTS,products:t}},l=e.actDeleteProduct=function(t){return{type:c.DELETE_PRODUCT,id:t}},i=(e.actAddProductReq=function(t){return function(e){return(0,o.default)("products","POST",t).then(function(t){e(i(t.data))})}},e.actAddProduct=function(t){return{type:c.ADD_PRODUCT,product:t}}),d=(e.actGetProductReq=function(t){return function(e){(0,o.default)("products/"+t,"GET",null).then(function(t){e(d(t.data))})}},e.actGetProduct=function(t){return{type:c.GET_PRODUCT,product:t}}),f=(e.actUpdateProductReq=function(t){return function(e){(0,o.default)("products/"+t.id,"PUT",t).then(function(t){e(f(t.data))})}},e.actUpdateProduct=function(t){return{type:c.UPDATE_PRODUCT,product:t}})}}]);