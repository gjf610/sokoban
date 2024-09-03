import { defineStore } from "pinia";
import { Position } from "../composables/usePosition";
import { reactive } from "vue";
import { useMapStore } from "./map";

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
  function moveCargo(cargo: Cargo, dx: number, dy: number) {
    const { isWall } = useMapStore()
    const position = {
      x: cargo.x + dx,
      y: cargo.y + dy
    }
    if (isWall(position)) return false

    if (findCargo(position)) return false

    cargo.x += dx;
    cargo.y += dy;

    return true
  }
  return {
    cargos,
    addCargo,
    createCargo,
    findCargo,
    moveCargo
  }
})