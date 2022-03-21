<template>
    <ul class="my-profit-view">
        <li>
            <p class="title theme-text-shadow">已提现</p>
            <img src="@/assets/stock-bonus/g-84.png" alt />
        </li>
        <li>
            <p class="title theme-text-shadow">余额</p>
            <img src="@/assets/stock-bonus/g-85.png" alt />
            <button class="theme-bg-button-o">提现</button>
        </li>
    </ul>
</template>

<script setup>

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
    }
}
</style>