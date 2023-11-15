import { $reuqest } from '@/utils/request'
import type {
  PageParame,
  BannerItem,
  CategoryItem,
  HotPanelItem,
  GuessLike,
  HotParame,
  HotData,
} from './type'

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
//获取首页猜你喜欢列表
export const reqGuessLike = (data: PageParame) => {
  return $reuqest<GuessLike>({
    url: '/home/goods/guessLike',
    method: 'GET',
    data,
  })
}
//获取热门推荐数据
export const reqHotData = (data: HotParame, url: string) => {
  return $reuqest<HotData>({
    url,
    method: 'GET',
    data,
  })
}
