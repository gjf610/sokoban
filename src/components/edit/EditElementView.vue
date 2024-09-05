<template>
  <div>
    <h3>元素选择区</h3>
    <div class="m-2 space-y-2">
      <div>row: <input type="text" class="border border-1" v-model="row"></div>
      <div>col: <input type="text" class="border border-1" v-model="col"></div>
    </div>
    <div class="flex m-2 space-x-2">
      <EditElement :edit-element="wallEditElement" />
      <EditElement :edit-element="floorEditElement" />
    </div>
    <div class="flex m-2 space-x-2">

      <EditElement :edit-element="playerEditElement" />
      <EditElement :edit-element="cargoEditElement" />
      <EditElement :edit-element="targetEditElement" />

    </div>
    <div>当前选择的：{{ selectedEditElementName }}</div>
  </div>
</template>
<script lang="ts" setup>
import { computed, toRefs, watchEffect } from 'vue';
import EditElement from './EditElement.vue';
import {
  wallEditElement,
  floorEditElement,
  playerEditElement,
  cargoEditElement,
  targetEditElement,
  useEditElementStore
} from '@/store/edit/editElement.ts'
import { useMapEditStore } from "@/store/edit/mapEdit";


const { initMap, updateMapRow, updateMapCol } = useMapEditStore()
const { col, row } = toRefs(useMapEditStore())
const { getCurrentSelectedEditElement } = useEditElementStore()

initMap()

watchEffect(() => {
  if (!row.value) return
  updateMapRow()
})

watchEffect(() => {
  if (!col.value) return
  updateMapCol()
})


const selectedEditElementName = computed(() => {
  if (!getCurrentSelectedEditElement()) {
    return '没有选择'
  }

  return getCurrentSelectedEditElement().name
})
</script>
