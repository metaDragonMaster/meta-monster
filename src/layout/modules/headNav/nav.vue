<template>
    <nav>
        <router-link class="nav-link" v-for="(item, index) in navList" :key="index" :to="item.path">
            {{$t(item.title)}}
            <slot :item="item"></slot>
        </router-link>
    </nav>
</template>

<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"
import { deepClone } from "@/utils/tools"
const Router = useRouter()
function flatDeepArr(arr) {
    let list = []
    const deepArr = deepClone(arr);
    list = deepSome(deepArr)
    return list;
}
function deepSome(arr) {
    let list = [];
    for (const i in arr) {
        const element = arr[i];
        if (element.children) {
            let nav = element.children.filter(item => item.meta && item.meta.isNav)
            nav.map(item => {
                list.push({
                    path: item.path,
                    name: item.name,
                    title: item.meta && item.meta.title ? '导航.' + item.meta.title : '',
                })
            })
        }
    }
    return list;
}
const navList = ref(flatDeepArr(Router.options.routes))
console.log(navList)
</script>