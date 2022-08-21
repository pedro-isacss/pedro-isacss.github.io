---
title: Creating an analog clock with css and javascript
author:
  name: Pedro Isac
  link: https://github.com/pedro-isacss
date: 2022-03-21 11:33:00 +0800
categories: [Mini projects]
tags: [html, css, javascript, analog clock, mini project]
math: true
mermaid: true
---
Hey guys. Some time ago I challenged myself to create an analog clock using html, css and javascript. In this post I will share my line of reasoning to arrive at the result

## Initial files

First of all, I created three files: index.html, styles.css and scripts.js.

The index.html will contain the skeleton of the analog clock, the styles.css the appearance and the scripts.js is what will make the clock actually tick.

## index.html

In the index.html file I created 16 ```<canvas>```: 12 canvas for the clock strokes, 1 for the hour hand, 1 for the minute hand, 1 for the second hand and 1 more for the dot that joins the pointers.

After that, I created a ```<div>``` with a ```<p id="digital-clock">``` tag to show the time with numbers.

As a result:

```html
<main>
  <canvas class="pointer" id="pointer-12"></canvas>
  <canvas class="pointer" id="pointer-1"></canvas>
  <canvas class="pointer" id="pointer-2"></canvas>
  <canvas class="pointer" id="pointer-3"></canvas>
  <canvas class="pointer" id="pointer-4"></canvas>
  <canvas class="pointer" id="pointer-5"></canvas>
  <canvas class="pointer" id="pointer-6"></canvas>
  <canvas class="pointer" id="pointer-7"></canvas>
  <canvas class="pointer" id="pointer-8"></canvas>
  <canvas class="pointer" id="pointer-9"></canvas>
  <canvas class="pointer" id="pointer-10"></canvas>
  <canvas class="pointer" id="pointer-11"></canvas>
  <canvas class="pointer" id="point"></canvas>
  <canvas class="pointer" id="hour"></canvas>
  <canvas class="pointer" id="minute"></canvas>
  <canvas class="pointer" id="second"></canvas>
</main>
<div>
  <p id="digital-clock"></p>
</div>
```

## styles.css

First I reset some CSS properties:

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

I defined some properties for the **body** and **main**:

```css
body{
  background-color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 24px;
}

main{
  position: relative;
  background-color: #222;
  width: 25vw;
  height: 25vw;
  min-height: 150px;
  min-width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 8px solid #eee;
}
```

I also defined the general style for the clock strokes using the **.pointer** class:

```css
.pointer{
  height: 2%;
  width: 10%;
  background-color: #eee;
  position: absolute;
}
```

Once that was done, it was necessary to position each pointer using the **rotate** and **translate** properties:

```css
#pointer-12{
  top: 0;
  height: 20%;
  width: 2%;
}

#pointer-11{
  transform: rotate(-120deg) translate(452%)
}

#pointer-10{
  transform: rotate(-150deg) translate(452%)
}

#pointer-9{
  left: 0;
  height: 2%;
  width: 20%;
}

#pointer-8{
  transform: rotate(-210deg) translate(452%)
}

#pointer-7{
  transform: rotate(-240deg) translate(452%)
}

#pointer-6{
  bottom: 0;
  height: 20%;
  width: 2%;
}

#pointer-5{
  transform: rotate(-300deg) translate(452%)
}

#pointer-4{
  transform: rotate(-330deg) translate(452%)
}

#pointer-3{
  right: 0;
  height: 2%;
  width: 20%;
}

#pointer-2{
  transform: rotate(-30deg) translate(452%)
}

#pointer-1{
  transform: rotate(-60deg) translate(452%)
}
```

After that, I styled the hands and center point of the clock:

```css
#point{
  width: 5%;
  height: 5%;
  border-radius: 50%;
  z-index: 100;
}

#hour{
  height: 2%;
  width: 20%;
}

#minute{
  height: 2%;
  width: 25%;
}

#second{
  height: 1%;
  width: 20%;
}

#digital-clock{
  color: #eee;
  margin-top: 24px;
  font-size: 24px;
  font-weight: 800
}
```

Finally, I styled the **#digital-clock** which will show the time digitally:

```css
#digital-clock{
  color: #eee;
  margin-top: 24px;
  font-size: 24px;
  font-weight: 800
}
```

## scripts.js

Now that the analog clock is properly structured and styled, just put it to work.

Firstly, I created a reference for all the interactive elements of the clock (hour hand, minute hand, second hand and digital clock):

```javascript
const hour = document.getElementById("hour")
const second = document.getElementById("second")
const minute = document.getElementById("minute")
const digital = document.getElementById("digital-clock")
```

Since these elements will be updated every second, I created a **setInterval** and an instance of the **Date object**:

```javascript
setInterval(() => {
  const date = new Date()
  // all logic will be here
}, 1000)
```

First, I tried to make the hour hand dynamic. For that, I created an **if/else** that will identify if the hour is less than or equal to 11 and from that move the hour hand through the value of **date.getHours()**:

```javascript
if(date.getHours() <= 11){
  hour.style.transform = `rotate(${(date.getHours() - 3) * 30}deg) translate(55%)` 
} else{
  hour.style.transform = `rotate(${(date.getHours() - 3) * 30}deg) translate(55%)`
}
```

After that, just move the minute and second hands according to the **date.getMinutes()** and **getSeconds()** values:

```javascript
minute.style.transform = `rotate(${(date.getMinutes() - 15) * 6}deg) translate(55%)`
second.style.transform = `rotate(${(date.getSeconds() - 15) * 6}deg) translate(55%)`
```

Finally, just update the digital clock:

```javascript
digital.innerHTML = `${date.getHours() < 10 ? "0" + date.getHours() : date.getHours()} : ${date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()} : ${date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()}`
```

-----------------

## Results

Code on GitHub: <a href="https://github.com/pedro-isacss/analog-clock" target="_blank">https://github.com/pedro-isacss/analog-clock</a>

Result: <a href="https://www.pedroisac.dev/analog-clock/" target="_blank">https://www.pedroisac.dev/analog-clock/</a>