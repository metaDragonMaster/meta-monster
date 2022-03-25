<template>
    <div class="private-recruit-view">
        <section class="theme-bg-view n-1 flex-column limit-max-width-media">
            <div class="posi-pd">
                <div class="posi-nft">
                    <p>
                        NFT剩余：
                        <span>4500</span>
                        <!-- <span>{{locale}}</span> -->
                    </p>
                    <p>
                        NFT单价：
                        <span>40USDT</span>
                    </p>
                    <button @click="openBrowse">私募名单</button>
                </div>
            </div>
            <ThemeDialogBrowse ref="refBrowse">
                <template v-slot:head>
                    <div class="head">已参与私募地址:3333</div>
                </template>
                <template v-slot:default>
                    <div class="table">
                        <ul class="table-head">
                            <li class="table-head__tr theme-text-shadow">钱包地址</li>
                            <li class="table-head__tr theme-text-shadow">私募价值</li>
                            <li class="table-head__tr theme-text-shadow">占股比例</li>
                        </ul>
                        <div class="hr"></div>
                        <ul class="table-data">
                            <li class="table-data__cells">
                                <div class="cell">5s5x4a6sd5x4sdsa4xas4</div>
                                <div class="cell">100000U</div>
                                <div class="cell">22.22%</div>
                            </li>
                            <li class="table-data__cells">
                                <div class="cell">5s5x4a6sd5x4sdsa4xas4</div>
                                <div class="cell">100000U</div>
                                <div class="cell">22.22%</div>
                            </li>
                        </ul>
                    </div>
                </template>
            </ThemeDialogBrowse>
            <img class="title-image" v-show="i18nTypeIsZh" src="@/assets/homepage/title-s2.png" />
            <img class="title-image" v-show="!i18nTypeIsZh" src="@/assets/homepage/title-s2-ph.png" />
            <p class="text theme-text-shadow">{{ $t('首页.距预售结束') }}</p>
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
            <p class="recruited">{{ $t('首页.已投资') }}：10000</p>
            <div class="input">{{ $t('首页.请输入购买的份额') }}</div>
            <button class="theme-bg-button">
                <span class="theme-text-shadow">{{ $t('首页.买入') }}</span>
            </button>
        </section>
        <section class="theme-bg-view n-2 flex-column limit-max-width-media">
            <img class="title-image" v-show="i18nTypeIsZh" src="@/assets/homepage/title-s3.png" />
            <img class="title-image" v-show="!i18nTypeIsZh" src="@/assets/homepage/title-s3-ph.png" />
            <div class="content">
                <img class="nft-bg" src="@/assets/homepage/nft-bg.png" />
                <img class="nft" src="@/assets/homepage/nft.png" />
            </div>
            <div class="ps" v-show="i18nTypeIsZh">
                <p v-show="i18nTypeIsZh" class="theme-text-shadow">游戏中所有产生的手续费将会</p>
                <p v-show="i18nTypeIsZh" class="theme-text-shadow font-30">按照私募购买比例进行分红</p>
            </div>
            <div class="ps en" v-show="!i18nTypeIsZh">
                <p class="theme-text-shadow">All fees generated in the game will be</p>
                <p class="theme-text-shadow">Dividends are distributed according</p>
                <p class="theme-text-shadow">to the proportion of private purchases</p>
            </div>
        </section>
        <section class="theme-bg-view n-3 flex-column limit-max-width-media">
            <img class="title-image" v-show="i18nTypeIsZh" src="@/assets/homepage/title-s4.png" />
            <img class="title-image" v-show="!i18nTypeIsZh" src="@/assets/homepage/title-s4-ph.png" />
            <img src="@/assets/homepage/s4-b.png" alt />
            <div class="end">
                <img src="@/assets/icons/icon-arrow-right.png" />
                <p class="theme-text-shadow">{{ $t("首页.游戏上线以优惠价格购买NFT") }}</p>
                <img src="@/assets/icons/icon-arrow-left.png" />
            </div>
        </section>
        <section class="theme-bg-view n-4 limit-max-width-media">
            <div>
                <!-- <img :src="spActiveObj.active" alt /> -->
                <img :src="spActiveImg" alt />
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
import ThemeDialogBrowse from "@/components/themeDialog/browse.vue"
import {
    ref,
    computed,
    reactive,
    onMounted,
    onUnmounted
} from "vue";
import {
    // useSafeInterval,
    // useSafeHook
} from "@/hooks/useWindow"
import { useI18n } from "vue-i18n";
import { Format } from "@/utils/deta"
// const downloadLink = {
//     android: 'http://down.metadragon.games/MetaDragon.apk',
//     exe: 'http://down.metadragon.games/MetaDragon.exe'
// }
const sp5 = reactive({
    active: '1',
    list: [
        {
            id: "1",
            img: require('@/assets/homepage/sp-5-L1.png'),
            phImg: require('@/assets/homepage/sp-5-1ph.png'),
            active: require('@/assets/homepage/sp-5-1.png'),
            activePh: require('@/assets/homepage/sp-5-1-ph.png'),
        },
        {
            id: "2",
            img: require('@/assets/homepage/sp-5-L2.png'),
            phImg: require('@/assets/homepage/sp-5-2ph.png'),
            active: require('@/assets/homepage/sp-5-2.png'),
            activePh: require('@/assets/homepage/sp-5-2-ph.png'),
        },
        {
            id: "3",
            img: require('@/assets/homepage/sp-5-L3.png'),
            phImg: require('@/assets/homepage/sp-5-3ph.png'),
            active: require('@/assets/homepage/sp-5-3.png'),
            activePh: require('@/assets/homepage/sp-5-3-ph.png'),
        },
        {
            id: "4",
            img: require('@/assets/homepage/sp-5-L4.png'),
            phImg: require('@/assets/homepage/sp-5-4ph.png'),
            active: require('@/assets/homepage/sp-5-4.png'),
            activePh: require('@/assets/homepage/sp-5-4-ph.png'),
        },
    ]
})
const spActiveObj = computed(() => sp5.list.filter(item => item.id == sp5.active)[0] || {})
const { locale } = useI18n()
const i18nTypeIsZh = computed(() => locale.value == 'zh')
const spActiveImg = computed(() => spActiveObj.value[i18nTypeIsZh.value ? 'active' : 'activePh'])



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
}
const splitTime = computed(() => sp2.time.split(' ').map(item => item.split('')))
timeRun()
useSafeInterval(timeRun)
console.log(sp2);

const refBrowse = ref()
function openBrowse() {
    refBrowse.value.open()
}

</script>

<style lang='scss' scoped>
.private-recruit-view {
    padding-top: 30px;
}

.title-image {
    margin-top: 65px;
}
.theme-dialog-browse {
    .head {
        color: #d4d4d4;
        display: flex;
        padding-left: 20px;
        align-items: flex-end;
        @media screen and (min-width: 1221px) {
            font-size: 28px;
        }
        @media screen and (min-width: 769px) and (max-width: 1220px) {
            font-size: 20px;
        }
        @media screen and (max-width: 768px) {
            font-size: 16px;
        }
        @media screen and (max-width: 500px) {
            font-size: 12px;
        }
    }
    /*
        <div class="table">
            <ul class="table-head">
                <li class="theme-text-shadow table-head__tr">钱包地址</li>
                <li class="theme-text-shadow table-head__tr">私募价值</li>
                <li class="theme-text-shadow table-head__tr">占股比例</li>
            </ul>
            <ul class="table-data">
                <li class="table-data__cells">
                    <div class="cell">5s5x4a6sd5x4sdsa4xas4</div>
                    <div class="cell">100000U</div>
                    <div class="cell">22.22%</div>
                </li>
                <li class="table-data__cells">
                    <div class="cell">5s5x4a6sd5x4sdsa4xas4</div>
                    <div class="cell">100000U</div>
                    <div class="cell">22.22%</div>
                </li>
            </ul>
        </div>
    */
    .table {
        padding: 20px;
        .table-head,
        .table-data .table-data__cells {
            display: flex;
        }
        .table-head__tr,
        .cell {
            flex: 1;
            text-align: center;
        }
        .hr {
            margin: 20px;
            // width: 100%;
            height: 4px;
            background: linear-gradient(
                225deg,
                rgba(0, 241, 255, 0),
                rgba(0, 241, 255, 0.24),
                rgba(0, 241, 255, 0)
            );
            border-radius: 0px 0px 0px 0px;
            opacity: 1;
        }
        .table-head {
            .table-head__tr {
                @media screen and (min-width: 769px) {
                    font-size: 24px;
                }
                @media screen and (max-width: 768px) {
                    font-size: 18px;
                }
                @media screen and (max-width: 500px) {
                    font-size: 16px;
                }
            }
        }
        .table-data__cells {
            margin: 20px 0;
            .cell {
                font-size: 14px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
    }
    // @media screen and (min-width: 1221px) {
    // }
    // @media screen and (min-width: 769px) and (max-width: 1220px) {
    // }
    // @media screen and (max-width: 768px) {
    // }
    // @media screen and (max-width: 500px) {
    // }
}
.n-1 {
    .text {
        font-size: 30px;
        margin: 20px 0;
        @media screen and (max-width: 768px) {
            font-size: 18px;
        }
    }
    .recruited {
        font-size: 12px;
    }
    .input {
        background: url("~@/assets/homepage/input.png") no-repeat;
        background-size: 100%;
        background-position: center;
        padding: 18px 0;
        text-align: center;
        max-width: 650px;
        width: 100%;
        font-size: 24px;
        margin: 100px 0 40px;
        @media screen and (max-width: 768px) {
            font-size: 16px;
            margin: 50px 0 20px;
        }
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
            span {
                font-size: 20px;
                color: #00f1ff;
                text-shadow: 0 0 8px #00f1ff;
            }
        }
        button {
            margin-top: 60px;
            width: 100%;
            height: 60px;
            border-radius: 14px;
            font-size: 24px;
            letter-spacing: 4px;
            text-shadow: 2px 2px 4px rgba($color: #000000, $alpha: 0.6);
            background: linear-gradient(90deg, #42dce0 0%, #f40bff 100%);
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
.n-2 {
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
        p {
            font-size: 24px;
            margin-bottom: 10px;
        }
        p.font-30 {
            font-size: 30px;
        }
        @media screen and (max-width: 769px) {
            p {
                font-size: 18px;
            }
            p.font-30 {
                font-size: 24px;
            }
        }
    }
    .ps.en {
        height: 155px;
        @media screen and (max-width: 769px) {
            p {
                font-size: 16px;
                margin-bottom: 0;
            }
        }
    }
}
.n-3 {
    .end {
        display: flex;
        align-items: center;
        margin: 20px 0;
        img {
            height: 38px;
            width: 26px;
        }
        p {
            padding: 0 20px;
        }
        @media screen and (max-width: 769px) {
            img {
                height: 20px;
                width: 12px;
            }
            p {
                padding: 0 12px;
                font-size: 16px;
            }
        }
    }
}
.n-4 {
    background: url("~@/assets/homepage/s5-bg.png") no-repeat;
    background-position: center;
    padding-bottom: 80px;
    display: flex;

    @media screen and (min-width: 769px) {
        justify-content: space-around;
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