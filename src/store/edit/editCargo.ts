import { generateId } from "@/utils/id";
import { defineStore } from "pinia";
import { reactive } from "vue";

export interface EditCargo {
  id: number
  x: number
  y: number
}

export const useEditCargoStore = defineStore('edit-cargo', () => {
  const cargos = reactive<EditCargo[]>([])
  function addCargo(cargo: EditCargo) {
    cargos.push(cargo)
  }
  function createCargo({ x, y }: { x: number; y: number }): EditCargo {
    return {
      x,
      y,
      id: generateId()
    }
  }
  function removeCargo(cargo: EditCargo) {
    cargos.splice(cargos.indexOf(cargo), 1)
  }
  return {
    cargos,
    addCargo,
    createCargo,
    removeCargo,
  }
})

