import { $reuqest } from '@/utils/request'
import type { CategoryItem } from './type'
//获取分类列表
export const reqCategoryList = () => {
  return $reuqest<CategoryItem[]>({
    url: '/category/top',
    method: 'GET',
  })
}
