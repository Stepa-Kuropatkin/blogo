(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{262:function(t,e,o){var content=o(291);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(12).default)("54f04c05",content,!0,{sourceMap:!1})},290:function(t,e,o){"use strict";var n=o(262);o.n(n).a},291:function(t,e,o){(e=o(11)(!1)).push([t.i,"#content{display:block;justify-content:center}",""]),t.exports=e},298:function(t,e,o){"use strict";o.r(e);var n={mounted:function(){try{this.blog.comments=JSON.parse(localStorage[this.blogId])}catch(t){}},data:function(){return{blogId:2,blogComment:"",blog:{id:1,title:"Блог 2",text:"Идейные соображения высшего порядка, а также укрепление и развитие структуры обеспечивает широкому кругу (специалистов) участие в формировании позиций, занимаемых участниками в отношении поставленных задач. Разнообразный и богатый опыт новая модель организационной деятельности обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации. Значимость этих проблем настолько очевидна, что новая модель организационной деятельности способствует подготовки и реализации модели развития. Равным образом сложившаяся структура организации в значительной степени обуславливает создание существенных финансовых и административных условий. Равным образом сложившаяся структура организации позволяет оценить значение направлений прогрессивного развития. Разнообразный и богатый опыт постоянное информационно-пропагандистское обеспечение нашей деятельности влечет за собой процесс внедрения и модернизации новых предложений. ",comments:[]}}},methods:{newComment:function(t){this.blogComment&&(this.blog.comments.push(this.blogComment),localStorage[this.blogId]=JSON.stringify(this.blog.comments))},removeCom:function(t){this.blog.comments.splice(t,1),localStorage[this.blogId]=JSON.stringify(this.blog.comments)}}},l=(o(290),o(41)),c=o(76),r=o.n(c),m=o(152),d=o(295),f=o(275),v=o(294),h=o(296),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h1",[t._v("\n        "+t._s(t.blog.title)+"\n    ")]),t._v(" "),o("v-col",[o("v-content",{attrs:{id:"content"}},[t._v("\n        "+t._s(t.blog.text)+"\n    ")])],1),t._v(" "),o("v-col",t._l(t.blog.comments,(function(e){return o("v-text-field",{key:e,attrs:{readonly:"",value:e,outlined:"",hint:"Комментарий","persistent-hint":"clear","append-outer-icon":"clear"},on:{"click:append-outer":t.removeCom}})})),1),t._v(" "),o("v-col",[o("v-textarea",{staticClass:"com",attrs:{clearable:"",rows:"1","auto-grow":"true",type:"text",placeholder:"Напишите комментарий"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.newComment(e)}},model:{value:t.blogComment,callback:function(e){t.blogComment=e},expression:"blogComment"}}),t._v(" "),o("V-btn",{attrs:{dark:"",depressed:""},on:{click:t.newComment}},[t._v("Отправить")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;r()(component,{VBtn:m.a,VCol:d.a,VContent:f.a,VTextField:v.a,VTextarea:h.a})}}]);