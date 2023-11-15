<template>
  <CustonNavbar />
  <scroll-view scroll-y class="scroll-view" @scrolltolower="handleReachBottom" refresher-enabled
    @refresherrefresh="handleRefresh" :refresher-triggered="isFreash">
    <PageSkeleton v-if="isLoading" />
    <Swiper :list="bannerList" />
    <CategoryPanel :list="categoryList" />
    <HotPanel :list="hotPanel" />
    <GuessLike ref="guessRef" />
  </scroll-view>
</template>

<script setup lang="ts">
import CustonNavbar from './components/CustonNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import Swiper from '@/components/SwiperView.vue'
import GuessLike from '@/components/GuessLike.vue'
import PageSkeleton from './components/PageSkeleton.vue'
import { reqBannerList, reqCategoryList, reqHotPanel } from '@/api/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import type { BannerItem, CategoryItem, HotPanelItem } from '@/api/home/type'
import type { GuessLikeInstance } from '@/components/type'

const bannerList = ref<BannerItem[]>([])
const categoryList = ref<CategoryItem[]>([])
const hotPanel = ref<HotPanelItem[]>([])

const isFreash = ref<boolean>(false)
const isLoading = ref<boolean>(false)
onLoad(async () => {
  isLoading.value = true
  await Promise.all([getBannerList(), getCategoryList(), getHotPanel()])
  isLoading.value = false
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

const guessRef = ref<GuessLikeInstance>()
//上拉加载
const handleReachBottom = () => {
  guessRef.value?.handleMore()
}
//下拉刷新
const handleRefresh = async () => {
  isFreash.value = true
  await Promise.all([
    getBannerList(),
    getCategoryList(),
    getHotPanel(),
    guessRef.value?.handleRefresh(),
  ])
  isFreash.value = false
}
</script>
<style lang="scss">
page {
  height: 100%;
  background-color: #f7f7f7;
  display: flex;
  flex-direction: column;
}

.scroll-view {
  flex: 1;
}
</style>
