<template>
  <div>
    <div v-for="(row) in map" class="flex">
      <div v-for="(col) in row">
        <template v-if="col === MapTile.WALL">
          <img :src='wallImg' />
        </template>
        <template v-else-if="col === MapTile.FLOOR">
          <img :src="FloorImg">

          </img>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import FloorImg from '../../assets/floor.png'
import wallImg from '../../assets/wall.png'
import { useMapStore, MapTile } from "../../store/map";

const { map } = useMapStore()

</script>