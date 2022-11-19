---
title: Useful NPM commands
author:
  name: Pedro Isac
  link: https://github.com/pedro-isacss
date: 2022-02-19 11:33:00 +0800
categories: [CLIs]
tags: [npm, nodejs]
math: true
mermaid: true
---
NPM (Node Package Manager) is an essential tool for anyone developing with JavaScript. So in this post I will list some useful commands when using NPM.

## Starting a project
We can start a project by running ```npm init```.

We can also do ```npm init -y``` if we want a default package.json.

## Searching packages
You can fetch NPM packages in two ways. The first way is by directly accessing the [NPM website](https://www.npmjs.com/). The second way is using the NPM CLI:

```shell
npm search <package>
```

## Installing packages
A very important NPM command is **install**. It allows us to add dependencies to our project.

Some use cases:

```shell
npm install   # install the packages specified in package.json
npm install package   # install a package
npm install package@4.0.1   # install a specific version
npm install package@latest   # install the latest version
npm install package -D   # install as development dependency
npm install -g package   # install package globally
```

## Uninstalling packages
We can uninstall a package using **uninstall**:

```shell
npm uninstall package
```

## Updating packages
We can update packages using **update**:

```shell
npm update // update packages
npm update package // update a specific package
```

We can still list outdated packages by doing:

```shell
npm outdated
```

## Other useful NPM commands
Some other commands that can be useful when we are working with NPM:

```shell
npm login   # log in
npm logout   # log out
npm whoami   # display logged in user
npm publish   # publish a package
```