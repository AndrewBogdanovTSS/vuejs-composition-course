<template>
  <tabs :items="periods" :active="selectedPeriod" @change="setPeriod" />
  <post v-for="post in activePosts" :key="post.id" :post="post" />
</template>

<script lang="ts">
  import {defineComponent, ref, computed} from 'vue'
  import {TPeriod, IPost} from '../types'
  import moment from 'moment'
  import Post from './Post.vue'
  import Tabs from './Tabs.vue'
  import {store} from '../store'

  // const delay = (ms: number = 3000) => new Promise(res => setTimeout(res, ms))

  export default defineComponent({
    components: {Post, Tabs},
    async setup() {
      const periods: TPeriod[] = ['today', 'this week', 'this month']
      const selectedPeriod = ref<TPeriod>(periods[0])
      const setPeriod = (period: TPeriod) => (selectedPeriod.value = period)
      await store.getPosts()
      const allPosts = store.state.posts
      const posts = {
        today: allPosts.filter((post: IPost) => post.created.isAfter(moment().subtract(1, 'day'))),
        'this week': allPosts.filter((post: IPost) => post.created.isAfter(moment().subtract(1, 'week'))),
        'this month': allPosts.filter((post: IPost) => post.created.isAfter(moment().subtract(1, 'month')))
      }
      const activePosts = computed(() => posts[selectedPeriod.value])

      return {periods, selectedPeriod, activePosts, setPeriod}
    }
  })
</script>
