---
title: 如何发布一个npm包
date: 2025/07/20
tags:
  - npm
  - JavaScript
categories:
  - 代码笔记
---

# 如何发布一个npm包

## 包名冲突的解决方案

### 1. 使用 Scoped Package（推荐）

Scoped Package 是 npm 提供的最佳解决方案，使用 `@用户名/包名` 的格式：

```bash
# package.json
{
  "name": "@your-username/package-name",
  "version": "1.0.0"
}

# 发布命令
npm publish --access public
```

优点：
- 不会与其他包冲突
- 清晰表明包的所有者
- 适合个人和组织使用
- 更专业的形象

注意：首次发布需要添加 `--access public` 参数，否则默认为私有包（需要付费）。

### 2. 使用替代名称

如果不想使用 scoped package，可以通过修改包名来避免冲突：

1. 添加前缀或后缀：
```json
{
  "name": "my-package-name",
  "name": "package-name-js",
  "name": "package-name-plus"
}
```

2. 使用更具描述性的名称：
```json
{
  "name": "better-package-name",
  "name": "enhanced-package-name"
}
```

### 3. 联系原包作者

如果原包：
- 长期未维护（通常超过1年）
- 已废弃（deprecated）
- 功能与你的完全不同

你可以：
1. 在原包的 GitHub 仓库提 issue
2. 通过 npm 网站联系包作者
3. 向 npm support 请求转让包名

## 检查包名是否可用

在发布前，可以通过以下方式检查包名：

1. npm 官网搜索：
```bash
# 访问 npmjs.com 搜索包名
```

2. 命令行检查：
```bash
# 检查包名是否已存在
npm view package-name

# 如果返回 404，说明包名可用
```

3. 使用 npm-name-cli 工具：
```bash
# 安装工具
npm install -g npm-name-cli

# 检查包名
npm-name package-name
```

## 发布包的最佳实践

### 1. 包名命名规范

```bash
# 允许的格式
my-package
@scope/my-package
@scope%2fmy-package

# 不允许的格式
My-Package  # 不能有大写字母
.my-package # 不能以点开头
_my-package # 不能以下划线开头
```

### 2. 发布前检查清单

```bash
# 1. 确保 package.json 配置正确
{
  "name": "@your-scope/package-name",
  "version": "1.0.0",
  "main": "index.js",
  "files": ["dist/", "README.md"],
  "publishConfig": {
    "access": "public"
  }
}

# 2. 检查 .gitignore 和 .npmignore
node_modules/
*.log
.DS_Store

# 3. 确保包含必要文件
- README.md
- LICENSE
- package.json
- 主要代码文件

# 4. 测试打包结果
npm pack  # 创建 .tgz 文件但不发布
```

### 3. 发布流程

```bash
# 1. 登录 npm
npm login

# 2. 检查当前 npm 用户
npm whoami

# 3. 发布包
npm publish --access public

# 4. 检查发布结果
npm view @your-scope/package-name
```

### 4. 版本管理

```bash
# 更新版本号
npm version patch  # 补丁版本 0.0.x
npm version minor  # 次要版本 0.x.0
npm version major  # 主要版本 x.0.0

# 发布新版本
npm publish
```

## 常见问题解决

### 1. 发布失败

```bash
# 403 错误 - 包名已存在
# 解决：使用 scope 或更换包名

# 402 错误 - 私有包需要付费
# 解决：添加 --access public

# 401 错误 - 未登录或 token 过期
# 解决：重新登录
npm login
```

### 2. 撤销发布

```bash
# 撤销特定版本（72小时内）
npm unpublish package-name@1.0.0

# 撤销整个包（慎用）
npm unpublish package-name --force
```

记住：npm 的包一旦发布，72小时后就不能撤销了，所以发布前要仔细检查。建议先用 `npm pack` 测试打包结果。