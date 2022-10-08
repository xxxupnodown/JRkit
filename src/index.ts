#! /usr/bin/env node

// 标识文件使用node执行

import { Command } from 'commander';
import Commands from '@commands';
import Pack from '../package.json';

const program = new Command();

Object.keys(Commands).forEach(command => {
  const current = program.command(command);
  if (Commands[command].option && Commands[command].option.length > 0) {
    Commands[command].option.forEach(item => {
      current.option(item.cmd, item.msg || '');
    });
  }
  current.action(Commands[command].action);
});

program
  .name(Pack.name)
  .version(Pack.version)
  .helpOption('-h,--help')
  .usage(`<command> [option]`);

program.parse();