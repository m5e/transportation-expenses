(window.webpackJsonp=window.webpackJsonp||[]).push([[5,2,3,4],{157:function(t,e,n){var content=n(161);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("b758cc58",content,!0,{sourceMap:!1})},158:function(t,e,n){var content=n(163);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("46e05f58",content,!0,{sourceMap:!1})},159:function(t,e,n){var content=n(165);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("0b9187a4",content,!0,{sourceMap:!1})},160:function(t,e,n){"use strict";var o=n(157);n.n(o).a},161:function(t,e,n){(e=n(28)(!1)).push([t.i,".application-name[data-v-06eeb9bc]{margin:50% 0 0;font-family:Kaushan-Script,cursive}.home-background-image[data-v-06eeb9bc]{background-attachment:fixed;background-repeat:no-repeat;background-size:cover}.fadein[data-v-06eeb9bc]{opacity:.1;transform:translateY(50px);transition:all .5s}.fadein.scrollin[data-v-06eeb9bc]{opacity:1;transform:translate(0)}",""]),t.exports=e},162:function(t,e,n){"use strict";var o=n(158);n.n(o).a},163:function(t,e,n){(e=n(28)(!1)).push([t.i,".list-container[data-v-9a70b526]{width:90%;margin-right:auto;margin-left:auto;padding-top:15%;padding-bottom:100%}table[data-v-9a70b526]{-moz-text-align-last:center;text-align-last:center}table.is-striped.is-narrow.is-hoverable.is-fullwidth tbody tr[data-v-9a70b526]:hover{background-color:#c5f7f1}.detail-button[data-v-9a70b526]{width:60%}",""]),t.exports=e},164:function(t,e,n){"use strict";var o=n(159);n.n(o).a},165:function(t,e,n){(e=n(28)(!1)).push([t.i,"select[data-v-2a1e046a]{width:100%}.request-container[data-v-2a1e046a]{width:90%;margin-right:auto;margin-left:auto}.request-button[data-v-2a1e046a]{margin:55% 0 25%;width:200%}@media screen and (max-width:1024px){.modal-card[data-v-2a1e046a]{width:80%;margin:0 10% 10% 0}}@media screen and (min-width:1025px){.modal-card[data-v-2a1e046a]{width:80%;margin:0 10% 10%}}",""]),t.exports=e},166:function(t,e,n){var content=n(171);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("6759f5ab",content,!0,{sourceMap:!1})},167:function(t,e,n){"use strict";n.r(e);var o={components:{},data:function(){return{}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){var t=document.getElementsByClassName("first");if(1===t.length)t[0].getBoundingClientRect().y}},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll)}},l=(n(160),n(19)),component=Object(l.a)(o,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"hero home-background-image is-fullheight"},[n("div",{staticClass:"hero-body"},[n("div",{staticClass:"hero-container"},[n("h1",{staticClass:"subtitle application-name"},[t._v("\n          Transportation Expenses Application\n        ")])])]),t._v(" "),n("div",{staticClass:"hero is-fullheight"},[n("div",{staticClass:"hero-body"},[n("div",{staticClass:"hero-container"})])]),t._v(" "),n("div",{staticClass:"hero"},[n("div",{staticClass:"hero-body"},[n("div",{staticClass:"hero-container"},[n("section",{staticClass:"fadein"},[n("h2",[t._v("情報設計")]),t._v(" "),n("p",[t._v("何かしらの説明文。何かしらの説明文。何かしらの説明文。")])]),t._v(" "),n("section",{staticClass:"fadein"},[n("h2",[t._v("サイトマップ")]),t._v(" "),n("p",[t._v("何かしらの説明文。何かしらの説明文。何かしらの説明文。")])]),t._v(" "),n("section",{staticClass:"fadein"},[n("h2",[t._v("ワイヤーフレーム")]),t._v(" "),n("p",[t._v("何かしらの説明文。何かしらの説明文。何かしらの説明文。")])])])])])])])}],!1,null,"06eeb9bc",null);e.default=component.exports},168:function(t,e,n){"use strict";n.r(e);var o={components:{},data:function(){return{requestLists:[],requestDetail:[],defaultLists:[{id:1,requestDate:"2020/4/1",content:"面談",vehicle:"電車",startPoint:"横浜",relayPoint:"田端",goalPoint:"五反田",request:"自社",ways:"片道",price:460},{id:2,requestDate:"2020/4/3",content:"打ち合わせ",vehicle:"電車",startPoint:"東京",relayPoint:"",goalPoint:"品川",request:"自社",ways:"片道",price:200},{id:3,requestDate:"2020/4/5",content:"打ち合わせ",vehicle:"電車",startPoint:"東京",relayPoint:"",goalPoint:"千葉",request:"自社",ways:"片道",price:660},{id:4,requestDate:"2020/4/7",content:"会議",vehicle:"電車",startPoint:"横浜",relayPoint:"",goalPoint:"みなとみらい",request:"自社",ways:"片道",price:600}],isModalActive:!1}},mounted:function(){this.initialDisplayOfList()},methods:{initialDisplayOfList:function(){var t=JSON.parse(sessionStorage.getItem("requestData"));this.requestLists=t&&null!==t.length?t:this.defaultLists},showDetail:function(t){this.isModalActive=!0,this.requestDetail=this.requestLists.filter((function(e){return e.id===t}))},switchDisplayModal:function(){this.isModalActive=!this.isModalActive}}},l=(n(162),n(19)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"list-container"},[n("div",[n("table",{staticClass:"table is-bordered table is-striped is-narrow is-hoverable is-fullwidth"},[n("tbody",[n("th",[t._v("申請日時")]),t._v(" "),n("th",[t._v("申請内容")]),t._v(" "),t._l(t.requestLists,(function(e){return n("tr",{key:e.id},[n("td",[t._v(t._s(e.requestDate))]),t._v(" "),n("td",[n("button",{staticClass:"button detail-button",on:{click:function(n){return t.showDetail(e.id)}}},[t._v("\n              詳細\n            ")])])])}))],2)]),t._v(" "),n("div",{staticClass:"modal",class:{"is-active":t.isModalActive}},[n("div",{staticClass:"modal-background"}),t._v(" "),n("div",{staticClass:"modal-card"},[n("header",{staticClass:"modal-card-head"},[n("p",{staticClass:"modal-card-title"},[t._v("申請内容の詳細")]),t._v(" "),n("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:t.switchDisplayModal}})]),t._v(" "),n("section",{staticClass:"modal-card-body"},[t._v("\n          申請内容は下記のとおりです\n          "),t._l(t.requestDetail,(function(e){return n("ul",{key:e.id},[n("li",[t._v("日付 ："+t._s(e.requestDate))]),t._v(" "),n("li",[t._v("業務内容・行先："+t._s(e.content))]),t._v(" "),n("li",[t._v("乗り物 ："+t._s(e.vehicle))]),t._v(" "),n("li",[t._v("出発地点 ："+t._s(e.startPoint))]),t._v(" "),""!==e.relayPoint?n("li",[t._v("\n              中継地点 ："+t._s(e.relayPoint)+"\n            ")]):t._e(),t._v(" "),n("li",[t._v("到着地点 ："+t._s(e.goalPoint))]),t._v(" "),n("li",[t._v("請求先 ："+t._s(e.request))]),t._v(" "),n("li",[t._v("片道・往復 ："+t._s(e.ways))]),t._v(" "),n("li",[t._v("合計金額 ："+t._s(e.price)+"円")])])}))],2),t._v(" "),n("footer",{staticClass:"modal-card-foot"},[n("button",{staticClass:"button",on:{click:t.switchDisplayModal}},[t._v("戻る")])])])])])])}),[],!1,null,"9a70b526",null);e.default=component.exports},169:function(t,e,n){"use strict";n.r(e);var o={components:{},data:function(){return{selected:"交通費申請",menuLists:["交通費申請","申請一覧"],isModalActive:!1,requestDate:"",vehicle:"電車",startPoint:"",relayPoint:"",goalPoint:"",request:"自社",ways:"往復",price:0,content:"",isDisplayRelayPoint:!1,requestData:[]}},mounted:function(){},methods:{switchDisplayModal:function(){this.isModalActive=!this.isModalActive},refreshhDisplayRelayPoint:function(){this.isDisplayRelayPoint=!this.isDisplayRelayPoint},onClickApplyButton:function(){if(this.isModalActive=!1,""===this.content||""===this.requestDate||""===this.startPoint||this.isDisplayRelayPoint&&""===this.relayPoint||""===this.goalPoint||this.price<=0)this.$toast.error("未入力の項目があります").goAway(1300);else{var t=JSON.parse(sessionStorage.getItem("requestData"));t&&null!==t.length&&(this.requestData=t),this.requestData.push({id:Math.random(),requestDate:this.requestDate,vehicle:this.vehicle,startPoint:this.startPoint,relayPoint:this.relayPoint,goalPoint:this.goalPoint,request:this.request,ways:this.ways,price:this.price,content:this.content}),sessionStorage.setItem("requestData",JSON.stringify(this.requestData)),this.$toast.success("申請が完了しました").goAway(2e3)}}}},l=(n(164),n(19)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"request-container"},[n("div",[n("label",{staticClass:"label"},[t._v(" 日付")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.requestDate,expression:"requestDate"}],staticClass:"input",class:{"is-danger":""===t.requestDate},attrs:{type:"date"},domProps:{value:t.requestDate},on:{input:function(e){e.target.composing||(t.requestDate=e.target.value)}}}),t._v(" "),""===t.requestDate?n("span",{style:{color:"red"}},[t._v("日付を設定してください")]):t._e(),t._v(" "),n("label",{staticClass:"label"},[t._v("\n      業務内容・行先\n    ")]),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],staticClass:"textarea",class:{"is-danger":""===t.content},domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}}),t._v(" "),""===t.content?n("span",{style:{color:"red"}},[t._v("業務内容もしくは目的地を入力してください")]):t._e(),t._v(" "),n("label",{staticClass:"label"},[t._v("乗り物")]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.vehicle,expression:"vehicle"}],staticClass:"select",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.vehicle=e.target.multiple?n:n[0]}}},[n("option",[t._v("電車")]),t._v(" "),n("option",[t._v("バス")]),t._v(" "),n("option",[t._v("タクシー")]),t._v(" "),n("option",[t._v("新幹線")])]),t._v(" "),n("label",{staticClass:"label"},[t._v("\n      出発地点\n    ")]),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.startPoint,expression:"startPoint"}],staticClass:"textarea",class:{"is-danger":""===t.startPoint},domProps:{value:t.startPoint},on:{input:function(e){e.target.composing||(t.startPoint=e.target.value)}}}),t._v(" "),""===t.startPoint?n("span",{style:{color:"red"}},[t._v("出発地点を入力して下さい")]):t._e(),t._v(" "),n("div",{style:{marginTop:"10%"}},[n("button",{staticClass:"button is-primary",on:{click:t.refreshhDisplayRelayPoint}},[t._v("\n        "+t._s(t.isDisplayRelayPoint?"中継地点を削除する":"中継地点を追加する")+"\n      ")])]),t._v(" "),t.isDisplayRelayPoint?n("div",[n("label",{staticClass:"label"},[t._v("\n        中継地点\n      ")]),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.relayPoint,expression:"relayPoint"}],staticClass:"textarea",class:{"is-danger":""===t.relayPoint},domProps:{value:t.relayPoint},on:{input:function(e){e.target.composing||(t.relayPoint=e.target.value)}}}),t._v(" "),""===t.relayPoint?n("span",{style:{color:"red"}},[t._v("中継地点を入力して下さい")]):t._e()]):t._e(),t._v(" "),n("label",{staticClass:"label"},[t._v("\n      到着地点\n    ")]),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.goalPoint,expression:"goalPoint"}],staticClass:"textarea",class:{"is-danger":""===t.goalPoint},domProps:{value:t.goalPoint},on:{input:function(e){e.target.composing||(t.goalPoint=e.target.value)}}}),t._v(" "),""===t.goalPoint?n("span",{style:{color:"red"}},[t._v("到着地点を入力して下さい")]):t._e(),t._v(" "),n("label",{staticClass:"label"},[t._v("請求先")]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.request,expression:"request"}],staticClass:"select",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.request=e.target.multiple?n:n[0]}}},[n("option",[t._v("客先")]),t._v(" "),n("option",[t._v("自社")])]),t._v(" "),n("label",{staticClass:"label"},[t._v("\n      金額\n    ")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.price,expression:"price"}],staticClass:"input",class:{"is-danger":t.price<=0|""===t.price},attrs:{type:"number"},domProps:{value:t.price},on:{input:function(e){e.target.composing||(t.price=e.target.value)}}}),t._v(" "),t.price<=0||""===t.price?n("span",{style:{color:"red"}},[t._v("0 円以上で入力してください")]):t._e(),t._v(" "),n("div",{staticClass:"field is-grouped"},[n("p",{staticClass:"control"},[n("a",{staticClass:"button is-primary request-button",on:{click:t.switchDisplayModal}},[t._v("申請")])])]),t._v(" "),n("div",{staticClass:"modal",class:{"is-active":t.isModalActive}},[n("div",{staticClass:"modal-background"}),t._v(" "),n("div",{staticClass:"modal-card"},[n("header",{staticClass:"modal-card-head"},[n("p",{staticClass:"modal-card-title"},[t._v("申請確認")]),t._v(" "),n("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:t.switchDisplayModal}})]),t._v(" "),n("section",{staticClass:"modal-card-body"},[t._v("\n          下記内容で申請してもよろしいでしょうか？\n          "),n("li",[t._v("日付："+t._s(t.requestDate))]),t._v(" "),n("li",[t._v("業務内容・行先："+t._s(t.content))]),t._v(" "),n("li",[t._v("乗り物："+t._s(t.vehicle))]),t._v(" "),n("li",[t._v("出発地点："+t._s(t.startPoint))]),t._v(" "),n("li",[t._v("中継地点："+t._s(t.relayPoint))]),t._v(" "),n("li",[t._v("到着地点："+t._s(t.goalPoint))]),t._v(" "),n("li",[t._v("請求先："+t._s(t.request))]),t._v(" "),n("li",[t._v("片道・往復："+t._s(t.ways))]),t._v(" "),n("li",[t._v("金額："+t._s(t.price)+" 円")])]),t._v(" "),n("footer",{staticClass:"modal-card-foot"},[n("button",{staticClass:"button",on:{click:t.switchDisplayModal}},[t._v("戻る")]),t._v(" "),n("button",{staticClass:"button is-primary",on:{click:t.onClickApplyButton}},[t._v("\n            決定\n          ")])])])])])])}),[],!1,null,"2a1e046a",null);e.default=component.exports},170:function(t,e,n){"use strict";var o=n(166);n.n(o).a},171:function(t,e,n){var o=n(28),l=n(105),r=n(172);e=o(!1);var c=l(r);e.push([t.i,"label{margin-top:15%}.title{font-family:Quicksand,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle{font-weight:300;font-size:42px;color:#4457a8;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}div.control{margin:auto 3% auto 1%}@media screen and (min-width:1024px){div.control{margin:auto}.container{max-width:unset}.navbar-item.is-active span{font-weight:700}}.container-fixed{position:fixed}.navbar{background-color:rgba(90,127,182,.1)}.index-background{background-image:linear-gradient(rgba(193,196,201,.4),rgba(243,245,247,.795)),url("+c+");background-attachment:fixed;background-repeat:no-repeat;background-size:cover}.index-navbar-pinning,.index-navbar-unpinning{transform:translateY(10px);transition:all .5s}.index-navbar-pinned,.index-navbar-pinning,.index-navbar-unpinning{background-color:rgba(90,127,182,.63);background-attachment:fixed;background-repeat:no-repeat;background-size:cover}",""]),t.exports=e},172:function(t,e,n){t.exports=n.p+"img/e3ee06a.jpg"},173:function(t,e,n){"use strict";n.r(e);var o=n(167),l=n(169),r=n(168),c={components:{Home:o.default,Request:l.default,List:r.default},data:function(){return{selected:"Home",isShowSideMenu:!1,resultData:[]}},mounted:function(){window.addEventListener("scroll",this.handleNavBackgroundImage),this.switchFixedClass()},methods:{switchFixedClass:function(){var t=document.getElementsByClassName("container")[0];"Home"===this.selected?t.classList.add("container-fixed"):t.classList.remove("container-fixed")},refreshSelectedPage:function(){this.selected=event.target.innerText,"Home"===this.selected&&this.handleNavBackgroundImage(),this.switchFixedClass()},showSideMenu:function(){this.isShowSideMenu=!this.isShowSideMenu},handleNavBackgroundImage:function(){var t=this;if("Home"===this.selected){var e=document.getElementsByClassName("container")[0],n=window.pageYOffset;n<=100&&!e.classList.contains("index-navbar-unpinned")?(e.classList.add("index-navbar-unpinning"),window.setTimeout((function(){e.classList.remove("index-navbar-pinned"),e.classList.remove("index-navbar-unpinning"),e.classList.add("index-navbar-unpinned"),window.pageYOffset!==n&&t.handleNavBackgroundImage()}),400)):100<n&&!e.classList.contains("index-navbar-pinned")&&(e.classList.add("index-navbar-pinning"),window.setTimeout((function(){e.classList.remove("index-navbar-unpinned"),e.classList.remove("index-navbar-pinning"),e.classList.add("index-navbar-pinned"),window.pageYOffset!==n&&t.handleNavBackgroundImage()}),400))}}},beforeDestroy:function(){window.removeEventListener("scroll",this.handleNavBackgroundImage)}},d=(n(170),n(19)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"index-background"},[n("div",[n("nav",{staticClass:"navbar",attrs:{role:"navigation"}},[n("div",{staticClass:"container index-navbar-unpinned"},[n("div",{staticClass:"navbar-brand"},[t._m(0),t._v(" "),n("a",{staticClass:"navbar-burger",class:{"is-active":t.isShowSideMenu},attrs:{role:"button","aria-label":"menu","aria-expanded":"false"},on:{click:t.showSideMenu}},[n("span",{attrs:{"aria-hidden":"true"}}),t._v(" "),n("span",{attrs:{"aria-hidden":"true"}}),t._v(" "),n("span",{attrs:{"aria-hidden":"true"}})]),t._v(" "),t._m(1)]),t._v(" "),n("div",{staticClass:"navbar-menu",class:{"is-active":t.isShowSideMenu}},[n("div",{staticClass:"navbar-start"},[n("a",{staticClass:"navbar-item",class:{"is-active":"Home"===t.selected}},[n("span",{on:{click:t.refreshSelectedPage}},[t._v("Home")])]),t._v(" "),n("a",{staticClass:"navbar-item",class:{"is-active":"Request"===t.selected}},[n("span",{on:{click:t.refreshSelectedPage}},[t._v("Request")])]),t._v(" "),n("a",{staticClass:"navbar-item",class:{"is-active":"List"===t.selected}},[n("span",{on:{click:t.refreshSelectedPage}},[t._v("List")])])])])])]),t._v(" "),"Home"===t.selected?n("Home"):"Request"===t.selected?n("Request"):"List"===t.selected?n("List"):t._e()],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"navbar-item"},[e("img",{attrs:{src:"https://bulma.io/images/bulma-logo.png",width:"112",height:"28"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"control"},[e("div",{staticClass:"tags has-addons"},[e("span",{staticClass:"tag is-dark"},[this._v("作成中")]),this._v(" "),e("span",{staticClass:"tag is-info"},[this._v("1.0.0")])])])}],!1,null,null,null);e.default=component.exports}}]);