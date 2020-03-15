(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{239:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"redis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis"}},[t._v("#")]),t._v(" redis")]),t._v(" "),a("h2",{attrs:{id:"引入redis插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引入redis插件"}},[t._v("#")]),t._v(" 引入Redis插件")]),t._v(" "),a("ol",[a("li",[t._v("首先到码云下载插件"),a("a",{attrs:{href:"https://gitee.com/jmxd/spider-flow-redis",target:"_blank",rel:"noopener noreferrer"}},[t._v("点击下载"),a("OutboundLink")],1),t._v("到本地并导入到工作空间或安装到maven库")]),t._v(" "),a("li",[t._v("在spider-flow/spider-flow-web/pom.xml中引入插件")])]),t._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 引入redis插件 --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.spiderflow"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("spider-flow-redis"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("h2",{attrs:{id:"定义redis数据源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定义redis数据源"}},[t._v("#")]),t._v(" 定义Redis数据源")]),t._v(" "),a("ul",[a("li",[t._v("host：redis host/ip")]),t._v(" "),a("li",[t._v("alias(别名)：特别重要，后续使用时都会使用到别名")]),t._v(" "),a("li",[t._v("port：redis端口号")]),t._v(" "),a("li",[t._v("密码：redis密码，没有不填即可")]),t._v(" "),a("li",[t._v("数据库索引，默认为0")]),t._v(" "),a("li",[t._v("最大连接数，默认为8")]),t._v(" "),a("li",[t._v("最大空闲连接数，默认为8")]),t._v(" "),a("li",[t._v("最小空闲连接数，默认为0")])]),t._v(" "),a("h2",{attrs:{id:"开始使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开始使用"}},[t._v("#")]),t._v(" 开始使用")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("可以在所有支持表达式的地方使用")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//其中xxxx是之前配置的别名")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//调用redis set命令")]),t._v("\n$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("redis"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("xxxx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'key'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'value'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//调用redis get命令")]),t._v("\n$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("redis"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("xxxx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'key'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//调用redis setex命令")]),t._v("\n$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("redis"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("xxxx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'key'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);