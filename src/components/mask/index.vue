<template>
    <teleport to="body">
        <div class="mask" v-if="maskShow" :style="maskStyle" @click="maskClick" ref="maskRef">
            <slot></slot>
        </div>
    </teleport>
</template>

<script setup>
import {
    ref,
    computed,
    defineProps,
    defineExpose,
    onMounted
} from 'vue'
import {
    UseStoreResize
} from "@/stores/window"
import { storeToRefs } from 'pinia';
const stroeResize = UseStoreResize()
const { isPc } = storeToRefs(stroeResize)
const props = defineProps({
    zIndex: {
        type: [Number, String],
        default: '2888'
    },
    modalClose: {
        type: Boolean,
        default: false,
    },
})
const maskStyle = computed(() => ({
    zIndex: props.zIndex
}))
const maskRef = ref()
const maskShow = ref(false)
function maskClick(e) {
    if (props.modalClose && e.target == maskRef.value) {
        closeMask()
    }
}

function openMask() {
    maskShow.value = true
    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = isPc.value ? '17px' : '0'
}
onMounted(()=>{
    openMask()
})
function closeMask() {
    maskShow.value = false
    document.body.style.overflow = ''
    document.body.style.paddingRight = ''
}
defineExpose({
    openMask,
    closeMask
})
</script>
<style lang='scss' scoped>
.mask {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    // background: url("~@/assets/homepage/bg-bg.png") center no-repeat;
    // background-size: cover;
    background-color: rgba($color: #000000, $alpha: 0.6);
}
</style>