"use strict";(self["webpackChunkweek7"]=self["webpackChunkweek7"]||[]).push([[210],{9210:function(s,e,t){t.r(e),t.d(e,{default:function(){return _}});var n=t(6252),o=t(9963);const r={class:"container mt-5"},a={class:"col-md-6"},l=(0,n._)("h1",{class:"h3 mb-3 font-weight-normal"},"請先登入",-1),i={class:"mb-2"},u=(0,n._)("label",{for:"inputEmail",class:"sr-only"},"Email address",-1),c={class:"mb-2"},d=(0,n._)("label",{for:"inputPassword",class:"sr-only"},"Password",-1),p={class:"text-end mt-4"},m=(0,n._)("button",{class:"btn btn-lg btn-primary btn-block",type:"submit"}," 登入 ",-1),b=(0,n.Uk)(" 回前臺 ");function h(s,e,t,h,w,f){const k=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",r,[(0,n._)("form",{class:"row justify-content-center",onSubmit:e[2]||(e[2]=(0,o.iM)(((...s)=>f.signIn&&f.signIn(...s)),["prevent"]))},[(0,n._)("div",a,[l,(0,n._)("div",i,[u,(0,n.wy)((0,n._)("input",{type:"email",id:"inputEmail",class:"form-control",placeholder:"Email address","onUpdate:modelValue":e[0]||(e[0]=s=>w.user.username=s),required:"",autofocus:""},null,512),[[o.nr,w.user.username]])]),(0,n._)("div",c,[d,(0,n.wy)((0,n._)("input",{type:"password",id:"inputPassword",class:"form-control","onUpdate:modelValue":e[1]||(e[1]=s=>w.user.password=s),placeholder:"Password",required:""},null,512),[[o.nr,w.user.password]])]),(0,n._)("div",p,[m,(0,n.Wm)(k,{class:"btn btn-lg btn-secondary btn-block",to:"/",type:"button"},{default:(0,n.w5)((()=>[b])),_:1})])])],32)])}var w={data(){return{user:{}}},methods:{signIn(){this.$http.post("https://vue3-course-api.hexschool.io/v2/admin/signin",this.user).then((s=>{const{token:e,expired:t}=s.data;console.log(e,t),document.cookie=`hexToken=${e};expires=${new Date(t)};`,this.$router.push("/admin")})).catch((s=>{console.log(s.data.message)}))}}},f=t(3744);const k=(0,f.Z)(w,[["render",h]]);var _=k}}]);
//# sourceMappingURL=210.e37fafdc.js.map