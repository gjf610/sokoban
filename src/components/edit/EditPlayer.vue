<template>
  <div class="absolute border border-blue-400" :style="position">
    <img :src="keepImg" alt="">
  </div>
</template>
<script lang="ts" setup>

import { useEditPlayerStore } from '@/store/edit/editPlayer';
import keepImg from '../../assets/keeper.png'

import { STEP_EDIT, usePosition } from '@/composables/usePosition';

const { player } = useEditPlayerStore()

const { position } = usePosition(player, STEP_EDIT)


</script>
