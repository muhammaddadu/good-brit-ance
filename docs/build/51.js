webpackJsonp([51],{

/***/ 742:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonInfiniteScroll", function() { return InfiniteScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonInfiniteScrollContent", function() { return InfiniteScrollContent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_core_js__ = __webpack_require__(292);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
var __awaiter=this&&this.__awaiter||function(t,e,n,i){return new(n||(n=Promise))(function(o,r){function l(t){try{a(i.next(t))}catch(t){r(t)}}function s(t){try{a(i.throw(t))}catch(t){r(t)}}function a(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(l,s)}a((i=i.apply(t,e||[])).next())})},__generator=this&&this.__generator||function(t,e){var n,i,o,r,l={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(r){return function(s){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,i&&(o=i[2&r[0]?"return":r[0]?"throw":"next"])&&!(o=o.call(i,r[1])).done)return o;switch(i=0,o&&(r=[0,o.value]),r[0]){case 0:case 1:o=r;break;case 4:return l.label++,{value:r[1],done:!1};case 5:l.label++,i=r[1],r=[0];continue;case 7:r=l.ops.pop(),l.trys.pop();continue;default:if(!(o=(o=l.trys).length>0&&o[o.length-1])&&(6===r[0]||2===r[0])){l=0;continue}if(3===r[0]&&(!o||r[1]>o[0]&&r[1]<o[3])){l.label=r[1];break}if(6===r[0]&&l.label<o[1]){l.label=o[1],o=r;break}if(o&&l.label<o[2]){l.label=o[2],l.ops.push(r);break}o[2]&&l.ops.pop(),l.trys.pop();continue}r=e.call(t,l)}catch(t){r=[6,t],i=0}finally{n=o=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,s])}}};var InfiniteScroll=function(){function t(){this.thrPx=0,this.thrPc=0,this.didFire=!1,this.isBusy=!1,this.isLoading=!1,this.threshold="15%",this.disabled=!1,this.position="bottom"}return t.prototype.thresholdChanged=function(t){t.lastIndexOf("%")>-1?(this.thrPx=0,this.thrPc=parseFloat(t)/100):(this.thrPx=parseFloat(t),this.thrPc=0)},t.prototype.disabledChanged=function(t){this.enableScrollEvents(!t)},t.prototype.componentWillLoad=function(){return __awaiter(this,void 0,void 0,function(){var t,e;return __generator(this,function(n){switch(n.label){case 0:return(t=this.el.closest("ion-scroll"))?(e=this,[4,t.componentOnReady()]):[3,2];case 1:e.scrollEl=n.sent(),n.label=2;case 2:return[2]}})})},t.prototype.componentDidLoad=function(){var t=this;this.thresholdChanged(this.threshold),this.enableScrollEvents(!this.disabled),"top"===this.position&&this.queue.write(function(){return t.scrollEl&&t.scrollEl.scrollToBottom(0)})},t.prototype.componentDidUnload=function(){this.scrollEl=void 0},t.prototype.onScroll=function(){var t=this.scrollEl;if(!t||!this.canStart())return 1;var e=this.el.offsetHeight;if(!e)return 2;var n=t.scrollTop,i=t.scrollHeight,o=t.offsetHeight,r=this.thrPc?o*this.thrPc:this.thrPx;if(("bottom"===this.position?i-e-n-r-o:n-e-r)<0){if(!this.didFire)return this.isLoading=!0,this.didFire=!0,this.ionInfinite.emit(),3}else this.didFire=!1;return 4},t.prototype.complete=function(){var t=this,e=this.scrollEl;if(this.isLoading&&e&&(this.isLoading=!1,"top"===this.position)){this.isBusy=!0;var n=e.scrollHeight-e.scrollTop;this.queue.read(function(){var i=e.scrollHeight-n;t.queue.write(function(){e.scrollTop=i,t.isBusy=!1})})}},t.prototype.waitFor=function(t){var e=this.complete.bind(this);t.then(e,e)},t.prototype.canStart=function(){return!(this.disabled||this.isBusy||!this.scrollEl||this.isLoading)},t.prototype.enableScrollEvents=function(t){this.scrollEl&&this.enableListener(this,"scroll",t,this.scrollEl)},t.prototype.hostData=function(){return{class:{"infinite-scroll-loading":this.isLoading,"infinite-scroll-enabled":!this.disabled}}},Object.defineProperty(t,"is",{get:function(){return"ion-infinite-scroll"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{complete:{method:!0},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["disabledChanged"]},el:{elementRef:!0},enableListener:{context:"enableListener"},isLoading:{state:!0},position:{type:String,attr:"position"},queue:{context:"queue"},threshold:{type:String,attr:"threshold",watchCallbacks:["thresholdChanged"]},waitFor:{method:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionInfinite",method:"ionInfinite",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"scroll",method:"onScroll",disabled:!0,passive:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"ion-infinite-scroll{display:none;width:100%}.infinite-scroll-enabled{display:block}"},enumerable:!0,configurable:!0}),t}(),InfiniteScrollContent=function(){function t(){}return t.prototype.componentDidLoad=function(){this.loadingSpinner||(this.loadingSpinner=this.config.get("infiniteLoadingSpinner",this.config.get("spinner","lines")))},t.prototype.render=function(){return Object(__WEBPACK_IMPORTED_MODULE_0__ionic_core_js__["b" /* h */])("div",{class:"infinite-loading"},this.loadingSpinner&&Object(__WEBPACK_IMPORTED_MODULE_0__ionic_core_js__["b" /* h */])("div",{class:"infinite-loading-spinner"},Object(__WEBPACK_IMPORTED_MODULE_0__ionic_core_js__["b" /* h */])("ion-spinner",{name:this.loadingSpinner})),this.loadingText&&Object(__WEBPACK_IMPORTED_MODULE_0__ionic_core_js__["b" /* h */])("div",{class:"infinite-loading-text",innerHTML:this.loadingText}))},Object.defineProperty(t,"is",{get:function(){return"ion-infinite-scroll-content"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"host",{get:function(){return{theme:"infinite-scroll-content"}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{config:{context:"config"},loadingSpinner:{type:String,attr:"loading-spinner",mutable:!0},loadingText:{type:String,attr:"loading-text"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"ion-infinite-scroll-content{text-align:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;min-height:84px}.infinite-loading{margin:0 0 32px;display:none;width:100%}.infinite-loading-text{margin:4px 32px 0}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-ios .infinite-loading-text{color:var(--ion-text-ios-color-step-400,var(--ion-text-color-step-400,#666))}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-crescent circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-small-ios line{stroke:var(--ion-text-ios-color-step-400,var(--ion-text-color-step-400,#666))}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-text-ios-color-step-400,var(--ion-text-color-step-400,#666))}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),t}();

/***/ })

});
//# sourceMappingURL=51.js.map