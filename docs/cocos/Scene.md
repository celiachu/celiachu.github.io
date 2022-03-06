# 场景

一般来说在一个scene（场景）中只会存在一个Layer（层），所以场景的生命周期也就是层的生命周期。

## 函数

1. ctor()==> 构造函数，在初始化层的时候调用
2. onEnter()==> 进入层的时候调用的函数，添加
3. onEnterTranslationDidStart() 进入层并且过渡动画开始的时候调用的方法
4. onEnterTranslationDidFinish( 进入层并且过渡动画结束时候调用的方法)
5. onExit()==> 退出层的时候调用的函数

## 实例化

创建了两个场景

``` JavaScript
var boot = {};
boot.onStart = function () {
    cc.director.runScene(new Scene1());
};

var Scene1 = cc.Scene.extend({
    ctor: function () {
        this._super();
        // this.schedule(this.update.bind(this), 0.05);
        this.init();
        setTimeout(() => {
            this.onRunScene(new Scene2());
        }, 100);
    },

    onEnter: function () {
        console.log("Hello World");
    },

    init: function () {

    },

    update: function (dt) {
    },

    onRunScene: function (scene) {
        cc.director.runScene(scene);
    },
});


var Scene2 = cc.Scene.extend({
    ctor: function () {
        this._super();
        // this.init();
    },

    onEnter: function () {
        this._super();
        this.init();
        console.log("scene2");
        var s = cc.director.getWinSize();
        let sp = new cc.Sprite("res/grossini.png");
        sp.setPosition(cc.p(cc.winSize.width/2,cc.winSize.height/2));
        this.addChild(sp);
        // let node = new cc.Node();
        // node.addChild(sp);
        // node.x = cc.winSize.width / 2;
        // node.y = cc.winSize.height / 2;
        // this.addChild(node);
    },

    dd:2,
});
```

## 精灵控制

### 旋转

cc.rotateTo() 旋转到指定角度
cc.rotateBy(duration，deltAngle) 从当前角度旋转到指定角度
第一个参数是完成动作需要的时间，第二个参数是旋转的角度，正的为顺时针，负的为逆时针。

### 比例

cc.scaleTo() 变化为原始的多少倍
cc.scaleBy() 变化为现有的多少倍，参数同样是动作时间和倍数，正数为放大，负数为缩小。

### 执行动作

精灵按顺序执行动作
sprite.runAction(seq.repeatForever());

### 透明度

cc.fadeTo() 对象透明度到某一值
cc.fadeIn() 设置透明度隐藏对象
cc.fadeOut() 设置透明度显示对象

### 节点

cc.node()是渲染的必要组成部分，所有需要在游戏场景中显示的内容都必须是节点或者依附于节点之上，节点控制显示内容的位置、大小、旋转、缩放、颜色等信息。
属性：

* name
* active
* position
* rotation
* scale
* anchor
* Size
* Color

方法 addChild（node,LocalZOrder, tag）
参数1：加入场景对象；
参数2：成员的层级
参数3：标签，成员的标识，如果一个成员丢了，可以通过grtChildByTag（tag），然后在进行访问并添加动作；

getChildByTag()得到一个子节点通过它的标记

```javascript
var node = new cc.Node();
        node.addChild(sp2);
        node.x = cc.winSize.width / 4;
        node.y = cc.winSize.height / 2;
        this.addChild(node);
```

### 节点色调

cc.blink node对象闪烁
cc.tintTo node(duration,deltaRed,deltaGreen,deltaBlue)对象色调变化到某一值
cc.tintBy node对象的色调变化某值
cc.fadeOut()

```javascript
var Scene2 = cc.Scene.extend({
    ctor: function () {
        this._super();
        // this.init();
    },

    onEnter: function () {
        this._super();
        this.init();
        console.log("scene2");
        var s = cc.director.getWinSize();

        // 创建精灵并重复旋转动作
        let sp = new cc.Sprite("res/grossini.png");
        sp.setPosition(cc.p(cc.winSize.width/2,cc.winSize.height/2));
        this.addChild(sp);
        var rotate = cc.rotateBy(2, 360);
        var repeat = rotate.repeatForever();
        sp.runAction(repeat);

        // let node = new cc.Node();
        // node.addChild(sp);
        // node.x = cc.winSize.width / 2;
        // node.y = cc.winSize.height / 2;
        // this.addChild(node);
    },

    dd:2,
});

```

## 文本

ccui.Text() 创建文本
添加輸入框 ccui.TextField()
