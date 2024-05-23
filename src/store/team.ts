import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('team', () => {
  const team = ref([] as string[])

  function addPokemon(name: string) {
    team.value.push(name)
  }

  return { team, addPokemon }
})
