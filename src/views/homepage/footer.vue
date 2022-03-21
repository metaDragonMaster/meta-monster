<template>
    <div class="footer limit-max-width-media">
        <div class="centent">
            <div class="left">
                <!-- <Logo></Logo> -->
                <img src="@/assets/icons/logo.png" class="logo-image" />
                <img src="@/assets/icons/logo-text.png" class="logo-text" />
            </div>
            <dl class="right">
                <dt>菜单</dt>
                <dd>白皮书</dd>
                <dd>下载</dd>
                <dd>智能合约</dd>
                <dd>业务: info@meli.games</dd>
                <dd>反馈: support@meli.games</dd>
            </dl>
        </div>
        <p class="bottom">
            <span>智能合约地址：</span>
            <span>MELI: 0xaD04AC36791d923DeB082dA4f91Ab71675dD18fB</span>
            <span>PCE: 0xaD04AC36791d923DeB082dA4f91Ab71675dD18fB</span>
        </p>
    </div>
</template>

<script setup>
// import Logo from "@/layout/modules/headNav/logo.vue"
</script>
<style lang='scss' scoped>
.footer {
    height: 900px;
    width: 100%;
    background: url("~@/assets/footer/bg.png") center no-repeat;
    background-size: cover;
}
.centent {
    height: 530px;
    padding: 180px 0 130px;
    display: flex;
    box-sizing: content-box;
    .left,
    .right {
        flex: 1;
        display: flex;
    }
    .left {
        border-right: 1px solid #c4c4c4;
        align-items: center;
        justify-content: center;
    }
    .logo-image {
        width: 130px;
        height: 130px;
        margin-right: 30px;
    }
    .right {
        padding: 80px 0 0 130px;
        flex-direction: column;
        dt {
            font-size: 48px;
        }
        dd {
            font-size: 24px;
        }
        dt, 
        dd {
            margin-bottom: 28px;
            font-weight: bold;
        }
    }
}
.bottom {
    font-size: 12px;
    display: flex;
    justify-content: center;
    span {
        margin-right: 30px;
    }
}
</style>