(function(t){function e(e){for(var n,o,i=e[0],p=e[1],l=e[2],u=0,v=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&v.push(a[o][0]),a[o]=0;for(n in p)Object.prototype.hasOwnProperty.call(p,n)&&(t[n]=p[n]);c&&c(e);while(v.length)v.shift()();return r.push.apply(r,l||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],n=!0,i=1;i<s.length;i++){var p=s[i];0!==a[p]&&(n=!1)}n&&(r.splice(e--,1),t=o(o.s=s[0]))}return t}var n={},a={app:0},r=[];function o(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=n,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(s,n,function(e){return t[e]}.bind(null,n));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],p=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var c=p;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},2223:function(t,e,s){t.exports=s.p+"static/img/computed_1.bb191f87.png"},"27d0":function(t,e,s){},"29bd":function(t,e,s){},"2b75":function(t,e,s){t.exports=s.p+"static/img/watch_0.9e5736b3.png"},"3d02":function(t,e,s){t.exports=s.p+"static/img/logo.82b9c7a5.png"},"501a":function(t,e,s){"use strict";s("cae2")},"56d7":function(t,e,s){"use strict";s.r(e);var n=s("2b0e"),a=function(){var t=this,e=t._self._c,n=t._self._setupProxy;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"heading-wrap"},[e("span",{staticClass:"text"},[t._v(" Vue 2 Options API ")]),e("span",{staticClass:"logo animate__animated",class:{animate__swing:n.data.isAnimate}},[e("img",{attrs:{alt:"Vue logo",src:s("3d02")}})]),e("span",{staticClass:"text"},[t._v(" Vue 3 Composition API ")])]),e("div",{staticClass:"tool-wrap"},[e(n.Tool,{on:{"submit-val":n.onToolSubmit}})],1),e("div",{staticClass:"doc-wrap"},[e(n.Doc)],1),e("div",{staticClass:"footer-wrap"},[e(n.Footer)],1),e("el-backtop")],1)},r=[],o=function(){var t=this,e=t._self._c,s=t._self._setupProxy;return e("div",{staticClass:"body-wrap"},[e("div",{staticClass:"content-wrap"},[e("el-row",{attrs:{gutter:50}},[e("el-col",{attrs:{span:12}},[e(s.PrismEditor,{staticClass:"my-editor",attrs:{readonly:!1,"line-numbers":!0,highlight:s.highlighter},model:{value:s.data.entrySrciptContent,callback:function(e){t.$set(s.data,"entrySrciptContent",e)},expression:"data.entrySrciptContent"}})],1),e("el-col",{attrs:{span:12}},[e(s.PrismEditor,{staticClass:"my-editor",attrs:{readonly:!0,"line-numbers":!0,highlight:s.highlighter},model:{value:s.data.outputSrciptContent,callback:function(e){t.$set(s.data,"outputSrciptContent",e)},expression:"data.outputSrciptContent"}})],1)],1)],1),e("div",{staticClass:"btn-wrap"},[e("button",{staticClass:"button button--aylen button--round-l button--text-thick",on:{click:s.onSubmit}},[t._v(" Hello! Composition API ")])])])},i=[],p=s("8f16"),l="export default {\n  name: 'Sample',\n  props: {\n    userName: String,\n    userAge: [String, Number],\n    userInfo: {\n      type: Object,\n      required: false,\n      default: () => ({\n        userName: 'Todd Cochran',\n        userAge: 20\n      })\n    }\n  },\n  data() {\n    return {\n      firstName: '',\n      lastName: '',\n      age: this.userAge || 20,\n      birthday: new Date().getFullYear(),\n      married: false,\n      child: null,\n      address: undefined,\n      experience: {},\n      friends: ['Casey Adams', 'Lena Clark', 'Nzinga Blake'],\n      setBirthday: (value) => {\n        this.birthday = value\n      }\n    }\n  },\n  computed: {\n    friendNames() {\n      return this.friends.join(', ')\n    },\n    fullName: {\n      get: () => {\n        return this.firstName + ' ' + this.lastName\n      },\n      set: (newValue) => {\n        const names = newValue.split(' ')\n        this.firstName = names[0]\n        this.lastName = names[names.length - 1]\n      }\n    }\n  },\n  filters: {\n    toMarried(value) {\n      return value ? 'Yes' : 'No'\n    }\n  },\n  watch: {\n    userName(nVal, oVal) {\n      console.log('watch props', nVal, oVal)\n    },\n    firstName(nVal, oVal) {\n      console.log('watch data', nVal, oVal)\n    },\n    friendNames(nVal, oVal) {\n      console.log('watch computed', nVal, oVal)\n    },\n    lastName: {\n      handler(nVal, oVal) {\n        console.log('watch options', nVal, oVal)\n      },\n      immediate: false,\n      deep: true\n    }\n  },\n  async created() {\n    console.log('created async function')\n  },\n  mounted() {\n    console.log('mounted function')\n  },\n  updated() {\n    console.log('updated function')\n  },\n  destroyed() {\n    console.log('destroyed function')\n  },\n  activated() {\n    console.log('activated function')\n  },\n  deactivated() {\n    console.log('deactivated function')\n  },\n  errorCaptured(err, vm, info) {\n    console.log('errorCaptured function', err, vm, info)\n  },\n  methods: {\n    async getData() {\n      console.log('async function')\n    },\n    onSubmit(value0, { value1, value2 }) {\n      console.log('function arguments', value0, value1, value2)\n    },\n    vmMethods() {\n      this.$nextTick(() => {\n        this.$set(this.experience, '2020', 'principle of compiling')\n        this.$delete(this.experience, '2019')\n        this.$emit('change-val', +new Date())\n        this.$refs.childenComponent.name\n        this.$attrs.name\n        this.$slots.name\n        this.$route.name\n        this.$router.push({ name: 'Home' })\n        this.$store.state.name\n      })\n    },\n    otherMethods() {\n      this.$data\n      this.$props\n      this.$el\n      this.$options\n      this.$parent\n      this.$root\n      this.$children\n      this.$isServer\n      this.$listeners\n      this.$watch\n      this.$on\n      this.$once\n      this.$off\n      this.$mount\n      this.$forceUpdate\n      this.$destroy\n    }\n  }\n}",c=s("e57a"),u=(s("cabf"),s("8c7a")),v=(s("cb55"),s("416b"),s("cefb"),{__name:"Tool",emits:["submit-val"],setup(t,{emit:e}){const s=Object(n["getCurrentInstance"])(),a=Object(n["reactive"])({entrySrciptContent:l,outputSrciptContent:""});function r(t){return Object(u["highlight"])(t,u["languages"].js)}function o(){if(a.outputSrciptContent="",a.entrySrciptContent)try{a.outputSrciptContent=Object(p["a"])(a.entrySrciptContent,{isDebug:!1}),e("submit-val")}catch(t){s.proxy.$notify.info({title:"解析发生错误，请确保内容有效并且使用新一代浏览器",message:t}),console.warn("error:",t)}}return{__sfc:!0,$vm:s,emit:e,data:a,highlighter:r,onSubmit:o,Vue2ToCompositionApi:p["a"],sampleCode:l,PrismEditor:c["a"],highlight:u["highlight"],languages:u["languages"],reactive:n["reactive"],getCurrentInstance:n["getCurrentInstance"]}}}),m=v,d=(s("501a"),s("2877")),_=Object(d["a"])(m,o,i,!1,null,"45bc1679",null),h=_.exports,f=function(){var t=this,e=t._self._c,s=t._self._setupProxy;return e("div",{staticClass:"body-wrap"},[e("div",{staticClass:"content-wrap"},[e("div",{staticClass:"github-icon"},[e("a",{attrs:{href:s.data.github,target:"_blank"}},[e("el-tooltip",{attrs:{placement:"top",effect:"dark",content:s.data.github}},[e("i",{staticClass:"bx bxl-github"})])],1)]),t._l(s.data.content,(function(s,n){return e("div",{key:n,staticClass:"box-wrap"},[e("div",{staticClass:"heading"},[t._v(t._s(s.heading))]),e("div",{staticClass:"images"},[e("i",{staticClass:"bx bxl-vuejs"}),e("el-row",{attrs:{gutter:20}},t._l(s.images,(function(t,s){return e("el-col",{key:s,attrs:{span:12}},[e("img",{attrs:{src:t}})])})),1)],1)])})),e(s.Install),e(s.Tips)],2)])},g=[],y=function(){var t=this;t._self._c;return t._m(0)},b=[function(){var t=this,e=t._self._c;return e("section",[e("html",[e("head"),e("body",[e("h2",[t._v("Install 安装")]),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-node"}},[t._v("npm install vue2-to-composition-api\n")])]),e("h2",[t._v("Conversion 使用转换")]),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-title class_"}},[t._v("Vue2ToCompositionApi")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'vue2-to-composition-api'")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" vue2ScriptContentStr = "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("`\nexport default {\n  name: 'Sample',\n  props: {\n    userInfo: {\n      type: Object,\n      required: false,\n      default: () => ({\n        userName: 'Todd Cochran',\n        userAge: 20\n      })\n    }\n  },\n  data() {\n    return {\n      firstName: '',\n      lastName: ''\n    }\n  }\n}`")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" vue3ScriptContentStr = "),e("span",{pre:!0,attrs:{class:"hljs-title class_"}},[t._v("Vue2ToCompositionApi")]),t._v("(vue2ScriptContentStr)\n"),e("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[t._v("console")]),t._v("."),e("span",{pre:!0,attrs:{class:"hljs-title function_"}},[t._v("log")]),t._v("("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Hello! Composition API\\n'")]),t._v(", vue3ScriptContentStr)\n")])])])])])}],j={},C=Object(d["a"])(j,y,b,!1,null,null,null),$=C.exports,O=function(){var t=this;t._self._c;return t._m(0)},w=[function(){var t=this,e=t._self._c;return e("section",[e("html",[e("head"),e("body",[e("h2",[t._v("无法解析的内容")]),e("p",[t._v("请不要键入 "),e("code",{pre:!0},[t._v("Mixin")]),t._v("、"),e("code",{pre:!0},[t._v("Component")]),t._v(" 等外部内容，转换器无法解析外部的文件，"),e("code",{pre:!0},[t._v("Mixin")]),t._v(" 混入内部的变量与方法都需另外手工处理，动态变量或者拼接的内容也同样无法被解析或解析错误")]),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n  "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("name")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Sample'")]),t._v(",\n  "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("mixins")]),t._v(": [myMixin],\n  "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("components")]),t._v(": { "),e("span",{pre:!0,attrs:{class:"hljs-title class_"}},[t._v("Echart")]),t._v(" },\n  "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(": {\n    "),e("span",{pre:!0,attrs:{class:"hljs-title function_"}},[t._v("onSubmit")]),t._v("("),e("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("propName")]),t._v(") {\n      "),e("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[t._v("this")]),t._v("[propName] = "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'123'")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[t._v("this")]),t._v(".$emit(propName + "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'-change'")]),t._v(")\n    }\n  }\n}\n")])]),e("h2",[t._v("Template中的Data变更")]),e("p",[t._v("转换后需为 "),e("code",{pre:!0},[t._v("Template")]),t._v(" 中的 "),e("code",{pre:!0},[t._v("Data")]),t._v(" 数据需加上 "),e("code",{pre:!0},[t._v(".data")]),t._v(" 前缀，其原因是许多开发者在Options API语法中做了改变引用类型数据地址的行为（如下），"),e("code",{pre:!0},[t._v("Data")]),t._v(" 将会被转换为一个完整的对象以兼容此类操作，此方式额外产生的迭代成本更小")]),e("p",[e("strong",[t._v("Options API:")])]),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("{{ userInfo }}"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n")])]),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n  "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("name")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Sample'")]),t._v(",\n  "),e("span",{pre:!0,attrs:{class:"hljs-title function_"}},[t._v("data")]),t._v("("),e("span",{pre:!0,attrs:{class:"hljs-params"}}),t._v(") {\n    "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n      "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("userInfo")]),t._v(": {}\n    }\n  },\n  "),e("span",{pre:!0,attrs:{class:"hljs-title function_"}},[t._v("created")]),t._v("("),e("span",{pre:!0,attrs:{class:"hljs-params"}}),t._v(") {\n    "),e("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[t._v("this")]),t._v("."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[t._v("userInfo")]),t._v(" = { "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("name")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Casey Adams'")]),t._v(", "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("age")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("80")]),t._v(" }\n  }\n}\n")])]),e("p",[e("strong",[t._v("Composition API:")])]),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("{{ data.userInfo }}"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n")])]),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" { reactive } "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'vue'")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" data = "),e("span",{pre:!0,attrs:{class:"hljs-title function_"}},[t._v("reactive")]),t._v("({\n  "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("userInfo")]),t._v(": {}\n})\n\ndata."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[t._v("userInfo")]),t._v(" = { "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("name")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Casey Adams'")]),t._v(", "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("age")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("80")]),t._v(" }\n")])]),e("h2",[t._v("Template中的Filter变更")]),e("p",[e("code",{pre:!0},[t._v("Filter")]),t._v(" 已经被废弃，它将会被转换为外部的 "),e("code",{pre:!0},[t._v("Function")]),t._v(" 内容，需要在 "),e("code",{pre:!0},[t._v("Template")]),t._v(" 中改变 "),e("code",{pre:!0},[t._v("Filter")]),t._v(" 的调用方式")]),e("p",[e("strong",[t._v("Options API")])]),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("{{ married | toMarried }}"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n")])]),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n  "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("name")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Sample'")]),t._v(",\n  "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("filters")]),t._v(": {\n    "),e("span",{pre:!0,attrs:{class:"hljs-title function_"}},[t._v("toMarried")]),t._v("("),e("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("value")]),t._v(") {\n      "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" value ? "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Yes'")]),t._v(" : "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'No'")]),t._v("\n    }\n  }\n}\n")])]),e("p",[e("strong",[t._v("Composition API:")])]),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("{{ toMarried(data.married) }}"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n")])]),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-title function_"}},[t._v("toMarried")]),t._v("("),e("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("value")]),t._v(") {\n\t"),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" value ? "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Yes'")]),t._v(" : "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'No'")]),t._v("\n}\n")])]),e("h2",[t._v("Vue2.7中延用Router3.x、Vuex3.x")]),e("p",[t._v("如若不想在 "),e("code",{pre:!0},[t._v("Vue2.7")]),t._v(" 项目中更新 "),e("code",{pre:!0},[t._v("Router4")]),t._v(" 与 "),e("code",{pre:!0},[t._v("Vuex4")]),t._v(" ，可以从 "),e("code",{pre:!0},[t._v("vue")]),t._v(" 实例中获取 "),e("code",{pre:!0},[t._v("Router")]),t._v("、"),e("code",{pre:!0},[t._v("Router")]),t._v("、"),e("code",{pre:!0},[t._v("Store")])]),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" { getCurrentInstance } "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'vue'")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" $vm = "),e("span",{pre:!0,attrs:{class:"hljs-title function_"}},[t._v("getCurrentInstance")]),t._v("()\n"),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" router = $vm."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[t._v("proxy")]),t._v("."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[t._v("$router")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" route = $vm."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[t._v("proxy")]),t._v("."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[t._v("$route")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" store = $vm."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[t._v("proxy")]),t._v("."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[t._v("$store")]),t._v("\n")])])])])])}],M={},S=Object(d["a"])(M,O,w,!1,null,null,null),x=S.exports,k={__name:"Doc",setup(t){const e=Object(n["reactive"])({github:"https://github.com/wd3322/vue2-to-composition-api",content:[{heading:"Props / Data 数据转换",images:[s("f26b"),s("c7f5")]},{heading:"Computed 计算器属性转换",images:[s("d4c2"),s("2223")]},{heading:"Watch 侦听器转换",images:[s("2b75"),s("de07")]},{heading:"Life cycle 生命周期转换",images:[s("7f80"),s("5ef2")]},{heading:"Methods 方法转换",images:[s("e5e8"),s("e669")]}]});return{__sfc:!0,data:e,Install:$,Tips:x,reactive:n["reactive"]}}},A=k,I=(s("ea30"),Object(d["a"])(A,f,g,!1,null,"e393f644",null)),P=I.exports,B=function(){var t=this;t._self._c,t._self._setupProxy;return t._m(0)},D=[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"body-wrap"},[e("div",{staticClass:"content-wrap"},[e("div",{staticClass:"package-info"},[e("p",[t._v("Package: vue2-to-composition-api")]),e("p",[t._v("Version: 1.0.2")]),e("p",[t._v("Date: 2020-07-11")]),e("p",[t._v("E-mail: diquick@qq.com")]),e("p",[t._v("Author: wd3322")])])])])}],T={__name:"Footer",setup(t){return{__sfc:!0,reactive:n["reactive"]}}},E=T,K=(s("e9a6"),Object(d["a"])(E,B,D,!1,null,"1dc291f4",null)),V=K.exports,N={__name:"App",setup(t){const e=Object(n["reactive"])({isAnimate:!1});function s(){e.isAnimate=!0,setTimeout(()=>{e.isAnimate=!1},1e3)}return{__sfc:!0,data:e,onToolSubmit:s,reactive:n["reactive"],Tool:h,Doc:P,Footer:V}}},F=N,U=(s("5b6e"),s("7094"),Object(d["a"])(F,a,r,!1,null,"0e5e1358",null)),R=U.exports,q=s("5c96"),L=s.n(q);s("0fae"),s("f5df1"),s("678e"),s("e4cb"),s("2c43"),s("77ed");n["default"].config.productionTip=!1,n["default"].use(L.a),new n["default"]({render:t=>t(R)}).$mount("#app")},"5b6e":function(t,e,s){"use strict";s("27d0")},"5ef2":function(t,e,s){t.exports=s.p+"static/img/lifeCycle_1.4a4b3066.png"},7094:function(t,e,s){"use strict";s("29bd")},"7f80":function(t,e,s){t.exports=s.p+"static/img/lifeCycle_0.e3fd4d7f.png"},"8f16":function(module,__webpack_exports__,__webpack_require__){"use strict";var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("caad"),core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es_string_replace_all_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("5b81"),core_js_modules_es_string_replace_all_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es_string_replace_all_js__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("d9e2"),core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_2__);const Vue2ToCompositionApi=(entrySrciptContent="",options={})=>{if("string"===typeof entrySrciptContent&&"object"===typeof options)try{let outputSrciptContent="";const jsBeautify=__webpack_require__("e552"),jsBeautifyOptions={indent_size:4,indent_char:"",indent_with_tabs:!0,editorconfig:!1,eol:"\n",end_with_newline:!1,indent_level:0,preserve_newlines:!0,max_preserve_newlines:10,space_in_paren:!1,space_in_empty_paren:!1,jslint_happy:!1,space_after_anon_function:!1,space_after_named_function:!1,brace_style:"collapse-preserve-inline",unindent_chained_methods:!1,break_chained_methods:!1,keep_array_indentation:!1,unescape_strings:!1,wrap_line_length:0,e4x:!1,comma_first:!1,operator_position:"before-newline",indent_empty_lines:!1,templating:["auto"]};let vmBody;const scriptContent=jsBeautify(entrySrciptContent,jsBeautifyOptions);eval(scriptContent.replace("export default","vmBody ="));const vmContent={props:vmBody.props&&"object"===typeof vmBody.props?vmBody.props:{},data:vmBody.data&&"function"===typeof vmBody.data?vmBody.data:()=>({}),dataOptions:vmBody.data&&"function"===typeof vmBody.data?vmBody.data():{},computed:vmBody.computed&&"object"===typeof vmBody.computed?vmBody.computed:{},watch:vmBody.watch&&"object"===typeof vmBody.watch?vmBody.watch:{},methods:vmBody.methods&&"object"===typeof vmBody.methods?vmBody.methods:{},filters:vmBody.filters&&"object"===typeof vmBody.filters?vmBody.filters:{},lifeCycle:{},import:{vue:[],"vue-router":[],vuex:[]},use:{},emits:[],refs:[]};for(const t in vmBody)["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured"].includes(t)&&"function"===typeof vmBody[t]&&(vmContent.lifeCycle[t]=vmBody[t]);const vmKeys={props:Object.keys(vmContent.props),data:Object.keys(vmContent.dataOptions),computed:Object.keys(vmContent.computed),watch:Object.keys(vmContent.watch),methods:Object.keys(vmContent.methods),filters:Object.keys(vmContent.filters),lifeCycle:Object.keys(vmContent.lifeCycle),import:()=>Object.keys(vmContent.import),use:()=>Object.keys(vmContent.use),vmMethods:["$data","$props","$el","$options","$parent","$root","$children","$isServer","$listeners","$watch","$on","$once","$off","$mount","$forceUpdate","$destroy"]},vmOutput={import:"",use:"",props:"",emits:"",refs:"",data:"",computed:"",watch:"",lifeCycle:"",methods:"",filters:""},vmSetContentMethods={porps:()=>{if(vmContent.props instanceof Array)vmOutput.props=`const props = defineProps(${utilMethods.getPropsStr(vmContent.props)})`;else if("object"===typeof vmContent.props&&null!==vmContent.props){for(const t in vmContent.props){const e=vmContent.props[t];vmOutput.props=vmOutput.props.concat(`${t}: ${utilMethods.getPropsStr(e)},\n`)}vmKeys.props.length>0&&(vmOutput.props=`const props = defineProps({\n${vmOutput.props.substring(0,vmOutput.props.length-2)}\n})`)}},data:()=>{const t=utilMethods.getFunctionStr(vmBody.data);vmOutput.data=t.body.substring(t.body.indexOf("return {")+9,t.body.length-5),(vmOutput.data.includes(") {")||vmOutput.data.includes("=> {"))&&utilMethods.setDataStr(vmContent.dataOptions),vmKeys.data.length>0&&(vmOutput.data=`const data = reactive({\n${vmOutput.data.substring(0,vmOutput.data.length-2)}\n})`,utilMethods.addImport("vue","reactive"))},computed:()=>{for(const t in vmContent.computed){const e=vmContent.computed[t];if("function"===typeof e){const t=utilMethods.getFunctionStr(e);vmOutput.computed=vmOutput.computed.concat(`const ${e.name} = computed((${t.arg}) => ${t.body})\n\n`)}else if("object"===typeof e&&null!==e){let s="",n="",a="";if("function"===typeof e.get){const t=utilMethods.getFunctionStr(e.get);n=`get: (${t.arg}) => ${t.body},\n`}if("function"===typeof e.set){const t=utilMethods.getFunctionStr(e.set);a=`set: (${t.arg}) => ${t.body},\n`}s=`${n}${a}`,vmOutput.computed=vmOutput.computed.concat(`const ${t} = computed({\n${s.substring(0,s.length-2)}})\n\n`)}}vmKeys.computed.length>0&&(vmOutput.computed=vmOutput.computed.substring(0,vmOutput.computed.length-2),utilMethods.addImport("vue","computed"))},watch:()=>{for(const t in vmContent.watch){const e=vmContent.watch[t];if("function"===typeof e){const t=utilMethods.getFunctionStr(e),s=vmKeys.props.some(t=>t===e.name)?"props."+e.name:vmKeys.data.some(t=>t===e.name)?"data."+e.name:vmKeys.computed.some(t=>t===e.name)?e.name+".value":"";vmOutput.watch=vmOutput.watch.concat(`watch(() => ${s}, (${t.arg}) => ${t.body})\n\n`)}else if("object"===typeof e&&"function"===typeof e.handler){const s=utilMethods.getFunctionStr(e.handler),n=utilMethods.getObjectStr(e,["handler"]),a=vmKeys.props.some(e=>e===t)?"props."+t:vmKeys.data.some(e=>e===t)?"data."+t:vmKeys.computed.some(e=>e===t)?vmKeys.computed+".value":"";vmOutput.watch=n?vmOutput.watch.concat(`watch(() => ${a}, (${s.arg}) => ${s.body}, ${n})\n\n`):vmOutput.watch.concat(`watch(() => ${a}, (${s.arg}) => ${s.body})\n\n`)}}vmKeys.watch.length>0&&(vmOutput.watch=vmOutput.watch.substring(0,vmOutput.watch.length-2),utilMethods.addImport("vue","watch"))},lifeCycle:()=>{for(const t in vmContent.lifeCycle){const e=vmContent.lifeCycle[t],s=`on${e.name.substring(0,1).toUpperCase()}${e.name.substring(1)}`,n=utilMethods.getFunctionStr(e);if(["beforeCreate","created"].includes(e.name))vmOutput.lifeCycle=vmOutput.lifeCycle.concat("AsyncFunction"===e.constructor.name?`async function ${s} (${n.arg})\n${n.body}\n${s}()\n\n`:`function ${s} (${n.arg})\n${n.body}\n${s}()\n\n`);else{const t={beforeMount:"onBeforeMount",mounted:"onMounted",beforeUpdate:"onBeforeUpdate",updated:"onUpdated",beforeDestroy:"onBeforeUnmount",destroyed:"onUnmounted",activated:"onActivated",deactivated:"onDeactivated",errorCaptured:"onErrorCaptured"}[e.name];vmOutput.lifeCycle=vmOutput.lifeCycle.concat("AsyncFunction"===e.constructor.name?`${t} (async(${n.arg}) => ${n.body})\n\n`:`${t} ((${n.arg}) => ${n.body})\n\n`),utilMethods.addImport("vue",t)}}vmKeys.lifeCycle.length>0&&(vmOutput.lifeCycle=vmOutput.lifeCycle.substring(0,vmOutput.lifeCycle.length-2))},methods:()=>{for(const t in vmContent.methods){const e=vmContent.methods[t],s=utilMethods.getFunctionStr(e);vmOutput.methods=vmOutput.methods.concat("AsyncFunction"===e.constructor.name?`async function ${e.name} (${s.arg})\n${s.body}\n\n`:`function ${e.name} (${s.arg})\n${s.body}\n\n`)}vmKeys.methods.length>0&&(vmOutput.methods=vmOutput.methods.substring(0,vmOutput.methods.length-2))},filters:()=>{for(const t in vmContent.filters){const e=vmContent.filters[t],s=utilMethods.getFunctionStr(e);vmOutput.filters=vmOutput.filters.concat(`function ${e.name} (${s.arg})\n${s.body}\n\n`)}vmKeys.filters.length>0&&(vmOutput.filters=vmOutput.filters.substring(0,vmOutput.filters.length-2))},import:()=>{for(const t in vmContent.import){const e=vmContent.import[t];e.length>0&&(vmOutput.import=vmOutput.import.concat(`import { ${e.join(", ")} } from '${t}'\n`))}vmKeys.import().length>0&&(vmOutput.import=vmOutput.import.substring(0,vmOutput.import.length-1))},use:()=>{for(const t in vmContent.use){const e=vmContent.use[t];vmOutput.use=vmOutput.use.concat(e+"\n")}vmKeys.use().length>0&&(vmOutput.use=vmOutput.use.substring(0,vmOutput.use.length-1))},emits:()=>{for(const t of vmContent.emits){const e=t.split("update:").pop();vmOutput.emits=vmOutput.emits.concat(`'${e}', `)}vmContent.emits.length>0&&(vmOutput.emits=`const emit = defineEmits([${vmOutput.emits.substring(0,vmOutput.emits.length-2)}])`)},refs:()=>{for(const t of vmContent.refs)vmOutput.refs=vmOutput.refs.concat(`const ${t} = ref(null)\n`);vmContent.refs.length>0&&(vmOutput.refs=vmOutput.refs.substring(0,vmOutput.refs.length-1))},output:()=>{for(const t in vmOutput){const e=vmOutput[t];e&&(outputSrciptContent=outputSrciptContent.concat(e+"\n\n"))}}},utilMethods={addImport:(t,e)=>{if("string"===typeof t&&"string"===typeof e){const s=vmContent.import[t];null!==s&&void 0!==s&&s.includes(e)||s.push(e)}},getIndexArr:(t,e)=>{const s=[];if(t instanceof Array&&"string"===typeof e)for(const n of t){const t=e.indexOf(n.str,n.start);-1!==t&&s.push(n.append?t+ +n.str.length:t)}return s},getObjectStr:(t,e=[])=>{let s="";if("function"===typeof t)s=utilMethods.getFunctionStr(t).main;else if(t instanceof Array){for(const e of t)s=s.concat(utilMethods.getObjectStr(e)+", ");s=`[${s.substring(0,s.length-2)}]`}else if("object"===typeof t&&null!==t){for(const n in t)e.includes(n)||(s=s.concat(`${n}: ${utilMethods.getObjectStr(t[n])},\n`));s=Object.keys(t).length>0?`{\n${s.substring(0,s.length-2)}\n}`:"{}"}else s="string"===typeof t?`'${t}'`:""+t;return s},getFunctionStr:t=>{const e={main:"",arg:"",body:""};if("function"===typeof t){e.main=t.toString();for(const t of vmKeys.props)e.main=e.main.replaceAll("this."+t,"props."+t);for(const t of vmKeys.data)e.main=e.main.replaceAll("this."+t,"data."+t);for(const t of vmKeys.computed)e.main=e.main.replaceAll("this."+t,t+".value");for(const t of vmKeys.methods)e.main=e.main.replaceAll("this."+t,""+t);for(const t of vmKeys.vmMethods){let s=!1;e.main.includes("this."+t)&&(e.main=e.main.replaceAll("this."+t,"$vm.proxy."+t),s=!0),s&&(utilMethods.addImport("vue","getCurrentInstance"),vmContent.use.vm="const $vm = getCurrentInstance()")}if(e.main.includes("this.$attrs")&&(utilMethods.addImport("vue","useAttrs"),e.main=e.main.replaceAll("this.$attrs","attrs"),vmContent.use.attrs="const attrs = useAttrs()"),e.main.includes("this.$slots")&&(utilMethods.addImport("vue","useSlots"),e.main=e.main.replaceAll("this.$slots","slots"),vmContent.use.slots="const slots = useSlots()"),e.main.includes("this.$router")&&(utilMethods.addImport("vue-router","useRouter"),e.main=e.main.replaceAll("this.$router","router"),vmContent.use.router="const router = useRouter()"),e.main.includes("this.$route")&&(utilMethods.addImport("vue-router","useRoute"),e.main=e.main.replaceAll("this.$route","route"),vmContent.use.route="const route = useRoute()"),e.main.includes("this.$store")&&(utilMethods.addImport("vuex","useStore"),e.main=e.main.replaceAll("this.$store","store"),vmContent.use.store="const store = useStore()"),e.main.includes("this.$nextTick")&&(utilMethods.addImport("vue","nextTick"),e.main=e.main.replaceAll("this.$nextTick","nextTick")),e.main.includes("this.$set")&&(utilMethods.addImport("vue","set"),e.main=e.main.replaceAll("this.$set","set")),e.main.includes("this.$delete")&&(utilMethods.addImport("vue","del"),e.main=e.main.replaceAll("this.$delete","del")),e.main.includes("this.$emit")){const t=e.main.split("this.$emit");if(t.length>1)for(let s=1;s<t.length;s++){const t=Math.min(...utilMethods.getIndexArr([{str:"this.$emit('",start:0,append:!0},{str:'this.$emit("',start:0,append:!0},{str:"this.$emit(`",start:0,append:!0}],e.main)),s=Math.min(...utilMethods.getIndexArr([{str:"'",start:t},{str:'"',start:t},{str:"`",start:t}],e.main)),n=e.main.substring(t,s);n&&(vmContent.emits.includes(n)||vmContent.emits.push(n),e.main=e.main.replace("this.$emit","emit"))}}if(e.main.includes("this.$refs")){const t=e.main.split("this.$refs");if(t.length>1)for(let s=1;s<t.length;s++){const t=Math.min(...utilMethods.getIndexArr([{str:"this.$refs.",start:0,append:!0}],e.main)),s=Math.min(...utilMethods.getIndexArr([{str:".",start:t},{str:"?.",start:t},{str:"[",start:t}],e.main)),n=e.main.substring(t,s);n&&(vmContent.refs.includes(n)||vmContent.refs.push(n),e.main=`${e.main.substring(0,s)}.value${e.main.substring(s,e.main.length)}`,e.main=e.main.replace("this.$refs.",""))}utilMethods.addImport("vue","ref")}e.arg=e.main.substring(e.main.indexOf("(")+1,Math.min(...utilMethods.getIndexArr([{str:") {",start:0,append:!1},{str:") =>",start:0,append:!1}],e.main))),e.body=e.main.substring(Math.min(...utilMethods.getIndexArr([{str:") {",start:0,append:!0},{str:"=> {",start:0,append:!0}],e.main))-1,e.main.length)}return e},getPropsStr:(t,e=!1)=>{let s="";if("function"!==typeof t||e)if(t instanceof Array){for(const e of t)s=s.concat(utilMethods.getPropsStr(e)+", ");s=`[${s.substring(0,s.length-2)}]`}else if("object"===typeof t&&null!==t){for(const e in t)s=s.concat(`${e}: ${utilMethods.getPropsStr(t[e],["default","validator"].includes(e))},\n`);s=Object.keys(t).length>0?`{\n${s.substring(0,s.length-2)}\n}`:"{}"}else s="string"===typeof t?`'${t}'`:""+t;else s=""+t.name;return s},setDataStr:(t,e=0)=>{if("object"===typeof t&&null!==t&&"number"===typeof e&&!isNaN(e))for(const s in t){const n=t[s];if("function"===typeof n){const t=utilMethods.getFunctionStr(n),a=vmKeys.data.some(e=>t.body.includes("data."+e));if(a){const t=vmOutput.data.indexOf(s,e),n=vmOutput.data.substring(t,vmOutput.data.length),a=t+Math.min(...utilMethods.getIndexArr([{str:") {",start:0,append:!0},{str:"=> {",start:0,append:!0}],n));vmOutput.data=`${vmOutput.data.substring(0,a)}\nconst data = useData()${vmOutput.data.substring(a,vmOutput.data.length)}`,vmContent.use.data="const useData = () => data"}}else if("object"===typeof n&&null!==n){const t=vmOutput.data.indexOf(s,e);utilMethods.setDataStr(n,t)}}}};for(const t in vmSetContentMethods)"function"===typeof vmSetContentMethods[t]&&vmSetContentMethods[t]();return outputSrciptContent=jsBeautify(outputSrciptContent,jsBeautifyOptions),options.isDebug&&console.log("Vue2ToCompositionApi",{entrySrciptContent:entrySrciptContent,outputSrciptContent:outputSrciptContent,vmBody:vmBody,vmContent:vmContent,vmOutput:vmOutput,vmKeys:vmKeys}),outputSrciptContent}catch(err){throw new Error(err)}};__webpack_exports__["a"]=Vue2ToCompositionApi},9479:function(t,e,s){},c7f5:function(t,e,s){t.exports=s.p+"static/img/props_data_1.99e83c3a.png"},cae2:function(t,e,s){},d46a:function(t,e,s){},d4c2:function(t,e,s){t.exports=s.p+"static/img/computed_0.df6e8558.png"},de07:function(t,e,s){t.exports=s.p+"static/img/watch_1.c97df83f.png"},e5e8:function(t,e,s){t.exports=s.p+"static/img/methods_0.f794e746.png"},e669:function(t,e,s){t.exports=s.p+"static/img/methods_1.425eb42b.png"},e9a6:function(t,e,s){"use strict";s("9479")},ea30:function(t,e,s){"use strict";s("d46a")},f26b:function(t,e,s){t.exports=s.p+"static/img/props_data_0.6e27f8b3.png"}});