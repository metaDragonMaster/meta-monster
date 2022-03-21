<template>
    <div class="view">
        <p class="theme-text-shadow title">累计收益</p>
        <div class="flex-column">
            <img src="@/assets/invite/f-1.png" alt />
            <div class="pay-price">100000U</div>
        </div>
        <div class="table-list">
            <ul class="dts">
                <li>私募地址</li>
                <li>私募数量</li>
                <li>我的收益</li>
                <li>备注</li>
            </ul>
            <ol class="dds">
                <li>
                    <div class="cell">
                        <p>5x7d8f7cs-------------------7d7f7z7x0</p>
                    </div>
                    <div class="cell">
                        <p>100BNB</p>
                    </div>
                    <div class="cell">
                        <p>10BNB</p>
                    </div>
                    <div class="cell">
                        <p>股权私募分红</p>
                    </div>
                </li>
                <li>
                    <div class="cell">
                        <p>5x7d8f7cs7d7f7z7x0</p>
                    </div>
                    <div class="cell">
                        <p>100BNB</p>
                    </div>
                    <div class="cell">
                        <p>10BNB</p>
                    </div>
                    <div class="cell">
                        <p>股权私募分红</p>
                    </div>
                </li>
            </ol>
        </div>
    </div>
</template>

<script setup>

</script>
<style lang='scss' scoped>
.title {
    font-size: 36px;
    text-align: center;
}
.table-list {
    max-width: 1000px;
    margin: 56px auto 0;
    padding: 0 0 30px;
    .dts,
    .dds > li {
        display: flex;
        height: 60px;
    }
    .dts > li,
    .dds > li .cell {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .dts {
        background: url("~@/assets/tabs/tab-bg.png") no-repeat center;
        background-size: cover;
        li {
            font-size: 24px;
        }
    }
    .dds > li .cell p {
        font-size: 18px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-width: 200px;
    }
}
.pay-price {
    background: url("~@/assets/bg/bg-price-num.png") center no-repeat;
    background-size: contain;
    min-height: 54px;
    display: inline-block;
    padding: 15px 50px;
    font-size: 24px;
    letter-spacing: 2px;
    text-indent: 2px;
    color: #FDD161;
}
</style>