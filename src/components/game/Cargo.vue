<template>
  <div class="absolute" :style="position">
    <img :src="cargoImg" alt="">
  </div>
</template>

<script setup lang="ts">
import cargoImg from '../../assets/cargo.png'
import { Position, usePosition } from '../../composables/usePosition'



const props = defineProps<Position>()
const { position } = usePosition(props)


</script>