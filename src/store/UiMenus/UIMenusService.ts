import { VuexModule, Module, Mutation } from 'vuex-module-decorators'
import MenuInterface from '@/store/UiMenus/UIMenus.model'

@Module({ namespaced: true, name: 'UIMenusService' })
export class UIMenusService extends VuexModule {
  public menus:MenuInterface = {
    accountManageMenu: false,
    menuResumeOpen: true,
    menenuFullOpen: false
  }

  @Mutation
  public closeNotChosenMenu (chosenMenu:string):void {
    Object.keys(this.menus)
      .forEach(key => {
        if (key.toLocaleLowerCase() !== chosenMenu.toLocaleLowerCase()) {
          if (this.menus[key]) {
            this.menus[key] = !this.menus[key]
          }
        }
      })
  }

  @Mutation
  public openMenuResume () :void {
    this.menus.menuResumeOpen = !this.menus.menuResumeOpen
  }

  @Mutation
  public openMenuFull () :void {
    this.menus.menenuFullOpen = !this.menus.menenuFullOpen
  }

  @Mutation
  public openAccountManageMenu ():void {
    this.menus.accountManageMenu = !this.menus.accountManageMenu
  }
}
