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
</template>

<script setup>

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
        .address {
            // width: 100px;
        }
        .copy-button {
            font-size: 12px;
        }
    }
}
</style>