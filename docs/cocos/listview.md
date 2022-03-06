# ListView子控件的对齐方式

```javascript
enum class Gravity
{
    LEFT,               // 局左对齐
    RIGHT,              // 局右对齐
    CENTER_HORIZONTAL,  // 水平居中对齐
    TOP,                // 居上对齐
    BOTTOM,             // 居下对齐
    CENTER_VERTICAL     // 垂直居中对齐
};
```

## ListView中的项的交互事件

```javascript
enum class EventType
{
    ON_SELECTED_ITEM_START, // 开始选中
    ON_SELECTED_ITEM_END    // 结束选中
};
```

### ListView子控件的对齐边界（如使用BOTTOM，那么子控件会从ListView底部开始向上布局）

```javascript
enum class MagneticType
{
    NONE,       // 无
    CENTER,     // ListView尝试将其项目在当前视图的中心对齐
    BOTH_END,   // 使用BOTH_END类型，如果ListView是水平的，顶部或底部垂直，则尝试将其项目对齐到左侧或右侧。对齐侧（左侧或右侧，顶部或底部）由用户的滚动方向决定。
    LEFT,       // 居左
    RIGHT,      // 局右
    TOP,        // 居上
    BOTTOM,     // 居下
};
```

### ListView的项的点击回调

```javascript
typedef std::function<void(Ref*, EventType)> ccListViewCallback;
```

### 便利构造

ListView实例

ListView();
static ListView* create();

### 给ListView设置一个项

当pushBackDefaultItem`时，模型将被用作蓝图，新的模型拷贝将被插入到ListView中

@param model 集成于Widget的模型

void setItemModel(Widget* model);

### 在列表视图的末尾插入默认项目（由克隆模型创建）

void pushBackDefaultItem();

### 插入一个默认项目（通过克隆模型创建）到一个给定索引的列表视图

param index 索引
void insertDefaultItem(ssize_t index);

### 将一个自定义项目插入到ListView的末尾

param item 继承于Widget的项
void pushBackCustomItem(Widget* item);

### 在给定的索引处插入一个自定义小部件到ListView中

 @param item  继承于Widget的项
void insertCustomItem(Widget* item, ssize_t index);

### 删除ListView的最后一个项

void removeLastItem();

### 删除给定索引处的项

  @param index 索引

void removeItem(ssize_t index);

### 删除当前ListView中的所有项

void removeAllItems();

### 返回给定索引处的项

 @return 继承于Widget的项
Widget* getItem(ssize_t index)const;

### 返回ListView中的所有项目

re```javascriptturns 一个指向Widget的指针

Vector<Widget*>& getItems();

### 返回指定项的索引

 *```javascript @param item  继承于Widget的项
ssize_t getIndex(Widget* item) const;

### 设置ListView的子控件布局方案

void setGravity(Gravity gravity);

### 设置ListView的子控件对齐边界

void setMagneticType(MagneticType magneticType);

### 获取ListView的子控件对齐边界

MagneticType getMagneticType() const;

### 子控件对齐边界允许有多余的滚动空间，默认true

void setMagneticAllowedOutOfBoundary(bool magneticAllowedOutOfBoundary);

## 获取是否允许子控件对齐边界有多余的滚动空间

bool getMagneticAllowedOutOfBoundary() const;

## 设置ListView中每个项之间的边距

aram margin 边距

void setItemsMargin(float margin);

## 获取ListView中每个项之间的边距

return 边距值

float getItemsMargin()const;

## 获取最近的项目到内部容器中的特定位置

atargetPosition  指定内部容器坐标中的目标位置
itemAnchorPoint 指定每个项的锚点以计算距离
 @return 列表视图中的项实例不是空的，否则，返回null

Widget* getClosestItemToPosition(const Vec2& targetPosition, const Vec2& itemAnchorPoint) const;

## 获取在当前视图中，离指定位置最近的项

例```javascript如，要查看视图中心的项目，请调用“getClosestItemToPositionInCurrentView”
 positionRatioInView 视图（ListView）内容大小的指定比例位置【例如传入cc.p(0.5, 0.5)】
 itemAnchorPoint     指定该视图（ListView）的锚点，以计算距离【例如传入cc.p(0.5, 0.5)】
 @return 列表视图中的项实例不是空的，否则，返回null

Widget* getClosestItemToPositionInCurrentView(const Vec2& positionRatioInView, const Vec2& itemAnchorPoint) const;

## 获取当前ListView可视范围中，中间的项

return Widget实例

Widget* getCenterItemInCurrentView() const;

## 获取当前ListView可视范围中，最左侧的项

return Widget实例

Widget* getLeftmostItemInCurrentView() const;

## 获取当前ListView可视范围中，最右侧的项

return Widget实例

Widget* getRightmostItemInCurrentView() const;

## 获取当前ListView可视范围中，最顶部的项

return Widget实例

Widget* getTopmostItemInCurrentView() const;

## 获取当前ListView可视范围中，最底部的项

return Widget实例

Widget* getBottommostItemInCurrentView() const;

## 重写方法（继承于ScrollView）

```javascript
virtual void jumpToBottom() override;
virtual void jumpToTop() override;
virtual void jumpToLeft() override;
virtual void jumpToRight() override;
virtual void jumpToTopLeft() override;
virtual void jumpToTopRight() override;
virtual void jumpToBottomLeft() override;
virtual void jumpToBottomRight() override;
virtual void jumpToPercentVertical(float percent) override;
virtual void jumpToPercentHorizontal(float percent) override;
virtual void jumpToPercentBothDirection(const Vec2& percent) override;

```

## 跳转到指定项

aram itemIndex             指定索引
 positionRatioInView   跳到该项的视图内容大小的指定比例位置【例如传入cc.p(0.5, 0.5)会跳到该项中心】
 itemAnchorPoint       指定该项的锚点，以计算距离【例如传入cc.p(0.5, 0.5)】

void jumpToItem(ssize_t itemIndex, const Vec2& positionRatioInView, const Vec2& itemAnchorPoint);

## 滚动到指定项

aram itemIndex           索引值
 positionRatioInView 跳到该项的视图内容大小的指定比例位置【例如传入cc.p(0.5, 0.5)会跳到该项中心】
 itemAnchorPoint     指定该项的锚点，以计算距离【例如传入cc.p(0.5, 0.5)】
 timeInSec           滚动动画时长

void scrollToItem(ssize_t itemIndex, const Vec2& positionRatioInView, const Vec2& itemAnchorPoint);
void scrollToItem(ssize_t itemIndex, const Vec2& positionRatioInView, const Vec2& itemAnchorPoint, float timeInSec);

## 获取当前所选项索引

return 所选项的索引，未选择返回-1

ssize_t getCurSelectedIndex() const;

## 添加一个ListView点击事件回调，然后单击一个Listview项，回调将被调用

aram callback 事件回调

void addEventListener(const ccListViewCallback& callback);

## 更改ListView的滚动方向

aram dir 滚动方向枚举

virtual void setDirection(Direction dir) override;

## 获取ListView的滚动方向

return 滚动方向枚举

virtual std::string getDescription() const override;

## 手动刷新ListView的视图和布局

此```javascript方法将ListView内容标记为脏内容，内容视图将在下一帧中刷新。
@deprecated Use method requestDoLayout() instead


CC_DEPRECATED_ATTRIBUTE void refreshView();
