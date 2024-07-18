import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


//Composition API
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)

  const doubleCount = computed(() => count.value * 2)


  const increment = () => {
    count.value++
  }

  return { count, doubleCount, increment }
})


//Options API
export const useCounterStoreOptions = defineStore('counterOption', {

  state() {

    return {

      count: 0

    }
  },

  getters: {

    doubleCount(state) {

      return state.count * 2
    }

  },

  actions: {

    increment() {

      this.count++

    }
  }

})


