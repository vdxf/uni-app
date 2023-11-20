import type { GoodsItem } from '@/api/category/type'
export interface GoodsDetail {
  brand: Brand
  categories: Category[]
  collectCount: number
  commentCount: number
  desc: string
  details: {
    pictures: string[]
    properties: Properties[]
  }
  discount: number
  evaluationInfo: null
  hotByDay: GoodsItem[]
  id: string
  inventory: number
  isCollect: null
  isPreSale: false
  mainPictures: string[]
  mainVideos: []
  name: string
  oldPrice: string
  price: string
  recommends: null
  salesCount: number
  similarProducts: GoodsItem[]
  skus: Sku[]
  specs: SpecS[]
  spuCode: string
  userAddresses: null
  videoScale: number
}
export interface Brand {
  desc: null
  logo: string
  picture: string
  type: null
  id: string
  name: string
  nameEn: string
}
export interface CategoryItem {
  id: string
  name: string
  layer: number
}
export interface Category extends CategoryItem {
  parent: parent
}
export interface parent extends CategoryItem {
  parent: null
}
export interface Properties {
  name: string
  value: string
}
export interface Sku {
  id: string
  inventory: number
  oldPrice: string
  picture: string
  price: number
  skuCode: string
  specs: Spec[]
}
export interface Spec {
  name: string
  valueName: string
}
export interface SpecS extends Properties {
  values: Value[]
}
export interface Value {
  desc: string
  name: string
  picture: null
}
