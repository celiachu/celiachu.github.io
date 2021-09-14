# 初识C++

## C与C++

C++是在C语言的基础上开发的，C++是一门面向对象的编程语言，那么他就有继承，封装，多态。理解类（Class）和对象（Object）概念

Class类似与结构体（Struct）的升级，包含若干成员变量，每个变量拥有相同的性质，Class里面的成员还可以是函数，通过类定义出来的变量叫做“对象”

``` C++
#include <stidio.h>

// 通过class定义关键类
class Student{
    public:
        // 类的成员变量
        char *name;
        int age;
        float score;

        // 类函数

        void say(){
            printf("%s的年龄是 %d，成绩是 %f\n", name, age, score);
        }
};

int main(){
    class Student stul;
    stul.name = "小明";
    stul.age = 15；
    stul.score = 92.5f;
    stul.say();

    return();
```

通过类名创建对象叫做 **对象类的实例化**

C++ 比C多封装了一层类（Class）

## C++头文件和std命名空间

旧的C++头文件已提出不再被支持，遂