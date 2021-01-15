// 正则表达式位置匹配
/**
 * ^(脱字符)匹配开头，在多行匹配中匹配行行开头
 * $ 匹配结尾，在多行匹配中匹配结尾
 * 多行匹配符m
 */
var result = "hello".replace(/^|$/g, '#');
var result = "hello\nA\nI\nHHH".replace(/^|$/gm, '#');
// console.log(result);
// => "#hello#"

/** \b和\B
 * \b是单词边界，是\w和\W之间的位置，\w与^之间的位置
 * \B就是\b的反面意思，非单词边界
 */
var result = "[JS] Lesson_01.mp4".replace(/\b/g, '#');
// console.log(result);
// => "[#JS#] #Lesson_01#.#mp4#"

var result = "[JS] Lesson_01.mp4".replace(/\B/g, '#');
// console.log(result);
// => "#[J#S]# L#e#s#s#o#n#_#0#1.m#p#4"

/**
 * (?=p)，其中 p 是一个子模式，即 p 前面的位置，或者说，该位置后面的字符要匹配 p。
 * 如果是l 那么(?=l)
 * (?!p),就是(?=p)的反面意思
 * */
var result = "hello".replace(/(?=l)/g, '#');
// console.log(result);
// => "he#l#lo"
var result = "hello".replace(/(?!l)/g, '#');
// console.log(result);
// => "#h#ell#o#"

/**
 * 数字的千位分隔符
 * (?=\d{3}$)
 * (?=\d{3}$) 匹配 \d{3}$ 前面的位置。而 \d{3}$ 匹配的是目标字符串最后那 3 位数字。
 * 因为逗号出现的位置，要求后面 3 个数字一组，也就是 \d{3} 至少出现一次。
 * 也可以写成 /\B(?=(\d{3})+\b)/g。
 */
var result = "112345678".replace(/(?=(\d{3})+$)/g, ',')
console.log(result);
// => ",112,345,678"
/*仅仅表示把从结尾向前数，一但是 3 的倍数，就把其前面的位置替换成逗号。因此才会出
现这个问题*/
var regex = /(?!^)(?=(\d{3})+$)/g;//匹配这个位置不是开头
// var result = "112345678".replace(regex, ',')
// console.log(result);

/** 密码校验
 * 必须包括两种字符  regex = /^[0-9A-Za-z]{6,12}$/;
 * 判断包含一种字符  regex = /(?=.*[0-9])^[0-9A-Za-z]{6,12}$/
 * 同时包含具体两种字符  regex = /(?=.*[0-9])(?=.*[a-z])^[0-9A-Za-z]{6,12}$/;
 */


var regex = /((?=.*[0-9])|(?=.*[a-z]))/g
var result = "SS"
console.log(regex.test(result));


/**
 * /(?=.*[0-9])^[0-9A-Za-z]{6,12}$/
 * 表示开头前面还有个位置（当然也是开头，即同一个位置，想想之前的空字符类比）。
(?=.*[0-9]) 表示该位置后面的字符匹配 .*[0-9]，即，有任何多个任意字符，后面再跟个数字。
翻译成大白话，就是接下来的字符，必须包含个数字
 */
