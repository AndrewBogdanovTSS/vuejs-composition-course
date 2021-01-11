<template>
  <nav class="is-primary panel">
    <p class="panel-tabs">
      <a
        href=""
        v-for="period in periods"
        data-test="period"
        :class="{'is-active': period === selectedPeriod}"
        @click.prevent="setPeriod(period)"
      >
        {{ period }}
      </a>
    </p>
  </nav>

  <post v-for="post in activePosts" :key="post.id" :post="post"/>
</template>

<script lang="ts">
  import {defineComponent, ref, computed} from 'vue'
  import {TPeriod, IPost} from '../types'
  import posts from '../mocks/posts'
  import moment from 'moment'
  import Post from './Post.vue'

  export default defineComponent({
    components: {
      Post
    },
    setup() {
      const periods: TPeriod[] = ['today', 'this week', 'this month']
      const selectedPeriod = ref<TPeriod>('today')
      const setPeriod = (period: TPeriod) => (selectedPeriod.value = period)
      const allPosts = {
        today: posts.filter((post: IPost) => post.created.isAfter(moment().subtract(1, 'day'))),
        'this week': posts.filter((post: IPost) => post.created.isAfter(moment().subtract(1, 'week'))),
        'this month': posts.filter((post: IPost) => post.created.isAfter(moment().subtract(1, 'month')))
      }
      const activePosts = computed(() => allPosts[selectedPeriod.value])

      return {periods, selectedPeriod, posts, activePosts, setPeriod}
    }
  })
</script>