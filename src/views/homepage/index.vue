<template>
    <div class="homepage-view">
        <section class="module n-1 flex-column limit-max-width-media">
            <img src="@/assets/homepage/banner.png" alt />
            <div class="ps">
                <p>Mate Beast It is a leisure cultivation game based on blockchain</p>
                <p>technology, where you can break through customs, challenge the</p>
                <p>arena and make money with your skills</p>
            </div>
            <div class="players">12,064,711</div>
            <div class="download-list">
                <a class="download-link" download>
                    <img src="@/assets/icons/icon-android.png" alt />
                    <p>ANDROID</p>
                </a>
                <a class="download-link" download>
                    <img src="@/assets/icons/icon-iphone.png" alt />
                    <p>IOS</p>
                </a>
                <a class="download-link" download>
                    <img src="@/assets/icons/icon-window.png" alt />
                    <p>PC</p>
                </a>
                <a class="download-link" download>
                    <img src="@/assets/icons/icon-android.png" alt />
                    <p>APK</p>
                </a>
            </div>
            <div class="contract-address">
                <h3>$ THG CONTRACT ADDRESS</h3>
                <ul>
                    <li v-for="item in ContractAddress" :key="item.address">
                        <span>{{ item.type }}</span>
                        <span>{{ item.address }}</span>
                        <img src="@/assets/icons/icon-copy.png" @click="copy(item.address)" />
                    </li>
                </ul>
            </div>
        </section>
        <section class="module n-2 flex-column limit-max-width-media">
            <div class="posi-pd">
                <div class="posi-nft">
                    <p>
                        NFT剩余：
                        <span>4500</span>
                    </p>
                    <p>
                        NFT单价：
                        <span>40USDT</span>
                    </p>
                </div>
            </div>
            <img class="title-image" src="@/assets/homepage/title-s2.png" />
            <p class="text theme-text-shadow">距预售结束</p>
            <div class="count-down">
                <div class="wait-progress">
                    <span class="lr">LOADING...</span>
                    <div class="progress" data-progress="40%"></div>
                </div>
                <ul class="time-clock">
                    <li v-for="(item, index) in splitTime" :key="index" class="clock-item">
                        <time class="item-time" :class="[`clock-${index + 1}`]">
                            <span
                                class="time-shadow"
                                v-for="(time, index) in item"
                                :key="index"
                                :data-time="time"
                            >0</span>
                        </time>
                        <img
                            class="separate"
                            v-show="index + 1 < splitTime.length"
                            src="@/assets/homepage/time-separate.png"
                        />
                    </li>
                </ul>
            </div>

            <button class="theme-bg-button">
                <span class="theme-text-shadow">99%</span>
            </button>
            <p>已投资：10000</p>
            <div class="input">请输入购买的份额</div>
            <button class="theme-bg-button">
                <span class="theme-text-shadow">买入</span>
            </button>
        </section>
        <section class="module n-3 flex-column limit-max-width-media">
            <img class="title-image" src="@/assets/homepage/title-s3.png" alt />
            <div class="content">
                <img class="nft-bg" src="@/assets/homepage/nft-bg.png" />
                <img class="nft" src="@/assets/homepage/nft.png" />
            </div>
            <div class="ps">
                <p class="theme-text-shadow">游戏中所有产生的手续费将会</p>
                <p class="theme-text-shadow">按照私募购买比例进行分红</p>
            </div>
        </section>
        <section class="module n-4 flex-column limit-max-width-media">
            <img class="title-image" src="@/assets/homepage/title-s4.png" alt />
            <img src="@/assets/homepage/s4-b.png" alt />
            <div class="end">
                <img src="@/assets/icons/icon-arrow-right.png" />
                <p class="theme-text-shadow">游戏上线以优惠价格购买NFT</p>
                <img src="@/assets/icons/icon-arrow-left.png" />
            </div>
        </section>
        <section class="module n-5 limit-max-width-media">
            <div>
                <img :src="spActiveObj.active" alt />
            </div>
            <ul>
                <li
                    v-for="item in sp5.list"
                    :key="item.id"
                    :class="{ 'active': sp5.active == item.id }"
                    @click="sp5.active = item.id"
                >
                    <img
                        :class="['arrow', { 'arrow-active': sp5.active == item.id }]"
                        src="@/assets/icons/icon-sp-arrow.png"
                    />
                    <img class="pc" :src="item.img" alt />
                    <img class="ph" :src="item.phImg" alt />
                </li>
            </ul>
        </section>
    </div>
</template>

<script setup>
import {
    computed,
    reactive,
    onMounted,
    onUnmounted
} from "vue";
import { copy } from "@/utils/tools.js";
import {
    // useSafeInterval,
    // useSafeHook
} from "@/hooks/useWindow"
import { Format } from "@/utils/deta"
// const downloadLink = {
//     android: 'http://down.metadragon.games/MetaDragon.apk',
//     exe: 'http://down.metadragon.games/MetaDragon.exe'
// }
const ContractAddress = [
    {
        type: 'BEP20',
        address: '0x9fd87aefe02441b123c3c32466cd9db4c58618f',
    },
    {
        type: 'BEP20',
        address: '0x9fd87aefe02441b123c3c32466cd9db4c58618f',
    },
    {
        type: 'BEP20',
        address: '0x9fd87aefe02441b123c3c32466cd9db4c58618f',
    },
]

const sp5 = reactive({
    active: '1',
    list: [
        {
            id: "1",
            img: require('@/assets/homepage/sp-5-L1.png'),
            phImg: require('@/assets/homepage/sp-5-1ph.png'),
            active: require('@/assets/homepage/sp-5-1.png'),
        },
        {
            id: "2",
            img: require('@/assets/homepage/sp-5-L2.png'),
            phImg: require('@/assets/homepage/sp-5-2ph.png'),
            active: require('@/assets/homepage/sp-5-2.png'),
        },
        {
            id: "3",
            img: require('@/assets/homepage/sp-5-L3.png'),
            phImg: require('@/assets/homepage/sp-5-3ph.png'),
            active: require('@/assets/homepage/sp-5-3.png'),
        },
        {
            id: "4",
            img: require('@/assets/homepage/sp-5-L4.png'),
            phImg: require('@/assets/homepage/sp-5-4ph.png'),
            active: require('@/assets/homepage/sp-5-4.png'),
        },
    ]
})
const spActiveObj = computed(() => sp5.list.filter(item => item.id == sp5.active)[0] || {})


const sp2 = reactive({
    progress: '36%',
    time: '0',
})
function useSafeHook(run, clear) {
    onMounted(() => {
        clear()
        run()
    });
    onUnmounted(() => {
        clear()
    });
}
function useSafeInterval(fn, wait = 1000) {
    let timer = null;
    function runTimer() {
        timer = setInterval(fn, wait)
    }
    function clearTimer() {
        if (timer) clearInterval(timer)
    }
    useSafeHook(runTimer, clearTimer)
    return { runTimer, clearTimer };
}
function timeRun() {
    sp2.time = Format(new Date(), 'dd HH mm ss')
    // console.log(sp2.time);
    // let split = sp2.time.split(' ').map(item => item.split('')).toString().split(',').map(item => parseInt(item))
    // console.log(split);
    // console.log(flatten(split));
}
// const splitTime = computed(() => sp2.time.split(' ').map(item => item.split('')).toString().split(','))
const splitTime = computed(() => sp2.time.split(' ').map(item => item.split('')))
timeRun()
useSafeInterval(timeRun)
console.log(sp2);


</script>

<style lang='scss' scoped>
// .homepage-view {
// }
.theme-text-shadow {
    background-image: linear-gradient(180deg, #fff 40%, #f40bff);
    background-clip: text;
    color: transparent;
    font-weight: bold;
}
.theme-bg-button {
    background-image: url("~@/assets/homepage/button.png");
    background-size: contain;
    height: 106px;
    width: 366px;
    font-size: 36px;
    @media screen and (max-width: 768px) {
        height: 55px;
        width: 180px;
        font-size: 18px;
    }
}
.time-shadow {
    font-family: "Regular";
    font-size: 42px;
    position: relative;
    color: #343f54;
    text-indent: 4px;
    &[data-time="1"]::after {
        right: -8px;
    }
    &[data-time="7"]::after {
        right: -1px;
    }
    &::after {
        position: absolute;
        right: 0;
        color: #fff;
        content: attr(data-time);
    }
    @media screen and (max-width: 768px) {
        font-size: 18px;
        &[data-time="1"]::after {
            right: -4px;
        }
    }
}
.title-image {
    margin-top: 65px;
}
.module {
    // min-height: 1080px;
    &.n-2,
    &.n-3,
    &.n-4 {
        background: url("~@/assets/homepage/bg-bg.png") center no-repeat;
        background-size: cover;
    }
}
.n-1 {
    background: url("~@/assets/homepage/bg-1.png") no-repeat;
    background-position: center -100px;
    padding-bottom: 80px;
    .ps {
        text-align: center;
        line-height: 22px;
        font-size: 18px;
        font-weight: bold;
    }
    .players {
        $spacing: 12px;
        background: url("~@/assets/homepage/banner-player.png") center no-repeat;
        background-size: contain;
        font-family: "Regular";
        font-size: 45px;
        line-height: 125px;
        text-align: center;
        color: #f4df1d;
        text-indent: $spacing;
        letter-spacing: $spacing;
        margin-top: 20px;

        @media screen and (min-width: 769px) {
            width: 420px;
            height: 135px;
        }
        @media screen and (max-width: 768px) {
            max-width: 100%;
            max-height: 135px;
        }
    }
    .download-list {
        display: flex;
        justify-content: space-between;
        @media screen and (min-width: 769px) {
            width: 410px;
        }
        @media screen and (max-width: 768px) {
            max-width: 100%;
        }
        .download-link {
            background-image: url("~@/assets/homepage/button-download-bg.png");
            font-size: 12px;
            width: 76px;
            height: 88px;
            text-align: center;
            padding-top: 20px;
        }
    }
    .contract-address {
        background-color: rgba(0, 0, 0, 0.3);
        border-right: 4px solid #344691;
        margin-top: 40px;
        @media screen and (max-width: 768px) {
            font-size: 12px;
            h3 {
                background-size: 150px 8px;
            }
        }
        h3 {
            margin-top: -22px;
            background-image: repeating-linear-gradient(
                115deg,
                rgba(255, 255, 255, 0) 0,
                rgba(255, 255, 255, 0) 6px,
                #4d4b5d 6px,
                #4d4b5d 12px
            );
            background-size: 261px 15px;
            background-position: left bottom;
            background-repeat: no-repeat;
            padding-left: 12px;
            margin-left: -12px;
            @media screen and (max-width: 768px) {
                background-size: 150px 8px;
            }
        }

        ul {
            li {
                position: relative;
                padding: 4px 12px;
                &:not(:last-child)::after {
                    display: block;
                    content: "";
                    position: absolute;
                    right: 12px;
                    bottom: 0;
                    background-color: #5278ff;
                    height: 1px;
                    width: 100%;
                }
                span {
                    margin-right: 12px;
                }
                img {
                    cursor: pointer;
                }
                @media screen and (max-width: 768px) {
                    padding: 4px;
                    span {
                        margin-right: 4px;
                    }
                }
            }
        }
    }
}
.n-2 {
    .text {
        font-size: 30px;
        margin: 50px 0 20px;
        @media screen and (max-width: 768px) {
            font-size: 18px;
        }
    }
    .input {
        background: url("~@/assets/homepage/input.png") no-repeat;
        background-size: 100%;
        background-position: center;
        font-size: 24px;
        padding: 18px 0;
        text-align: center;
        max-width: 650px;
        width: 100%;
    }
    .posi-pd {
        position: relative;
        width: 100%;
        @media screen and (max-width: 768px) {
            display: none;
        }
    }
    .posi-nft {
        position: absolute;
        top: 0;
        right: 0;
        width: 280px;
        height: 300px;
        background-image: url("~@/assets/homepage/s3.png");
        padding: 46px 38px;
        font-size: 14px;
        p {
            padding-bottom: 16px;
        }
        span {
            font-size: 20px;
            color: #00f1ff;
            text-shadow: 0 0 8px #00f1ff;
        }
    }
    .count-down {
        display: flex;
        align-items: flex-end;
    }
    .wait-progress {
        display: flex;
        padding-bottom: 18px;

        .lr {
            writing-mode: vertical-lr;
            transform: rotateZ(180deg);
            @media screen and (max-width: 768px) {
                height: 70px;
                width: 10px;
                font-size: 12px;
            }
        }
        // data-progress
        .progress {
            height: 186px;
            width: 24px;
            border-radius: 6px;
            border: 1px solid #00f1ff;
            position: relative;
            overflow: hidden;
            @media screen and (max-width: 768px) {
                height: 70px;
                width: 10px;
            }
            &:after {
                position: absolute;
                content: "";
                top: calc(100% - v-bind("sp2.progress"));
                height: 100%;
                width: 100%;
                border-radius: 6px;
                background-color: #6bc4f5;
            }
        }
    }
    .time-clock {
        background-image: url("~@/assets/homepage/sp2-time-bg.png");
        background-size: contain;
        background-repeat: no-repeat;
        width: 720px;
        height: 222px;
        display: flex;
        align-items: center;
        justify-content: center;
        @media screen and (max-width: 768px) {
            width: 335px;
            height: 105px;
        }
        .clock-item {
            display: flex;
            align-items: center;
            .separate {
                margin: 0 10px;
                @media screen and (max-width: 768px) {
                    margin: 0;
                    width: 8px;
                }
            }
        }
        .item-time {
            padding: 22px 36px;
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            @media screen and (max-width: 768px) {
                padding: 12px 0;
                text-align: center;
                width: 70px;
            }
            span:first-child {
                margin-right: 12px;
            }
            &.clock-1 {
                background-image: url("~@/assets/homepage/sp2-time-1.png");
            }
            &.clock-2 {
                background-image: url("~@/assets/homepage/sp2-time-2.png");
            }
            &.clock-3 {
                background-image: url("~@/assets/homepage/sp2-time-3.png");
            }
            &.clock-4 {
                background-image: url("~@/assets/homepage/sp2-time-4.png");
            }
        }
    }
}
.n-3 {
    .content {
        max-width: 1120px;
        // background: url("~@/assets/homepage/nft-bg.png") center no-repeat;
        // background-size: 100%;
        .nft {
            display: block;
            width: fit-content;
            margin: -50% auto 0;
        }
    }
    .ps {
        background: url("~@/assets/homepage/s3-ps.png") center no-repeat;
        background-size: 100%;
        max-width: 580px;
        width: 100%;
        height: 135px;
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        p:first-child {
            font-size: 24px;
            margin-bottom: 10px;
        }
        p:last-child {
            font-size: 30px;
        }
        @media screen and (max-width: 769px) {
            p:first-child {
                font-size: 18px;
            }
            p:last-child {
                font-size: 24px;
            }
        }
    }
}
.n-4 {
    .end {
        display: flex;
        align-items: center;
        img {
            height: 20px;
        }
    }
}
.n-5 {
    background: url("~@/assets/homepage/s5-bg.png") no-repeat;
    background-position: center;
    padding-bottom: 80px;
    display: flex;

    @media screen and (min-width: 769px) {
        justify-content: space-between;
        align-items: center;
    }
    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
    ul {
        @media screen and (min-width: 769px) {
            // margin-left: -20px;
            li:not(:last-child) {
                margin-bottom: 50px;
            }
        }
        @media screen and (max-width: 768px) {
            display: flex;
            justify-content: center;
            li:not(:last-child) {
                margin-right: 16px;
            }
        }
        li {
            transition: transform 0.6s;
            display: flex;

            &.active {
                .arrow {
                    opacity: 1;
                }
                @media screen and (min-width: 769px) {
                    transform: translateX(-20px);
                    .arrow {
                        margin-left: 40px;
                    }
                }
                @media screen and (max-width: 768px) {
                    transform: translateY(-20px);
                }
            }
            @media screen and (min-width: 769px) {
                align-items: center;
                .arrow {
                    opacity: 0;
                    margin-left: 40px;
                    margin-right: 20px;
                    transition: opacity 0.6s, margin 0.6s;
                }
                &.active {
                    .arrow {
                        opacity: 1;
                        margin-left: 40px;
                    }
                }
                .pc {
                    display: inline;
                    width: calc(100% - 80px);
                }
                .ph {
                    display: none;
                }
            }
            @media screen and (max-width: 768px) {
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin-top: 40px;
                .arrow {
                    transform: rotateZ(-90deg);
                }
                .pc {
                    display: none;
                }
                .ph {
                    display: inline;
                }
            }
        }
    }
}
</style>