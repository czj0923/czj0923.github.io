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
import {record} from "./constant/record"
export default {
    data() {
        return {
            last: "last",
            notlast: "notlast",
            listbox: "listbox",
            record,
        };
    },
    computed: {
        _space() {
            return "height:" + this.space;
        },
        list(){
            return this.record[this.type] || []
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
    