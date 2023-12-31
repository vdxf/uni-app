<script setup lang="ts">
import type {
  SkuPopupEvent,
  SkuPopupInstanceType,
  SkuPopupLocaldata,
} from '@/components/vk-data-goods-sku-popup/type'
import ServiePanel from './components/ServicePanel.vue'
import AddressPanel from './components/AddressPanel.vue'
import { reqGoodsDetail } from '@/api/goodsDetail/index'
import { reqAddCart } from '@/api/cart/index'
import type { GoodsDetail } from '@/api/goodsDetail/type'
import { onLoad } from '@dcloudio/uni-app'
import { ref, computed } from 'vue'
import { reqAddressList } from '@/api/address'
import type { AddressItem } from '@/api/address/type'
import { useAddressStore } from '@/stores/modules/address'
const addressStore = useAddressStore()
const selectedAddress = computed(() => {
  return addressStore.selectedAddress
})

const addressList = ref<AddressItem[]>([])
const getAddressList = async () => {
  const res = await reqAddressList()
  addressList.value = res.result
}

// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
const props = defineProps<{
  id: string
}>()
onLoad(async () => {
  await Promise.all([getGoodsDetail(), getAddressList()])
})
const goodsDetail = ref<GoodsDetail>()
const getGoodsDetail = async () => {
  const res = await reqGoodsDetail({ id: props.id })
  goodsDetail.value = res.result
  localdata.value = {
    _id: res.result.id,
    name: res.result.name,
    goods_thumb: res.result.mainPictures[0],
    spec_list: res.result.specs.map((i) => {
      return {
        name: i.name,
        list: i.values,
      }
    }),
    sku_list: res.result.skus.map((i) => {
      return {
        _id: i.id,
        goods_id: res.result.id,
        goods_name: res.result.name,
        image: i.picture,
        price: i.price * 100,
        stock: i.inventory,
        sku_name_arr: i.specs.map((t) => t.valueName),
      }
    }),
  }
}
//切换轮播图
const currentIndex = ref<number>(0)
const handleChange: UniHelper.SwiperOnChange = (e) => {
  currentIndex.value = e.detail.current
}
//点击预览图片
const handlePreview = (url: string) => {
  uni.previewImage({
    current: url,
    urls: goodsDetail.value!.mainPictures,
  })
}
//弹出层
const popup = ref<{
  open: (type?: UniHelper.UniPopupType) => void
  close: () => void
}>()
const popupName = ref<'address' | 'service'>()
const handleOpenPopup = (name: typeof popupName.value) => {
  popupName.value = name
  popup.value?.open()
}
//控制显示SKU
const isShowSKU = ref<boolean>(false)
//商品信息
const localdata = ref({} as SkuPopupLocaldata)
//按钮模式
enum Skumode {
  Both = 1,
  Cart = 2,
  Buy = 3,
}
const mode = ref<Skumode>(Skumode.Both)
const handleOpenSku = (val: Skumode) => {
  isShowSKU.value = true
  mode.value = val
}
const SkuRef = ref<SkuPopupInstanceType>()
//计算被选中的值
const selectArrText = computed(() => {
  return SkuRef.value?.selectArr?.join(' ').trim() || '请选择商品规格'
})
//加入购物车
const handleAddCart = async (e: SkuPopupEvent) => {
  await reqAddCart({
    skuId: e._id,
    count: e.buy_num,
  })
  uni.showToast({
    title: '添加成功',
  })
  isShowSKU.value = false
}
//立即购买
const handleBuyNow = (e: SkuPopupEvent) => {
  uni.navigateTo({
    url: `/pagesOrder/create/create?skuId=${e._id}&count=${e.buy_num}`,
  })
  isShowSKU.value = false
}
</script>

<template>
  <!-- SKU弹窗组件 -->
  <vk-data-goods-sku-popup ref="SkuRef" v-model="isShowSKU" :localdata="localdata" :mode="mode"
    add-cart-background-color="#FFA868" buy-now-background-color="#27ba9b" :actived-style="{
      color: '#27BA9B',
      borderColor: '#27BA9B',
      backgroundColor: '#E9F8F5',
    }" @add-cart="handleAddCart" @buy-now="handleBuyNow" />
  <scroll-view scroll-y class="viewport">
    <!-- 基本信息 -->
    <view class="goods">
      <!-- 商品主图 -->
      <view class="preview">
        <swiper circular @change="handleChange">
          <swiper-item v-for="item in goodsDetail?.mainPictures" :key="item">
            <image @tap="handlePreview(item)" mode="aspectFill" :src="item" />
          </swiper-item>
        </swiper>
        <view class="indicator">
          <text class="current">{{ currentIndex + 1 }}</text>
          <text class="split">/</text>
          <text class="total">{{ goodsDetail?.mainPictures.length }}</text>
        </view>
      </view>

      <!-- 商品简介 -->
      <view class="meta">
        <view class="price">
          <text class="symbol">¥</text>
          <text class="number">{{ goodsDetail?.price }}</text>
        </view>
        <view class="name ellipsis">{{ goodsDetail?.name }} </view>
        <view class="desc"> {{ goodsDetail?.desc }} </view>
      </view>

      <!-- 操作面板 -->
      <view class="action">
        <view @tap="handleOpenSku(Skumode.Both)" class="item arrow">
          <text class="label">选择</text>
          <text class="text ellipsis"> {{ selectArrText }} </text>
        </view>
        <view @tap="handleOpenPopup('address')" class="item arrow">
          <text class="label">送至</text>
          <text class="text ellipsis" v-if="selectedAddress">
            {{ selectedAddress.fullLocation }} {{ selectedAddress.address }}
          </text>
          <text class="text ellipsis" v-else> 请选择收获地址 </text>
        </view>
        <view @tap="handleOpenPopup('service')" class="item arrow">
          <text class="label">服务</text>
          <text class="text ellipsis"> 无忧退 快速退款 免费包邮 </text>
        </view>
      </view>
    </view>

    <!-- 商品详情 -->
    <view class="detail panel">
      <view class="title">
        <text>详情</text>
      </view>
      <view class="content">
        <view class="properties">
          <!-- 属性详情 -->
          <view class="item" v-for="item in goodsDetail?.details.properties" :key="item.name">
            <text class="label">{{ item.name }}</text>
            <text class="value">{{ item.value }}</text>
          </view>
        </view>
        <!-- 图片详情 -->
        <image v-for="item in goodsDetail?.details.pictures" :key="item" mode="widthFix" :src="item"></image>
      </view>
    </view>

    <!-- 同类推荐 -->
    <view class="similar panel">
      <view class="title">
        <text>同类推荐</text>
      </view>
      <view class="content">
        <navigator v-for="item in goodsDetail?.similarProducts" :key="item.id" class="goods" hover-class="none"
          :url="`/pages/detail/detail?id=${item.id}`">
          <image class="image" mode="aspectFill" :src="item.picture"></image>
          <view class="name ellipsis">{{ item.name }}</view>
          <view class="price">
            <text class="symbol">¥</text>
            <text class="number">{{ item.price }}</text>
          </view>
        </navigator>
      </view>
    </view>
  </scroll-view>

  <!-- 用户操作 -->
  <view class="toolbar" :style="{ paddingBottom: safeAreaInsets?.bottom + 'px' }">
    <view class="icons">
      <button class="icons-button"><text class="icon-heart"></text>收藏</button>
      <button class="icons-button" open-type="contact">
        <text class="icon-handset"></text>客服
      </button>
      <navigator class="icons-button" url="/pages/cart/cart2" open-type="navigate">
        <text class="icon-cart"></text>购物车
      </navigator>
    </view>
    <view class="buttons">
      <view class="addcart" @tap="handleOpenSku(Skumode.Cart)"> 加入购物车 </view>
      <view class="buynow" @tap="handleOpenSku(Skumode.Buy)"> 立即购买 </view>
    </view>
  </view>

  <!-- 弹出层 -->
  <uni-popup ref="popup" type="bottom" background-color="#fff">
    <ServiePanel v-if="popupName === 'service'" @close="popup?.close()" />
    <AddressPanel :addressList="addressList" v-if="popupName === 'address'" @close="popup?.close()" />
  </uni-popup>
</template>

<style lang="scss">
page {
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.viewport {
  background-color: #f4f4f4;
}

.panel {
  margin-top: 20rpx;
  background-color: #fff;

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 90rpx;
    line-height: 1;
    padding: 30rpx 60rpx 30rpx 6rpx;
    position: relative;

    text {
      padding-left: 10rpx;
      font-size: 28rpx;
      color: #333;
      font-weight: 600;
      border-left: 4rpx solid #27ba9b;
    }

    navigator {
      font-size: 24rpx;
      color: #666;
    }
  }
}

.arrow {
  &::after {
    position: absolute;
    top: 50%;
    right: 30rpx;
    content: '\e6c2';
    color: #ccc;
    font-family: 'erabbit' !important;
    font-size: 32rpx;
    transform: translateY(-50%);
  }
}

/* 商品信息 */
.goods {
  background-color: #fff;

  .preview {
    height: 750rpx;
    position: relative;

    .indicator {
      height: 40rpx;
      padding: 0 24rpx;
      line-height: 40rpx;
      border-radius: 30rpx;
      color: #fff;
      font-family: Arial, Helvetica, sans-serif;
      background-color: rgba(0, 0, 0, 0.3);
      position: absolute;
      bottom: 30rpx;
      right: 30rpx;

      .current {
        font-size: 26rpx;
      }

      .split {
        font-size: 24rpx;
        margin: 0 1rpx 0 2rpx;
      }

      .total {
        font-size: 24rpx;
      }
    }
  }

  .meta {
    position: relative;
    border-bottom: 1rpx solid #eaeaea;

    .price {
      height: 130rpx;
      padding: 25rpx 30rpx 0;
      color: #fff;
      font-size: 34rpx;
      box-sizing: border-box;
      background-color: #35c8a9;
    }

    .number {
      font-size: 56rpx;
    }

    .brand {
      width: 160rpx;
      height: 80rpx;
      overflow: hidden;
      position: absolute;
      top: 26rpx;
      right: 30rpx;
    }

    .name {
      max-height: 88rpx;
      line-height: 1.4;
      margin: 20rpx;
      font-size: 32rpx;
      color: #333;
    }

    .desc {
      line-height: 1;
      padding: 0 20rpx 30rpx;
      font-size: 24rpx;
      color: #cf4444;
    }
  }

  .action {
    padding-left: 20rpx;

    .item {
      height: 90rpx;
      padding-right: 60rpx;
      border-bottom: 1rpx solid #eaeaea;
      font-size: 26rpx;
      color: #333;
      position: relative;
      display: flex;
      align-items: center;

      &:last-child {
        border-bottom: 0 none;
      }
    }

    .label {
      width: 60rpx;
      color: #898b94;
      margin: 0 16rpx 0 10rpx;
    }

    .text {
      flex: 1;
      -webkit-line-clamp: 1;
    }
  }
}

/* 商品详情 */
.detail {
  padding-left: 20rpx;

  .content {
    margin-left: -20rpx;
  }

  .properties {
    padding: 0 20rpx;
    margin-bottom: 30rpx;

    .item {
      display: flex;
      line-height: 2;
      padding: 10rpx;
      font-size: 26rpx;
      color: #333;
      border-bottom: 1rpx dashed #ccc;
    }

    .label {
      width: 200rpx;
    }

    .value {
      flex: 1;
    }
  }
}

/* 同类推荐 */
.similar {
  padding-left: 20rpx;

  .content {
    padding: 0 20rpx 20rpx;
    margin-left: -20rpx;
    background-color: #f4f4f4;
    overflow: hidden;

    navigator {
      width: 345rpx;
      padding: 24rpx 20rpx 20rpx;
      margin: 20rpx 20rpx 0 0;
      border-radius: 10rpx;
      background-color: #fff;
      float: left;
    }

    .image {
      height: 260rpx;
    }

    .name {
      height: 80rpx;
      margin: 10rpx 0;
      font-size: 26rpx;
      color: #262626;
    }

    .price {
      line-height: 1;
      font-size: 20rpx;
      color: #cf4444;
    }

    .number {
      font-size: 26rpx;
      margin-left: 2rpx;
    }
  }

  navigator {
    &:nth-child(even) {
      margin-right: 0;
    }
  }
}

/* 底部工具栏 */
.toolbar {
  background-color: #fff;
  height: 100rpx;
  padding: 0 20rpx;
  border-top: 1rpx solid #eaeaea;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: content-box;

  .buttons {
    display: flex;

    &>view {
      width: 220rpx;
      text-align: center;
      line-height: 72rpx;
      font-size: 26rpx;
      color: #fff;
      border-radius: 72rpx;
    }

    .addcart {
      background-color: #ffa868;
    }

    .buynow {
      background-color: #27ba9b;
      margin-left: 20rpx;
    }
  }

  .icons {
    padding-right: 10rpx;
    display: flex;
    align-items: center;
    flex: 1;

    .icons-button {
      flex: 1;
      text-align: center;
      line-height: 1.4;
      padding: 0;
      margin: 0;
      border-radius: 0;
      font-size: 20rpx;
      color: #333;
      background-color: #fff;
    }

    text {
      display: block;
      font-size: 34rpx;
    }
  }
}
</style>
