import { $reuqest } from '@/utils/request'
import type { GoodsDetail } from './type'

//获取商品详情
export const reqGoodsDetail = (data: { id: string }) => {
  return $reuqest<GoodsDetail>({
    url: '/goods',
    method: 'GET',
    data,
  })
}
