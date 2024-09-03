<script lang="ts" setup>
import keepImg from '../../assets/keeper.png'

const player = {
  x: 1,
  y: 1
}
const STEP = 32
const position = {
  left: player.x * STEP + 'px',
  top: player.y * STEP + 'px',
}


</script>

<template>
  <div class="absolute" :style="position">
    <img :src="keepImg" alt="">
  </div>
</template>
