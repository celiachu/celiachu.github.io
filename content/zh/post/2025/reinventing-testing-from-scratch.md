---
title: "从零实现一个测试框架：Hope 项目实践记录"
date: 2025-07-16T19:33:26+08:00
draft: false
author: ""
tags: ["Tech", "Testing"]
categories: ["Blog"]
series: ["Blog"]
description: "一篇记录如何从零实现 JavaScript 单元测试框架 Hope 的工程实录，涵盖设计动机、模块划分、钩子机制、执行顺序、架构思考等核心内容"
featured: false
toc: true
---

# 从零实现一个测试框架：Hope 项目实践记录

## 缘起

为什么要自己实现一个测试框架？

> 阅读了 [《重新造轮子系列(一)：单元测试框架》](https://ramsayleung.github.io/zh/post/2025/reinvent_unit_test/)。这个项目是这个文章的实践，因为本人也用过 Jest 和 Mocha ，了解这两个测试框架的功能，所以尝试自己实现一个新的测试框架，并没有解决其他痛点，为了学习 js 代码和CLI架构。

## 项目目录结构概览

```
hope-test/
├── src/
│   ├── hope.ts      // 核心测试框架实现
│   └── pray.ts      // 命令行工具层
├── tests/           // 测试用例
├── package.json
```

- `hope.ts`: 测试框架核心，负责测试注册、钩子执行、断言、错误分类等逻辑
- `pray.ts`: CLI 入口，负责参数解析、结果展示、报告生成

## 核心设计理念

### Hope 类

核心属性包括：

- `suites`：完整的测试套件树结构
- `currentSuite`：当前正在注册的套件
- `passes / fails / errors`：执行结果分类

### 测试注册机制

测试文件中注册用例的基本形式如下：

```ts
import { test } from "../src/hope";
test("my first test", () => {
  // some logic
});
```

这些注册代码在“加载模块瞬间”即被执行，Hope 会将测试信息注册到 `currentSuite.tests` 中。

### 套件嵌套与树结构

```ts
describe("Suite A", () => {
  test("Test A1", () => {});

  describe("Suite B", () => {
    test("Test B1", () => {});
  });
});
```

此结构最终构成一个树：

```
root
├── Suite A
│   ├── Test A1
│   └── Suite B
│       └── Test B1
```

### 钩子系统与执行顺序

支持四种钩子：`beforeAll`, `beforeEach`, `afterEach`, `afterAll`

执行顺序示意：

```text
A beforeAll
A beforeEach
Test A1
A afterEach
B beforeAll
A beforeEach
B beforeEach
Test B1
B afterEach
A afterEach
B afterAll
A afterAll
```

> beforeEach的hook会从父到子执行，具体收集hooks的代码是while循环不断向父节点收集
> 特别注意：`afterEach` 的执行顺序是反向的，因此需要 `reverse()`

## 📂 CLI 模块（pray.ts）

- 使用 `minimist` 解析命令行参数
- 根据参数决定输出模式（terse / JSON / future HTML）

## 错误处理机制

框架区分两种错误：

| 分类    | 说明     | 示例                |
| ------- | -------- | ------------------- |
| `fail`  | 断言失败 | `assert(false)`     |
| `error` | 异常中断 | `throw new Error()` |

> runHooks 方法未处理异常，异常将由 `runSuite()` 中的 try...catch 捕获。

## 生命周期

```
[load tests] => [register describe/test] => [build suite tree]
         ↓
     [hope.run()]
         ↓
[runSuite递归执行，每层beforeAll→测试→afterAll]
         ↓
  [生成报告：console/json]
```

## 总结

读一百次这个文章没有自己写一个来的实在
