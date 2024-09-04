<script lang="ts" setup>
import { onMounted, onUnmounted } from 'vue';
import keepImg from '../../assets/keeper.png'
import { usePlayerStore } from '../../store/player'
import { usePosition } from '../../composables/usePosition';
import { useGameStore } from '../../store/game';

useMove()
const { player } = usePlayerStore()
const { position } = usePosition(player)
const { detectionGameCompleted } = useGameStore()


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
    detectionGameCompleted()
  }
  onMounted(() => {
    window.addEventListener('keyup', handleKeyUp)
  })
  onUnmounted(() => {
    window.removeEventListener('keyup', handleKeyUp)
  })
}



</script>

<template>
  <div class="absolute" :style="position">
    <img :src="keepImg" alt="">
  </div>
</template>
