import { defineStore } from 'pinia';
import { reactive } from "vue";

interface EditElement {
  name: 'floor' | 'wall'
}


export const useMapEditStore = defineStore("mapEdit", () => {
  const map = reactive([
    [2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2],
  ])

  return {
    map,
  }
})