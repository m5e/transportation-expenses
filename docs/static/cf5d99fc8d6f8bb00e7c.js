(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{158:function(t,e,l){var content=l(163);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(29).default)("bfb79866",content,!0,{sourceMap:!1})},162:function(t,e,l){"use strict";var o=l(158);l.n(o).a},163:function(t,e,l){(e=l(28)(!1)).push([t.i,".list-container[data-v-5f13234c]{width:90%;margin-right:auto;margin-left:auto;padding-top:15%;padding-bottom:100%}table[data-v-5f13234c]{-moz-text-align-last:center;text-align-last:center}table.is-striped.is-narrow.is-hoverable.is-fullwidth tbody tr[data-v-5f13234c]:hover{background-color:rgba(204,220,245,.897)}.detail-button[data-v-5f13234c]{width:60%}",""]),t.exports=e},168:function(t,e,l){"use strict";l.r(e);var o={components:{},data:function(){return{requestLists:[],requestDetail:[],defaultLists:[{id:1,requestDate:"2020/4/1",content:"面談",vehicle:"電車",startPoint:"横浜",relayPoint:"田端",goalPoint:"五反田",request:"自社",ways:"片道",price:460},{id:2,requestDate:"2020/4/3",content:"打ち合わせ",vehicle:"電車",startPoint:"東京",relayPoint:"",goalPoint:"品川",request:"自社",ways:"片道",price:200},{id:3,requestDate:"2020/4/5",content:"打ち合わせ",vehicle:"電車",startPoint:"東京",relayPoint:"",goalPoint:"千葉",request:"自社",ways:"片道",price:660},{id:4,requestDate:"2020/4/7",content:"会議",vehicle:"電車",startPoint:"横浜",relayPoint:"",goalPoint:"みなとみらい",request:"自社",ways:"片道",price:600}],isModalActive:!1}},mounted:function(){this.initialDisplayOfList()},methods:{initialDisplayOfList:function(){var t=JSON.parse(sessionStorage.getItem("requestData"));this.requestLists=t&&null!==t.length?t:this.defaultLists},showDetail:function(t){this.isModalActive=!0,this.requestDetail=this.requestLists.filter((function(e){return e.id===t}))},switchDisplayModal:function(){this.isModalActive=!this.isModalActive}}},n=(l(162),l(19)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",{staticClass:"list-container"},[l("div",[l("table",{staticClass:"table is-bordered table is-striped is-narrow is-hoverable is-fullwidth"},[l("tbody",[l("th",[t._v("申請日時")]),t._v(" "),l("th",[t._v("申請内容")]),t._v(" "),t._l(t.requestLists,(function(e){return l("tr",{key:e.id},[l("td",[t._v(t._s(e.requestDate))]),t._v(" "),l("td",[l("button",{staticClass:"button detail-button",on:{click:function(l){return t.showDetail(e.id)}}},[t._v("\n              詳細\n            ")])])])}))],2)]),t._v(" "),l("div",{staticClass:"modal",class:{"is-active":t.isModalActive}},[l("div",{staticClass:"modal-background"}),t._v(" "),l("div",{staticClass:"modal-card"},[l("header",{staticClass:"modal-card-head"},[l("p",{staticClass:"modal-card-title"},[t._v("申請内容の詳細")]),t._v(" "),l("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:t.switchDisplayModal}})]),t._v(" "),l("section",{staticClass:"modal-card-body"},[t._v("\n          申請内容は下記のとおりです\n          "),t._l(t.requestDetail,(function(e){return l("ul",{key:e.id},[l("li",[t._v("日付 ："+t._s(e.requestDate))]),t._v(" "),l("li",[t._v("業務内容・行先："+t._s(e.content))]),t._v(" "),l("li",[t._v("乗り物 ："+t._s(e.vehicle))]),t._v(" "),l("li",[t._v("出発地点 ："+t._s(e.startPoint))]),t._v(" "),""!==e.relayPoint?l("li",[t._v("\n              中継地点 ："+t._s(e.relayPoint)+"\n            ")]):t._e(),t._v(" "),l("li",[t._v("到着地点 ："+t._s(e.goalPoint))]),t._v(" "),l("li",[t._v("請求先 ："+t._s(e.request))]),t._v(" "),l("li",[t._v("片道・往復 ："+t._s(e.ways))]),t._v(" "),l("li",[t._v("合計金額 ："+t._s(e.price)+"円")])])}))],2),t._v(" "),l("footer",{staticClass:"modal-card-foot"},[l("button",{staticClass:"button",on:{click:t.switchDisplayModal}},[t._v("戻る")])])])])])])}),[],!1,null,"5f13234c",null);e.default=component.exports}}]);