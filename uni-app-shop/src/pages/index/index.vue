<template>
  <CustonNavbar />
  <Swiper :list="bannerList" />
  <CategoryPanel :list="categoryList" />
  <HotPanel :list="hotPanel" />
</template>

<script setup lang="ts">
import CustonNavbar from './components/CustonNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import Swiper from '@/components/SwiperView.vue'
import { reqBannerList, reqCategoryList, reqHotPanel } from '@/api/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import type { BannerItem, CategoryItem, HotPanelItem } from '@/api/home/type'

const bannerList = ref<BannerItem[]>([])
const categoryList = ref<CategoryItem[]>([])
const hotPanel = ref<HotPanelItem[]>([])

onLoad(() => {
  getBannerList()
  getCategoryList()
  getHotPanel()
})
const getBannerList = async () => {
  const res = await reqBannerList()
  bannerList.value = res.result
}
const getCategoryList = async () => {
  const res = await reqCategoryList()
  categoryList.value = res.result
}
const getHotPanel = async () => {
  const res = await reqHotPanel()
  hotPanel.value = res.result
}
</script>
<style lang="scss">
page {
  background-color: #f7f7f7;
}
</style>
