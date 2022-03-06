# 事件处理机制

一个事件由触发到完成响应，主要由以下三部分组成：
事件分发器eventManager；
事件类型EventTouch、EventKeyboard等；
事件监听器EventListenerTouch、EventListenerKeyboard等。
在Cocos2d-x v3.x中，关于事件的东西，无非就是围绕上述的三个部分展开来的，掌握了上述的三个部分，也就掌握了Cocos2d-x v3.x中事件处理的精髓。
 cc.eventManager.addListener(listener2, this.imageview);

## 事件分发器

相当于事件总长官,调度事件和管理所有事件的监听器;当有事件发生时负责调度对应的事件;调用Director类中的getEventDispatcher获得一个事件调度器,在游戏启动时就会创建一个默认的eventDispatcher对象
事件类型
    TOUCH,          // 触摸事件
        TOUCH_ALL_AT_ONCE //多点触摸事件监听器
        TOUCH_ONE_BY_ONE //单点触摸事件监听器
    KEYBOARD,       // 键盘事件
    ACCELERATION,   // 加速器事件
    MOUSE,          // 鼠标事件
    FOCUS,          // 焦点事件
    CUSTOM          // 自定义事件
事件监听器:
触发后的对应的逻辑,又事件分发器EventDispatcher调用

setSwallowTouches 吞没事件。
