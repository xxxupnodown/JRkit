#! /usr/bin/env node
import { Command } from 'commander';
import Pack from '../package.json';

const program = new Command();

program
  .name(Pack.name)
  .usage(`<command> [option]`)
  .version(Pack.version)
  .helpOption('-h,--help');

program.parse(process.argv);
