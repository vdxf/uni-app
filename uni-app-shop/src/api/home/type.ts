export interface PageParame {
  page?: number
  pageSize?: number
}
export interface PageResult extends PageParame {
  counts: number
  pages: number
}
export interface HotParame extends PageParame {
  subType?: string
}
export interface BannerItem {
  hrefUrl: string
  id: string
  imgUrl: string
  type: number
}
export interface CategoryItem {
  icon: string
  id: string
  name: string
}
export interface HotPanelItem {
  alt: string
  id: string
  pictures: string[]
  target: string
  title: string
  type: number
}
export interface GuessLike extends PageResult {
  items: GuessLikeItem[]
}
export interface GuessLikeItem {
  desc: null
  id: string
  name: string
  orderNum: number
  picture: string
  price: string
}
export interface HotData {
  bannerPicture: string
  is: string
  subTypes: Hot[]
  title: string
}
export interface Hot {
  goodsItems: GuessLike
  id: string
  title: string
}
