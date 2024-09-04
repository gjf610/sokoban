<template>
  <div @click="handleClick()">
    <img :src='editElement.img' />
  </div>
</template>
<script lang="ts" setup>
import { type EditElement, useEditElementStore } from '@/store/edit/editElement';

interface Props {
  editElement: EditElement
}
const props = defineProps<Props>()
const { setCurrentSelectedEditElement } = useEditElementStore()
function handleClick() {
  setCurrentSelectedEditElement(props.editElement)
}
</script>
