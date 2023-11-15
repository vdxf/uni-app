<script setup lang="ts">
import { reactive, ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import type { GuessLikeItem, PageParame } from '@/api/home/type'
import { reqGuessLike } from '@/api/home/index'

const guessLike = ref<GuessLikeItem[]>([])
const query = reactive<PageParame>({
  page: 1,
  pageSize: 10,
})
const count = ref<number>(0)
const isFinished = ref<boolean>(false)
const isLoading = ref<boolean>(true)
onLoad(() => {
  getGuessLike()
})
const getGuessLike = async () => {
  isLoading.value = false
  const res = await reqGuessLike(query)
  count.value = res.result.counts
  guessLike.value = query.page! > 1 ? [...guessLike.value, ...res.result.items] : res.result.items
  isLoading.value = true
  uni.stopPullDownRefresh()
}
//上拉加载更多
const handleMore = () => {
  if (query.page! * query.pageSize! > count.value) {
    isFinished.value = true
    return
  }
  if (!isLoading.value) return
  query.page!++
  getGuessLike()
}
//下拉刷新
const handleRefresh = async () => {
  ; (query.page = 1), (guessLike.value = []), (isFinished.value = false), await getGuessLike()
}

defineExpose({
  handleMore,
  handleRefresh,
})
</script>

<template>
  <!-- 猜你喜欢 -->
  <view class="caption">
    <text class="text">猜你喜欢</text>
  </view>
  <view class="guess">
    <navigator class="guess-item" v-for="item in guessLike" :key="item.id" :url="`/pages/goods/goods?id=4007498`">
      <image class="image" mode="aspectFill" :src="item.picture"></image>
      <view class="name">{{ item.name }}</view>
      <view class="price">
        <text class="small">¥</text>
        <text>{{ item.price }}</text>
      </view>
    </navigator>
  </view>
  <view class="loading-text" v-if="!isFinished"> 正在加载... </view>
  <div class="finished" v-else>没有更多数据了~~~</div>
</template>

<style lang="scss">
:host {
  display: block;
}

/* 分类标题 */
.caption {
  display: flex;
  justify-content: center;
  line-height: 1;
  padding: 36rpx 0 40rpx;
  font-size: 32rpx;
  color: #262626;

  .text {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 28rpx 0 30rpx;

    &::before,
    &::after {
      content: '';
      width: 20rpx;
      height: 20rpx;
      background-image: url(@/static/images/bubble.png);
      background-size: contain;
      margin: 0 10rpx;
    }
  }
}

/* 猜你喜欢 */
.guess {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 20rpx;

  .guess-item {
    width: 345rpx;
    padding: 24rpx 20rpx 20rpx;
    margin-bottom: 20rpx;
    border-radius: 10rpx;
    overflow: hidden;
    background-color: #fff;
  }

  .image {
    width: 304rpx;
    height: 304rpx;
  }

  .name {
    height: 75rpx;
    margin: 10rpx 0;
    font-size: 26rpx;
    color: #262626;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .price {
    line-height: 1;
    padding-top: 4rpx;
    color: #cf4444;
    font-size: 26rpx;
  }

  .small {
    font-size: 80%;
  }
}

// 加载提示文字
.loading-text {
  text-align: center;
  font-size: 28rpx;
  color: #666;
  padding: 20rpx 0;
}

.finished {
  text-align: center;
  padding: 20px 0;
  color: #999;
}
</style>
