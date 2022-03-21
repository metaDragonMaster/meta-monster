<template>
    <div class="view">
        <!-- <el-button @click="maskRef.openMask()">open mask</el-button> -->
        <el-button @click="dialogBrowseRef.open()">open dialog</el-button>
        <!-- <Mask v-model:maskShow="maskShow"></Mask> -->
        <!-- <Mask ref="maskRef">
            <div class="dialog">
                内容
                <div>
                    <el-button @click="maskRef.closeMask()">close dialog</el-button>
                </div>
            </div>
        </Mask> -->
        <ThemeDialogBrowse ref="dialogBrowseRef">
        </ThemeDialogBrowse>
        <!-- <ThemeDialogReaction></ThemeDialogReaction> -->
    </div>
</template>

<script setup>
// import Mask from "@/components/mask"
import ThemeDialogBrowse from "@/components/themeDialog/browse.vue"
// import ThemeDialogReaction from "@/components/themeDialog/reaction.vue"
import {
    ref
} from "vue"
// const maskRef = ref()
const dialogBrowseRef = ref()


</script>

<style lang="scss" scoped>
.view {
    min-height: 1000px;
}
.dialog {
    position: absolute;
    width: 100px;
    height: 100px;
    background-color: #fff;
}
</style>