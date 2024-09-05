import { Position } from '@/composables/usePosition'
import { defineStore } from 'pinia'
import { MapTile } from '../map'
import { useMapEditStore } from './mapEdit'
import FloorImg from '@/assets/floor.png'
import wallImg from '@/assets/wall.png'
import keepImg from '@/assets/keeper.png'
import { useEditPlayerStore } from './editPlayer'
import { ref } from 'vue'
export interface EditElement {
  img: string;
  name: string;
  execute: (position: Position) => void;
}

export const wallEditElement: EditElement = {
  img: wallImg,
  name: '墙',
  execute(position) {
    const { map } = useMapEditStore()
    map[position.y][position.x] = MapTile.WALL
  },
}

export const floorEditElement: EditElement = {
  img: FloorImg,
  name: '地板',
  execute(position) {
    const { map } = useMapEditStore()
    map[position.y][position.x] = MapTile.FLOOR
  },
}
export const playerEditElement: EditElement = {
  img: keepImg,
  name: '玩家',
  execute(position) {
    const { player } = useEditPlayerStore()

    player.x = position.x
    player.y = position.y
  },
}

export const useEditElementStore = defineStore('editElement', () => {
  let currentSelectedEditElement = ref<EditElement | undefined>();

  function getCurrentSelectedEditElement() {
    return currentSelectedEditElement.value
  }
  function setCurrentSelectedEditElement(editElement: EditElement) {
    currentSelectedEditElement.value = editElement
  }
  return {
    getCurrentSelectedEditElement,
    setCurrentSelectedEditElement
  }
})



