<template>
  <nav class="is-primary panel">
    <p class="panel-tabs">
      <a
        href=""
        v-for="item in items"
        data-test="period"
        :class="{'is-active': item === active}"
        @click.prevent="$emit('change', item)"
      >
        {{ item }}
      </a>
    </p>
  </nav>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {TPeriod} from '../types'

export default defineComponent({
  name: 'Tabs',
  props: {
    items: {
      type: Array as () => TPeriod[],
      required: true
    },
    active: {
      type: String as () => TPeriod
    }
  },
  emits: {
    change: val => typeof val === 'string'
  }
})
</script>