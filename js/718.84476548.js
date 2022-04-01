"use strict";(self["webpackChunkweek7"]=self["webpackChunkweek7"]||[]).push([[718],{2828:function(t,e,a){a.d(e,{Z:function(){return w}});var i=a(6252),s=a(3577),n=a(9963);const o={class:"d-flex justify-content-center align-items-center","aria-label":"Page navigation example"},l={class:"pagination"},r=(0,i._)("span",{"aria-hidden":"true"},"«",-1),d=[r],p=["onClick"],c=(0,i._)("span",{"aria-hidden":"true"},"»",-1),u=[c];function h(t,e,a,r,c,h){return(0,i.wg)(),(0,i.iD)("nav",o,[(0,i._)("ul",l,[(0,i._)("li",{class:(0,s.C_)(["page-item",{disabled:!a.pages.has_pre}])},[(0,i._)("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:e[0]||(e[0]=(0,n.iM)((t=>h.updatePage(a.pages.current_page-1)),["prevent"]))},d)],2),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(a.pages.total_pages,(t=>((0,i.wg)(),(0,i.iD)("li",{class:(0,s.C_)(["page-item",{active:t===a.pages.current_page}]),key:t+"page"},[(0,i._)("a",{class:"page-link",href:"#",onClick:(0,n.iM)((e=>h.updatePage(t)),["prevent"])},(0,s.zw)(t),9,p)],2)))),128)),(0,i._)("li",{class:(0,s.C_)(["page-item",{disabled:!a.pages.has_next}])},[(0,i._)("a",{class:"page-link",href:"#","aria-label":"Next",onClick:e[1]||(e[1]=(0,n.iM)((t=>h.updatePage(a.pages.current_page+1)),["prevent"]))},u)],2)])])}var g={props:["pages"],methods:{updatePage(t){this.$emit("emit-pages",t)}}},_=a(3744);const m=(0,_.Z)(g,[["render",h]]);var w=m},5718:function(t,e,a){a.r(e),a.d(e,{default:function(){return x}});var i=a(6252),s=a(3577);const n={id:"app"},o={class:"container"},l=(0,i._)("h2",{class:"text-start mt-4"},"訂單列表",-1),r={class:"text-end mt-4"},d={class:"table mt-4"},p=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th",{width:"200"},"購買時間"),(0,i._)("th",null,"E-mail"),(0,i._)("th",{width:"200"},"購買款項"),(0,i._)("th",{width:"200"},"應付金額"),(0,i._)("th",{width:"150"},"是否啟用"),(0,i._)("th",{width:"150"},"編輯")])],-1),c={class:"text-end"},u={class:"text-end"},h={key:0,class:"text-success"},g={key:1},_={class:"btn-group"},m=["onClick"],w=["onClick"];function b(t,e,a,b,v,k){const P=(0,i.up)("adminpagination");return(0,i.wg)(),(0,i.iD)("div",n,[(0,i._)("div",o,[l,(0,i._)("div",r,[(0,i._)("button",{class:"btn btn-primary",type:"button",onClick:e[0]||(e[0]=t=>k.openModal("isNew"))}," 建立新的產品 ")]),(0,i._)("table",d,[p,(0,i._)("tbody",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(v.orders,(t=>((0,i.wg)(),(0,i.iD)("tr",{key:t.id},[(0,i._)("td",null,(0,s.zw)(t.create_at),1),(0,i._)("td",null,(0,s.zw)(t.user.email),1),(0,i._)("td",c,(0,s.zw)(t.origin_price),1),(0,i._)("td",u,(0,s.zw)(t.price),1),(0,i._)("td",null,[t.is_enabled?((0,i.wg)(),(0,i.iD)("span",h,"啟用")):((0,i.wg)(),(0,i.iD)("span",g,"未啟用"))]),(0,i._)("td",null,[(0,i._)("div",_,[(0,i._)("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:e=>k.openModal("edit",t)}," 編輯 ",8,m),(0,i._)("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:e=>k.openModal("delete",t)}," 刪除 ",8,w)])])])))),128))])]),(0,i.Wm)(P,{pages:v.pagination,onEmitPages:k.getOrders},null,8,["pages","onEmitPages"])])])}var v=a(2828);const k={},P={};var y={components:{adminpagination:v.Z},data(){return{orders:[],tempProduct:{imagesUrl:[]},isNew:!1,pagination:{}}},methods:{getOrders(t=1){const e="https://vue3-course-api.hexschool.io/v2/api/yuling202202/admin/orders/?page=2";this.$http.get(e).then((t=>{this.orders=t.data.orders,console.log(Object.values(this.orders)),this.adminpagination=t.data.adminpagination}))},openModal(t,e){console.log(t,e),"isNew"===t?(this.tempProduct={imagesUrl:[]},k.show(),this.isNew=!0):"edit"===t?(this.tempProduct={...e},k.show(),this.isNew=!1):"delete"===t&&(P.show(),this.tempProduct={...e})},updateProduct(){let t="https://vue3-course-api.hexschool.io/v2/api/yuling202202/admin/product",e="post";this.isNew||(t=`https://vue3-course-api.hexschool.io/v2/api/yuling202202/admin/product/${this.tempProduct.id}`,e="put"),this.$http[e](t,{data:this.tempProduct}).then((t=>{console.log(t),this.getProducts(),k.hide()}))},delProduct(){const t=`https://vue3-course-api.hexschool.io/v2/api/yuling202202/admin/product/${this.tempProduct.id}`;this.$http.delete(t).then((t=>{console.log(t),this.getProducts(),P.hide()}))}},mounted(){this.getOrders()}},f=a(3744);const C=(0,f.Z)(y,[["render",b]]);var x=C}}]);
//# sourceMappingURL=718.84476548.js.map