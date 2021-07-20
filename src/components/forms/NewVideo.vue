<template>
  <div class="overlay-bg">
    <form id="newVideo">
        <div class="form-control">
        <label for="Thumb" class="thumb-square">
          <span v-if="file">
            {{ file.name }}
          </span>
          <span v-if="!file">
            Thumb
          </span>
        </label>
        <input id="Thumb" class="form-control" type="file" name="file" ref="file" @change="handleImage($event)" v-show="false">
        </div>
        <div class="form-control top-border">
        <label for="Title">Title</label>
        <input type="text" name="title" v-model="videoData.title" placeholder="Title">
        </div>
        <div class="form-control">
        <label for="Description">Description</label>
        <textarea name="description" id="Description" v-model="videoData.description" cols="30" rows="10"></textarea>
        </div>
        <div class="form-control">
        <button type="button" class="btn" @click="submitData()">Enviar</button>
        </div>
    </form>
  </div>
</template>
<script lang="ts">
/* eslint-disable */
import { Component, Vue } from 'vue-property-decorator'
import { getModule } from 'vuex-module-decorators'
import { VideosService } from '@/store/videos/videoServices'
import { VideoPost } from '@/types/types'

@Component
export default class NewVideo extends Vue {
  videoService = getModule(VideosService, this.$store)
  private file:any = ''
  private videoData:VideoPost = {
    title: '',
    description: '',
    duration: '10:00'
  }

  private handleImage (e:any):void {
    this.file = e.target.files[0]
  }

  public submitData ():void {
    this.videoService.postVideo({
      data: this.videoData,
      file: this.file
    })
  }
}
</script>
<style lang="scss" scoped>
  .overlay-bg{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    #newVideo{
      max-width: 500px;
      width: 100%;
      background-color: rgb(39, 39, 39);
      padding: 14px;
      border-radius: 6px;
      .form-control{
        padding: 10px 0;
        label{
          color: rgb(133, 133, 133);
          font-weight: 600;
          padding-bottom: 4px;
          display: block;
          text-align: left;
          &.thumb-square{
            max-width: 220px;
            height: 120px;
            margin: 0 auto;
            border: 2px dotted rgb(30, 70, 204);
            display: flex;
            align-items: center;
            justify-content: center;
            color: rgb(30, 70, 204);
            cursor: pointer;
            &:hover{
              border: 2px dotted rgb(91, 125, 238);
              color: rgb(91, 125, 238);
            }
          }
        }
        input, textarea{
          width: 100%;
          display: block;
          padding: 10px;
          background-color: rgb(12, 12, 12);
          color: #FFF;
          font-weight: 500;
          border: none;
        }
      }
    }
  }
</style>
