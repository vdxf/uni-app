import type { GuessLikeInstance } from '@/components/type'
import { ref } from 'vue'

export const useGuessList = () => {
  const guessRef = ref<GuessLikeInstance>()

  const handleReachBottom = () => {
    guessRef.value?.handleMore()
  }

  const handleGuessRefresh = () => {
    guessRef.value?.handleRefresh()
  }

  return {
    guessRef,
    handleReachBottom,
    handleGuessRefresh,
  }
}
