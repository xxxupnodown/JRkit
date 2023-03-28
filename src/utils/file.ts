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

export const readFile = (path: string): Promise<string> => new Promise((res, rej) => {
  fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
    if (!err) res(data);
    rej(`${Cred(`can't read ${path}`)} \n ${typeof err === 'string' ? err : JSON.stringify(err)}`);
  })
})

export const copyFolder = (oldP, newP) => new Promise((res, rej) => {
  // fs.copyFile(oldP, newP, err => {
  //   if (!err) res('');
  //   rej(`${Cred('can not copy "' + oldP + '"')} \n ${typeof err === 'string' ? err : JSON.stringify(err)}`);
  // })
  fs.cp(oldP, newP, { recursive: true }, err => {
      if (!err) res('');
      rej(`${Cred('can not copy "' + oldP + '"')} \n ${typeof err === 'string' ? err : JSON.stringify(err)}`);
    })
})
