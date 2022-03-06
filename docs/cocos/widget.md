# 控件

cocosWidget是GUI库
CocosWidget目前提供22种控件，随着版本的更新会加入更多控件。
WidgetLayout：控件树根控件
Button：按钮控件
CheckBox：选择框控件
ControlView：游戏操作杆
GridView：网格容器控件 竖向
GridPageView：网格页容器控件 横竖向
ImageView：纹理容器控件（精灵）
ImageVIewScale9：九宫格纹理容器控件
Label：文字控件
LabelAtlas：文字图块控件
LabelBMFont：图像文字集控件
ListView：链表滑动容器控件
PageView：页面滑动容器控件
Panel：基础容器控件
PanelColor：颜色容器控件
ProgressBar：进度条控件
ScrollView：基础滑动容器控件
Slider：滑块控件
TableView：表格制滑动容器控件
ToggleView：开关控件
Widget：基础控件

## 节点容器（nodecontainer）

能够自动管理其内部节点的智能预加载功能，意味着这些node布局的激素那数据获取图片加载渲染等操作都将异步完成。

## ccui.Wdget

所有的控件监听器都是单点触摸事件并且会吞食事件

```  javascript
 this._touchListener = cc.EventListener.create({
        event: cc.EventListener.TOUCH_ONE_BY_ONE,
        swallowTouches: true,
        onTouchBegan: this.onTouchBegan.bind(this),
        onTouchMoved: this.onTouchMoved.bind(this),
        onTouchEnded: this.onTouchEnded.bind(this)
     });
     cc.eventManager.addListener(this._touchListener, this);
```

swallowTouches, boolean 是否吞下该touch点

吞没事件，使得触摸上面的层的时候的事件不会向下传递，两个sprit位置重叠触摸上面的Sprite 的时候，下面的Sprite不会被影响。需要给他设置触摸监听事件，用设置的监听listener来调用设置触摸吞噬函数。注意：需要实现一个touchBegan

1 widget
   T: 1
   Q: 创建，点击事件，事件吞噬

``` javascript
ctor: function () {
        this._super();
        console.log("Scene");
        var touchListener = {
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true,
            onTouchBegan: this.onTouchBegan
        };
        cc.eventManager.addListener(touchListener, this);
},
onTouchBegan:function(touch, event) {
       console.log("widgete")
    },
```

2 imageview
   T: 0.5
   Q: 创建，九宫格缩放

``` javascript
 var imageView = new ccui.ImageView("res/baoqishi_0.png");
        imageView.x = cc.winSize.width / 2;
        imageView.y = cc.winSize.height / 2;
        imageView.setScale9Enabled(true);
        imageView.setContentSize(cc.size(200, 200));
        this.addChild(imageView);
```

3 listview
   T: 1
   Q: 创建，添加ImageView

``` javascript
this.listView = new ccui.ListView();
        this.listView.setDirection(ccui.ScrollView.DIR_VERTICAL);
        this.listView.setTouchEnabled(true);
        this.listView.setBounceEnabled(true);
        this.listView.setBackGroundImage("res/youceyeqianxuanzhongzhuangtai.png");
        this.listView.setBackGroundImageScale9Enabled(true);
        this.listView.setContentSize(cc.size(300, 500));
        this.listView.x = (cc.winSize.width) / 3;
        this.listView.y = (cc.winSize.height) / 5;
        this.listView.addEventListener(this.selectedItemEvent, this);
        this.addChild(this.listView);

        var imageView = new ccui.ImageView("res/baoqishi_0.png");
        imageView.x = 3 *(cc.winSize.width / 4);
        imageView.y = cc.winSize.height / 2;
        imageView.setScale9Enabled(true);
        imageView.setContentSize(cc.size(200, 200));
        this.listView.addChild(imageView);
```

4 action [sequence, moveTo, spawn,fadeIn,delayTime,callFunc]
   T: 3
   Q: 创建一个sprite，使其在3秒内移动一段距离，移动的同时需要旋转2圈，结束后，延时3秒，输出一句话，然后渐隐消失

``` javascript
ctor:function(){
let sprite = new cc.Sprite("res/baoqishi_0.png");
        sprite.setPosition(cc.p(cc.winSize.width / 4, cc.winSize.height / 2));
        this.addChild(sprite);

        // 创建action
         var move = cc.moveBy(3, cc.p(240, 0));
         var rotate = cc.rotateBy(3,360*2);
         var delay = cc.delayTime(3);


         var action =cc.sequence(cc.spawn(move,rotate),delay,cc.callFunc(this.Text,this));
        //
         sprite.runAction(action);
},
    Text: function () {
        console.log("打印文本");
        var textField = new ccui.Text("一句话","Impact",100);
        textField.setColor(cc.color(0, 0, 0));
        textField.setPosition(cc.p(cc.winSize.width/2 , cc.winSize.height/3));
        this.addChild(textField);
        this._trackNode = textField;
        var fadeout = cc.fadeOut(3);
        textField.runAction(fadeout);


```

## schedule

   T: 1
   Q: 创建一个sprite，使其在屏幕[0,0,300,300]内移动

schedule(SEL_SCHEDULE selector, float interval, unsigned int repeat, float delay)函数里面的参数：

第一个参数selector即为你要添加的事件函数
第二个参数interval为事件触发时间间隔
第三个参数repeat为触发一次事件后还会触发的次数，默认值为kRepeatForever，表示无限触发次数
第四个参数delay表示第一次触发之前的延时

```javascript
var Scene1 = cc.Scene.extend({
    ctor: function () {
        this._super();
this.schedule(this.update.bind(this), 0.05);
        var layout = new ccui.Layout();
        layout.setPosition(cc.p(20, 20))
        layout.setSize(cc.size(300.0, 300.0));
        layout.setBackGroundColorType(ccui.Layout.BG_COLOR_SOLID);
        layout.setBackGroundColor(cc.color(255, 0, 0));
        this.addChild(layout);

        let sp = new cc.Sprite("res/baoqishi_0.png");
        sp.setPosition(cc.p(0, 0));
        layout.addChild(sp);
        this.sprite = sp;
        this.layout = layout;
},
speedx: 200,
    speedy: 150,
    sprite: null,
    update: function (dt) {
        this.sprite.x += this.speedx * dt;

        if (this.sprite.x >= 300)
            this.speedx = -this.speedx;
        if (this.sprite.x <= 0)
            this.speedx = Math.abs(this.speedx);

        this.sprite.y += this.speedy * dt;
        if (this.sprite.y >= 300)
            this.speedy = -this.speedy;
        if (this.sprite.y <= 0)
            this.speedy = Math.abs(this.speedy);
},
```

6 eventListener
   T: 1
   Q: 创建一个sprite，可以点击拖动该sprite移动

```JavaScript
var containerForSprite1 = new cc.Node();
        var origin = cc.director.getVisibleOrigin();
        var size = cc.director.getVisibleSize();
        var sprite2 = new cc.Sprite("res/dilan_3.png");
        sprite2.setPosition(origin.x + size.width / 2, origin.y + size.height / 2);
        this.addChild(containerForSprite1, 10);
        containerForSprite1.addChild(sprite2);

        var listener1 = cc.EventListener.create({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true,
            onTouchBegan: function (touch, event) {
                var target = event.getCurrentTarget();
                //
                var locationInNode = target.convertToNodeSpace(touch.getLocation());
                var s = target.getContentSize();
                var rect = cc.rect(0, 0, s.width, s.height);

                if (cc.rectContainsPoint(rect, locationInNode)) {
                    cc.log("sprite began... x = " + locationInNode.x + ", y = " + locationInNode.y);
                    target.opacity = 180;
                    return true;
                }
                return false;
            },
            onTouchMoved: function (touch, event) {
                var target = event.getCurrentTarget();
                var delta = touch.getDelta();
                target.x += delta.x;
                target.y += delta.y;
            },
            onTouchEnded: function (touch, event) {
                var target = event.getCurrentTarget();
                cc.log("sprite onTouchesEnded.. ");
                target.setOpacity(255);
                if (target == sprite2) {
                    containerForSprite1.setLocalZOrder(100);
                } else if (target == sprite1) {
                    containerForSprite1.setLocalZOrder(0);
                }
            }   
```

小测验
    创建一个imageview，可以通过键盘控制其上下左右移动，当按下ctrl时，使其播放一个“跳跃”动画
