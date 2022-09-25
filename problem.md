# 1. npm link 后执行命令失效（为生成软连接在 {prefix}\{name} 中
    package 中 bin 对象 的value 需要填写 后缀
    {
      "JRkit": "bin/JRkit.js"
    }

# 2. commander 需要在最后添加 .parse 方法才能生效

# 3. 9版本 inquirer 使用 ESModule， 回退致 8版本 （CommonJs）

# 4. ts 不编译paths别名
    npm i -D tsc-alias
    修改 scripts build => tsc && tsc-alias