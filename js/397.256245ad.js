"use strict";(self["webpackChunkweek7"]=self["webpackChunkweek7"]||[]).push([[397],{1530:function(t,e,a){function s(t){return{all:t=t||new Map,on:function(e,a){var s=t.get(e);s?s.push(a):t.set(e,[a])},off:function(e,a){var s=t.get(e);s&&(a?s.splice(s.indexOf(a)>>>0,1):t.set(e,[]))},emit:function(e,a){var s=t.get(e);s&&s.slice().map((function(t){t(a)})),(s=t.get("*"))&&s.slice().map((function(t){t(e,a)}))}}}a.d(e,{Z:function(){return l}});const i=s();var l=i},397:function(t,e,a){a.r(e),a.d(e,{default:function(){return X}});var s=a(6252),i=a(3577),l=a(9963);const n={class:"about"},d={class:"container"},o={class:"row justify-content-center"},c={class:"cols"},r={class:"table align-middle"},u=(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",null,"圖片"),(0,s._)("th",null,"商品名稱"),(0,s._)("th",null,"價格"),(0,s._)("th")])],-1),p={style:{width:"200px"}},h={key:0,class:"h5"},g={key:1},_={class:"h6"},m={class:"h5"},b={class:"btn-group btn-group-sm"},v=["onClick","disabled"],y=["onClick","disabled"],w={class:"spinner-border spinner-border-sm"},k=(0,s.Uk)(" 加到購物車 "),x={class:"text-end"},C=(0,s._)("div",null,null,-1),f={class:"table align-middle"},I=(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th"),(0,s._)("th",null,"品名"),(0,s._)("th",{style:{width:"150px"}},"數量/單位"),(0,s._)("th",null,"單價")])],-1),D=["onClick"],$={key:0,class:"text-success"},L={key:1,class:"text-danger"},z={class:"input-group input-group-sm"},q={class:"input-group mb-3"},M=["onUpdate:modelValue","onChange","disabled"],U=["value"],P={class:"input-group-text",id:"basic-addon2"},A={class:"text-end"},H={class:"text-start"},K={key:0},Y=(0,s._)("small",{class:"text-success"},"折扣價：",-1),Z=(0,s.Uk)(" 50 "),j=[Y,Z],O={key:1},T=(0,s._)("small",{class:"text-success"},null,-1),V=[T],F=(0,s._)("td",{colspan:"3",class:"text-end"},"總計",-1),B={class:"text-end"},E=(0,s._)("tr",null,[(0,s._)("td",{colspan:"3",class:"text-end text-success"},"折扣價"),(0,s._)("td",{class:"text-end text-success"},"0")],-1),G=(0,s._)("td",{colspan:"3",class:"text-end text-success"},"結帳金額",-1),J={class:"text-end text-success"};function N(t,e,a,Y,Z,T){return(0,s.wg)(),(0,s.iD)("div",n,[(0,s._)("div",d,[(0,s._)("div",o,[(0,s._)("div",c,[(0,s._)("table",r,[u,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(Z.products,(t=>((0,s.wg)(),(0,s.iD)("tr",{key:t.id},[(0,s._)("td",p,[(0,s._)("div",{style:(0,i.j5)([{backgroundImage:`url(${t.imageUrl})`},{height:"100px","background-size":"cover","background-position":"center"}])},null,4)]),(0,s._)("td",null,(0,i.zw)(t.title),1),(0,s._)("td",null,[t.price===t.origin_price?((0,s.wg)(),(0,s.iD)("div",h,(0,i.zw)(t.price)+" 元 ",1)):((0,s.wg)(),(0,s.iD)("div",g,[(0,s._)("del",_,"原價 "+(0,i.zw)(t.origin_price)+" 元",1),(0,s._)("div",m,"現在只要 "+(0,i.zw)(t.price)+" 元",1)]))]),(0,s._)("td",null,[(0,s._)("div",b,[(0,s._)("button",{type:"button",class:"btn btn-outline-secondary",onClick:e=>T.openProductModal(t.id),disabled:Z.isLoadingItem===t.id}," 查看更多 ",8,v),(0,s._)("button",{type:"button",class:"btn btn-outline-danger",onClick:e=>T.addToCart(t.id),disabled:Z.isLoadingItem===t.id},[(0,s.wy)((0,s._)("span",w,null,512),[[l.F8,Z.isLoadingItem===t.id]]),k],8,y)])])])))),128))])])])]),(0,s._)("div",x,[(0,s._)("button",{class:"btn btn-outline-danger",type:"button",onClick:e[0]||(e[0]=(...t)=>T.deleteAllCarts&&T.deleteAllCarts(...t))}," 清空購物車 ")]),C,(0,s._)("table",f,[I,(0,s._)("tbody",null,[Z.cartData.carts?((0,s.wg)(!0),(0,s.iD)(s.HY,{key:0},(0,s.Ko)(Z.cartData.carts,(t=>((0,s.wg)(),(0,s.iD)("tr",{key:t.id},[(0,s._)("td",null,[(0,s._)("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:e=>T.removeCartItem(t.id)}," x ",8,D)]),(0,s._)("td",null,[(0,s.Uk)((0,i.zw)(t.product.title)+" ",1),t.total>2e3?((0,s.wg)(),(0,s.iD)("div",$," 已套用優惠券 ")):((0,s.wg)(),(0,s.iD)("div",L,"未套用優惠券"))]),(0,s._)("td",null,[(0,s._)("div",z,[(0,s._)("div",q,[(0,s.wy)((0,s._)("select",{id:"",class:"form-select","onUpdate:modelValue":e=>t.qty=e,onChange:e=>T.updateCartItem(t),disabled:Z.isLoadingItem===t.id},[((0,s.wg)(),(0,s.iD)(s.HY,null,(0,s.Ko)(20,(e=>(0,s._)("option",{value:e,key:`${e}-${t.id}`},(0,i.zw)(e),9,U))),64))],40,M),[[l.bM,t.qty]]),(0,s._)("span",P,(0,i.zw)(t.product.unit),1)])])]),(0,s._)("td",A,[(0,s._)("div",H,(0,i.zw)(t.product.price),1),t.total>2e3?((0,s.wg)(),(0,s.iD)("span",K,j)):((0,s.wg)(),(0,s.iD)("span",O,V))])])))),128)):(0,s.kq)("",!0)]),(0,s._)("tfoot",null,[(0,s._)("tr",null,[F,(0,s._)("td",B,(0,i.zw)(Z.cartData.total),1)]),E,(0,s._)("tr",null,[G,(0,s._)("td",J,"$ "+(0,i.zw)(Z.cartData.final_total),1)])])])])])}var Q=a(1530),R={data(){return{cartData:{},products:[],productId:"",isLoadingItem:"",form:{user:{name:"",email:"",tel:"",address:""},message:""},cart:{}}},methods:{getProducts(){this.$http.get("https://vue3-course-api.hexschool.io/v2/api/yuling202202/products/all").then((t=>{this.products=t.data.products})).catch((t=>{alert(t.data.message)}))},openProductModal(t){this.productId=t,this.$refs.productModal.openModal()},deleteAllCarts(){this.$http.delete("https://vue3-course-api.hexschool.io/v2/api/yuling202202/carts").then((t=>{alert(t.data.message),this.getCart()})).catch((t=>{alert(t.data.message)}))},getCart(){this.$http.get("https://vue3-course-api.hexschool.io/v2/api/yuling202202/cart").then((t=>{this.cartData=t.data.data,this.isLoadingItem=""})).catch((t=>{alert(t.data.message)}))},addToCart(t,e=1){const a={product_id:t,qty:e};this.isLoadingItem=t,this.$http.post("https://vue3-course-api.hexschool.io/v2/api/yuling202202/cart",{data:a}).then((t=>{Q.Z.emit("get-cart"),this.getCart(),this.isLoadingItem=""})).catch((t=>{alert(t.data.message)}))},removeCartItem(t){this.isLoadingItem=t,this.$http.delete(`https://vue3-course-api.hexschool.io/v2/api/yuling202202/cart/${t}`).then((t=>{this.getCart(),this.isLoadingItem=""})).catch((t=>{alert(t.data.message)}))},updateCartItem(t){const e={product_id:t.id,qty:t.qty};this.isLoadingItem=t.id,this.$http.put(`https://vue3-course-api.hexschool.io/v2/api/yuling202202/cart/${t.id}`,{data:e}).then((t=>{this.getCart(),this.isLoadingItem=""})).catch((t=>{alert(t.data.message)}))},createOrder(){const t=this.form;this.$http.post("https://vue3-course-api.hexschool.io/v2/api/yuling202202/order",{data:t}).then((t=>{alert(t.data.message),this.getCart(),console.log(t)})).catch((t=>{alert(t.data.message)}))}},mounted(){this.getProducts(),this.getCart()}},S=a(3744);const W=(0,S.Z)(R,[["render",N]]);var X=W}}]);
//# sourceMappingURL=397.256245ad.js.map