---
title: How to publish an NPM package
by:
  name: Pedro Isac
  link: https://github.com/pedro-isacss
date: 2023-05-20 11:33:00 +0800
categories: [Programming]
tags: [npm, tutorial]
math: true
mermaid: true
---

Publishing NPM packages is a great way to share your code so other developers or yourself can reuse it. In this tutorial, I'll walk you through the process of creating and publishing an npm package that performs the four basic math operations: addition, subtraction, multiplication, and division.

**NOTE:** to publish an NPM package, you must have **Node.js** and **NPM** installed on your machine.

## Initial setting

The first step is to create a directory for the project:

```bash
mkdir just-calc && cd just-calc
```

Once that's done, we need to create the project's **package.json**:

```bash
npm init
```

## Project structuring

In the root of the project, let's create an **index.js** file. In this file we will implement the functions of each mathematical operation.

**OBS:** Make sure that in **package.json** the property **main** has the value **index.js**. This property should indicate the entry file for the package.

## Implementation of functions

Now it's time to implement the mathematical functions (addition, subtraction, multiplication, division) in the **index.js** file.

```javascript
function sum(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by 0 is invalid.");
  }
  return a / b;
}
```

After implementing the functions, we need to export them:

```javascript
module.exports = {
  sum,
  subtract,
  multiply,
  divide,
};
```

## Package publishing

To publish the package it is necessary to have an account on the NPM platform. If you don't have an account yet, you can easily create one at [https://www.npmjs.com/](https://www.npmjs.com/).

When you already have an account created, you can login by running the command:

```bash
npm login
```

Once logged in, just navigate to the project directory and run:

```bash
npm publish
```

## Package usage

Now it is possible to use the package functions in other projects. For that you need to install it in your project:

```bash
npm i just-calc
```

Example usage of the just-calc package:

```javascript
const calc = require("just-calc");

const a = 4;
const b = 2;

console.log(calc.sum(a, b));
console.log(calc.subtract(a, b));
console.log(calc.multiply(a, b));
console.log(calc.divide(a, b));
```

## Conclusion

In this tutorial, I showed you how to create and publish an NPM package that provides the four basic math operations. Now these functions can be reused in other projects.

This was just a simple tutorial intended to quickly and easily demonstrate how to create and publish an NPM package. You can do something more elaborate like separate the functions by files, write tests for the functions...
