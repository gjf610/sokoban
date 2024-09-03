import { defineStore } from "pinia";
import { Position } from "../composables/usePosition";
import { reactive } from "vue";

interface Cargo {
  x: number
  y: number
}
export const useCargoStore = defineStore('cargo', () => {
  const cargos: Cargo[] = reactive([])
  function addCargo(cargo: Cargo) {
    cargos.push(cargo)
  }
  function createCargo({ x, y }: { x: number; y: number }): Cargo {
    return {
      x,
      y
    }
  }
  function findCargo(position: Position) {
    const c = cargos.find((c) => c.x === position.x && c.y === position.y)
    return c
  }
  return {
    cargos,
    addCargo,
    createCargo,
    findCargo
  }
})