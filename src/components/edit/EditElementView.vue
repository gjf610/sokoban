<template>
  <div>
    <h3>元素选择区</h3>
    <div class="m-2 space-y-2">
      <div>row: <input type="text" class="border border-1" v-model="row"></div>
      <div>col: <input type="text" class="border border-1" v-model="col"></div>
    </div>
    <div class="flex m-2 space-x-2">
      <h4>地图: </h4>
      <EditElement :edit-element="wallEditElement" />
      <EditElement :edit-element="floorEditElement" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { toRefs, watchEffect } from 'vue';
import EditElement from './EditElement.vue';
import { wallEditElement, floorEditElement } from '@/store/edit/editElement.ts'
import { useMapEditStore } from "@/store/edit/mapEdit";


const { initMap, updateMapRow, updateMapCol } = useMapEditStore()
const { col, row } = toRefs(useMapEditStore())
initMap()

watchEffect(() => {
  if (!row.value) return
  updateMapRow()
})

watchEffect(() => {
  if (!col.value) return
  updateMapCol()
})
</script>
