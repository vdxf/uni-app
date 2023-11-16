export interface CategoryItem {
  children: ChildrenItem[]
  id: string
  imageBanners: string[]
  name: string
  picture: string
}
export interface ChildrenItem {
  brands: null
  categories: null
  goods: GoodsItem[]
  id: string
  name: string
  parentId: null
  parentName: null
  picture: string
  salePropertie: null
}
export interface GoodsItem {
  desc: null
  id: string
  name: string
  orderNum: number
  picture: string
  price: string
}
