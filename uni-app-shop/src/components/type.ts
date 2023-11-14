import SwiperView from './SwiperView.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    SwiperView: typeof SwiperView
  }
}
