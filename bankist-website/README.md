---
Title: JS Bankist Website
Type: A
tags:
  - JavaScript
status: 
DateStarted: 2022-10-14
DateModified: 2023-12-05
aliases:
  - Bankist Website
---
# Bankist Website

## 项目介绍 Project Brief
An online bank landing page based on vanilla JS, HTML, CSS

#### 项目资源 Resources

#### 效果展示 Demo

- Source Code:  
- Demo Link:

#### 核心功能 Core Functions & Components
- Modal
- Smooth Scroll (button, navigation)
- Tabbed Components (标签页)
- Menu Fading Animation
- Sticky Navbar
- **Reveal Elements on Scrolling**
- Image Lazy Loading (图片懒加载)
- Slider (轮播图)  

## 开发步骤 Steps to Develop
### Modal
#### 1. HTML& CSS
- .modal
- .overlay
- .hidden
- .btn--show-modal
- .btn--close-modal
#### 2. JS DOM
- Event
  - `.addEventListener('click', <closeModal>);`
  - 'keydown' - document.addEventListener('keydown', function (e) {  
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {closeModal();}});
- Class
  - .classList.add('hidden')
  - .classList.remove('hidden')
  - .classList.contains('hidden')
- Selector
  - document.querySelector('')
  - document.querySelectorAll('')
### Navigation
#### 1. HTML& CSS
- .nav
- .nav\_\_logo, `#logo`
- .nav\_\_links
- .nav\_\_link
- `#section`--1, 2, 3
### Smooth Scrolling
#### 1. JS DOM
- Attribute
  - const **id** = e.target.getAttribute('href')
- Selector
  - document.querySelector(**id/ #...**)
- Scrolling methods
  - `<targetEl>`**.scrollIntoView**({behavior: 'smooth'})
### Menu Fading Animation
#### 1. JS DOM
- DOM traversing
  - const link = e.target;
  - const siblings = link.closest('.nav').querySelectorAll('.nav\_\_link');
  - const logo = link.closest('.nav').querySelector('img');
- Passing "argument" into Event handler
  - const handleHover = function (e) {...if (el !== link) el.style.opacity **= this**;}
  - nav.addEventListener('mouseover', handleHover**.bind**(0.5));
### Sticky Navigation
- **.getBoundingClientRect()**.height
- **IntersectionObserver** API
  - new IntersectionObserver(obsCallback, obsOptions)
## Tabbed Components
#### 1. HTML& CSS
- .operations\_\_tab-container
- .operations\_\_tab
  - .operations\_\_tab--1, 2, 3
  - .operations\_\_tab--active
  - data-tab="1/ 2/ 3"S
- .operations\_\_content
  - .operations\_\_content--1, 2, 3
    - `.operations__content--${clicked.**dataset.tab**}`
  - .operations\_\_content--active
#### 2. JS DOM
- Event delegation
  - tabsContainer**.addEventListener**()
- DOM traversing
  - const clicked = e.target**.closest**('.operations\_\_tab');
## Scrolling Effects

### Reveal Elements on Scrolling

### Image Lazy Loading



## 提升方向 Aspects to Improve


