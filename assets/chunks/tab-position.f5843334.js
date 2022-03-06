import{g as T,n as p,r as u,o as m,f as v,w as e,a as t,d as l,_ as V,b as $,u as C,a7 as S,c as h,F as y,i as x,k}from"../app.a90c0c50.js";const R=l("User"),U=l("Config"),N=l("Role"),z=l("Task"),w=T({setup(g){const b=p("first"),o=(_,n)=>{console.log(_,n)};return(_,n)=>{const s=u("el-tab-pane"),c=u("el-tabs");return m(),v(c,{modelValue:b.value,"onUpdate:modelValue":n[0]||(n[0]=a=>b.value=a),class:"demo-tabs",onTabClick:o},{default:e(()=>[t(s,{label:"User",name:"first"},{default:e(()=>[R]),_:1}),t(s,{label:"Config",name:"second"},{default:e(()=>[U]),_:1}),t(s,{label:"Role",name:"third"},{default:e(()=>[N]),_:1}),t(s,{label:"Task",name:"fourth"},{default:e(()=>[z]),_:1})]),_:1},8,["modelValue"])}}});var re=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:w});const j={},M=l("User"),O=l("Config"),E=l("Role"),B=l("Task");function F(g,b){const o=u("el-tab-pane"),_=u("el-tabs");return m(),v(_,{type:"border-card"},{default:e(()=>[t(o,{label:"User"},{default:e(()=>[M]),_:1}),t(o,{label:"Config"},{default:e(()=>[O]),_:1}),t(o,{label:"Role"},{default:e(()=>[E]),_:1}),t(o,{label:"Task"},{default:e(()=>[B]),_:1})]),_:1})}var I=V(j,[["render",F]]),ie=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:I});const P=l("User"),D=l("Config"),L=l("Role"),q=l("Task"),A=T({setup(g){const b=p("first"),o=(_,n)=>{console.log(_,n)};return(_,n)=>{const s=u("el-tab-pane"),c=u("el-tabs");return m(),v(c,{modelValue:b.value,"onUpdate:modelValue":n[0]||(n[0]=a=>b.value=a),type:"card",class:"demo-tabs",onTabClick:o},{default:e(()=>[t(s,{label:"User",name:"first"},{default:e(()=>[P]),_:1}),t(s,{label:"Config",name:"second"},{default:e(()=>[D]),_:1}),t(s,{label:"Role",name:"third"},{default:e(()=>[L]),_:1}),t(s,{label:"Task",name:"fourth"},{default:e(()=>[q]),_:1})]),_:1},8,["modelValue"])}}});var me=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:A});const G={class:"custom-tabs-label"},H=$("span",null,"Route",-1),J=l(" Route "),K=l("Config"),Q=l("Role"),W=l("Task"),X=T({setup(g){return(b,o)=>{const _=u("el-icon"),n=u("el-tab-pane"),s=u("el-tabs");return m(),v(s,{type:"border-card",class:"demo-tabs"},{default:e(()=>[t(n,null,{label:e(()=>[$("span",G,[t(_,null,{default:e(()=>[t(C(S))]),_:1}),H])]),default:e(()=>[J]),_:1}),t(n,{label:"Config"},{default:e(()=>[K]),_:1}),t(n,{label:"Role"},{default:e(()=>[Q]),_:1}),t(n,{label:"Task"},{default:e(()=>[W]),_:1})]),_:1})}}});var fe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:X});const Y={style:{"margin-bottom":"20px"}},Z=l(" add tab "),ee=T({setup(g){let b=2;const o=p("2"),_=p([{title:"Tab 1",name:"1",content:"Tab 1 content"},{title:"Tab 2",name:"2",content:"Tab 2 content"}]),n=c=>{const a=`${++b}`;_.value.push({title:"New Tab",name:a,content:"New Tab content"}),o.value=a},s=c=>{const a=_.value;let r=o.value;r===c&&a.forEach((d,f)=>{if(d.name===c){const i=a[f+1]||a[f-1];i&&(r=i.name)}}),o.value=r,_.value=a.filter(d=>d.name!==c)};return(c,a)=>{const r=u("el-button"),d=u("el-tab-pane"),f=u("el-tabs");return m(),h(y,null,[$("div",Y,[t(r,{size:"small",onClick:a[0]||(a[0]=i=>n(o.value))},{default:e(()=>[Z]),_:1})]),t(f,{modelValue:o.value,"onUpdate:modelValue":a[1]||(a[1]=i=>o.value=i),type:"card",class:"demo-tabs",closable:"",onTabRemove:s},{default:e(()=>[(m(!0),h(y,null,x(_.value,i=>(m(),v(d,{key:i.name,label:i.title,name:i.name},{default:e(()=>[l(k(i.content),1)]),_:2},1032,["label","name"]))),128))]),_:1},8,["modelValue"])],64)}}});var pe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ee});const te=T({setup(g){let b=2;const o=p("2"),_=p([{title:"Tab 1",name:"1",content:"Tab 1 content"},{title:"Tab 2",name:"2",content:"Tab 2 content"}]),n=(s,c)=>{if(c==="add"){const a=`${++b}`;_.value.push({title:"New Tab",name:a,content:"New Tab content"}),o.value=a}else if(c==="remove"){const a=_.value;let r=o.value;r===s&&a.forEach((d,f)=>{if(d.name===s){const i=a[f+1]||a[f-1];i&&(r=i.name)}}),o.value=r,_.value=a.filter(d=>d.name!==s)}};return(s,c)=>{const a=u("el-tab-pane"),r=u("el-tabs");return m(),v(r,{modelValue:o.value,"onUpdate:modelValue":c[0]||(c[0]=d=>o.value=d),type:"card",editable:"",class:"demo-tabs",onEdit:n},{default:e(()=>[(m(!0),h(y,null,x(_.value,d=>(m(),v(a,{key:d.name,label:d.title,name:d.name},{default:e(()=>[l(k(d.content),1)]),_:2},1032,["label","name"]))),128))]),_:1},8,["modelValue"])}}});var ve=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:te});const ae=l("top"),le=l("right"),oe=l("bottom"),ne=l("left"),_e=l("User"),se=l("Config"),ce=l("Role"),ue=l("Task"),de=T({setup(g){const b=p("left");return(o,_)=>{const n=u("el-radio-button"),s=u("el-radio-group"),c=u("el-tab-pane"),a=u("el-tabs");return m(),h(y,null,[t(s,{modelValue:b.value,"onUpdate:modelValue":_[0]||(_[0]=r=>b.value=r),style:{"margin-bottom":"30px"}},{default:e(()=>[t(n,{label:"top"},{default:e(()=>[ae]),_:1}),t(n,{label:"right"},{default:e(()=>[le]),_:1}),t(n,{label:"bottom"},{default:e(()=>[oe]),_:1}),t(n,{label:"left"},{default:e(()=>[ne]),_:1})]),_:1},8,["modelValue"]),t(a,{"tab-position":b.value,style:{height:"200px"},class:"demo-tabs"},{default:e(()=>[t(c,{label:"User"},{default:e(()=>[_e]),_:1}),t(c,{label:"Config"},{default:e(()=>[se]),_:1}),t(c,{label:"Role"},{default:e(()=>[ce]),_:1}),t(c,{label:"Task"},{default:e(()=>[ue]),_:1})]),_:1},8,["tab-position"])],64)}}});var ge=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:de});export{re as _,ie as a,me as b,fe as c,pe as d,ve as e,ge as f};
