read -p  "请填写commit提交的信息:" msg

# 空值判断
if [ ! $msg ]; then  
    echo "终止提交，因为提交说明为空。"
else
    # 打包
    echo "\n\n开始打包......"
    npm run build
    echo "\n\n打包完成！"
    
    # 添加到暂存区
    echo "\n\n开始执行add-commit操作......"
    git add .
    
    # 提交
    git commit -m "$msg"
    echo "commit完毕，开始拉取以及推送代码\n"
    
    # 推送到github
    echo "开始推送到github\n"
    git push github master
    
    # 推送到gitee
    echo "开始推送到gitee\n"
    git push gitee master

    if [ $? -eq 0 ]; then
        echo "\n\n流程结束，完成提交。"
    else
        echo "\n\n出错了,请解决错误"
    fi
fi