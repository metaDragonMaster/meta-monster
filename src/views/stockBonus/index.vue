<!-- 股权分红 -->
<template>
    <div class="stock-bonus-view">
        <div class="limit-max-width-media">
            <img class="title-image" src="@/assets/title/stock-bonus.png" />
            <!-- <BaseTab tab=""></BaseTab> -->
            <div class="tab-list">
                <router-link
                    v-for="(item, index) in tab"
                    :key="index"
                    :to="item.to"
                    v-slot="{ isExactActive }"
                >
                    <img :src="isExactActive ? item.activeIcon : item.icon" alt />
                    <span>{{ item.title }}</span>
                </router-link>
            </div>
        </div>
        <div class="limit-max-width-media theme-bg-view">
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup>
// import BaseTab from "@/components/BaseTab";
const tab = [
    {
        title: '分红查看',
        icon: require("@/assets/tabs/b-t-1.png"),
        activeIcon: require("@/assets/tabs/b-t-1-active.png"),
        to: '/stockBonus/bonusView',
    },
    {
        title: '我的收益',
        icon: require("@/assets/tabs/b-t-2.png"),
        activeIcon: require("@/assets/tabs/b-t-2-active.png"),
        to: '/stockBonus/myProfit',
    },
    {
        title: '私募详情',
        icon: require("@/assets/tabs/b-t-3.png"),
        activeIcon: require("@/assets/tabs/b-t-3-active.png"),
        to: '/stockBonus/recruitDetails',
    },
]

</script>
<style lang='scss' scoped>
.title-image {
    display: block;
    max-width: 100%;
    width: fit-content;
    @media screen and (min-width: 769px) {
        margin: 65px auto 0;
    }
    @media screen and (max-width: 768px) {
        margin: 35px auto 0;
    }
}
.tab-list {
    background: url("~@/assets/tabs/tab-bg.png") no-repeat center;
    background-size: cover;
    display: flex;
    align-items: center;
    max-width: 1000px;
    height: 60px;
    @media screen and (min-width: 769px) {
        margin: 40px auto;
        padding-left: 20px;
        a {
            margin-left: 40px;
            span {
                margin-left: 10px;
            }
        }
    }
    @media screen and (max-width: 768px) {
        margin: 40px auto 20px;
        justify-content: space-around;
        a {
            margin-left: 0;
        }
    }
    a {
        display: flex;
        align-items: center;
        span {
            color: #8b8b8b;
            font-weight: bold;
            letter-spacing: 2px;
        }
        &.router-link-exact-active {
            span {
                color: #ffffff;
            }
        }
    }
}
</style>