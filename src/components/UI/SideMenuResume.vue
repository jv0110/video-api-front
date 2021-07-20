<template>
  <div class="nav-preview" v-if="menuActive">
    <div class="item">
      <img src="@/assets/icons/home.png" alt="home icon">
      <span class="text">Ínicio</span>
    </div>
    <div class="item">
      <img src="@/assets/icons/compass.png" alt="compass icon">
      <span class="text">Explorar</span>
    </div>
    <div class="item">
      <img src="@/assets/icons/play.png" alt="play icon">
      <span class="text">Inscrições</span>
    </div>
    <div class="item">
      <img src="@/assets/icons/play.png" alt="play icon">
      <span class="text">Biblioteca</span>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { getModule } from 'vuex-module-decorators'
import { UIMenusService } from '@/store/UiMenus/UIMenusService'

@Component
export default class SideMenuResume extends Vue {
  uiMenusService = getModule(UIMenusService, this.$store)

  get menuActive ():boolean {
    return this.uiMenusService.menus.menuResumeOpen
  }
}
</script>
<style lang="scss" scoped>
  .nav-preview{
    height: 100vh;
    width: 120px;
    padding: 30px 12px 12px 12px;
    color: #FFF;
    display: flex;
    flex-direction: column;
    background-color: #202020;
    .item{
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 12px;
      padding-bottom: 30px;
    }
    img{
      max-width: 24px;
      margin-bottom: 5px;
    }
  }
</style>
