#!/usr/bin/env node

const expGetUserName = require('../src/cli.js');
const expIsFindCountNumbers = require('../src/gameCalc.js');

console.log('Welcome to the Brain Games!');
const nameUser = expGetUserName.getUserName();
console.log(expIsFindCountNumbers.isFindCountNumbers(nameUser));
