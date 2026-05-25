# 💰 我现在有多少钱

为即将到来的gap生活及旅行创建的静态网页小应用

一个轻量级 PWA 存款管理应用，支持多钱包录入、负金额（信用卡/欠款）、自动计算变动差额和日均消耗。

**[立即使用](https://clare0929.github.io/money-management/)**

## 功能

- **多钱包管理** — 预置微信、支付宝、银行卡、现金，支持新增自定义钱包（信用卡、花呗等）
- **负金额支持** — 录入负数记录信用卡欠款、贷款等负债
- **存款变动分析** — 每次记录自动对比上一次，计算差额及日均增加/消耗
- **历史记录** — 时间线展示所有存款快照，支持 CSV 导出
- **PWA 安装** — 添加到手机主屏幕，全屏运行，离线可用

## 安装到手机

1. 手机浏览器打开 `https://clare0929.github.io/money-management/`
2. **iPhone**：Safari → 分享 → 添加到主屏幕
3. **Android**：Chrome → 菜单 → 添加到主屏幕

## 技术栈

- 纯前端 PWA（HTML + CSS + JavaScript）
- Service Worker 离线缓存
- localStorage 本地存储，数据不上传服务器

## 本地运行

```bash
node server.js
```

浏览器打开 `http://localhost:8080`。

## 许可

MIT
