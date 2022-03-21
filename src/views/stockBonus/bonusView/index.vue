<template>
    <ul class="bonus-view">
        <li>
            <p class="title theme-text-shadow">全服已分红奖励</p>
            <img src="@/assets/stock-bonus/g-82.png" alt />
            <br />
            <button class="button button-1">100000u</button>
        </li>
        <li>
            <p class="title theme-text-shadow">我的收益</p>
            <img src="@/assets/stock-bonus/g-83.png" alt />
            <br />
            <button class="button button-2">100000u</button>
        </li>
    </ul>
</template>

<script setup>

</script>
<style lang='scss' scoped>
.bonus-view {
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
        .button {
            background-position: center;
            background-size: contain;
            background-repeat: no-repeat;
            text-shadow: 0 1px 3px #000000;
            @media screen and (min-width: 769px) {
                padding: 36px 64px;
                font-size: 24px;
            }
            @media screen and (max-width: 768px) {
                padding: 20px 36px;
                font-size: 12px;
            }
            &.button-1 {
                background-image: url("~@/assets/button/button-link-2.png");
            }
            &.button-2 {
                background-image: url("~@/assets/button/button-link-3.png");
            }
        }
    }
}
</style>