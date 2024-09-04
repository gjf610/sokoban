<template>
  <div>
    <h3>元素选择区</h3>
    <div class="flex m-2 space-x-2">
      <h4>地图: </h4>
      <EditElement :edit-element="wallEditElement" />
      <EditElement :edit-element="floorEditElement" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import EditElement from './EditElement.vue';
import { wallEditElement, floorEditElement } from '@/store/edit/editElement.ts'

</script>
