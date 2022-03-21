<template>
    <button class="button-link-web3" @click="$i18n.locale = $i18n.locale=='zh'? 'en':'zh'">{{ $t('链接钱包') }}</button>
</template>
<style lang='scss' scoped>
.button-link-web3 {
    $spacing: 4px;
    background-image: url("~@/assets/head/button-link-web3.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    text-indent: $spacing;
    letter-spacing: $spacing;
    width: 284px;
    height: 60px;
    font-size: 20px;
    @media screen and (max-width: 1280px) {
        width: 180px;
        height: 40px;
        font-size: 16px;
    }
    @media screen and (max-width: 768px) {
        margin-left: auto;
        width: 130px;
        height: 30px;
        font-size: 12px;
    }
}
</style>