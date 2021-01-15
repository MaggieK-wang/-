//正则表达式字符
/**
 * {m,n},m出现最少次数，n出现最多次数
 * g===globel
 * [abc],表示匹配一个字符，'a','b','c'
 * 范围组
 * [^abc]表示取反，排除字符串
 * 常见的缩写  
 * \d表示[0-9]表示一位数字  \D表示[^0-9] 表示除数字以外的任意字符串 
 * \w表示[0-9a-zA-Z_]表示数字、大小写 \W 非单词字符
 * \s表示 [ \t\v\n\r\f]。表示空白符，包括空格、水平制表符、垂直制表符、换行符、回车符、换页 符。记忆方式：s 是 space 的首字母，空白符的单词是 white space。 
 * \S 表示非空白fu
 * . 表示 [^\n\r\u2028\u2029]。通配符，表示几乎任意字符。换行符、回车符、行分隔符和段分隔符
除外。 记忆方式：想想省略号 … 中的每个点，都可以理解成占位符，表示任何类似的东西

 * 如果要匹配任意字符，可以使用 [\d\D]、[\w\W]、[\s\S] 和 [^] 中任何的一个。
 */
var reg1=/ab{2,5}c/g;  
const string="abc abbc abbbc abbbbc abbbbbbbc";
// console.log(string.match(reg));

// 范围组
const reg2=/[12345abcdefHIJKLM]/g
const reg3=/[^(1-5a-fH-M)]/g
const str1="1234567890abcdefghijklmnEIGKJSDJC"
// console.log(str1.match(reg2));
// console.log(str1.match(reg3));

/** 量词
 * {m,}表示至少出现 m 次。
 * {m} 等价于 {m,m}，表示出现 m 次。
 * ? 等价于 {0,1}，表示出现或者不出现。等价于：‘有吗？’ ?表示惰性量词
 * + 等价于 {1,}，表示出现至少一次。
 * * 等价于 {0,}，表示出现任意次，有可能不出现。
 */
 const reg4=/\d{2,5}/g;
 const str3="123 123 134556 6 8845 68"
//  console.log(str3.match(reg4));
// 其中 /\d{2,5}?/ 表示，虽然 2 到 5 次都行，当 2 个就够的时候，就不再往下尝试了。
 const reg5=/\d+?/g;
console.log(str3.match(reg5));

/** 多选分支
 * (p1|p2|p3)，其中 p1、p2 和 p3 是子模式，用 |（管道符）分隔，表示其中任何之一。
 * 但是分支也是惰性的，如果满足了管道符前面的一个后面的就不在尝试了
 */
  const reg6=/good|nice/g
  const str4="good idea,nice try"
//   console.log(str4.match(reg6));

var regex = /#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})/g;
// => ["#ffbbad", "#Fc01DF", "#FFF", "#ffE"]
// var regex = /#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})/g;
//=> [ '#ffb', '#Fc0', '#FFF', '#ffE' ]
var str5 = "#ffbbad #Fc01DF #FFF #ffE";
// console.log( str5.match(regex) );

// 时间匹配
/**
 * 四位数字，，第一位数字可以为 [0-2]。
 * 当第 1 位为 "2" 时，第 2 位可以为 [0-3]，其他情况时，第 2 位为 [0-9]。
 * 第 3 位数字为 [0-5]，第4位为 [0-9]
 * ^ $ 表示字符串的开头和结尾
 */
var regex1 = /^([01][0-9]|[2][0-3]):[0-5][0-9]$/;
// console.log( regex1.test("23:59") );
// console.log( regex1.test("02:07") );

// 日期匹配
/**
 * 年，四位数字即可，可用 [0-9]{4}
 * 月，共 12 个月，分两种情况 "01"、"02"、…、"09" 和 "10"、"11"、"12"，可用 (0[1-9]|1[0-2])。
 * 日，最大 31 天，可用 (0[1-9]|[12][0-9]|3[01])。
 */
var regex2=/^([0-9]{4})-0[1-9]|1[0-2]-0[1-9]|[12][0-9]|[01]$/
// console.log( regex2.test("2017-06-10") );

// 匹配id
/* 因为 . 是通配符，本身就匹配双引号的，而量词 * 又是贪婪的，当遇到 container 后面双引号时，是不会
停下来，会继续匹配，直到遇到最后一个双引号为止。*/
var regex = /id=".*?"/g
var str6 = '<div id="container" class="main"></div>';
// console.log(str6.match(regex)[0]);