(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{159:function(t,e,l){var content=l(168);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(29).default)("2ba298a7",content,!0,{sourceMap:!1})},167:function(t,e,l){"use strict";var o=l(159);l.n(o).a},168:function(t,e,l){(e=l(28)(!1)).push([t.i,"select[data-v-753296f7]{width:100%}.request-container[data-v-753296f7]{width:90%;margin-right:auto;margin-left:auto}.request-button[data-v-753296f7]{margin:55% 0 25%;width:200%}@media screen and (max-width:1024px){.modal-card[data-v-753296f7]{width:80%;margin:0 10% 10% 0}}@media screen and (min-width:1025px){.modal-card[data-v-753296f7]{width:80%;margin:0 10% 10%}}",""]),t.exports=e},172:function(t,e,l){"use strict";l.r(e);var o={components:{},data:function(){return{selected:"交通費申請",menuLists:["交通費申請","申請一覧"],isModalActive:!1,requestDate:"",vehicle:"電車",startPoint:"",relayPoint:"",goalPoint:"",request:"自社",ways:"往復",price:0,content:"",isDisplayRelayPoint:!1,requestData:[]}},mounted:function(){},methods:{switchDisplayModal:function(){this.isModalActive=!this.isModalActive},refreshhDisplayRelayPoint:function(){this.isDisplayRelayPoint=!this.isDisplayRelayPoint},onClickApplyButton:function(){if(this.isModalActive=!1,""===this.content||""===this.requestDate||""===this.startPoint||this.isDisplayRelayPoint&&""===this.relayPoint||""===this.goalPoint||this.price<=0)this.$toast.error("未入力の項目があります").goAway(1300);else{var t=JSON.parse(sessionStorage.getItem("requestData"));t&&null!==t.length&&(this.requestData=t),this.requestData.push({id:Math.random(),requestDate:this.requestDate,vehicle:this.vehicle,startPoint:this.startPoint,relayPoint:this.relayPoint,goalPoint:this.goalPoint,request:this.request,ways:this.ways,price:this.price,content:this.content}),sessionStorage.setItem("requestData",JSON.stringify(this.requestData)),this.$toast.success("申請が完了しました").goAway(2e3)}}}},n=(l(167),l(19)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",{staticClass:"request-container"},[l("div",[l("label",{staticClass:"label"},[t._v("日付")]),t._v(" "),l("input",{directives:[{name:"model",rawName:"v-model",value:t.requestDate,expression:"requestDate"}],staticClass:"input",class:{"is-danger":""===t.requestDate},attrs:{type:"date"},domProps:{value:t.requestDate},on:{input:function(e){e.target.composing||(t.requestDate=e.target.value)}}}),t._v(" "),""===t.requestDate?l("span",{style:{color:"red"}},[t._v("日付を設定してください")]):t._e(),t._v(" "),l("label",{staticClass:"label"},[t._v("業務内容・行先")]),t._v(" "),l("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],staticClass:"textarea",class:{"is-danger":""===t.content},domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}}),t._v(" "),""===t.content?l("span",{style:{color:"red"}},[t._v("業務内容もしくは目的地を入力してください")]):t._e(),t._v(" "),l("label",{staticClass:"label"},[t._v("乗り物")]),t._v(" "),l("select",{directives:[{name:"model",rawName:"v-model",value:t.vehicle,expression:"vehicle"}],staticClass:"select",on:{change:function(e){var l=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.vehicle=e.target.multiple?l:l[0]}}},[l("option",[t._v("電車")]),t._v(" "),l("option",[t._v("バス")]),t._v(" "),l("option",[t._v("タクシー")]),t._v(" "),l("option",[t._v("新幹線")])]),t._v(" "),l("label",{staticClass:"label"},[t._v("出発地点")]),t._v(" "),l("textarea",{directives:[{name:"model",rawName:"v-model",value:t.startPoint,expression:"startPoint"}],staticClass:"textarea",class:{"is-danger":""===t.startPoint},domProps:{value:t.startPoint},on:{input:function(e){e.target.composing||(t.startPoint=e.target.value)}}}),t._v(" "),""===t.startPoint?l("span",{style:{color:"red"}},[t._v("出発地点を入力して下さい")]):t._e(),t._v(" "),l("div",{style:{marginTop:"10%"}},[l("button",{staticClass:"button is-primary",on:{click:t.refreshhDisplayRelayPoint}},[t._v("\n        "+t._s(t.isDisplayRelayPoint?"中継地点を削除する":"中継地点を追加する")+"\n      ")])]),t._v(" "),t.isDisplayRelayPoint?l("div",[l("label",{staticClass:"label"},[t._v("中継地点")]),t._v(" "),l("textarea",{directives:[{name:"model",rawName:"v-model",value:t.relayPoint,expression:"relayPoint"}],staticClass:"textarea",class:{"is-danger":""===t.relayPoint},domProps:{value:t.relayPoint},on:{input:function(e){e.target.composing||(t.relayPoint=e.target.value)}}}),t._v(" "),""===t.relayPoint?l("span",{style:{color:"red"}},[t._v("中継地点を入力して下さい")]):t._e()]):t._e(),t._v(" "),l("label",{staticClass:"label"},[t._v("到着地点")]),t._v(" "),l("textarea",{directives:[{name:"model",rawName:"v-model",value:t.goalPoint,expression:"goalPoint"}],staticClass:"textarea",class:{"is-danger":""===t.goalPoint},domProps:{value:t.goalPoint},on:{input:function(e){e.target.composing||(t.goalPoint=e.target.value)}}}),t._v(" "),""===t.goalPoint?l("span",{style:{color:"red"}},[t._v("到着地点を入力して下さい")]):t._e(),t._v(" "),l("label",{staticClass:"label"},[t._v("請求先")]),t._v(" "),l("select",{directives:[{name:"model",rawName:"v-model",value:t.request,expression:"request"}],staticClass:"select",on:{change:function(e){var l=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.request=e.target.multiple?l:l[0]}}},[l("option",[t._v("客先")]),t._v(" "),l("option",[t._v("自社")])]),t._v(" "),l("label",{staticClass:"label"},[t._v("金額")]),t._v(" "),l("input",{directives:[{name:"model",rawName:"v-model",value:t.price,expression:"price"}],staticClass:"input",class:{"is-danger":t.price<=0|""===t.price},attrs:{type:"number"},domProps:{value:t.price},on:{input:function(e){e.target.composing||(t.price=e.target.value)}}}),t._v(" "),t.price<=0||""===t.price?l("span",{style:{color:"red"}},[t._v("0 円以上で入力してください")]):t._e(),t._v(" "),l("div",{staticClass:"field is-grouped"},[l("p",{staticClass:"control"},[l("a",{staticClass:"button is-primary request-button",on:{click:t.switchDisplayModal}},[t._v("申請")])])]),t._v(" "),l("div",{staticClass:"modal",class:{"is-active":t.isModalActive}},[l("div",{staticClass:"modal-background"}),t._v(" "),l("div",{staticClass:"modal-card"},[l("header",{staticClass:"modal-card-head"},[l("p",{staticClass:"modal-card-title"},[t._v("申請確認")]),t._v(" "),l("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:t.switchDisplayModal}})]),t._v(" "),l("section",{staticClass:"modal-card-body"},[t._v("\n          下記内容で申請してもよろしいでしょうか？\n          "),l("li",[t._v("日付："+t._s(t.requestDate))]),t._v(" "),l("li",[t._v("業務内容・行先："+t._s(t.content))]),t._v(" "),l("li",[t._v("乗り物："+t._s(t.vehicle))]),t._v(" "),l("li",[t._v("出発地点："+t._s(t.startPoint))]),t._v(" "),l("li",[t._v("中継地点："+t._s(t.relayPoint))]),t._v(" "),l("li",[t._v("到着地点："+t._s(t.goalPoint))]),t._v(" "),l("li",[t._v("請求先："+t._s(t.request))]),t._v(" "),l("li",[t._v("片道・往復："+t._s(t.ways))]),t._v(" "),l("li",[t._v("金額："+t._s(t.price)+" 円")])]),t._v(" "),l("footer",{staticClass:"modal-card-foot"},[l("button",{staticClass:"button",on:{click:t.switchDisplayModal}},[t._v("戻る")]),t._v(" "),l("button",{staticClass:"button is-primary",on:{click:t.onClickApplyButton}},[t._v("決定")])])])])])])}),[],!1,null,"753296f7",null);e.default=component.exports}}]);