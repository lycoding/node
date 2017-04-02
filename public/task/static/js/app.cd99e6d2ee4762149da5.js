webpackJsonp([2,0],[function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}var i=a(41),n=s(i),o=a(84),l=s(o);a(79),new n.default({el:"#app",template:"<App/>",components:{App:l.default}})},,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=a(49),n=s(i),o=a(29),l=s(o),r=a(41),u=s(r),d=a(94),c=s(d);u.default.use(c.default),e.default={fetch:function(t,e){var a="";for(var s in t)a+="&"+s+"="+t[s];u.default.http.get(l.default.HOST+"/getTask?"+a).then(function(t){e&&e(t.data)})},save:function(t,e){return"object"!==("undefined"==typeof t?"undefined":(0,n.default)(t))?void alert("Please save taskList is a object."):void u.default.http.post(l.default.HOST+"/saveTask",t,{emulateJSON:!0}).then(function(t){e&&e(t.data)})},update:function(t,e){u.default.http.post(l.default.HOST+"/updateTask",t,{emulateJSON:!0}).then(function(t){e&&e(t.data)})},delete:function(t,e){u.default.http.post(l.default.HOST+"/deleteTask",{_id:t},{emulateJSON:!0}).then(function(t){e&&e(t.data)})}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={HOST:"http://127.0.0.1",TASK:{PROGRESS:{NOTDOWN:"0",DOWN:"1"},LEVEL:{HIGH:"1",MID:"2",LOW:"3"}}}},function(t,e){"use strict";function a(t){return t<10?"0"+t:t}Object.defineProperty(e,"__esModule",{value:!0}),e.default={format:function(t,e){var s=new Date(parseInt(t)),i=s.getMonth()+1,n=s.getDate(),o=s.getHours(),l=s.getMinutes();return"mm-dd"===e?a(i)+"-"+a(n):a(i)+"-"+a(n)+" "+a(o)+":"+a(l)},testTime:function(t,e){var a="mm-dd"===e?"^(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$":"^(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1]) ([0-1][0-9]|2[0-3]):[0-5][0-9]$",s=RegExp(a);return!!s.test(t)},arcFormat:function(t,e){if("mm-dd"===e){var a=864e5-1,s=new Date("2017/"+t.split("-")[0]+"/"+t.split("-")[1]).getTime()+a;return s}}}},,,,,,,,,,,,function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=a(87),n=s(i);e.default={name:"app",components:{TaskList:n.default}}},function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=a(28),n=s(i),o=a(86);s(o);e.default={data:function(){return{isshowTaskModal:!1,task:{time:"",name:"",startTime:"",endTime:"",memo:""}}},methods:{showTaskModal:function(){this.isshowTaskModal=!this.isshowTaskModal,this.task={time:"",name:"",startTime:"",endTime:"",memo:""}},saveTask:function(){var t=this;if(!this.task.name)return void alert("Please enter task name!");var e={time:this.task.time,name:this.task.name,startTime:this.task.startTime,endTime:this.task.endTime,memo:this.task.memo};n.default.save(e,function(e){e.result&&(console.log("save successfully."),t.showTaskModal(),t.$emit("save-task-done"))})}},props:["updateTaskList","Dialog"]}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={methods:{close:function(){this.show=!1}},props:["show"]}},function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=a(28),n=s(i),o=a(30),l=s(o),r=a(29),u=s(r),d=a(85),c=s(d),m=a(88),v=s(m);e.default={data:function(){return{taskType:[],taskTypePlan:!0,taskTypeDoing:!1,taskTypeDone:!1,loading:!1,levelVal:"",level:[{text:"高",value:u.default.TASK.LEVEL.HIGH},{text:"中",value:u.default.TASK.LEVEL.MID},{text:"低",value:u.default.TASK.LEVEL.LOW}],taskListTitle:["分类","任务描述","优先级","备注","计划完成","开始时间","结束时间"],taskList:[],task:{},isAddTask:!1,isShowTips:!1,active:-1,isEdit:!1,editOrSave:"编辑",pageNumber:1,curPageNumber:0,offset:0,pageCountArr:[]}},methods:{showTaskList:function(t){"plan"===t?this.taskTypePlan=!this.taskTypePlan:"doing"===t?this.taskTypeDoing=!this.taskTypeDoing:this.taskTypeDone=!this.taskTypeDone,this.taskType=[this.taskTypePlan?"0":"_",this.taskTypeDoing?"1":"_",this.taskTypeDone?"2":"_"],this.getTaskList()},getTaskList:function(){var t=this,e={level:this.levelVal,progress:this.taskType.join(""),offset:this.offset};this.loading=!0,this.pageCountArr=[],n.default.fetch(e,function(e){if(t.loading=!1,e.success){t.taskList=e.data,t.pageNumber=Math.ceil(e.other.pageCount/10);for(var a=0;a<t.pageNumber;a++)t.pageCountArr.push(a)}})},format:l.default.format,selectTr:function(t,e){this.active!==e&&(this.isEdit=!1,this.editOrSave="编辑"),this.active=e},goToPage:function(t){this.curPageNumber=t,this.offset=10*t,this.getTaskList()},showAddModal:function(){this.isAddTask=!this.isAddTask},delTask:function(t){var e=this;if(this.active===-1)return void alert("请选择一条数据");var t=this.taskList[this.active];this.loading=!0,n.default.delete(t._id,function(a){if(e.loading=!1,a.success)for(var s=0;s<e.taskList.length;s++)if(e.taskList[s]._id===t._id)return e.taskList.splice(s,1),void(e.active=-1)})},editTask:function(){if(this.active===-1)return void alert("请选择一条数据");var t=this.taskList[this.active];this.isEdit?(this.isEdit=!1,this.editOrSave="编辑",this.updateTask(t)):(this.isEdit=!0,this.editOrSave="更新")},updateTask:function(t){var e=this;this.loading=!0,n.default.update(t,function(t){e.loading=!1,t.success&&(e.active=-1,console.log("更新成功"))})},updateTime:function(t,e){var a=this,s=(new Date).getTime(),i={_id:e._id};"startTime"===t?i.endTime=e.endTime:i.startTime=e.startTime,i[t]=s,this.loading=!0,n.default.update(i,function(i){a.loading=!1,i.success&&("startTime"===t?e.startTime=s:e.endTime=s)})},saveTask:function(){var t=this;if(!this.task.name)return void alert("Please enter task name!");var e={type:this.task.type||"",name:this.task.name||"",level:this.task.level||"",planTime:this.task.planTime||"",memo:this.task.memo||"",startTime:this.task.startTime||"",endTime:this.task.endTime||""};this.loading=!0,n.default.save(e,function(a){console.log(a.data[0]),t.loading=!1,a.success&&(console.log("save successfully."),t.task={},t.showAddModal(),e._id=a.data[0]?a.data[0]._id:"",t.taskList.push(e))})},getPlanTime:function(t,e){e.planTime=t}},created:function(){this.taskType=[this.taskTypePlan?"0":"_",this.taskTypeDoing?"1":"_",this.taskTypeDone?"2":"_"],this.getTaskList()},components:{AddTask:c.default,vTime:v.default},watch:{progressVal:function(){this.getTaskList()},levelVal:function(){this.getTaskList()}}}},function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=a(30),n=s(i);e.default={data:function(){return{oldTimeStr:"",time:this.data,timeStr:""}},methods:{recordTime:function(){this.oldTimeStr=n.default.format(this.time,this.format)},testTime:function(){n.default.testTime(this.timeStr,this.format)?(this.time=n.default.arcFormat(this.timeStr,this.format),this.$emit("change",this.time)):this.timeStr=this.oldTimeStr}},watch:{data:function(t){this.time=t}},props:["data","format"],created:function(){this.timeStr=n.default.format(this.time||(new Date).getTime(),this.format),this.time||(this.time=n.default.arcFormat(this.timeStr,this.format),this.$emit("change",this.time))}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,a){var s=a(8)(a(42),a(92),null,null);t.exports=s.exports},function(t,e,a){a(82);var s=a(8)(a(43),a(91),null,null);t.exports=s.exports},function(t,e,a){a(83);var s=a(8)(a(44),a(93),null,null);t.exports=s.exports},function(t,e,a){a(81);var s=a(8)(a(45),a(90),null,null);t.exports=s.exports},function(t,e,a){a(80);var s=a(8)(a(46),a(89),null,null);t.exports=s.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"v-time"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.timeStr,expression:"timeStr"}],staticClass:"time-input",attrs:{type:"text"},domProps:{value:t._s(t.timeStr)},on:{focus:t.recordTime,blur:t.testTime,input:function(e){e.target.composing||(t.timeStr=e.target.value)}}})])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"task-list",attrs:{id:"task-list"}},[t.loading?a("div",{attrs:{id:"mask"}},[t._m(0)]):t._e(),t._v(" "),a("div",{staticClass:"task-table-box"},[a("h2",[t._v("欢迎，记录您的任务便于享受更好的功能")]),t._v(" "),a("div",{staticClass:"tool-box"},[a("button",{attrs:{type:"button"},on:{click:t.showAddModal}},[t._v("添加")]),t._v(" "),a("button",{attrs:{type:"button"},on:{click:t.editTask}},[t._v(t._s(t.editOrSave))]),t._v(" "),a("button",{attrs:{type:"button"},on:{click:t.delTask}},[t._v("删除")]),t._v(" "),a("span",[t._v("显示：")]),t._v(" "),a("button",{class:{push:t.taskTypePlan},attrs:{type:"button"},on:{click:function(e){t.showTaskList("plan")}}},[t._v("计划")]),t._v(" "),a("button",{class:{push:t.taskTypeDoing},attrs:{type:"button"},on:{click:function(e){t.showTaskList("doing")}}},[t._v("进行")]),t._v(" "),a("button",{class:{push:t.taskTypeDone},attrs:{type:"button"},on:{click:function(e){t.showTaskList("done")}}},[t._v("完成")]),t._v(" "),a("span",[t._v("优先级：")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.levelVal,expression:"levelVal"}],on:{change:function(e){t.levelVal=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e})[0]}}},[a("option",{attrs:{value:""}},[t._v("全部")]),t._v(" "),t._l(t.level,function(e){return a("option",{domProps:{value:e.value}},[t._v(t._s(e.text))])})],2)]),t._v(" "),a("div",{staticClass:"task-table"},[a("div",{staticClass:"task-tr"},t._l(t.taskListTitle,function(e){return a("span",{staticClass:"task-td"},[a("span",[t._v(t._s(e))])])})),t._v(" "),t._l(t.taskList,function(e,s){return a("div",{class:["task-tr",{active:s===t.active}],on:{click:function(a){t.selectTr(e,s)}}},[a("span",{staticClass:"task-td"},[s===t.active&&t.isEdit?t._e():a("span",{attrs:{title:e.type}},[t._v(t._s(e.type))]),t._v(" "),t.isEdit&&s===t.active?a("input",{directives:[{name:"model",rawName:"v-model",value:e.type,expression:"item.type"}],staticClass:"task-input",attrs:{type:"text"},domProps:{value:t._s(e.type)},on:{keyup:function(a){13===a.keyCode&&t.updateTask(e)},input:function(t){t.target.composing||(e.type=t.target.value)}}}):t._e()]),t._v(" "),a("span",{staticClass:"task-td"},[s===t.active&&t.isEdit?t._e():a("span",{attrs:{title:e.name}},[t._v(t._s(e.name))]),t._v(" "),t.isEdit&&s===t.active?a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"item.name"}],staticClass:"task-input",attrs:{type:"text"},domProps:{value:t._s(e.name)},on:{keyup:function(a){13===a.keyCode&&t.updateTask(e)},input:function(t){t.target.composing||(e.name=t.target.value)}}}):t._e()]),t._v(" "),a("span",{staticClass:"task-td"},[s===t.active&&t.isEdit?t._e():a("span",{attrs:{title:e.level}},[t._v(t._s(e.level))]),t._v(" "),t.isEdit&&s===t.active?a("input",{directives:[{name:"model",rawName:"v-model",value:e.level,expression:"item.level"}],staticClass:"task-input",attrs:{type:"text"},domProps:{value:t._s(e.level)},on:{keyup:function(a){13===a.keyCode&&t.updateTask(e)},input:function(t){t.target.composing||(e.level=t.target.value)}}}):t._e()]),t._v(" "),a("span",{staticClass:"task-td"},[s===t.active&&t.isEdit?t._e():a("span",{attrs:{title:e.memo}},[t._v(t._s(e.memo))]),t._v(" "),s===t.active&&t.isEdit?a("input",{directives:[{name:"model",rawName:"v-model",value:e.memo,expression:"item.memo"}],staticClass:"task-input",attrs:{type:"text"},domProps:{value:t._s(e.memo)},on:{keyup:function(a){13===a.keyCode&&t.updateTask(e)},input:function(t){t.target.composing||(e.memo=t.target.value)}}}):t._e()]),t._v(" "),a("span",{staticClass:"task-td"},[s===t.active&&t.isEdit?t._e():a("span",{attrs:{title:t.format(e.planTime)}},[t._v(t._s(t.format(e.planTime,"mm-dd")))]),t._v(" "),t.isEdit&&s===t.active?a("v-time",{attrs:{data:e.planTime,format:"mm-dd"},on:{change:function(a){t.getPlanTime(a,e)}}}):t._e()],1),t._v(" "),a("span",{staticClass:"task-td"},[e.startTime?a("span",{attrs:{title:t.format(e.startTime)}},[t._v(t._s(t.format(e.startTime)))]):t._e(),t._v(" "),e.startTime?t._e():a("span",[a("button",{on:{click:function(a){t.updateTime("startTime",e)}}},[t._v("开始")])])]),t._v(" "),a("span",{staticClass:"task-td"},[e.endTime?a("span",{attrs:{title:t.format(e.endTime)}},[t._v(t._s(t.format(e.endTime)))]):t._e(),t._v(" "),e.endTime?t._e():a("span",[a("button",{on:{click:function(a){t.updateTime("endTime",e)}}},[t._v("结束")])])])])}),t._v(" "),t.isAddTask?a("div",{staticClass:"task-tr"},[a("span",{staticClass:"task-td"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.task.type,expression:"task.type"}],staticClass:"task-input",attrs:{type:"text"},domProps:{value:t._s(t.task.type)},on:{keyup:function(e){13===e.keyCode&&t.saveTask(e)},input:function(e){e.target.composing||(t.task.type=e.target.value)}}})]),t._v(" "),a("span",{staticClass:"task-td"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.task.name,expression:"task.name"}],staticClass:"task-input",attrs:{type:"text"},domProps:{value:t._s(t.task.name)},on:{keyup:function(e){13===e.keyCode&&t.saveTask(e)},input:function(e){e.target.composing||(t.task.name=e.target.value)}}})]),t._v(" "),a("span",{staticClass:"task-td"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.task.level,expression:"task.level"}],staticClass:"task-input",attrs:{type:"text"},domProps:{value:t._s(t.task.level)},on:{keyup:function(e){13===e.keyCode&&t.saveTask(e)},input:function(e){e.target.composing||(t.task.level=e.target.value)}}})]),t._v(" "),a("span",{staticClass:"task-td"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.task.memo,expression:"task.memo"}],staticClass:"task-input",attrs:{type:"text"},domProps:{value:t._s(t.task.memo)},on:{keyup:function(e){13===e.keyCode&&t.saveTask(e)},input:function(e){e.target.composing||(t.task.memo=e.target.value)}}})]),t._v(" "),a("span",{staticClass:"task-td"},[a("v-time",{attrs:{data:t.task.planTime,format:"mm-dd"},on:{change:function(e){t.getPlanTime(e,t.task)}}})],1),t._v(" "),a("span",{staticClass:"task-td"}),t._v(" "),a("span",{staticClass:"task-td"}),t._v(" "),a("span",{staticClass:"task-td task-btn-box"},[a("button",{attrs:{type:"button"},on:{click:t.saveTask}},[t._v("保存")])])]):t._e()],2)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box"},[a("div",{staticClass:"text"},[t._v("请等待...")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"add-task"}},[a("button",{attrs:{type:"button"},on:{click:t.showTaskModal}},[t._v("添加任务")]),a("br"),t._v(" "),t.isshowTaskModal?a("div",{staticClass:"task-modal"},[a("h4",[t._v("添加任务")]),t._v(" "),a("span",{staticClass:"close",on:{click:t.showTaskModal}},[t._v("x")]),t._v(" "),a("div",[a("label",[t._v("计划时间: ")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.task.time,expression:"task.time"}],attrs:{type:"text"},domProps:{value:t._s(t.task.time)},on:{input:function(e){e.target.composing||(t.task.time=e.target.value)}}})]),t._v(" "),a("div",[a("label",[t._v("任务名称: ")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.task.name,expression:"task.name"}],attrs:{type:"text"},domProps:{value:t._s(t.task.name)},on:{input:function(e){e.target.composing||(t.task.name=e.target.value)}}})]),t._v(" "),a("div",[a("label",[t._v("开始时间: ")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.task.startTime,expression:"task.startTime"}],attrs:{type:"text"},domProps:{value:t._s(t.task.startTime)},on:{input:function(e){e.target.composing||(t.task.startTime=e.target.value)}}})]),t._v(" "),a("div",[a("label",[t._v("结束时间: ")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.task.endTime,expression:"task.endTime"}],attrs:{type:"text"},domProps:{value:t._s(t.task.endTime)},on:{input:function(e){e.target.composing||(t.task.endTime=e.target.value)}}})]),t._v(" "),a("div",[a("label",[t._v("备注信息: ")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.task.memo,expression:"task.memo"}],attrs:{type:"text"},domProps:{value:t._s(t.task.memo)},on:{input:function(e){e.target.composing||(t.task.memo=e.target.value)}}})]),t._v(" "),a("button",{attrs:{type:"button"},on:{click:t.saveTask}},[t._v("保存")])]):t._e()])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("task-list")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"dialog-template"}},[a("div",{staticClass:"dialogs"},[a("div",{staticClass:"dialog",class:{"dialog-active":t.show}},[a("div",{staticClass:"dialog-content"},[a("div",{staticClass:"close rotate"},[a("span",{staticClass:"iconfont icon-close",on:{click:t.close}})]),t._v(" "),t._t("header"),t._v(" "),t._t("body"),t._v(" "),t._t("footer")],2)]),t._v(" "),a("div",{staticClass:"dialog-overlay"})])])},staticRenderFns:[]}},,function(t,e){}]);
//# sourceMappingURL=app.cd99e6d2ee4762149da5.js.map