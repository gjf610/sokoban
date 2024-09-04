<template>
  <div>
    <Map />
    <template v-for="target in targets">
      <Target :x="target.x" :y="target.y" />
    </template>
    <Player />
    <template v-for="cargo in cargos">
      <Cargo :cargo="cargo" />
    </template>
    <div v-if="game.isGameCompleted" class="bg-red-500">
      <button>下一关</button>
    </div>
  </div>
</template>
<script setup lang="ts">
import Map from './Map.vue'
import Player from './Player.vue'
import Cargo from './Cargo.vue';
import Target from './Target.vue';
import { useCargoStore } from '../../store/cargo';
import { useTargetStore } from '../../store/target';
import { useGameStore } from '../../store/game';
import { levelGameData } from '../../game/gameData';

const { game, setupGame } = useGameStore()

const { cargos } = useCargoStore()

const { targets } = useTargetStore()

setupGame(levelGameData)

</script>