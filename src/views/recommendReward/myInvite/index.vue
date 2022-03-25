<template>
    <div class="my-invite-view">
        <div class="limit-1000 invite">
            <div class="invite-box">
                <div class="invite-left">
                    <img class="role-image" src="@/assets/invite/y-1-l.png" alt />
                    <p class="title">邀请链接</p>
                    <p class="link font-hide">www.baidu.com</p>
                    <button class="copy-button">复制</button>
                </div>
                <p class="ex next-title">我的好友</p>
            </div>
            <div class="invite-box">
                <p class="ex ps">您的好友购买NFT 您也会得到额外的奖励</p>
                <div class="invite-right">
                    <img class="role-image" src="@/assets/invite/y-1-r.png" alt />
                    <p class="title">邀请码</p>
                    <p class="link font-hide">www.baidu.com</p>
                    <button class="copy-button">复制</button>
                </div>
            </div>
        </div>
        <ul class="limit-1000 my-friend">
            <li>
                <div class="card">
                    <img class="icon" src="@/assets/invite/icon-ori.png" alt />
                    <div class="content">
                        <p class="title">钱包地址</p>
                        <p class="address font-hide">66666666666666666</p>
                        <button class="copy-button">复制</button>
                    </div>
                </div>
                <div class="card">
                    <img class="icon" src="@/assets/invite/icon-ori.png" alt />
                    <div class="content">
                        <p class="title">钱包地址</p>
                        <p class="address font-hide">66666666666666666</p>
                        <button class="copy-button">复制</button>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    <ThemeDialogReaction ref="refReaction">
        <div class="ref-reaction">
            <p class="head">绑定好友</p>
            <div class="input-box">
                <input class="input" type="text" placeholder="请输入邀请码" />
                <span class="ps">邀请码一旦绑定不可更改，请认真填写</span>
            </div>
            <button class="submit theme-bg-button-o">绑定</button>
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
.my-invite-view {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.limit-1000 {
    max-width: 1000px;
}
.copy-button {
    background-color: #fc149c;
    padding: 5px 20px;
    border-radius: 4px;
    font-size: 18px;
    box-shadow: 0 0 8px 0 rgba($color: #000000, $alpha: 0.6);
}
.invite {
    display: flex;
    padding-top: 145px;
    .invite-box {
        width: 500px;
        .ex {
            height: 65px;
        }
        .next-title {
            line-height: 88px;
            font-size: 36px;
            font-weight: bold;
            letter-spacing: 4px;
        }
        .ps {
            font-size: 12px;
            padding-left: 65px;
            color: #29ff7f;
            letter-spacing: 2px;
        }
    }
    .invite-left,
    .invite-right {
        height: 270px;
        position: relative;
        .role-image {
            position: absolute;
        }
        .title {
            font-size: 28px;
        }
        .link {
            font-size: 24px;
            margin: 25px 0 15px;
        }
    }
    .invite-left {
        background-image: url("~@/assets/bg/y-1.png");
        text-align: right;
        padding: 65px 65px 0 0;
        .role-image {
            right: 240px;
            bottom: -27px;
        }
    }
    .invite-right {
        background-image: url("~@/assets/bg/y-2.png");
        padding: 65px 0 0 65px;
        .role-image {
            left: 270px;
            bottom: -27px;
        }
    }
}
.my-friend {
    width: 100%;
    padding-top: 40px;
    li {
        background-image: linear-gradient(90deg, #e5019e, transparent);
        height: 120px;
        display: flex;
        align-items: center;
    }
    .card {
        display: flex;
        flex: 1;
        padding-left: 50px;
        .content {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-between;
            margin-left: 30px;
        }
        .title {
            font-size: 24px;
        }
        .copy-button {
            font-size: 12px;
        }
    }
}
.ref-reaction {
    .head {
        text-align: center;
        @media screen and (min-width: 1221px) {
            font-size: 36px;
        }
        @media screen and (min-width: 769px) and (max-width: 1220px) {
            font-size: 24px;
        }
        @media screen and (max-width: 768px) {
            font-size: 16px;
        }
        @media screen and (max-width: 500px) {
            font-size: 12px;
            margin-top: -12px;
        }
    }
    .input-box {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .input {
            background-color: transparent;
            border: 0;
            background-image: url("~@/assets/bg/input-bg-1.png");
            background-repeat: no-repeat;
            background-position: center;
            background-size: contain;
            color: #fff;
        }
        .ps {
            color: #f1421c;
            font-size: 12px;
            @media screen and (max-width: 768px) {
                zoom: 0.5;
            }
        }
        @media screen and (min-width: 1221px) {
            margin: 30px 0 20px;
            .input {
                width: 470px;
                height: 108px;
                padding: 20px 28px;
                font-size: 24px;
            }
        }
        @media screen and (min-width: 769px) and (max-width: 1220px) {
            margin: 20px 0 10px;
            .input {
                width: 380px;
                height: 88px;
                padding: 20px;
                font-size: 24px;
            }
        }
        @media screen and (max-width: 768px) {
            margin: 10px 0 0;
            .input {
                width: 300px;
                height: 68px;
                padding: 20px;
                font-size: 20px;
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
        }
    }
    .submit {
        display: block;
        margin: 0 auto;
    }
}
</style>