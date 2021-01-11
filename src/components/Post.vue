<template>
  <div data-test="post">
    <a href="" data-test="title">{{ post.title }}</a>
    <p>{{ post.created.format('Do MMM') }}</p>
  </div>
</template>

<script lang='ts'>

  import {defineComponent} from 'vue'
  import {IPost} from '../types'

  export default defineComponent({
    props: {
      post: {
        type: Object as () => IPost,
        required: true
      }
    }
  })
</script>