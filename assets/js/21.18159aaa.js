(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{358:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("blockquote",[a("p",[a("code",[t._v(":nth-child(n)")]),t._v(" 选择器匹配属于其父元素的第 n 个子元素，借助这个特性，可以实现选择第偶数次序的子元素、选择一定范围内的子元素等“"),a("strong",[t._v("批量选择操作")]),t._v("”。\n而它比较难理解的地方是参数表达式中"),a("code",[t._v("n")]),t._v("的含义，以及如何进行数学运算，这也是面试中考察的难点。")])]),t._v(" "),a("h3",{attrs:{id:"nth-child-介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nth-child-介绍","aria-hidden":"true"}},[t._v("#")]),t._v(" nth-child 介绍")]),t._v(" "),a("p",[a("code",[t._v(":nth-child(n)")]),t._v(" 选择器匹配属于其父元素的第 n 个子元素。")]),t._v(" "),a("p",[t._v("使用它的时候需要注意几点：")]),t._v(" "),a("ol",[a("li",[t._v("第 n 个子元素的"),a("strong",[t._v("计数是从 1 开始")]),t._v("，不是从 0 开始的")]),t._v(" "),a("li",[t._v("选择表达式中的"),a("strong",[t._v("字母"),a("code",[t._v("n")]),t._v("代表 ≥0 的整数")])])]),t._v(" "),a("h3",{attrs:{id:"常见用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见用法","aria-hidden":"true"}},[t._v("#")]),t._v(" 常见用法")]),t._v(" "),a("p",[t._v("它有 3 种常见用法：")]),t._v(" "),a("ul",[a("li",[t._v("直接指明 n 的值："),a("code",[t._v("span:nth-child(1)")])]),t._v(" "),a("li",[t._v("用"),a("code",[t._v("even")]),t._v("/"),a("code",[t._v("odd")]),t._v("分别代表偶数 / 奇数："),a("code",[t._v("span:nth-child(even)")])]),t._v(" "),a("li",[t._v("借助"),a("code",[t._v("n")]),t._v("自定义选择范围：\n"),a("ul",[a("li",[a("code",[t._v("nth-child(2n)")]),t._v("/"),a("code",[t._v("nth-child(2n + 1)")]),t._v("：偶数 / 奇数")]),t._v(" "),a("li",[a("code",[t._v("nth-child(n + 3)")]),t._v("：第 3 个开始到最后")])])])]),t._v(" "),a("h3",{attrs:{id:"进阶用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进阶用法","aria-hidden":"true"}},[t._v("#")]),t._v(" 进阶用法")]),t._v(" "),a("p",[t._v("上面的用法中的第三部分，一般都是使用"),a("code",[t._v("n")]),t._v("，而有时候也会用到"),a("code",[t._v("-n")]),t._v("，比如选取前 2 个元素就是："),a("code",[t._v("nth-child(-n + 2)")]),t._v("。")]),t._v(" "),a("p",[a("strong",[t._v("为什么是这样呢")]),t._v("？其实运算："),a("code",[t._v("-n + 2 ≥ 0")]),t._v("，就可以推出"),a("code",[t._v("n ≤ 2")]),t._v("。")]),t._v(" "),a("p",[t._v("由此，结合两者自动取交集，我们就可以限制选择某一范围。比如选择第 6 个到第 9 个，就是："),a("code",[t._v(":nth-child(-n+9):nth-child(n+6)")])]),t._v(" "),a("p",[a("strong",[t._v("注意")]),t._v("：不是"),a("code",[t._v("nth-child(2 - n)")]),t._v("，"),a("code",[t._v("-n")]),t._v("要写在一起！")]),t._v(" "),a("h3",{attrs:{id:"真正理解“子元素”的含义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#真正理解“子元素”的含义","aria-hidden":"true"}},[t._v("#")]),t._v(" 真正理解“子元素”的含义")]),t._v(" "),a("p",[t._v("还是"),a("code",[t._v("nth-child")]),t._v("选择器，那么下面这段代码的样式是什么呢？")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token style"}},[a("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n      "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("span:nth-child(2n)")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    ")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("1"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("2"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("3"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br")])]),a("p",[t._v("答案是："),a("code",[t._v("1")]),t._v("是黑色的，"),a("code",[t._v("2")]),t._v("和"),a("code",[t._v("3")]),t._v("都是红色的。")]),t._v(" "),a("p",[t._v("因为"),a("code",[t._v("<span>2</span>")]),t._v("是其父节点的第 2 个（偶数）子元素。"),a("code",[t._v("<span>3</span>")]),t._v("是其父节点的第 2 个子元素，第一个是"),a("code",[t._v("<div></div>")]),t._v("。")]),t._v(" "),a("p",[t._v("所以辨别是否匹配的关键是：找到父元素，然后再计算在父元素中的位置。")])])},[],!1,null,null,null);s.default=e.exports}}]);