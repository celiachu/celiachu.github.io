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
summary: "本指南将带你通过 WSL2 环境快速安装和配置 OpenClaw，并解决常见的代理问题。适用于 Windows 11 及更新版本的 WSL 环境。"
---

## 1. 环境准备

[官方文档](https://docs.openclaw.ai/platforms/windows)

### 步骤 A：安装 WSL2 与基础依赖
首先在 Windows 中安装 WSL2。如果尚未安装，请在 **Windows PowerShell (管理员)** 中执行：

```powershell
wsl --install
```

OpenClaw 依赖 Node.js 环境运行。进入 Ubuntu 终端后，建议先更新环境并安装 Node.js：

**在 Ubuntu 终端中执行：**
```bash
sudo apt update && sudo apt upgrade -y
# 建议使用 nvm 安装 Node.js
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc
nvm install --lts
```

### 步骤 B：网络设置（关键）
**注意：** 镜像网络模式（Mirrored Mode）仅支持 **Windows 11 (22H2 及以上)** 且 WSL 版本需大于等于 2.0.0。

#### 方案一：镜像网络模式（推荐，仅限 Win11）
为了让 OpenClaw 能够顺畅访问模型 API，建议开启 WSL 的**镜像网络模式**：
1. 在 Windows 开始菜单搜索并打开 **"WSL"** 应用设置。
2. 勾选以下选项：
   - **网络模式 (Networking Mode)**：选择 **镜像 (Mirrored)**。
   - **自动代理 (Auto Proxy)**：勾选 **打开**。
   - **DNS 代理 (DNS Proxy)**：勾选 **打开**。

最后，在 Windows PowerShell 中执行 `wsl --shutdown` 以重启 WSL 使配置生效。

## 2. 下载与安装 OpenClaw

### 优先推荐：一键脚本安装
如果你已经配置好了网络环境，通常可以直接使用官方脚本。

**在 Ubuntu 终端中执行：**
```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```

### 备选方案：解决安装极慢或失败
如果 `curl` 下载脚本极慢，或者脚本运行到 `npm install` 阶段卡死，可以尝试手动安装：

1. **配置国内镜像源**：
   ```bash
   npm config set registry https://registry.npmmirror.com
   ```
2. **通过 npm/pnpm 全局安装**：
   ```bash
   npm install -g openclaw@latest
   ```
3. **Git 安装（适用于开发者）**：
   直接 `git clone` 官方仓库并运行 `pnpm run build`。

## 3. 验证安装（启动 Dashboard）

安装完成后，建议**先不要配置通讯工具**，直接启动 Dashboard 验证核心服务是否正常：

**在 Ubuntu 终端中执行：**
```bash
openclaw dashboard
```

执行后会返回一个带验证 Token 的内网 URL（例如 `http://127.0.0.1:18789/...`）。在浏览器打开该地址，如果能正常看到管理界面，说明基础安装成功。

## 4. 配置 OpenClaw (Onboard)

验证基础功能正常后，即可运行配置引导来接入模型 API 和通讯工具：

**在 Ubuntu 终端中执行：**
```bash
openclaw onboard
```

### 配置建议
- **场景匹配**：建议通讯工具和大模型处于同一个网络场景（例如：海外大模型配 Discord/Lark；内地模型配飞书）。
- **海外工具优化**：如果你使用 Discord、Telegram 等工具，务必在代理工具中开启 **TUN 模式** 以保证实时通讯。
- **模型选择**：参考 [模型评分网站](https://artificialanalysis.ai/leaderboards/models) 选择适合的模型。

