export interface CartParams {
  skuId: string
  count: number
}
export interface AddCartResult {
  skuId: string
  name: string
  attrsText: string
  picture: string
  price: string
  nowPrice: string
  selected: boolean
  stock: number
  count: number
  discount: number
  isCollect: boolean
  isEffective: boolean
  id: string
}
