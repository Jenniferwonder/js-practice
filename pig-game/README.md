---
Title: Pig Game
Type: A
tags:
  - JavaScript
status: 
DateStarted: 2023-09-13
DateModified: 2023-12-05
aliases:
  - Pig Game
---
# Pig Game
A Pig Game based on vanilla JS, HTML, CSS, to enhance developer's fundamental knowledge and skills in JS, HTML, CSS.

### 效果展示 Demo

Source Code: [js-projects/pig-game](https://github.com/Jenniferwonder/js-projects/tree/main/pig-game-practice)  
Demo Link:

### 核心功能 Core Functions
1. Roll the dice and gather scores accordingly
	- [x] User can roll a dice to get a random number from 1-6 each time, and will gather scores according to the number except for number 1 when user's score will reduce to 0.
2. Hold the score
	- [x] User can choose to hold the score anytime before getting the number 1, then the scores will be added to the total score, and the chance will be switched to User 2.
3. The first player to get 100 scores wins
	- [x] The player who first gets 100 scores wins.
4. Restart the game
	- [x] User can choose to restart the game.

### 开发笔记 Project Notes
1. Select needed elements
2. Init the App Data
	- 2 players' total scores: `[0,0]`
	- current score: 0
	- activePlayer: 1/2
	- playing: true
3. Implement Core Functions
	- Logic
4. Add Event Listeners

### 相关知识 Related Knowledge 
#### [[O-CSS]]
- Global Style:
  - `*`
  - `html`
  - `body`
- box-sizing: inherit/ boder-box
- Style `button`
- flex
- position
- font
- box-shadow
- border-radius
- color
- background-color

#### [[O-HTML]]

#### [[O-JS]]
- [[O-JS C10-Functions]]
- [[O-JS Conditionals]] -- Tenary Operation
- [[D-JS DOM]]
  - EventListener
  - Selector:
    - `document.querySelector`
    - `document.getElementById`
  - Manipulate classList:
    - `document.classList.add/toggle/remove`
- [[Callbacks]]

### 项目资源 Inspirations & Reference
 - [Online Courses - Learn Anything, On Your Schedule | Udemy](https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649207?start=0#overview)




