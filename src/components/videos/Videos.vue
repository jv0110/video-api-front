<template>
  <div class="videos-wrapper">
    <h2 class="heading" v-if="!videosNotFound">Vídeos: </h2>
    <div class="videos-container" v-if="!videosNotFound">
      <Video v-for="(video, index) in videos" :key="index" :video="video"/>
    </div>
    <p class="not-found" v-if="videosNotFound">
      Videos not found
    </p>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { getModule } from 'vuex-module-decorators'
import { VideosService } from '@/store/videos/videoServices'
import { VideoType } from '@/types/exportTypes'
import Video from './Video.vue'

@Component({
  components: {
    Video
  }
})
export default class Videos extends Vue {
  videosService = getModule(VideosService, this.$store)
  mounted ():void {
    this.videosService.getVideos()
  }

  get videos ():VideoType[] {
    return this.videosService.videos
  }

  get videosNotFound ():boolean {
    return this.videosService.notFound
  }
}
</script>
<style lang="scss" scoped>
  .videos-wrapper{
    max-width: calc(100% - 120px);
    width: 100%;
    text-align: left;
    padding: 20px;
    .videos-container{
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      gap: 16px;
      .video{
        grid-column: span 12;
        @media screen and (min-width: 576px){
          grid-column: span 6;
        }
        @media screen and (min-width: 768px){
          grid-column: span 4;
        }
        @media screen and (min-width: 992px){
          grid-column: span 3;
        }
      }
    }
  }
  .not-found{
    color: #FFF;
    text-align: center;
    font-size: 32px;
    text-transform: uppercase;
    font-weight: 600;
    padding-top: 50px;
  }
</style>
