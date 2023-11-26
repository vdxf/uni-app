import type { OrderState } from '@/utils/constants'

export interface OrderResult {
  userAddresses: UserAddresses[]
  goods: Goods[]
  summary: Summary
}
export interface UserAddresses {
  id: string
  provinceCode: string
  cityCode: string
  countyCode: string
  address: string
  isDefault: number
  receiver: string
  contact: string
  fullLocation: string
  postalCode: string
}
export interface Goods {
  id: string
  name: string
  picture: string
  count: number
  skuId: string
  attrsText: string
  price: number
  payPrice: number
  totalPrice: number
  totalPayPrice: number
}
export interface Summary {
  goodsCount: number
  totalPrice: number
  totalPayPrice: number
  postFee: number
  discountPrice: number
}
export interface OrderParams {
  skuId: string
  count: string
  addressId?: string
}
export interface SubmitParams {
  goods: GoodItem[]
  addressId: string
  deliveryTimeType: number
  buyerMessage: string
  payType: number
  payChannel: number
}
export interface GoodItem {
  skuId: string
  count: number
}
export interface OredrDetail {
  id: string
  createTime: string
  payType: number
  orderState: OrderState
  payLatestTime: number
  countdown: number
  postFee: string
  payMoney: string
  payChannel: number
  totalMoney: string
  totalNum: string
  deliveryTimeType: number
  receiverContact: string
  receiverMobile: string
  receiverAddress: string
  payTime: string
  consignTime: string
  arrivalEstimatedTime: string
  endTime: string
  closeTime: string
  evaluationTime: string
  skus: SkuItem[]
}
export interface SkuItem {
  id: string
  spuId: string
  attrsText: string
  name: string
  quantity: string
  image: string
  totalMoney: number
  realPay: number
  curPrice: number
  properties: Property[]
}
export interface Property {
  propertyMainName: string
  propertyValueName: string
}
export interface SendResult {
  arrivalEstimatedTime: null
  buyerMessage: string
  buyerRate: boolean
  cancelReason: null
  cityCode: string
  closeTime: null
  consignStatus: number
  consignTime: string
  countyCode: string
  createTime: string
  creator: string
  deliveryTimeType: number
  endTime: null
  evaluationTime: null
  id: string
  isDelete: number
  memberId: string
  orderState: number
  payChannel: number
  payLatestTime: string
  payMoney: number
  payState: number
  payTime: string
  payType: number
  postFee: number
  preMoney: number
  provinceCode: string
  receiverAddress: string
  receiverContact: string
  receiverMobile: string
  shippingCode: string
  shippingName: string
  sourceType: number
  totalMoney: number
  totalNum: number
  transactionId: string
  updateTime: string
}
export interface LogisticsResult {
  picture: string
  count: number
  company: {
    name: string
    number: string
    tel: string
  }
  list: ListItem[]
}
export interface ListItem {
  id: string
  text: string
  time: string
}
