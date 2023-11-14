import { $reuqest } from '@/utils/request'
import type { BannerItem, CategoryItem, HotPanelItem } from './type'

//获取首页轮播图
export const reqBannerList = (distributionSite = 1) => {
  return $reuqest<BannerItem[]>({
    url: '/home/banner',
    method: 'GET',
    data: {
      distributionSite,
    },
  })
}
//获取首页前台分类
export const reqCategoryList = () => {
  return $reuqest<CategoryItem[]>({
    url: '/home/category/mutli',
    method: 'GET',
  })
}
//获取首页热门推荐
export const reqHotPanel = () => {
  return $reuqest<HotPanelItem[]>({
    url: '/home/hot/mutli',
    method: 'GET',
  })
}
