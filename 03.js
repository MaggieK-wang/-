//正则表达式括号的作用
/**
 * 分组
 * 分支
 * 也可以使用构造函数的全局属性 $1 至 $9 来获取
 */
var reg=/\d{4}-\d{2}-\d{2}/g;
var regex = /(\d{4})-(\d{2})-(\d{2})/;
var string = "2017-06-12";
console.log( string.match(regex));
console.log( string.match(reg));
// match中是否有g是不一样的
//另外也可以使用正则实例对象的 exec 方法：
console.log(regex.exec(string));
//替换
regex.test(string); 
console.log(RegExp.$1); // "2017"
console.log(RegExp.$2); // "06"
console.log(RegExp.$3); // "12"
// 格式替换
var regex = /(\d{4})-(\d{2})-(\d{2})/;
var string = "2017-06-12";
var result = string.replace(regex, "$1/$2/$3");
console.log(result);

/** 反向引用
 * 其中 / 和 . 需要转义。虽然匹配了要求的情况，但也匹配 "2016-06/12" 这样的数据
 * 注意里面的 \1，表示的引用之前的那个分组 (-|\/|\.)。不管它匹配到什么（比如 -），\1 都匹配那个同 样的具体某个字符。 我们知道了 \1 的含义后
 * 那么 \2 和 \3 的概念也就理解了，即分别指代第二个和第三个分组。
 * 
 */
var regex = /\d{4}(-|\/|\.)\d{2}(-|\/|\.)\d{2}/;
var regex = /\d{4}(-|\/|\.)\d{2}\1\d{2}/;
var string1 = "2017-06-12";
var string2 = "2017/06/12";
var string3 = "2017.06.12";
var string4 = "2016-06/12";
console.log( regex.test(string1) ); // true
console.log( regex.test(string2) ); // true
console.log( regex.test(string3) ); // true
console.log( regex.test(string4) ); // true

//括号嵌套
//以左括号（开括号）为准
var regex = /^((\d)(\d(\d)))\1\2\3\4$/;
var string = "1231231233";
console.log(regex.exec(string));


