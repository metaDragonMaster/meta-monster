<template>
    <ul class="my-profit-view">
        <li>
            <p class="title theme-text-shadow">已提现</p>
            <img src="@/assets/stock-bonus/g-84.png" alt />
            <div class="pay-price">100000U</div>
        </li>
        <li>
            <p class="title theme-text-shadow">余额</p>
            <img src="@/assets/stock-bonus/g-85.png" alt />
            <div class="pay-price">1000000000U</div>
            <button class="theme-bg-button-o">提现</button>
        </li>
    </ul>
    <ThemeDialogReaction ref="refReaction">
        <div class="Withdrawal">
            <p class="head">
                <span class="theme-text-shadow">剩余:</span>
                <span class="many">100000U</span>
            </p>
            <div class="input-box">
                <input class="input" type="text" placeholder="请输入提现数量" />
                <button class="max"></button>
            </div>
            <button class="submit theme-bg-button-o">提现</button>
        </div>
    </ThemeDialogReaction>
</template>

<script setup>
import {
    ref
} from "vue"
import ThemeDialogReaction from "@/components/themeDialog/reaction.vue"
const refReaction = ref()
</script>
<style lang='scss' scoped>
.my-profit-view {
    display: flex;
    justify-content: center;
    @media screen and (min-width: 769px) {
        li:first-child {
            margin-right: 160px;
        }
        li .title {
            font-size: 36px;
            margin-bottom: 60px;
        }
    }
    @media screen and (max-width: 768px) {
        li .title {
            font-size: 24px;
            margin-bottom: 20px;
        }
    }
    li {
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
            width: 175px;
            height: 160px;
        }
    }
    .pay-price {
        background: url("~@/assets/bg/bg-price-num.png") center no-repeat;
        background-size: contain;
        min-height: 54px;
        max-width: 240px;
        word-wrap: break-word;
        display: inline-block;
        padding: 15px 20px;
        font-size: 24px;
        letter-spacing: 2px;
        text-indent: 2px;
        color: #fdd161;
        margin-top: -40px;
    }
}
.Withdrawal {
    .head {
        padding-left: 88px;
        font-size: 12px;
        .many {
            font-size: 18px;
        }
        @media screen and (min-width: 1221px) {
            padding-left: 88px;
        }
        @media screen and (min-width: 769px) and (max-width: 1220px) {
            padding-left: 66px;
        }
        @media screen and (max-width: 768px) {
            padding-left: 44px;
        }
        @media screen and (max-width: 500px) {
            padding-left: 22px;
        }
    }
    .input-box {
        display: flex;
        justify-content: center;
        .input {
            background-color: transparent;
            border: 0;
            background-image: url("~@/assets/bg/input-bg-1.png");
            background-repeat: no-repeat;
            background-position: center;
            background-size: contain;
            color: #fff;
        }
        .max {
            background-image: url("~@/assets/button/button-max.png");
            background-repeat: no-repeat;
            background-position: center;
            background-size: contain;
        }
        @media screen and (min-width: 1221px) {
            margin: 40px 0 40px;
            .input {
                width: 470px;
                height: 108px;
                padding: 20px 28px;
                font-size: 24px;
            }
            .max {
                width: 140px;
                height: 108px;
            }
        }
        @media screen and (min-width: 769px) and (max-width: 1220px) {
            margin: 30px 0 30px;
            .input {
                width: 380px;
                height: 88px;
                padding: 20px;
                font-size: 24px;
            }
            .max {
                width: 120px;
                height: 88px;
            }
        }
        @media screen and (max-width: 768px) {
            margin: 10px 0 10px;
            .input {
                width: 300px;
                height: 68px;
                padding: 20px;
                font-size: 20px;
            }
            .max {
                width: 90px;
                height: 68px;
            }
        }
        @media screen and (max-width: 500px) {
            margin: 0;
            .input {
                width: 220px;
                height: 48px;
                padding: 14px 20px;
                font-size: 14px;
            }
            .max {
                width: 60px;
                height: 48px;
            }
        }
    }
    .submit {
        display: block;
        margin: 0 auto;
    }
}
</style>