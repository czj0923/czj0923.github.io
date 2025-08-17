---
title: 使用 husky 和 lint-staged 提升项目代码质量
date: 2025/07/29
tags:
  - 前端工程化
  - Git
  - 代码规范
categories:
  - 代码规范
---

# 使用 husky 和 lint-staged 提升项目代码质量

在现代前端开发中，保持代码质量和一致性是非常重要的。本文将介绍如何使用 husky 和 lint-staged 来自动化代码检查和格式化流程，确保提交到仓库的代码始终保持高质量。

## 为什么需要 husky 和 lint-staged？

在团队协作开发中，我们经常会遇到以下问题：
- 团队成员的代码风格不统一
- 提交的代码包含基本的语法错误
- 忘记运行测试就提交了代码
- 提交信息格式不规范

husky 和 lint-staged 就是为了解决这些问题而生的：
- **husky**：可以方便地为项目添加 Git Hooks，在代码提交前自动执行指定的命令
- **lint-staged**：只对 Git 暂存区的文件进行检查，提高检查效率

## 安装配置步骤

### 1. 安装依赖

首先，我们需要安装必要的依赖：

```bash
# 安装 husky 和 lint-staged
pnpm install husky lint-staged --save-dev

# 如果需要代码检查和格式化，还需要安装：
pnpm install eslint prettier --save-dev
```

### 2. 初始化 husky

```bash
# 初始化 husky
npx husky init
```
### 3. 添加.lintstagedrc.json
```json
{
  "*.{js,jsx,ts,tsx,vue}": "eslint --fix",
  "*.{js,jsx,ts,tsx,vue,css,scss}": "prettier --write"
}
```

### 4. 添加 Git Hooks

创建 pre-commit hook，在提交前运行 lint-staged：

```bash
npx husky add .husky/pre-commit "npx lint-staged"
```

## 工作流程说明

安装配置完成后，每次进行 git commit 时：

1. Git 触发 pre-commit hook
2. husky 执行预设的命令
3. lint-staged 对暂存区的文件进行检查和格式化
4. 如果检查通过，完成提交；如果检查失败，提交会被阻止
``

## 常见问题解决

### 1. husky 钩子不生效

确保：
- `.husky` 目录存在且有执行权限
- Git 版本 >= 2.9.0
- 项目中存在 .git 目录

### 2. lint-staged 执行很慢

优化建议：
- 只对必要的文件类型进行检查
- 使用缓存机制
- 考虑使用更快的 linter（如 eslint-plugin-prettier 替代直接运行 prettier）

### 3. 跳过检查

在特殊情况下需要跳过检查时，可以使用：

```bash
git commit -m "feat: some feature" --no-verify
```

但不建议经常使用这个选项，因为这会绕过代码质量控制。

## 总结

通过集成 husky 和 lint-staged，我们可以：
- 自动化代码检查和格式化
- 确保代码质量和一致性
- 减少代码审查中的格式讨论
- 提高团队协作效率

合理的配置和规范可以让团队成员专注于业务逻辑的开发，提高整体开发效率。

## 参考资料

- [husky 官方文档](https://typicode.github.io/husky/)
- [lint-staged 官方文档](https://github.com/okonet/lint-staged)
- [Conventional Commits](https://www.conventionalcommits.org/)