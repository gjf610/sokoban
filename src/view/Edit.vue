<template>
  <div>
    <div class="flex">
      <div class="w-4/6 bg-pink-400">
        <MapEdit />
        <EditPlayer />
        <template v-for="cargo in cargos" :key="cargo.id">
          <EditCargo :cargo="cargo" />
        </template>
        <template v-for="target in targets" :key="target.id">
          <EditTarget :target="target" />
        </template>
      </div>
      <div>
        <DataDisplayer />
      </div>
    </div>
    <div>
      <EditElementView />
    </div>
  </div>
</template>

<script lang="ts" setup>
import MapEdit from '@/components/edit/MapEdit.vue'
import DataDisplayer from "@/components/edit/DataDisplayer.vue";
import EditElementView from '@/components/edit/EditElementView.vue'
import EditPlayer from '@/components/edit/EditPlayer.vue'
import EditCargo from '@/components/edit/EditCargo.vue';
import EditTarget from '@/components/edit/EditTarget.vue';
import { useEditCargoStore } from '@/store/edit/editCargo';
import { useEditTargetStore } from '@/store/edit/editTarget';

const { cargos } = useEditCargoStore()
const { targets } = useEditTargetStore()

</script>
