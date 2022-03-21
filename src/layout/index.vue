<template>
	<div id="layout">
		<HeadNav></HeadNav>
		<div id="main">
			<router-view></router-view>
		</div>
	</div>
</template>
<script setup>
import {
} from "vue"
import HeadNav from "./modules/headNav";
import {
	useWindowResize,
	// useWindowScroll 
} from "@/hooks/useWindow"

import { UseStoreResize } from "@/stores/window"
const { setClientWidth } = UseStoreResize()
useWindowResize(() => {
	setClientWidth()
})

</script>
<style lang="scss">
@import "@/styles/index";
</style>
<style lang="scss" scoped>
#layout {
	background-color: #1f1d32;
	color: #fff;
}
</style>
