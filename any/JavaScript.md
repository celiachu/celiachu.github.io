# JavaScript 基础

## 关键字

### let和var

使用var和let声明变量，函数内声明的变量作用也是局部的只能在函数内访问，如果在{}内使用var声明的是全局变量，在外部依然能够访问到，而在{}内使用lei声明变量实现块级作用域，则{}外不能访问到。

```javascript
var x = 10;
// 输出x为10
{
    var x = 3;
    // 这里输出x为3；
}
// 这里输出x为3
```

若用let声明

```javascript
let x=10;
//这里输出x为10
{
    let x =3;
    //这里输出为3
}
// 这里输出x为10
```

### const

const声明的是一个或者多个常量，声明前必须进行初始化，切初值不可再修改，并且他也是块级作用域

## 数据类型

* [String 字符串](#2.1)
* [Number 数值](#2.2)
* [Boolean 布尔值](#2.3)
* [Null 空值](2.4)
* [Undefined 未定义](#2.5)
* [Object 对象](2.6)

可以使用一个运算符typeof来检查一个变量的类型

* 检查字符串时，会返回String
* 检查数值时，会返回number

### 字符串

""使用引号内部的就是字符串

### Number

比最大值大表示为正无穷:Infinity
    var a = 1;
    a = Number.MAX_VALUE;
    console.log(a);
Number.MIN_VALUE 大于0的最小值
NaN 表示Not A Number

使用JS进行浮点元素，可能得到一个不精确的结果。
千万不要使用JS进行对精确度要求比较高的运算。

### Boolean

两个，true，false
    var bool = true;
    console.log(typeof bool);

### Null和Undefind

类型只有null
    var a = null；
    console.log(typeof a);
返回Object

声明一个变量但是不给他赋值时，他的值就是undifind;

### 强制数据类型转换

* 其他数据类型转换为String

1. 调用被转换数据类型的toString()方法，
该方法不会影响到原变量，他会转换的结果返回
但是注意：null和undefind没有toString
    var a = 123;
    a = a.toString;
    a.toString();
    console.log(a);
    console.log(typeof a);

2. 调用String()函数 ，并将被使用的变量作为参数
使用String()函数做强制类型转换时
对于Number和Boolean实际上就是调用的toString()方法
但是对于null和undefined就不会调用
它会将null直接转换为字符串"null"

    a = String(a);

* 其他数据类型转换为Number

1. 使用Number()函数

    var a = "123";
    a = Number(a);
字符串转数值：如果是纯数字则直接转换数字
如果字符串有非数字的内容，则转换NaN
如果字符串为空串或者全是空格，则转换为0
布尔转数值：
true 1 false 0

2. 应对字符串转换，parseInt()函数
可以将一个字符串中的有效整数内容取出来，然后转换为Number
parseFloat()
可以获得有效的小数

* 其他数据类型
十六进制表示：0x开头
八进制：0开头
二进制：0b开头。不是所有浏览器都支持

* 其他数据类型转换为Boolean
使用Boolean()函数
a = Boolean(a);
数字除了0和NaN都是true
字符串-->布尔除了空串，其余都是true。
对象也会转换为true
任意的数据类型进行两次非运算，可将其转换为布尔值

### 对象

#### array 数组对象

```javascript
var cars = ["id""name""color"];
```

#### Math对象

用于执行数学任务

```javascript
var pi_value=Math.PI;
var sqrt_value=Math.sqrt(15)
```

通过将Math当作对象使用调用它所有的属性和方法

## 运算符与表达式

### 基本运算符

也叫操作符

* 当对非Number类型的值进行运算的时候，会将这些值转换为Number，任何值和NaN做运算都得NaN
* \+ 可以对两个值进行加法运算，并将结果返回，字符串加法会做拼串
* \- 减法运算，所有类型转换为Number进行减法运算
* \% 取余数

### 一元运算符

只需要一个操作数

```javascript
    var a = 123;
    a = -a;
    console.log("a = "+a);
```

可以对其他数据类型使用\+号来将其转换为Number

* 自增++
* 自减--

### 逻辑运算符

三种逻辑运算符！（非）、&&（与）、||（或）
js的或属于短路的或，第一个值为true则不会检查第二个的值

#### 非布尔值的情况

先将其转换为布尔值进行运算，并返回原值

``` javascript
    var result = 1 && 2;
```

&& 与：
如果两个值都为true则返回后面的值
两个值有false则返回靠前的值
|| 或：
如果第一个值为true，直接返回第一个的值
第一个的值为false，则直接返回第二个的值

### 赋值运算符

符号右侧的值赋值给符号左侧的变量 =
\+=
 a = a + 5 等价于 a += 5；
-=
\*=

### 关系运算符

比较两个值之间的大小关系，如果关系成立返回true，不成立返回false
\>  大于号 \<小于号

* 判断符号左侧的值是否大于/小于右侧

### 相等运算符

#### ==

如果相等返回true，不等返回false
null == undefined //true
NaN不和任何值相等

* isNaN（）函数检查一个数是否是NaN

#### ！=

不相等返回true，否则返回false
不相等也会对变量进行自动的类型转换，如果转换后相等他也返回false

#### 全等于\===

它不会做自动的类型转换，如果两个的类型不同，直接返回false

#### 不全等！==

不会做自动的类型转换，如果两个值的类型不同直接返回false

### 条件运算符

三元运算符

* 条件表达式？语句1：语句2；
* 流程

  * 条件运算符在执行时，首先对表达式进行求值，
    1. 如果该值为true，则执行语句1，并返回执行结果
    2. 如果该值为fales，则执行语句2，并返回执行结果

```javascript
var a = 10;
var b = 20;
a > b ? alert("a大"):alert("b大")；
var max = a > b ? a : b
```

如果条件表达式的求值结果式一个非布尔值，会将其转会为布尔值

### 运算符优先级

运算符 使用分割多个语句

### 表达式

#### new运算符

创建了一个用户定义的对象类型的实例或具有构造函数的内置对象的实例

#### this

* 方法中表示方法所属对象
* 如果在函数中使用或者单独使用，是全局变量

## 代码块

我们的程序是从上到下顺序一条一条执行的
JS中使用{}来为语句进行分组

* 同一个{}钟的语句我们称之为是一组语句
* 要么都执行，要么都不执行
* 一个{}中的代码称之为代码块
* 代码块后面就不用编写;
* 只进行分组
