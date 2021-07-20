/* eslint-disable */
import { VuexModule, Module, Action, Mutation } from 'vuex-module-decorators'
import { VideoType, VideoPost } from '@/types/types'
import http from '@/services/http'

@Module({ namespaced: true, name: 'VideosService' })
export class VideosService extends VuexModule {
  public videos: VideoType[] = []
  public notFound = false

  @Mutation
  private VideosNotFound (state:boolean) {
    this.notFound = state
  }

  @Action
  public getVideos ():void {
    this.context.commit('LoadersServices/showLoader', null, { root: true })
    http.get('/api/videos')
      .then(res => {
        this.videos.splice(0)
        this.videos.push(...res.data)
        this.context.commit('VideosNotFound', false)
        this.context.commit('LoadersServices/hideLoader', null, { root: true })
      }).catch(() => {
        this.context.commit('VideosNotFound', true)
        this.context.commit('LoadersServices/hideLoader', null, { root: true })
      })
  }

  @Action
  public postVideo (data: { data: VideoPost, file: any }):void {
    this.context.commit('LoadersServices/showLoader', null, { root: true })
    http.post('/api/video', data.data)
      .then(res => {
        this.context.dispatch('postThumb', {
          video_id: res.data[0],
          file: data.file
        })
        this.context.commit('LoadersServices/hideLoader', null, { root: true })
        this.context.commit('FormService/openNewVideoForm', null, { root: true })
        this.context.dispatch('getVideos')
      }).catch(err => {
        console.log(err)
      })
  }

  @Action
  public postThumb (data: any):void {
    const formData = new FormData()
    formData.append('video_id', data.video_id)
    formData.append('file', data.file)

    fetch('http://localhost:3080/api/thumb', {
      method: 'POST',
      body: formData
    })
  }
}
