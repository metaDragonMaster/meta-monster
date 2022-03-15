<template>
    <div class="logo">
        <img src="@/assets/icons/logo.png" class="logo-image" />
        <img src="@/assets/icons/logo-text.png" class="logo-text" />
    </div>
</template>
<style lang='scss' scoped>
img {
    max-height: 100%;
    max-width: 100%;
}
.logo {
    height: 100%;
    .logo-image {
        // margin-right: 30px;
        padding: 22px;
        @media screen and (max-width: 1280px) {
            // margin-right: 15px;
            padding: 10px;
        }
        @media screen and (max-width: 768px) {
            margin-right: 0px;
        }
    }
    .logo-text {
        padding: 20px;
        @media screen and (max-width: 1280px) {
            padding: 15px;
        }
        @media screen and (max-width: 768px) {
            display: none;
        }
    }
}
</style>