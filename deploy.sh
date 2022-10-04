echo "deploy---"

# 打包
npm run build

# 添加到暂存区
git add .

# 提交
git commit -m 'update'

# 推送到github
git push github master

# 推送到gitee
git push gitee master
