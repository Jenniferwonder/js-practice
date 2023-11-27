---
Title: Stop Watch & Countdown Timer
tags: JavaScript
Type: A
DateStarted: 2022-12-06
DateModified: 2022-12-14
status: null
EST: NaN
LeadTime: NaN
Page-D: NaN
Cards-D: NaN
---

# Stop Watch & Countdown Timer

## 项目介绍 Project Brief

⭐A Stop Watch based on vanilla JS, HTML, CSS, to enhance developer's fundamental knowledge and skills in JS, HTML, CSS.

## 核心功能 Core Functions

#### 1. Start, Pause and Reset the Watch

- [x] User can start, pause and reset the watch.
- [x] User can see time changes from **miliseconds** to **minutes**

#### 2. Record Pause History

- [x] User can click the `Lap` button, to record the time in order

## 效果展示 Demo

#### 1. v0.0.1

![](https://cdn.nlark.com/yuque/0/2022/gif/29677165/1671015466596-c8c189fd-1b12-41a1-9d3d-057c103629b7.gif)

## 使用说明 How to Use

1. Download The `/src` Folder，containing the project HTML, CSS, JS file.
2. Open `index.html`, and run live-server in VSCode
3. Other folders in this project are for practice only.

## 项目进度 Checklist

- [x] 解决什么问题？面临什么 **问题**？
- [x] 项目 **目的** 与 **功能**？
- [x] **竞品** 分析/MoodBoard？
- [x] 解决 **方案与资源**、**时间/周期**？
- [x] 开发 **流程** 与 **技术要点** 分析、总结、反思？
- [x] 高效绘制 Flow Chart?

## 项目目的 Project Purpose

- 熟悉 [[O-HTML]], [[O-CSS]], [[O-JS]]
- 熟悉项目工作流：[[Project Plan]]
- 提高解决问题能力：[[Project Workflow]]

## 灵感板 Moodboard

![[A-JS Stop Watch 2022-12-13 16.13.09.excalidraw]]

## 项目资源 Resource

#### 1. 开发时间

#### 2. 参考资料

#### 3. 同类项目

> 实现秒表记录：[Stopwatch using HTML, CSS and JavaScript | Play, Reset and add Laps - YouTube](https://www.youtube.com/watch?v=2TLjO0MlBLg)  
> 实现倒计时滚动动画：[Build a rotating Countdown timer in Javascript (EASY) - YouTube](https://www.youtube.com/watch?v=VqToCBmqq6w&list=PLWzGaZzzTKsewuFLazXSDDZa9wbEkBoay)  
> 实现倒计时翻页动画：[Can I Create This Complex 3D Countdown Timer Animation? - YouTube](https://www.youtube.com/watch?v=p_6IuhmBsfc)

## 提升方向 Improvement

#### 1. UI

- 用图标
- 黑白模式
- 语言切换
- 钟形、可视化进度
- 可直观地呈现时间：日、时、分、秒、毫秒

#### 2. 功能整合

- 秒表 + 倒计时 + 倒数日 + 时钟 + 番茄钟提醒 + 日历……
- 网页 + 移动端

#### 3. 产品目标

探索以下功能最优解决方案，争取形成相关 **产品**，或在主打项目/产品中运用内嵌相关功能：

- 时钟/时间
  - 登录时间
- 正计时
  - 秒表、记录
- 倒计时 / 倒数日功能：网页、APP
  - 高考倒计时、抢购倒计时
  - 安全退出功能
- 时长统计、可视化：iHour
- 定时提醒、闹钟
- 番茄钟

## 开发流程 Work Flow

### 核心功能开发

#### 1. Select needed elements

#### 2. Init the App Data

#### 3. Implement Core Functions

- Task flow
- Logic

#### 4. Add Event Listeners (Call the Callback function)

### 性能提升

## 技术要点 Key Points

#### 1. [[O-HTML]]

#### 2. [[O-CSS]]

- 防止数字更新抖动，选择 `monospace` 字体

#### 3. [[O-JS]]

- 方案一：[[ES6 Class]]
- 方案二：[[D-JS Function-函数]]
- 逻辑方案一：[[000-Templates/Bryan-Zotero/Temporal/Date]]
- 逻辑方案二：[[O-JS Conditionals]], [[D-JS Operators-操作符]] - `++/ +=/ %`
- [[D-JS DOM]] - classList, createElement, appendChild, textContent/innerHTML
- [[Timer-计时器函数]] - setInterval
- [[D-JS Array]] - padStart...
- [[000-Templates/Bryan-Zotero/Formatting/LaTeX/math]] - Math.floor...
