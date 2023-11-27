---
DateModified: 2023-08-31
Title: A-JS Bankist App-JS Arr, Date, Intl(Oct 16-17)
tags: JavaScript
Type: A
status: null
DateStarted: Invalid date
EST: NaN
LeadTime: NaN
Page-D: NaN
Cards-D: NaN
---

## Project Overview

An online bank money transaction web app

#### 1. TIME

| **Start Time** | Oct 16 |

| --- | --- |

| **Due Time** | Oct 16 |  
| **Total Time Spent** | 1 Day> |  
| **New Issues Added** |  

- |

#### 2. SCOPE

| #### G2- JS Master  
|

- Modal
- Smooth Scroll (button, navigation)
- Tabbed Components (标签页)
- Menu Fading Animation
- Sticky Navbar
- **Reveal Elements on Scrolling**
- Image Lazy Loading (图片懒加载)
- Slider (轮播图)  
  |  
  | --- | --- |

## Modal

#### 1. HTML& CSS

- .modal
- .overlay
- .hidden
- .btn--show-modal
- .btn--close-modal

#### 2. JS DOM

- Event
  - .addEventListener('click', `<closeModal>`);
  - 'keydown' - document.addEventListener('keydown', function (e) {  
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {closeModal();}});
- Class
  - .classList.add('hidden')
  - .classList.remove('hidden')
  - .classList.contains('hidden')
- Selector
  - document.querySelector('')
  - document.querySelectorAll('')

## Navigation

#### 1. HTML& CSS

- .nav
- .nav\_\_logo, `#logo`
- .nav\_\_links
- .nav\_\_link
- `#section--1, 2, 3`

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
