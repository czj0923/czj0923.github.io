<template>
    <div id="uni_timeline">
        <div :style="_space" v-for="(item,index) in list" :key="index"
            :class="[list.length == index + 1 ? last :notlast, listbox]">
            <p>
                <img :src="uni_icon" class="icon">
                <span class="title">{{ item.title }}</span>
            </p>
            <div class="content">
                <div>{{ item.content }}</div>
                <div>{{ item.content2 }}</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            last: "last",
            notlast: "notlast",
            listbox: "listbox",
            allList:{
                1: [
                    {
                        title: "2017年11月20日",
                        content: "首次5公里 37:30",
                        content2: "中国计量大学北操场"
                    },
                    {
                        title: "2020年9月8日",
                        content: "PB 28:51"
                    },
                    {
                        title: "2020年9月20日",
                        content: "PB 28:22"
                    },
                    {
                        title: "2020年9月21日",
                        content: "PB 27:16"
                    },
                    {
                        title: "2020年10月1日",
                        content: "10公里前5公里 PB 27:16",
                        content2: "凤凰湖"
                    },
                    {
                        title: "2020年10月2日",
                        content: "PB 24:44",
                        content2: "桐乡"
                    },
                    {
                        title: "2020年10月20日",
                        content: "PB 24:03",
                        content2: "中国计量大学北操场"
                    },
                    {
                        title: "2020年10月23日",
                        content: "PB 23:32",
                        content2: "中国计量大学北操场"
                    },
                    {
                        title: "2021年12月10日",
                        content: "PB 22:23",
                        content2: "余杭塘河绿道"
                    },
                ],
                2: [
                    {
                        title: "2020年10月1日",
                        content: "首次10公里 57:31",
                        content2: "凤凰湖"
                    },
                    {
                        title: "2020年10月9日",
                        content: "PB 55:00",
                        content2: "中国计量大学北操场"
                    },
                    {
                        title: "2020年10月19日",
                        content: "PB 51:40",
                        content2: "中国计量大学北操场"
                    },
                    {
                        title: "2020年10月24日",
                        content: "PB 50:33",
                        content2: "中国计量大学北操场"
                    },
                    {
                        title: "2021年11月27日",
                        content: "PB 48:25",
                        content2: "自测"
                    },
                    {
                        title: "2023年4月25日",
                        content: "PB 47:51",
                        content2: "自测"
                    },
                    {
                        title: "2023年4月30日",
                        content: "半马的10公里分段 PB 47:09",
                        content2: "龙游马拉松"
                    },
                    {
                        title: "2023年5月20日",
                        content: "PB 45:19",
                        content2: "嘉善大云中国十公里精英赛"
                    },
                ],
                3: [
                    {
                        title: "2021年10月30日",
                        content: "首次半马 01:53:43",
                        content2: "余杭塘河绿道"
                    },
                    {
                        title: "2022年11月05日",
                        content: "PB 01:52:21",
                        content2: "桐乡"
                    },
                    {
                        title: "2022年11月26日",
                        content: "PB 01:48:30",
                        content2: "桐乡"
                    },
                    {
                        title: "2023年04月30日",
                        content: "PB 01:44:15",
                        content2: "龙游马拉松"
                    },
                    {
                        title: "2023年10月29日",
                        content: "PB 01:40:52",
                        content2: "桐庐半程马拉松"
                    },
                    {
                        title: "2023年11月19日",
                        content: "PB 01:40:38",
                        content2: "苏州环太湖1号公路马拉松"
                    },
                    {
                        title: "2023年12月10日",
                        content: "PB 01:39:29",
                        content2: "诸暨西施马拉松"
                    },
                ]
            }
        };
    },
    computed: {
        _space() {
            return "height:" + this.space;
        },
        list(){
            return this.allList[this.type] || []
        }
    },
    props: {
        type: {
            type: String,
            default: 1
        },
        space: {
            type: String,
            default: "100px"
        },
        uni_icon: {
            type: String,
            default: "/avatar.jpg"
        }
    }
};
</script>
    
<style scoped>
* {
    margin: 0;
    padding: 0;
}

.listbox {
    box-sizing: border-box;
    margin: 20px;
    height: 60px;
    position: relative;
}

.last {
    height: 20px;
}

.notlast {
    height: 60px;
    margin-left: 18px;
    border-left: 3px solid rgb(228, 228, 228);
}

.listbox p {
    position: absolute;
    top: 0;
    left: 0;
    /* transform: translateY(-50%); */
    margin-left: -9px;
    margin-top: -18px;
    vertical-align: middle;
    height: 16px;
    line-height: 16px;
}

.icon {
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    width: 16px;
    height: 16px;
    vertical-align: middle;
}

.title {
    font-weight: bold;
    text-align: left;
    display: inline-block;
    width: 300px;
    margin: 0 30px;
    color: rgb(100, 100, 100);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.content {
    text-align: left;
    height: 70%;
    padding: 10px 21px;
    font-size: 14px;
    color: rgb(100, 100, 100);
    overflow: hidden;
}
</style>
    