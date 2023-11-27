---
Title: A-JS Stop Watch
status:
Type: A
tags: JavaScript
DateStarted: 2023-08-04
DateModified: 2023-08-31
LeadTime: NaN
Cards-D: NaN
Page-D: NaN
---
Reference: [[D-JS Date|D-JS Date]]

```js
  // Stopwatch Constructor Function
  function Stopwatch(){
  let startTime, endTime, running, duration = 0;
  this.start = function {
  if (running)
  throw new Error('Stopwatch has already started.')
  running = true;
  startTime = new Date
  };
  this.stop = function {
  if(!running)
  throw new Error('stopwatch is not started.');
  running = false;
  endTime = new Date();
  const seconds = ((endTime.getTime() - startTime.getTime()) / 1000;
  duration += seconds;
  };
  this.reset = function {
  startTime = null;
  endTime = null;
  running = false;
  duration = 0;
  };
  Object.defineProperty(this, 'duration', {
  get: function(){ return duration; }
  });
  }
  // Use Stopwatch
  const sw = new Stopwatch()
  sw.start
  ```