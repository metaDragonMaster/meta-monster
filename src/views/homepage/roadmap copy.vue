<template>
    <div class="road-map" id="road" ref="roadMap">
        <div class="centent">
            <img class="po po-1" src="@/assets/road-map/position-1.png" />
            <p class="tx">路线图</p>
            <dl class="dl dl-1">
                <dt>发展</dt>
                <dd>在币安智能链上部署和审核合约</dd>
                <dd>创建网站和社交账号</dd>
                <dd>NFT公告</dd>
                <dd>在主要公关渠道发表文章</dd>
                <dd>启动私募</dd>
                <dd>生态系统架构</dd>
            </dl>
            <dl class="dl dl-2">
                <dt>启动</dt>
                <dd>在Android和PC端上的主流版本</dd>
                <dd>创建网站和社交账NFT交易市场号</dd>
            </dl>
            <img class="po po-2" src="@/assets/road-map/position-2.png" />
            <dl class="dl dl-3">
                <dt>优化</dt>
                <dd>联合连锁游戏公会</dd>
                <dd>新故事情节</dd>
                <dd>元界房地产开业</dd>
                <dd>土地游戏社区</dd>
            </dl>
            <img class="po po-3" src="@/assets/road-map/position-3.png" />
            <dl class="dl dl-4">
                <dt>扩张</dt>
                <dd>元界游戏平台启动</dd>
                <dd>MET BEAST联动游戏开发</dd>
                <dd>新故事情节和玩赚方法</dd>
            </dl>
            <img class="po po-4" src="@/assets/road-map/position-4.png" />
        </div>
        <!-- <div class="position-progress">
            <p>{{ percentage }}</p>
            <p>{{ lock }}</p>
            <div class="progress">
                <img
                    class="arrow"
                    src="@/assets/road-map/progress-arrow.png"
                    @mousedown="enterArrow"
                    @mousemove="moveArrow"
                    @mouseup="leverArrow"
                    @mouseleave="leverArrow"
                />
            </div>
        </div> -->
    </div>
</template>

<script setup>
import {
    // useWindowResize
} from "@/hooks/useWindow"
// import { throttle } from "lodash"
import {
    // ref,
    // unref,
    // computed,
} from "vue"
// import { Percentage } from "@/utils/tools.js"
// const useResize = useWindowResize()
// const roadMap = ref();
// const lock = ref(false)
// async function enterArrow() {
//     lock.value = true
// }
// function leverArrow() {
//     lock.value = false
// }
// const progress = ref(0);
// const percentage = computed(() => `${progress.value}%`)

// const moveArrow = throttle((el) => {
//     if (!lock.value) return;
//     if (el.movementX == 0) return;
//     // console.dir(el.movementX)
//     let isLeft = el.movementX == -1
//     const xAdd = 1;
//     const unV = unref(progress)
//     let val = isLeft ? unV - xAdd : unV + xAdd
//     if (val < 0) val = 0
//     else if (val > 100) val = 100
//     progress.value = val
// }, 10, { leading: true })

</script>
<style lang='scss' scoped>
.road-map {
    height: 1080px;
    width: 100%;
    position: relative;
    // overflow: hidden;
    overflow-x: scroll;
    // .position-progress {
    //     position: absolute;
    //     bottom: 200px;
    //     left: 50%;
    //     transform: translateX(-50%);
    //     .progress {
    //         position: relative;
    //         height: 1px;
    //         width: 380px;
    //         border-right: 120px solid #42dce0;
    //         background-color: #42dce0;
    //         box-shadow: 0px 0px 9px 1px #00f1ff;
    //         .arrow {
    //             position: absolute;
    //             left: v-bind(percentage);
    //             transform: translateY(-50%);
    //             width: 120px;
    //             height: 62px;
    //             cursor: pointer;
    //         }
    //     }
    // }
    .centent {
        height: 100%;
        width: 3500px;
        background-image: url("~@/assets/road-map/bg-map.png");
        position: relative;
        // right: calc(100vw - v-bind(percentage));
        .po,
        .tx,
        .dl {
            position: absolute;
        }
        .dl {
            border-left: 1px solid #c4c4c4;
            padding-left: 26px;
            height: 300px;
            dt {
                font-size: 36px;
                margin-bottom: 24px;
                font-weight: bold;
            }
            dd {
                display: list-item;
                list-style: disc;
                list-style-position: inside;
                font-size: 14px;
            }
        }
        .tx {
            left: 720px;
            top: 420px;
            font-size: 48px;
        }
        .dl-1 {
            left: 1450px;
            top: 390px;
        }
        .dl-2 {
            left: 1930px;
            top: 470px;
        }
        .dl-3 {
            left: 2410px;
            top: 545px;
        }
        .dl-4 {
            left: 2885px;
            top: 450px;
        }
        .po-1 {
            left: 0;
            top: 80px;
        }
        .po-2 {
            left: 1990px;
            top: 170px;
        }
        .po-3 {
            left: 2530px;
            top: 270px;
        }
        .po-4 {
            left: 3020px;
            top: 130px;
        }
    }
}
</style>