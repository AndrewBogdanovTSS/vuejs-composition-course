<template>
  <section class="section">
    <suspense>
      <template #default>
        <div class="container">
          <Timeline />
        </div>
      </template>
      <template #fallback>
        <progress class="progress is-primary is-small"/>
      </template>
    </suspense>
  </section>
</template>

<script lang="ts">
  import {defineComponent} from 'vue'
  import Timeline from './components/Timeline.vue'

  export default defineComponent({
    name: 'App',
    components: {
      Timeline
    }
  })
</script>
