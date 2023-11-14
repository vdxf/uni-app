import { useMemberStore } from '@/stores'

const baseURL = 'https://pcapi-xiaotuxian-front-devtest.itheima.net/'

//添加拦截器
const reuqestInterceptor = {
  invoke(options: UniApp.RequestOptions) {
    if (!options.url.startsWith('http')) {
      options.url = baseURL + options.url
    }
    options.timeout = 10000
    //请求头配置
    options.header = {
      ...options.header,
      'source-client': 'miniapp',
    }
    //添加token
    const memberStore = useMemberStore()
    const token = memberStore.profile?.token
    if (token) {
      options.header.Authorization = token
    }
  },
}
uni.addInterceptor('request', reuqestInterceptor)
uni.addInterceptor('upLoadFile', reuqestInterceptor)

interface Data<T> {
  code: string
  msg: string
  result: T
}
export const $reuqest = <T>(options: UniApp.RequestOptions) => {
  return new Promise<Data<T>>((resolve, reject) => {
    uni.request({
      ...options,
      success(res) {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(res.data as Data<T>)
        } else if (res.statusCode === 401) {
          const memberStore = useMemberStore()
          memberStore.clearProfile()
          uni.navigateTo({ url: '/pages/login/login' })
          reject(res)
        } else {
          uni.showToast({
            icon: 'none',
            title: (res.data as Data<T>).msg || '请求错误',
          })
          reject(res)
        }
      },
      fail(err) {
        uni.showToast({
          icon: 'none',
          title: '网络繁忙，请稍后重试',
        })
        reject(err)
      },
    })
  })
}
