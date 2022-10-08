import fs from 'fs';
import { Cred } from './chalk';

export const readDir = (path: string) => new Promise((res, rej) => {
  fs.readdir(path, (err) => {
    if (!err) res(true);
    res(false);
  })
})

export const mkdir = (path: string) => new Promise((res, rej) => {
  fs.mkdir(path, (err) => {
    if (!err) res('');
    rej(`${Cred('Can not make dir')} ${typeof err === 'string' ? err : JSON.stringify(err)}`);
  })
})

export const rm = (path: string) => new Promise((res, rej) => {
  fs.rm(path, { recursive: true }, (err) => {
    if (!err) res('');
    rej(`${Cred('can not remove "' + path + '"')} ${typeof err === 'string' ? err : JSON.stringify(err)}`);
  })
})
