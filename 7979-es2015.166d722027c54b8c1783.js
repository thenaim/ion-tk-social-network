(self.webpackChunkion_tk_social_network=self.webpackChunkion_tk_social_network||[]).push([[7979],{77979:function(e,t,o){"use strict";o.r(t),o.d(t,{RegisterPageModule:function(){return p}});var r=o(61116),n=o(31041),i=o(74249),s=o(75425),a=o(39238),l=o(33316),g=o(85649);const m=[{path:"",component:(()=>{class e{constructor(){this.register=new n.cw({firstName:new n.NI("",[n.kI.required,n.kI.maxLength(150)]),lastName:new n.NI("",[n.kI.required,n.kI.maxLength(150)]),email:new n.NI("",[n.kI.required,n.kI.email]),password:new n.NI("",[n.kI.required,n.kI.minLength(6),n.kI.maxLength(150)]),passwordConfirm:new n.NI("",[n.kI.required,n.kI.minLength(6),n.kI.maxLength(150)])},{validators:this.passwordConfirmMatchValidator})}onRegister(){this.register.valid&&console.log(this.register.value)}ngOnInit(){}passwordConfirmMatchValidator(e){const t=e.get("password"),o=e.get("passwordConfirm");o.hasError("required")||o.hasError("minlength")||o.setErrors(t.value!==o.value?{mismatch:!0}:null)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.Xpm({type:e,selectors:[["app-register"]],decls:36,vars:6,consts:[[1,"ion-no-border"],["slot","start"],["defaultHref","/auth/login",3,"text"],[1,"auth-page",3,"fullscreen"],["size-md","6","size-lg","5","size-xs","12",1,"ion-text-center"],[3,"formGroup","ngSubmit"],[1,"logo"],["src","./assets/logo/TK_DEFAULT_LOGO.png","width","96px"],["color","light",1,"auth-card","ion-margin"],["color","light"],["type","text","placeholder","First name","formControlName","firstName"],["type","text","placeholder","Last name","formControlName","lastName"],["type","email","placeholder","Email","formControlName","email"],["color","light",1,"ion-no-inner-padding-end"],["type","password","placeholder","Password","formControlName","password"],["type","password","placeholder","Password (Confirm)","formControlName","passwordConfirm"],["expand","block","type","submit",1,"ion-margin-start","ion-margin-end","ion-margin-bottom",3,"disabled"],[1,"ion-margin"],["href","http://"]],template:function(e,t){1&e&&(l.TgZ(0,"ion-header",0),l.TgZ(1,"ion-toolbar"),l.TgZ(2,"ion-buttons",1),l._UZ(3,"ion-back-button",2),l.ALo(4,"translate"),l.qZA(),l.TgZ(5,"ion-title"),l._uU(6,"register"),l.qZA(),l.qZA(),l.qZA(),l.TgZ(7,"ion-content",3),l.TgZ(8,"ion-grid"),l.TgZ(9,"ion-row"),l.TgZ(10,"ion-col",4),l.TgZ(11,"form",5),l.NdJ("ngSubmit",function(){return t.onRegister()}),l.TgZ(12,"div",6),l._UZ(13,"img",7),l.qZA(),l.TgZ(14,"ion-card",8),l.TgZ(15,"ion-item",9),l._UZ(16,"ion-input",10),l.qZA(),l.TgZ(17,"ion-item",9),l._UZ(18,"ion-input",11),l.qZA(),l.TgZ(19,"ion-item",9),l._UZ(20,"ion-input",12),l.qZA(),l.TgZ(21,"ion-item",13),l._UZ(22,"ion-input",14),l.qZA(),l.TgZ(23,"ion-item",13),l._UZ(24,"ion-input",15),l.qZA(),l.qZA(),l.TgZ(25,"ion-button",16),l._uU(26," Sign Up "),l.qZA(),l._UZ(27,"span",17),l.qZA(),l.TgZ(28,"p",17),l.TgZ(29,"ion-text"),l._uU(30," By pressing Sign Up, you agree to the service's "),l.TgZ(31,"a",18),l._uU(32,"Terms of Service"),l.qZA(),l._uU(33," and "),l.TgZ(34,"a",18),l._uU(35,"Privacy Policy"),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA()),2&e&&(l.xp6(3),l.Q6J("text",l.lcZ(4,4,"backButtonTitle")),l.xp6(4),l.Q6J("fullscreen",!0),l.xp6(4),l.Q6J("formGroup",t.register),l.xp6(14),l.Q6J("disabled",!t.register.valid))},directives:[i.Gu,i.sr,i.Sm,i.oU,i.cs,i.wd,i.W2,i.jY,i.Nd,i.wI,n._Y,n.JL,n.sg,i.PM,i.Ie,i.pK,i.j9,n.JJ,n.u,i.YG,i.yW],pipes:[g.X$],styles:[""]}),e})()}];let c=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l.oAB({type:e}),e.\u0275inj=l.cJS({imports:[[a.Bz.forChild(m)],a.Bz]}),e})(),p=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l.oAB({type:e}),e.\u0275inj=l.cJS({imports:[[r.ez,n.u5,i.Pc,c,s.m]]}),e})()}}]);