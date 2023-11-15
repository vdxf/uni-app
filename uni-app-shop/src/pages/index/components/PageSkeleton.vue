<template name="skeleton">
  <view is="components/SwiperView" current="0" autoplay="false" :style="{ height: '280rpx' }">
    <view class="carousel SwiperView--carousel">
      <swiper :utoplay="false" :circular="true" :interval="3000" :current="0"></swiper>
      <view class="indicator SwiperView--indicator">
        <text class="dot SwiperView--dot"></text>
        <text class="dot SwiperView--dot"></text>
        <text class="dot SwiperView--dot active SwiperView--active"></text>
        <text class="dot SwiperView--dot"></text>
        <text class="dot SwiperView--dot"></text>
      </view>
    </view>
  </view>
  <view is="pages/index/components/CategoryPanel">
    <view class="category CategoryPanel--category">
      <navigator class="category-item CategoryPanel--category-item" hover-class="none">
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-745 sk-text">居家</text>
      </navigator>
      <navigator class="category-item CategoryPanel--category-item" hover-class="none">
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-120 sk-text">锦鲤</text>
      </navigator>
      <navigator class="category-item CategoryPanel--category-item" hover-class="none">
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-514 sk-text">服饰</text>
      </navigator>
      <navigator class="category-item CategoryPanel--category-item" hover-class="none">
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-68 sk-text">母婴</text>
      </navigator>
      <navigator class="category-item CategoryPanel--category-item" hover-class="none">
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-732 sk-text">个护</text>
      </navigator>
      <navigator class="category-item CategoryPanel--category-item" hover-class="none">
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-434 sk-text">严选</text>
      </navigator>
      <navigator class="category-item CategoryPanel--category-item" hover-class="none">
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-610 sk-text">数码</text>
      </navigator>
      <navigator class="category-item CategoryPanel--category-item" hover-class="none">
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-165 sk-text">运动</text>
      </navigator>
      <navigator class="category-item CategoryPanel--category-item" hover-class="none">
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-627 sk-text">杂项</text>
      </navigator>
      <navigator class="category-item CategoryPanel--category-item" hover-class="none">
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-980 sk-text">品牌</text>
      </navigator>
    </view>
  </view>
  <view is="pages/index/components/HotPanel">
    <view class="panel HotPanel--panel hot HotPanel--hot">
      <view class="item HotPanel--item">
        <view class="title HotPanel--title">
          <text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-291 sk-text">特惠推荐</text>
          <text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-603 sk-text">精选全攻略</text>
        </view>
        <navigator class="cards HotPanel--cards" hover-class="none">
          <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
          <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
        </navigator>
      </view>
      <view class="item HotPanel--item">
        <view class="title HotPanel--title">
          <text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-136 sk-text">爆款推荐</text>
          <text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-588 sk-text">最受欢迎</text>
        </view>
        <navigator class="cards HotPanel--cards" hover-class="none">
          <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
          <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
        </navigator>
      </view>
      <view class="item HotPanel--item">
        <view class="title HotPanel--title">
          <text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-626 sk-text">一站买全</text>
          <text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-621 sk-text">精心优选</text>
        </view>
        <navigator class="cards HotPanel--cards" hover-class="none">
          <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
          <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
        </navigator>
      </view>
      <view class="item HotPanel--item">
        <view class="title HotPanel--title">
          <text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-282 sk-text">新鲜好物</text>
          <text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-731 sk-text">生活加分项</text>
        </view>
        <navigator class="cards HotPanel--cards" hover-class="none">
          <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
          <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
        </navigator>
      </view>
    </view>
  </view>
  <view is="components/GuessLike" class="r">
    <view class="caption GuessLike--caption">
      <text class="text GuessLike--text sk-transparent sk-text-0-0000-175 sk-text sk-pseudo sk-pseudo-circle">猜你喜欢</text>
    </view>
  </view>
</template>
<style>
.sk-transparent {
  color: transparent !important;
}

.sk-text-3-5714-851 {
  background-image: linear-gradient(transparent 3.5714%,
      #eeeeee 0%,
      #eeeeee 96.4286%,
      transparent 0%) !important;
  background-size: 100% 28rpx;
  position: relative !important;
}

.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}

.sk-text-14-2857-692 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 39.2rpx;
  position: relative !important;
}

.sk-text-14-2857-745 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}

.sk-text-14-2857-120 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}

.sk-text-14-2857-514 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}

.sk-text-14-2857-68 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}

.sk-text-14-2857-732 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}

.sk-text-14-2857-434 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}

.sk-text-14-2857-610 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}

.sk-text-14-2857-165 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}

.sk-text-14-2857-627 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}

.sk-text-14-2857-980 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}

.sk-text-14-2857-291 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}

.sk-text-14-2857-603 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}

.sk-text-14-2857-136 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}

.sk-text-14-2857-588 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}

.sk-text-14-2857-626 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}

.sk-text-14-2857-621 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}

.sk-text-14-2857-282 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}

.sk-text-14-2857-731 {
  background-image: linear-gradient(transparent 14.2857%,
      #eeeeee 0%,
      #eeeeee 85.7143%,
      transparent 0%) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}

.sk-text-0-0000-175 {
  background-image: linear-gradient(transparent 0%,
      #eeeeee 0%,
      #eeeeee 100%,
      transparent 0%) !important;
  background-size: 100% 32rpx;
  position: relative !important;
}

.sk-image {
  background: #efefef !important;
}

.sk-pseudo::before,
.sk-pseudo::after {
  background: #efefef !important;
  background-image: none !important;
  color: transparent !important;
  border-color: transparent !important;
}

.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
  border-radius: 0 !important;
}

.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
  border-radius: 50% !important;
}

.sk-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
}
</style>
