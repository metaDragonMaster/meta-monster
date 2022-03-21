<template>
    <Mask ref="maskRef">
        <div class="theme-dialog theme-dialog-reaction" :style="dialogStyle">
            <img class="icon-close" src="@/assets/icons/icon-close.png" @click="close" />
            <slot></slot>
        </div>
    </Mask>
</template>

<script setup>
import {
    ref,
    computed,
    defineProps,
    defineEmits,
    defineExpose,
} from 'vue'
import Mask from "../mask"
const emits = defineEmits(['beforeClose'])
const props = defineProps({
    top: {
        type: String,
        default: '10vh'
    },
})
const dialogStyle = computed(() => ({
    top: props.top
}))

const maskRef = ref();
function open() {
    maskRef.value.openMask()
}
function close() {
    emits('beforeClose')
    maskRef.value.closeMask()
}
defineExpose({
    open,
    close
})
</script>
<style lang='scss' scoped>
.theme-dialog {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
    max-width: 100%;
}
.theme-dialog-reaction {
    background-image: url("~@/assets/bg/modal-bg-1.png");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    @media screen and (min-width: 1221px) {
        width: 1144px;
        height: 550px;
    }
    @media screen and (min-width: 769px) and (max-width: 1220px) {
        width: 780px;
        height: 380px;
    }
    @media screen and (max-width: 768px) {
        width: 500px;
        height: 240px;
    }
    @media screen and (max-width: 500px) {
        width: 330px;
        height: 180px;
    }
}

.icon-close {
    cursor: pointer;
    width: fit-content;
    height: fit-content;
    display: block;
    @media screen and (min-width: 1221px) {
        margin: 65px 75px 0 auto;
    }
    @media screen and (min-width: 769px) and (max-width: 1220px) {
        margin: 40px 45px 0 auto;
        width: 24x;
        height: 24px;
    }
    @media screen and (max-width: 769px) {
        margin: 22px 28px 0 auto;
        width: 16px;
        height: 16px;
    }
    @media screen and (max-width: 500px) {
        margin: 22px 18px 0 auto;
        width: 16px;
        height: 16px;
    }
}
</style>