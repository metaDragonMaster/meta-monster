<template>
    <div class="head">
        <div class="head-nav limit-max-width-media">
            <LogoVue></LogoVue>
            <NavPhDrawer class="nav-ph-drawer" v-if="!isPc">
                <NavVue class="drawer-nav-list"></NavVue>
            </NavPhDrawer>
            <NavVue class="nav-list" v-show="isPc"></NavVue>
            <ButtonLinkWeb3></ButtonLinkWeb3>
        </div>
    </div>
</template>
<script setup>
import LogoVue from './logo.vue';
import NavVue from './nav.vue';
import ButtonLinkWeb3 from './buttonLinkWeb3.vue';
import NavPhDrawer from '@/components/navPhDrawer';
import { UseStoreResize } from "@/stores/window"
import { storeToRefs } from 'pinia';
const storeResize = UseStoreResize()
const { isPc } = storeToRefs(storeResize)
</script>
<style lang="scss" scoped>
.head {
    height: 120px;
    @media screen and (max-width: 1280px) {
        height: 80px;
    }
}
.head-nav {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: inherit;
    z-index: 500;
    display: flex;
    align-items: center;
    background-color: rgba($color: #8073d0, $alpha: 0.1);
    .nav-list {
        margin-left: auto;
        display: flex;
    }
    .nav-list,
    .nav-ph-drawer {
        :deep() .nav-link {
            padding-inline: 25px;
            margin-inline: 20px;
            display: block;
            line-height: 120px;
            height: 120px;
            @media screen and (max-width: 1280px) {
                line-height: 80px;
                height: 80px;
                padding-inline: 10px;
                margin-inline: 10px;
            }
        }
        :deep() .router-link-active {
            color: #38c7cb;
            position: relative;
            &::after {
                content: "";
                display: block;
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                bottom: 0;
                height: 2px;
                width: 100%;
                background-color: #38c7cb;
                box-shadow: 0px 0px 7px 1px rgba($color: #38c7cb, $alpha: 0.5);
            }
        }
    }

    .logo-nav {
        display: none;
        @media screen and (max-width: 768px) {
            display: inline;
        }
    }
    // :deep()
    .nav-ph-drawer {
        :deep() .el-drawer__body {
            background-color: #1f1d32;
        }
    }
}
</style>
