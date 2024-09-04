import { Position } from '@/composables/usePosition'
import { defineStore } from 'pinia'
import { MapTile } from '../map'
import { useMapEditStore } from './mapEdit'
import FloorImg from '@/assets/floor.png'
import wallImg from '@/assets/wall.png'

export interface EditElement {
  img: string
  execute: (position: Position) => void
}

export const wallEditElement: EditElement = {
  img: wallImg,
  execute(position) {
    const { map } = useMapEditStore()
    map[position.y][position.x] = MapTile.WALL
  },
}

export const floorEditElement: EditElement = {
  img: FloorImg,
  execute(position) {
    const { map } = useMapEditStore()
    map[position.y][position.x] = MapTile.FLOOR
  },
}

export const useEditElementStore = defineStore('editElement', () => {
  let currentSelectedEditElement: EditElement;

  function getCurrentSelectedEditElement() {
    return currentSelectedEditElement
  }
  function setCurrentSelectedEditElement(editElement: EditElement) {
    currentSelectedEditElement = editElement
  }
  return {
    getCurrentSelectedEditElement,
    setCurrentSelectedEditElement
  }
})



