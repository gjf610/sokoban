import { defineStore } from "pinia";

interface Cargo {
  x: number
  y: number
}
export const useCargoStore = defineStore('cargo', () => {
  const cargos: Cargo[] = [
    {
      x: 1,
      y: 2
    },
    {
      x: 1,
      y: 3
    },
  ]
  return {
    cargos
  }
})