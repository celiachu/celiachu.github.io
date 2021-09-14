# Cocos2d-x中的 Director（学习）

## 导演类（Director）

一个统筹规划游戏大局的类叫做导演类，类似于导航仪，常用操作都将由Director来控制，比如：OpenGL ES的初始化，场景的切换和游戏的暂停继续控制。

1. 游戏启动前设置游戏运行环境
2. 游戏运行时控制游戏主循环
3. 游戏运行中 管理场景和切换工作

## 实例化

getInstance()取得Director的实例

## 类的继承

Director类的继承关系为：Ref<--Director<--DisplayLinkDirector
是一个自动刷新的导演类

## 底层环境设置

1. 设置显示游戏的视图
2. 设置游戏运行的帧率
3. 初始化计时器，动作管理器和事件管理器
4. 初始化贴图缓存和渲染器
5. 屏幕尺寸的获取
6. 单眼对象的其他设置

## 主循环流程

1. 计算从上一帧开始到现在的时间，将会用于提供调试信息
2. 执行定时器中计划的任务
3. 通过事件管理器通知cc.Director.EVENT_AFTER_UPDATE事件
4. 清空屏幕
5. 场景切换
6. 遍历当前场景中的节点并且更新节点的空间转换矩阵以及其他必要信息，然后发送指令给渲染器。
7. 通过事件管理器通知cc.EVENT_AFTER_VISIT事件
8. 渲染器按照顺序执行
9. 通过事件管理器通知cc.Director.EVENT_AFTER_DRAW
10. 主循环控制
11. 增加全局总帧数

## API

### 场景管理

1. 运行目标场景 cc.director.runScene(scene)
2. 获取当前正在运行的场景 var scene = cc.director.getRunningScene();
3. 压入场景 var scene = cc.director.popScene();
4. 推出场景 var director.popScene();
5. 回到根场景 cc.director.popToRootScene();
6. 场景切换特效

### 游戏属性设置和获取
