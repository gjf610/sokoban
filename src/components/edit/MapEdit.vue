<template>
  <div>
    <div v-for="(row, i) in map" class="flex">
      <div v-for="(col, j) in map[i]">
        <MapBlock :x="j" :y="i" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useMapEditStore } from '@/store/edit/mapEdit.ts';
import MapBlock from './MapBlock.vue';

const { map } = useMapEditStore()
</script>
