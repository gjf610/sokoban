<template>
  <div class="absolute" :style="position">
    <img :src="targetImg" alt="">
  </div>
</template>

<script setup lang="ts">
import targetImg from '../../assets/target.png'
import { Position, usePosition } from '../../composables/usePosition'



const props = defineProps<Position>()
const { position } = usePosition(props)


</script>