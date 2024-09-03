<script lang="ts" setup>
import { computed, onMounted, onUnmounted } from 'vue';
import keepImg from '../../assets/keeper.png'
import { usePlayerStore } from '../../store/player'

const { position } = usePosition()

function useMove() {
  const {
    movePlayerToLeft,
    movePlayerToRight,
    movePlayerToUp,
    movePlayerToDown
  } = usePlayerStore()
  function handleKeyUp(e: KeyboardEvent) {
    switch (e.code) {
      case "ArrowLeft":
        movePlayerToLeft()
        break
      case "ArrowRight":
        movePlayerToRight()
        break
      case "ArrowUp":
        movePlayerToUp()
        break
      case "ArrowDown":
        movePlayerToDown()
        break
      default:
        break;
    }
  }
  onMounted(() => {
    window.addEventListener('keyup', handleKeyUp)
  })
  onUnmounted(() => {
    window.removeEventListener('keyup', handleKeyUp)
  })
}
useMove()

function usePosition() {
  const { player } = usePlayerStore()
  const STEP = 32
  const position = computed(() => {
    return {
      left: player.x * STEP + 'px',
      top: player.y * STEP + 'px',
    }
  })
  return {
    position
  }
}

</script>

<template>
  <div class="absolute" :style="position">
    <img :src="keepImg" alt="">
  </div>
</template>
