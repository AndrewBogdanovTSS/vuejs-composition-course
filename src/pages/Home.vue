<template>
  <h1 v-if="error" data-type="error">I failed to load</h1>
  <suspense v-else>
    <template #default>
      <div class="container">
        <Timeline />
      </div>
    </template>
    <template #fallback>
      <progress class="progress is-primary is-small" data-test="progress" />
    </template>
  </suspense>
</template>

<script lang="ts">
  import {defineComponent, ref, onErrorCaptured} from 'vue'
  import Timeline from '../components/Timeline.vue'

  export default defineComponent({
    name: 'Home',
    components: {
      Timeline
    },
    setup() {
      const error = ref(null);

      onErrorCaptured((e) => {
        error.value = e
        return false
      })

      return { error };
    }
  })
</script>
