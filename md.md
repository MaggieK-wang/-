1. search和match的参数问题
search和match会把字符串转换为正则
2. match返回结果的格式，与正则对象是否有修饰符g有关
3. exec比match更强大
当正则没有 g 时，使用 match 返回的信息比较多。但是有 g 后，就没有关键的信息 index 了。
而 exec 方法就能解决这个问题，它能接着上一次匹配后继续匹配
4. 修饰符g 对exec和test的影响
5. test整体匹配时需要使用^和$
6. split
两个参数，，第一个就是分割符，第二次就是表示数组的最大长度
$1,$2,…,$99 匹配第 1-99 个 分组里捕获的文本
$& 匹配到的子串文本
$` 匹配到的子串的左边文本
$' 匹配到的子串的右边文本
$$ 美元符号

