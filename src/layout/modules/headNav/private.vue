<template>
    <div class="private">
        <ButtonLinkWeb3 @click="clickLink"></ButtonLinkWeb3>
        <el-drawer v-model="active" direction="ltr" :size="size" :with-header="false">
            <slot></slot>
        </el-drawer>
    </div>
</template>

<script setup>
import ButtonLinkWeb3 from './buttonLinkWeb3.vue';
import {
    ref,
    computed
} from "vue"
import { UseStoreResize } from "@/stores/window"
import { storeToRefs } from 'pinia';
const storeResize = UseStoreResize();
const { isPc } = storeToRefs(storeResize)
const size = computed(() => isPc.value ? '300px' : '80%')
const active = ref(false)
const linked = true;
function clickLink() {
    if (!linked) {
        linkWeb3()
    } else {
        openPrivate()
    }
}
function linkWeb3() {

}
function openPrivate() {
    active.value = true;
}

</script>
<style lang='scss' scoped>
.private {
    @media screen and (max-width: 768px) {
        margin-left: auto;
    }
}
</style>