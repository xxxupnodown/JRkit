import { readDir, mkdir, rm, Cred, loading } from "@utils"

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
      await mkdir(currentPath);

      // 下载Git了
      // download-git-repo
    } else {
      if (exists) { // 存在文件夹提示错误 返回
        console.log(Cred('The files is exists'));
        return;
      }

      await mkdir(currentPath);

      // 下载Git了
      // download-git-repo
    }

  } catch(e) {
    console.log(e);
  }
}