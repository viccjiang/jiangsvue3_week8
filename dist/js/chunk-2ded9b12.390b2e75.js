(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2ded9b12"],{b0c0:function(t,e,c){var n=c("83ab"),r=c("9bf2").f,i=Function.prototype,l=i.toString,o=/^\s*function ([^ (]*)/,b="name";n&&!(b in i)&&r(i,b,{configurable:!0,get:function(){try{return l.call(this).match(o)[1]}catch(t){return""}}})},fd5d:function(t,e,c){"use strict";c.r(e);c("b0c0");var n=c("7a23"),r={class:"container"},i={class:"mb-5 row justify-content-center"},l=Object(n["i"])("h3",{class:"bg-secondary text-light my-5 border p-3 "},"Step3.確認付款",-1),o={class:"table align-middle col-md-6"},b=Object(n["i"])("thead",null,[Object(n["i"])("th",null,"品名"),Object(n["i"])("th",null,"數量"),Object(n["i"])("th",null,"單價")],-1),a={class:"text-end"},d=Object(n["i"])("td",{colspan:"2",class:"text-end"},"總計",-1),u={class:"text-end"},s={class:"table col-md-6"},O=Object(n["i"])("th",{width:"100"},"Email",-1),j=Object(n["i"])("th",null,"姓名",-1),h=Object(n["i"])("th",null,"收件人電話",-1),p=Object(n["i"])("th",null,"收件人地址",-1),f=Object(n["i"])("th",null,"付款狀態",-1),g={key:0},y={key:1,class:"text-success"},v={class:"checkBtn d-flex justify-content-between"},m=Object(n["h"])("繼續購物"),k={key:0},w=Object(n["i"])("button",{class:"btn btn-danger"},"確認付款去",-1);function G(t,e,c,G,x,I){var _=Object(n["D"])("Loading"),L=Object(n["D"])("router-link");return Object(n["u"])(),Object(n["e"])(n["a"],null,[Object(n["i"])(_,{active:x.isLoading},null,8,["active"]),Object(n["i"])("div",r,[Object(n["i"])("div",i,[l,Object(n["i"])("form",{class:"col",onSubmit:e[1]||(e[1]=Object(n["Q"])((function(){return I.payOrder&&I.payOrder.apply(I,arguments)}),["prevent"]))},[Object(n["i"])("table",o,[b,Object(n["i"])("tbody",null,[(Object(n["u"])(!0),Object(n["e"])(n["a"],null,Object(n["B"])(x.order.products,(function(t){return Object(n["u"])(),Object(n["e"])("tr",{key:t.id},[Object(n["i"])("td",null,Object(n["G"])(t.product.title),1),Object(n["i"])("td",null,Object(n["G"])(t.qty)+"/"+Object(n["G"])(t.product.unit),1),Object(n["i"])("td",a,Object(n["G"])(t.final_total),1)])})),128))]),Object(n["i"])("tfoot",null,[Object(n["i"])("tr",null,[d,Object(n["i"])("td",u,Object(n["G"])(x.order.total),1)])])]),Object(n["i"])("table",s,[Object(n["i"])("tbody",null,[Object(n["i"])("tr",null,[O,Object(n["i"])("td",null,Object(n["G"])(x.order.user.email),1)]),Object(n["i"])("tr",null,[j,Object(n["i"])("td",null,Object(n["G"])(x.order.user.name),1)]),Object(n["i"])("tr",null,[h,Object(n["i"])("td",null,Object(n["G"])(x.order.user.tel),1)]),Object(n["i"])("tr",null,[p,Object(n["i"])("td",null,Object(n["G"])(x.order.user.address),1)]),Object(n["i"])("tr",null,[f,Object(n["i"])("td",null,[x.order.is_paid?(Object(n["u"])(),Object(n["e"])("span",y,"付款完成")):(Object(n["u"])(),Object(n["e"])("span",g,"尚未付款"))])])])]),Object(n["i"])("div",v,[Object(n["i"])(L,{class:"btn btn-outline-secondary",to:"/products"},{default:Object(n["O"])((function(){return[m]})),_:1}),!1===x.order.is_paid?(Object(n["u"])(),Object(n["e"])("div",k,[w])):Object(n["f"])("",!0)])],32)])])],64)}c("99af");var x={data:function(){return{order:{user:{}},orderId:"",isLoading:!1}},methods:{getOrder:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("jiangsvue3","/order/").concat(this.orderId);this.$http.get(e).then((function(e){e.data.success&&(t.order=e.data.order,console.log(t.order))}))},payOrder:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("jiangsvue3","/pay/").concat(this.orderId);this.$http.post(e).then((function(e){console.log(e),e.data.success&&t.getOrder()}))}},created:function(){this.orderId=this.$route.params.orderId,console.log(this.orderId),this.getOrder()}};x.render=G;e["default"]=x}}]);
//# sourceMappingURL=chunk-2ded9b12.390b2e75.js.map