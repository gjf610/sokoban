<template>
  <div class="border border-white" @click="handleClick">
    <template v-if="map[props.y][props.x] === MapTile.WALL">
      <img :src='wallImg' />
    </template>
    <template v-else-if="map[props.y][props.x] === MapTile.FLOOR">
      <img :src="FloorImg" />
    </template>
  </div>
</template>
<script lang="ts" setup>

import FloorImg from '@/assets/floor.png'
import wallImg from '@/assets/wall.png'
import { MapTile } from "@/store/map";
import { useMapEditStore } from '@/store/edit/mapEdit.ts';
import { useEditElementStore } from '@/store/edit/editElement';
interface Props {
  x: number;
  y: number;
}
const props = defineProps<Props>()

const { map } = useMapEditStore()
const { getCurrentSelectedEditElement } = useEditElementStore()
function handleClick() {
  getCurrentSelectedEditElement().execute(props)
}
</script>
