<template>
  <div>
    <Map />
    <template v-for="target in targets">
      <Target :x="target.x" :y="target.y" />
    </template>

    <Player />
    <template v-for="cargo in cargos">
      <Cargo :x="cargo.x" :y="cargo.y" />
    </template>
  </div>
</template>
<script setup lang="ts">
import Map from './Map.vue'
import Player from './Player.vue'
import Cargo from './Cargo.vue';
import Target from './Target.vue';
import { useCargoStore } from '../../store/cargo';
import { useTargetStore } from '../../store/tatget';

const { cargos, addCargo, createCargo } = useCargoStore()
addCargo(createCargo({ x: 2, y: 2 }))
addCargo(createCargo({ x: 3, y: 3 }))

const { targets } = useTargetStore()
</script>