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
