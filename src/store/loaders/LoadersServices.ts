import { VuexModule, Module, Mutation } from 'vuex-module-decorators'

@Module({ namespaced: true, name: 'LoadersServices' })
export class LoadersServices extends VuexModule {
  public activeLoader = false

  @Mutation
  public showLoader ():void {
    this.activeLoader = !this.activeLoader
  }

  @Mutation
  public hideLoader ():void {
    this.activeLoader = !this.activeLoader
  }
}
