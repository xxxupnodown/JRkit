#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = require("commander");
var _utils_1 = require("./utils");
var program = new commander_1.Command();
_utils_1.loading.start('loading.........');
setTimeout(function () {
    _utils_1.loading.succeed();
}, 2000);
setTimeout(function () {
    _utils_1.loading.warn('warn!!!');
}, 3000);
setTimeout(function () {
    _utils_1.loading.start('test');
}, 4000);
setTimeout(function () {
    _utils_1.loading.stop();
}, 5000);
program
    .name("JRkit")
    .usage("<command> [option]")
    .version('1.0.0')
    .helpOption('-h,--help');
program.parse(process.argv);
