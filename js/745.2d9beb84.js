"use strict";(self["webpackChunkweek7"]=self["webpackChunkweek7"]||[]).push([[745],{2745:function(t,r,e){e.r(r),e.d(r,{default:function(){return h}});var u=e(6252),o=e(3577);const c=(0,u._)("h1",null,"單一產品",-1),n={class:"container"},s=["src"];function i(t,r,e,i,a,d){return(0,u.wg)(),(0,u.iD)(u.HY,null,[c,(0,u._)("div",n,[(0,u.Uk)((0,o.zw)(a.product)+" ",1),(0,u._)("img",{src:a.product.imageUrl,alt:""},null,8,s)])],64)}var a={data(){return{product:{}}},methods:{getProduct(){console.log(this.$route);const{id:t}=this.$route.params;this.$http(`https://vue3-course-api.hexschool.io/v2/api/yuling202202/product/${t}`).then((t=>{this.product=t.data.product}))}},mounted(){this.getProduct()}},d=e(3744);const l=(0,d.Z)(a,[["render",i]]);var h=l}}]);
//# sourceMappingURL=745.2d9beb84.js.map