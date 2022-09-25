#! /usr/bin/env node
import { Command } from 'commander';

const program = new Command();

program
  .name("JRkit")
  .usage(`<command> [option]`)
  .version('1.0.0')
  .helpOption('-h,--help');

program.parse(process.argv);
