<template>
  <view class="banner">
    <swiper previous-margin="30rpx" indicator-dots indicator-active-color="#27ba9b" indicator-color="#fff"  :autoplay="true" :interval="3000" :duration="1000" circular>
      <swiper-item v-for="item in bannerArr" :key="item.id">
        <image @tap="handlePreview(item.url)" :src="item.url" mode="widthFix"></image>
      </swiper-item>
    </swiper>
  </view>
</template>

<script>
	export default {
		data() {
			return {
        bannerArr: [
          { id: '1', url: "../../static/desktop_1.jpg" },
          { id: '2', url: "../../static/desktop_2.jpg" },
          { id: '3', url: "../../static/desktop_3.jpg" },
          { id: '4', url: "../../static/desktop_4.jpg" }
        ]
			}
		},
		onLoad() {

		},
		methods: {
      handlePreview(url){
        uni.previewImage({
          urls: this.bannerArr.map(v => v.url)
        })
      }   
		}
	}
</script>

<style scoped lang="scss">
.banner {
  padding-top: 30rpx;
  swiper {
    height: 400rpx;
    swiper-item {
      image {
        width: 690rpx;
        height: 400rpx;
        border-radius: 30rpx;
      }
    }
  }
}
</style>
