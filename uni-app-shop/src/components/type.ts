import SwiperView from './SwiperView.vue'
import GuessLike from './GuessLike.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    SwiperView: typeof SwiperView
    GuessLike: typeof GuessLike
  }
}

export type GuessLikeInstance = InstanceType<typeof GuessLike>
