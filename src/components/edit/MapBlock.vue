<template>
  <div class="border border-white" @click="handleClick" @mousedown="handleMouseDown" @mousemove="handleMouseMove">
    <template v-if="map[props.y][props.x] === MapTile.WALL">
      <img :src='wallImg' draggable="false" />
    </template>
    <template v-else-if="map[props.y][props.x] === MapTile.FLOOR">
      <img :src="FloorImg" draggable="false" />
    </template>
  </div>
</template>
<script lang="ts" setup>

import FloorImg from '@/assets/floor.png'
import wallImg from '@/assets/wall.png'
import { MapTile } from "@/store/map";
import { useMapEditStore } from '@/store/edit/mapEdit.ts';
import { useEditElementStore } from '@/store/edit/editElement';
import { useDragStore } from '@/composables/useDrag';
interface Props {
  x: number;
  y: number;
}
const props = defineProps<Props>()

const { map } = useMapEditStore()
const { getCurrentSelectedEditElement } = useEditElementStore()
const { isDragging, startDrag, stopDrag } = useDragStore()

function handleClick() {
  getCurrentSelectedEditElement()?.execute(props)
}
function handleMouseup() {
  stopDrag()
  window.removeEventListener('mouseup', handleMouseup)
}
function handleMouseDown() {
  startDrag()
  window.addEventListener('mouseup', handleMouseup)
}
function handleMouseMove() {
  if (isDragging()) {
    getCurrentSelectedEditElement()?.execute(props)
  }
}
</script>
