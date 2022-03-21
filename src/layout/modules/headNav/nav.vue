<template>
    <nav>
        <router-link class="nav-link" v-for="(item, index) in navList" :key="index" :to="item.path">
            {{ $t(item.title) }}
            <slot :item="item"></slot>
        </router-link>
    </nav>
</template>

<script setup>
import { ref, defineProps } from "vue"
import { useRouter } from "vue-router"
import { deepClone } from "@/utils/tools"
const props = defineProps({
    private: {
        type: Boolean,
        default: false,
    }
})
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
            const nav = element.children.filter(item => item.meta && item.meta.isNav)
            // props.private == item.meta.private
            const publicNav = nav.filter(item => item.meta && !item.meta.private)
            const privateNav = nav.filter(item => item.meta && item.meta.private)
            let navItem;
            const Navlist = props.private ? privateNav : publicNav
            Navlist.map(item => {
                navItem = {
                    path: item.path,
                    name: item.name,
                    title: item.meta && item.meta.title ? '导航.' + item.meta.title : '',
                }
                list.push(navItem)
            })
            console.log(props.private, publicNav, privateNav,Navlist)
        }
    }
    return list;
}
const navList = ref(flatDeepArr(Router.options.routes))
console.log("navList---",navList)
</script>