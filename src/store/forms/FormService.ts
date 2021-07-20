import { VuexModule, Module, Mutation } from 'vuex-module-decorators'

@Module({ namespaced: true, name: 'FormService' })
export class FormService extends VuexModule {
  public newVideoFormOpen = false

  @Mutation
  public openNewVideoForm ():void {
    this.newVideoFormOpen = !this.newVideoFormOpen
  }
}
