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
  </div>
</template>
<script setup lang="ts">
import Map from './Map.vue'
import Player from './Player.vue'
import Cargo from './Cargo.vue';
import Target from './Target.vue';
import { useCargoStore } from '../../store/cargo';
import { useTargetStore } from '../../store/target';

const { cargos, addCargo, createCargo } = useCargoStore()

addCargo(createCargo({ x: 2, y: 2 }))
addCargo(createCargo({ x: 3, y: 3 }))
console.log(cargos)
const { targets } = useTargetStore()

console.log(targets)

</script>