(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{213:function(a,t,e){"use strict";e.r(t);var r=e(0),s=Object(r.a)({},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"表达式语法说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#表达式语法说明","aria-hidden":"true"}},[a._v("#")]),a._v(" 表达式语法说明")]),a._v(" "),e("h2",{attrs:{id:"基本用法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本用法","aria-hidden":"true"}},[a._v("#")]),a._v(" 基本用法")]),a._v(" "),e("p",[a._v("本项目中表达式引擎也支持模板的方式，例如动态拼接url")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("https://www.xxx.com/${path}/q?=keyword=${keyword}\n")])])]),e("h2",{attrs:{id:"运算符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#运算符","aria-hidden":"true"}},[a._v("#")]),a._v(" 运算符")]),a._v(" "),e("p",[a._v("模板语言支持大多数Java运算符。这些运算符的优先级也与Java中的相同。")]),a._v(" "),e("h2",{attrs:{id:"类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#类型","aria-hidden":"true"}},[a._v("#")]),a._v(" 类型")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("byte ${123b}\nshort ${{123s}\nint ${123}\nlong ${123l}\nfloat ${123f}\ndouble ${123d}\nstring ${'hello'}\nstring ${\"hello\"}\n")])])]),e("p",[a._v("同时也支持定义Map和List")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('${{key : "value"}}\n${[1,2,3,4,5]}\n')])])]),e("h2",{attrs:{id:"一元运算符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一元运算符","aria-hidden":"true"}},[a._v("#")]),a._v(" 一元运算符")]),a._v(" "),e("p",[a._v("您可以通过一元运算"),e("code",[a._v("-")]),a._v("符将数字取反，例如"),e("code",[a._v("${-234}")]),a._v("。要取反布尔表达式，可以使用"),e("code",[a._v("!")]),a._v("运算符，例如"),e("code",[a._v("${!true}")]),a._v("。")]),a._v(" "),e("h2",{attrs:{id:"算术运算符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#算术运算符","aria-hidden":"true"}},[a._v("#")]),a._v(" 算术运算符")]),a._v(" "),e("p",[a._v("支持常见的算术运算符，例如"),e("code",[a._v("${1 + 2 * 3 / 4 % 2}")])]),a._v(" "),e("h2",{attrs:{id:"比较运算符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#比较运算符","aria-hidden":"true"}},[a._v("#")]),a._v(" 比较运算符")]),a._v(" "),e("p",[e("code",[a._v("${23 < 34}")]),a._v("，"),e("code",[a._v("${23 <= 34}")]),a._v("，"),e("code",[a._v("${23 > 34}")]),a._v("，"),e("code",[a._v("${23 >= 34}")]),a._v("，"),e("code",[a._v("${ true != false }")]),a._v("，"),e("code",[a._v("${23 == 34}")])]),a._v(" "),e("p",[a._v("比较运算符结果为"),e("code",[a._v("boolean")]),a._v("类型")]),a._v(" "),e("h2",{attrs:{id:"逻辑运算符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#逻辑运算符","aria-hidden":"true"}},[a._v("#")]),a._v(" 逻辑运算符")]),a._v(" "),e("p",[a._v("除了一元运算"),e("code",[a._v("!")]),a._v("符，您还可以使用"),e("code",[a._v("&&")]),a._v("和"),e("code",[a._v("||")]),a._v("。就像Java中一样，运算符也是一种短路运算符。如果"),e("code",[a._v("&&")]),a._v("左边计算为"),e("code",[a._v("false")]),a._v("，则不会计算右边。如果"),e("code",[a._v("||")]),a._v("左侧为true，则不会计算右边")]),a._v(" "),e("h2",{attrs:{id:"三元运算符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三元运算符","aria-hidden":"true"}},[a._v("#")]),a._v(" 三元运算符")]),a._v(" "),e("p",[a._v("三元运算符是"),e("code",[a._v("if")]),a._v("语句的简写形式，其工作方式类似于Java中，例如"),e("code",[a._v('${true ? "yes" : "no"}')])]),a._v(" "),e("h2",{attrs:{id:"变量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#变量","aria-hidden":"true"}},[a._v("#")]),a._v(" 变量")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("${var}\n")])])]),e("p",[a._v("通过"),e("code",[a._v("${变量名}")]),a._v("调用")]),a._v(" "),e("h2",{attrs:{id:"调用方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#调用方法","aria-hidden":"true"}},[a._v("#")]),a._v(" 调用方法")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("${extract.xpath(resp.html,'//div[@id=abc]').regx('/\\\\d/').toInt()}\n")])])]),e("p",[a._v("通过"),e("code",[a._v("${变量.方法名(参数1,参数2,....)}")]),a._v("进行调用")]),a._v(" "),e("h2",{attrs:{id:"数组和map"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数组和map","aria-hidden":"true"}},[a._v("#")]),a._v(" 数组和Map")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('${myArray[2]} ${myArray[indexVar]} ${myMap.get("key")} ${myMap["key"]} ${myMap.get(keyVar)} ${myMap[keyVar]}\n')])])]),e("h2",{attrs:{id:"链式调用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#链式调用","aria-hidden":"true"}},[a._v("#")]),a._v(" 链式调用")]),a._v(" "),e("p",[a._v("与Java中一样，您可以无限嵌套成员，数组元素和映射访问")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('${myObject.aField[12]["key"].someMethod(1, 2).anotherMethod()}\n')])])]),e("p",[e("code",[a._v("${extract.xpath(resp.html,'//div[@id=abc]').regx('/\\\\d/').toInt()}")])])])},[],!1,null,null,null);t.default=s.exports}}]);