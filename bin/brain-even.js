#!/usr/bin/env node

const expGetUserName = require('../src/cli.js');
const expIsFindEvenNumber = require('../src/gameEven.js');

console.log('Welcome to the Brain Games!');
const nameUser = expGetUserName.getUserName();
console.log(expIsFindEvenNumber.isFindEvenNumber(nameUser));
