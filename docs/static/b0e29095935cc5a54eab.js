(window.webpackJsonp=window.webpackJsonp||[]).push([[5,2,3,4],{152:function(t,e,n){var content=n(155);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("5db11919",content,!0,{sourceMap:!1})},153:function(t,e,n){var content=n(157);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("12ea328e",content,!0,{sourceMap:!1})},154:function(t,e,n){"use strict";var o=n(152);n.n(o).a},155:function(t,e,n){(e=n(41)(!1)).push([t.i,".VueToNuxtLogo{display:inline-block;-webkit-animation:turn 2s linear 1s forwards;animation:turn 2s linear 1s forwards;transform:rotateX(180deg);position:relative;overflow:hidden;height:180px;width:245px}.Triangle{position:absolute;top:0;left:0;width:0;height:0}.Triangle--one{border-left:105px solid transparent;border-right:105px solid transparent;border-bottom:180px solid #41b883}.Triangle--two{top:30px;border-left:87.5px solid transparent;border-right:87.5px solid transparent;border-bottom:150px solid #3b8070}.Triangle--three,.Triangle--two{left:35px;-webkit-animation:goright .5s linear 3.5s forwards;animation:goright .5s linear 3.5s forwards}.Triangle--three{top:60px;border-left:70px solid transparent;border-right:70px solid transparent;border-bottom:120px solid #35495e}.Triangle--four{top:120px;left:70px;-webkit-animation:godown .5s linear 3s forwards;animation:godown .5s linear 3s forwards;border-left:35px solid transparent;border-right:35px solid transparent;border-bottom:60px solid #fff}@-webkit-keyframes turn{to{transform:rotateX(0deg)}}@keyframes turn{to{transform:rotateX(0deg)}}@-webkit-keyframes godown{to{top:180px}}@keyframes godown{to{top:180px}}@-webkit-keyframes goright{to{left:70px}}@keyframes goright{to{left:70px}}",""]),t.exports=e},156:function(t,e,n){"use strict";var o=n(153);n.n(o).a},157:function(t,e,n){(e=n(41)(!1)).push([t.i,"table[data-v-c351a8fe]{margin:-130% 0 0}",""]),t.exports=e},158:function(t,e,n){var content=n(163);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("6759f5ab",content,!0,{sourceMap:!1})},159:function(t,e,n){"use strict";n.r(e);n(154);var o=n(19),r={components:{AppLogo:Object(o.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"VueToNuxtLogo"},[e("div",{staticClass:"Triangle Triangle--two"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--one"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--three"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--four"})])}],!1,null,null,null).exports},data:function(){return{}},mounted:function(){},methods:{}},l=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"container"},[e("div",{staticClass:"hero is-primary"},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"container hero-container"},[e("h5",{staticClass:"subtitle"},[this._v("\n          Transportation Expenses Application\n          "),e("AppLogo")],1)])])])])}),[],!1,null,null,null);e.default=l.exports},160:function(t,e,n){"use strict";n.r(e);var o={components:{},data:function(){return{}},mounted:function(){},methods:{}},r=n(19),component=Object(r.a)(o,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"container"},[e("div",[this._v("request")])])}],!1,null,null,null);e.default=component.exports},161:function(t,e,n){"use strict";n.r(e);var o={components:{},data:function(){return{requestLists:[{id:1,date:"2020/4/1",status:"課長まで承認済み",location:"五反田",vehicle:"電車",route:"横浜 ~ 五反田",request:"自社",ways:"片道"},{id:2,date:"2020/4/3",status:"申請中",location:"品川",vehicle:"電車",route:"高田馬場 ~ 品川",request:"客先",ways:"往復"}],requestDetail:[],isModalActive:!1}},mounted:function(){},methods:{showDetail:function(t){this.isModalActive=!0,this.requestDetail=this.requestLists.filter((function(e){return e.id===t}))},switchDisplayModal:function(){this.isModalActive=!this.isModalActive}}},r=(n(156),n(19)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container"},[n("div",[n("table",{staticClass:"table is-bordered table is-striped is-narrow is-hoverable"},[n("tbody",[n("th",[t._v("申請日時")]),t._v(" "),n("th",[t._v("ステータス")]),t._v(" "),n("th",[t._v("申請内容")]),t._v(" "),t._l(t.requestLists,(function(e){return n("tr",{key:e.id},[n("td",[t._v(t._s(e.date))]),t._v(" "),n("td",[t._v(t._s(e.status))]),t._v(" "),n("td",[n("button",{staticClass:"button",on:{click:function(n){return t.showDetail(e.id)}}},[t._v("詳細")])])])}))],2)]),t._v(" "),n("div",{staticClass:"modal",class:{"is-active":t.isModalActive}},[n("div",{staticClass:"modal-background"}),t._v(" "),n("div",{staticClass:"modal-card"},[n("header",{staticClass:"modal-card-head"},[n("p",{staticClass:"modal-card-title"},[t._v("申請内容の詳細")]),t._v(" "),n("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:t.switchDisplayModal}})]),t._v(" "),n("section",{staticClass:"modal-card-body"},[t._v("\n          申請内容は下記のとおりです\n          "),t._l(t.requestDetail,(function(e){return n("ul",{key:e.id},[n("li",[t._v("日付："+t._s(e.date))]),t._v(" "),n("li",[t._v("業務内容・行先："+t._s(e.location))]),t._v(" "),n("li",[t._v("乗り物："+t._s(e.vehicle))]),t._v(" "),n("li",[t._v("発～ ( 経由 ) ～着："+t._s(e.route))]),t._v(" "),n("li",[t._v("請求先："+t._s(e.request))]),t._v(" "),n("li",[t._v("片道・往復："+t._s(e.ways))])])}))],2),t._v(" "),n("footer",{staticClass:"modal-card-foot"},[n("button",{staticClass:"button",on:{click:t.switchDisplayModal}},[t._v("戻る")])])])])])])}),[],!1,null,"c351a8fe",null);e.default=component.exports},162:function(t,e,n){"use strict";var o=n(158);n.n(o).a},163:function(t,e,n){(e=n(41)(!1)).push([t.i,".container{min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center}.title{font-family:Quicksand,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}div.control{margin:1% 0 0 1%}@media screen and (min-width:1024px){div.control{margin:3% 1% 0 -1%}}",""]),t.exports=e},164:function(t,e,n){"use strict";n.r(e);var o=n(159),r=n(160),l=n(161),c={components:{Home:o.default,Request:r.default,List:l.default},data:function(){return{selected:"Home",isShowSideMenu:!1,resultData:[]}},mounted:function(){},methods:{switchPage:function(){this.selected=event.target.innerText},showSideMenu:function(){this.isShowSideMenu=!this.isShowSideMenu}}},d=(n(162),n(19)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container"},[n("div",[n("nav",{staticClass:"navbar",attrs:{role:"navigation"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"navbar-brand"},[t._m(0),t._v(" "),n("a",{staticClass:"navbar-burger",class:{"is-active":t.isShowSideMenu},attrs:{role:"button","aria-label":"menu","aria-expanded":"false"},on:{click:t.showSideMenu}},[n("span",{attrs:{"aria-hidden":"true"}}),t._v(" "),n("span",{attrs:{"aria-hidden":"true"}}),t._v(" "),n("span",{attrs:{"aria-hidden":"true"}})])]),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"navbar-menu",class:{"is-active":t.isShowSideMenu}},[n("div",{staticClass:"navbar-start"},[n("a",{staticClass:"navbar-item",class:{"is-active":"Home"===t.selected}},[n("span",{on:{click:t.switchPage}},[t._v("Home")])]),t._v(" "),n("a",{staticClass:"navbar-item",class:{"is-active":"Request"===t.selected}},[n("span",{on:{click:t.switchPage}},[t._v("Request")])]),t._v(" "),n("a",{staticClass:"navbar-item",class:{"is-active":"List"===t.selected}},[n("span",{on:{click:t.switchPage}},[t._v("List")])])])])])]),t._v(" "),"Home"===t.selected?n("Home"):"Request"===t.selected?n("Request"):"List"===t.selected?n("List"):t._e()],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"navbar-item"},[e("img",{attrs:{src:"https://bulma.io/images/bulma-logo.png",width:"112",height:"28"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"control"},[e("div",{staticClass:"tags has-addons"},[e("span",{staticClass:"tag is-dark"},[this._v("作成中")]),this._v(" "),e("span",{staticClass:"tag is-info"},[this._v("0.0.1")])])])}],!1,null,null,null);e.default=component.exports}}]);