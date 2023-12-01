---
Title: Number Guessing Game
Type: A
tags:
  - JavaScript
status: 
DateStarted: 2023-09-13
DateModified: 2023-11-29
aliases:
  - Number Guessing Game
---
# Number Guessing Game
A Number Guessing Game based on vanilla JS, HTML, CSS, to enhance developer's fundamental knowledge and skills in JS, HTML, CSS.
### 效果展示 Demo

- DEMO Link: TODO
- Source Code: [js-projects/guess-the-number at main · Jenniferwonder/js-projects · GitHub](https://github.com/Jenniferwonder/js-projects/tree/main/guess-the-number#2-javascript)  
### 核心功能 Core Functions & Components
1. Guess a Random Number
	- [x] User can enter and submit any number from 1-100 to match the random number generated behind the scene.
2. Get Clue and Result
	- [x] When the number was submitted, the user will get a message showing whether the guess is lower or higher or correct.
3. Submit History
	- [x] User can see previous incorrect guesses.
4. Limited Chance
	- [x] Each user can guess at most 10 times each round before getting the correct answer.
	- [x] When out of chance, the user will receive a message showing the game is over and will not be able to continue the game.
5. Replay Button
	- [x] When game is over, the user can click a button to replay the game.
### 相关知识 Related Knowledge 
- [[HTML]]
	- [[HTML-Link]]
	- [[Input and label]]
	- [[Button]]
- [[JavaScript]]
	- [[Value and Variables]]
	- [[Math]]
	- [[Operators]]
	- [[Conditionals]]
	- [[String]]
	- [[DOM]]
### 开发笔记 Project Notes
1. Select needed elements
2. Init the App Data
	- key: random number from 1-100
	- guessCount: 1
	- guess: ""
	- lastResult: ""
	- guessHistory: ""
3. Implement Core Functions
	- Logic
		- ![[A-JS Number Guessing Game 2022-12-08 09.49.04.excalidraw]]
4. Add Event Listeners (Call the Callback function)

### 提升方向 Aspects to Improve

### 项目资源 Inspirations & Reference
- [A first splash into JavaScript - Learn web development | MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/A_first_splash)

