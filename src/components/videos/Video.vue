<template>
  <article class="video">
    <div class="img-container">
      <img v-bind:src="video.thumb_url" alt="thumb"/>
    </div>
    <h2 class="heading">
      {{ video.title }}
    </h2>
  </article>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { VideoType } from '@/types/exportTypes'
@Component
export default class Video extends Vue {
  @Prop({ required: true }) video!:VideoType
}
</script>
<style lang="scss" scoped>
  .video{
    color: #FFF;
    border: 2px solid #FFF;
    padding: 20px;
    .img-container{
      img{
        max-width: 100%;
      }
    }
  }
</style>
