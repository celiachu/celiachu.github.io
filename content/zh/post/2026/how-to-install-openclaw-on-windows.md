---
title: "如何在 Windows (WSL2) 上安装 OpenClaw"
date: 2026-03-13T00:00:00+08:00
draft: true
tags:
  - OpenClaw
  - Windows
  - 安装
categories:
  - Tech
series:
  - Blog
description: "在 Windows 上快速安装和配置 OpenClaw 的指南。"
featured: false
toc: true
summary: "本指南将带你通过 WSL2 环境快速安装和配置 OpenClaw，并解决常见的代理问题。"
---

## 1. 环境准备

[官方文档](https://docs.openclaw.ai/platforms/windows)

首先启动 WSL2。如果没有安装 WSL2，请先执行安装命令：

```powershell
wsl --install
```

### 网络设置
由于涉及到代理问题，请直接打开 WSL 网络设置：
- **Networking mode**: Mirrored
- **Auto Proxy enabled**: 打开
- **DNS proxy enabled**: 打开

然后确保本地代理工具已开启 **LAN** 和**系统代理**。

配置完成后，在 Windows PowerShell 中运行以下命令以重启 WSL 使配置生效：

```powershell
wsl --shutdown
```

然后重新打开 Ubuntu 终端。

## 2. 下载 OpenClaw

右键终端打开 Ubuntu，执行以下安装脚本：

```shell
iwr -useb https://openclaw.ai/install.ps1 | iex
```

> **注意**：
> 1. 如果遇到下载安装很慢的情况，可以尝试手动更新 `apt`，安装 Node.js 环境，并为 `npm` 或 `pnpm` 换源后再安装。
> 2. 如果需要 OpenClaw 的自动更新功能，也可以直接 Clone 完整代码仓库并进行自主构建。

## 3. 安装与配置

OpenClaw 本身并不是 AI，而是一个通过通讯工具调用大模型 API 完成任务的工具。

### 配置网络环境
安装好 OpenClaw 以后需要确定网络环境：
- **场景匹配**：建议通讯工具和大模型处于同一个网络场景。
- **模型建议**：海外大模型推荐配合海外通讯工具使用；内地大模型（如飞书）推荐配合内地模型 API。
- **版本差异**：请注意内地模型 API 平台和通讯工具的版本区分（例如：飞书 vs. Lark）。

*目前作者尚未尝试本地大模型，后续可能进行尝试。*

### 开始配置
选好模型和通讯平台后，运行配置引导：

```shell
openclaw onboard
```

## 4. 验证安装

如果你想快速跑起来，可以先不配置通讯工具，直接在本地 `127.0.0.1:18789` 端口进行交互。拿到模型 API 密钥后，选择对应的厂商和模型版本即可。

### 启动 Dashboard
运行以下命令启动面板：

```shell
openclaw dashboard
```

执行后会返回一个带验证的内网 URL，直接在浏览器中访问即可。

