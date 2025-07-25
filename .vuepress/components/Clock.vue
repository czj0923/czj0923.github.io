<template>
    <div>
        <ul class="clock" id="helang-clock">
            <hr class="active" style="width: 49%;">
            <li class="date">{{ timeStr }}</li>
            <li class="hour on-hour" :style="{ transform: `rotate(${hourRotate}deg)` }">
                <div :style="{ transform: `rotate(${item.rotate}deg)` }" v-for="(item, index) in hoursList" :key="index">
                    <div>{{ item.text }}</div>
                </div>
            </li>
            <li class="hour minute on-minute" :style="{ transform: `rotate(${minuteRotate}deg)` }">
                <div :style="{ transform: `rotate(${item.rotate}deg)` }" v-for="(item, index) in minutesList" :key="index">
                    <div>{{ item.text }}</div>
                </div>
            </li>
            <li class="hour sec on-sec" :style="{ transform: `rotate(${secondRotate}deg)` }">
                <div :style="{ transform: `rotate(${item.rotate}deg)` }" v-for="(item, index) in secondsList" :key="index">
                    <div>{{ item.text }}</div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            hoursList: [],
            minutesList: [],
            secondsList: [],
            timeStr: "",
            hour: 0,
            minute: 0,
            second: 0,
            timer: null,
        }
    },
    mounted() {
        this.generateTimeList()
        this.getDate()
        this.initNeedle()
        this.timer = setInterval(() => {
            this.setNeedle()
        }, 1000)
    },
    destroyed() {
        clearInterval(this.timer)
    },
    computed:{
        hourRotate(){
            return (this.hour - 1) * 15
        },
        minuteRotate(){
            return (this.minute - 1) * 6
        },
        secondRotate(){
            return (this.second - 1) * 6
        }
    },
    methods: {
        // 阿拉伯数字转中文数字
        convertToChineseNumeral(num) {
            if (num == 10) {
                return '十'
            } else if (num == 1) {
                return '一'
            }
            const digits = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
            const units = ['', '十', '百', '千', '万'];
            let result = '';
            let numStr = num.toString();
            for (let i = 0; i < numStr.length; i++) {
                let digit = parseInt(numStr.charAt(i));
                let unit = units[numStr.length - i - 1];
                if (digit === 0) {
                    // 当前数字为0时不需要输出汉字，但需要考虑上一个数字是否为0，避免出现连续的零
                    // if (result.charAt(result.length - 1) !== '零') {
                    //     result += '零';
                    // }
                } else {
                    result += digits[digit] + unit;
                }
            }
            // 对于一些特殊的数字，如10、100等，需要在最前面加上“一”
            if (result.charAt(0) === '一') {
                result = result.substr(1, result.length);
            } else if (result.charAt(0) === '百') {
                result = '一' + result;
            } else if (result.charAt(0) === '千') {
                result = '一' + result;
            }
            return result;
        },
        generateTimeList() {
            for (let i = 1; i <= 24; i++) {
                let hourObj = {
                    text: this.convertToChineseNumeral(i) + '时',
                    rotate: 15 * (1 - i)
                }
                this.hoursList.push(hourObj)
            }
            for (let i = 1; i <= 60; i++) {
                let minuteObj = {
                    text: this.convertToChineseNumeral(i) + '分',
                    rotate: 6 * (1 - i)
                }
                this.minutesList.push(minuteObj)

                let secondObj = {
                    text: this.convertToChineseNumeral(i) + '秒',
                    rotate: 6 * (1 - i)
                }
                this.secondsList.push(secondObj)
            }
        },
        initNeedle() {
            const date = new Date() // 获取时间
            this.hour = date.getHours() // 获取小时
            this.minute = date.getMinutes() // 获取分钟
            this.second = date.getSeconds() // 获取秒
        },
        setNeedle(){
            this.second ++ 
            if(this.second%60 == 0){
                this.minute ++
                if(this.minute%60 == 0){
                    this.hour ++ 
                }
            }
        },
        getDate() {
            let numStr = '零一二三四五六七八九'
            const date = new Date() // 获取时间
            const year = date.getFullYear().toString() // 获取年
            const month = date.getMonth() + 1 // 获取月
            const day = date.getDate() // 获取日
            let timeStr = ''
            for (let i = 0; i < year.length; i++) {
                timeStr += numStr.charAt(year.charAt(i))
            }
            timeStr += `年${numStr.charAt(month)}月${this.convertToChineseNumeral(day)}日`
            this.timeStr = timeStr
        },
    },
}
</script>

<style lang="scss" scoped>
.clock {
    list-style: none;
    margin: auto;
    padding: 0;
    width: 700px;
    height: 700px;
    line-height: 20px;
    user-select: none;
    position: relative;
    font-size: 14px;

    .date {
        position: absolute;
        z-index: 1;
        width: 100%;
        height: 20px;
        text-align: center;
        top: 340px;
        left: 0
    }

    .hour {
        position: absolute;
        z-index: 3;
        width: 360px;
        height: 20px;
        top: 340px;
        left: 170px;
        transition: transform .3s ease-in-out 0s;
        transform: rotate(0deg)
    }

    .hour>div {
        position: absolute;
        width: 100%;
        right: 0;
        top: 0;
        transition: transform 1s ease-in-out 0s;
        transform: rotate(0deg);
    }

    .hour>div>div {
        float: right;
        width: 60px;
        text-align: right;
        color: #f00;
    }

    .minute {
        position: absolute;
        z-index: 4;
        width: 520px;
        height: 20px;
        top: 340px;
        left: 90px;
    }

    .sec {
        position: absolute;
        z-index: 5;
        width: 680px;
        height: 20px;
        top: 340px;
        left: 10px;
    }

    &>hr {
        height: 0;
        width: 0%;
        position: absolute;
        z-index: 1;
        border: #000 solid 0;
        border-bottom-width: 1px;
        margin: 10px 0 0;
        left: 50%;
        top: 50%;
        transition: width .3s ease-in-out 0s;
        overflow: visible;

        &.active:before {
            content: '';
            display: block;
            width: 5px;
            height: 5px;
            border-radius: 50%;
            background-color: #000;
            top: -2px;
            left: 0;
            position: absolute;
        }
    }
}
</style>