/*
 * @Author: xxxupnodown 469004811@qq.com
 * @Date: 2023-02-26 18:52:49
 * @LastEditors: wanghaoyu
 * @LastEditTime: 2023-03-28 22:55:14
 * @FilePath: \JRkit\src\commands\create\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { readDir, mkdir, rm, Cred, loading, readFile, copyFolder } from "@utils";
import { exec } from 'child_process';
import { TemplatesName, TemplatesRepo } from "../../constant/repo";
import inquirer from 'inquirer';

export default async function (projectName, cmd) {
  // 1. 判断文件夹存在与否
  // 若存在则判断 force 为 true 则 删除
  // false 则 提示错误

  // nodejs => fs
  const currentPath = process.cwd() + '\\' + projectName;
  try {
    const exists = await readDir(currentPath);

    if (cmd.force) { // 强制清除文件
      exists && await rm(currentPath);
    } else {
      if (exists) { // 存在文件夹提示错误 返回
        console.log(Cred('The files is exists'));
        return;
      }
    }
    // 下载Git了
    // download-git-repo
    const templatePath = process.cwd() + '/' + TemplatesName;
    if (await readDir(templatePath)) {
      console.log(`JRkit-templates is existed! Please remove it !`);
      process.abort();
    }
    loading.start('下载模板...');
    exec(`git clone ${TemplatesRepo}`, async (err) => {
      if (err) {
        console.log("con't clone this repo, please try agin later!");
        console.log(err);
        process.abort();
      }
      const project: string = await readFile(templatePath + '/' + 'project.json');
      loading.stop();
      const question = [
        {
          type: "list",
          message: "请选择一个模板：",
          name: "template",
          choices: JSON.parse(project), // string[]
        }
      ]
      const { template } = await inquirer.prompt(question);
  
      const newPath = currentPath;
      const oldPath = templatePath + '/' + template;
  
      loading.start('生成模板...');
  
      await copyFolder(oldPath, newPath);
      // 删除克隆模板
      await rm(templatePath);
  
      loading.stop();
      // npm i
    });
  } catch(e) {
    loading.stop();
    console.log(e);
    process.abort();
  }
}