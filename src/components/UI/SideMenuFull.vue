<template>
  <nav class="main-nav-full" v-if="activeMenu">
    <ul class="nav">
      <li class="nav-item">
        <img src="@/assets/icons/home.png" alt="home">
        Início
      </li>
      <li class="nav-item">
        <img src="@/assets/icons/compass.png" alt="compass">
        Explorar
      </li>
      <li class="nav-item">
        <img src="@/assets/icons/play.png" alt="play">
        Inscrições
      </li>
      <li class="nav-item">
        <img src="@/assets/icons/play.png" alt="biblioteca">
        Biblioteca
      </li>
    </ul>
  </nav>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { getModule } from 'vuex-module-decorators'
import { UIMenusService } from '@/store/UiMenus/UIMenusService'
@Component
export default class SideMenuFull extends Vue {
  uiMenusServices = getModule(UIMenusService, this.$store)

  get activeMenu (): boolean {
    return this.uiMenusServices.menus.menenuFullOpen
  }
}
</script>
<style lang="scss" scoped>
  .main-nav-full{
    padding-top: 30px;
    padding-left: 40px;
    background-color: #202020;
    height: 100vh;
    width: 300px;
    .nav-item{
      display: flex;
      align-items: center;
      color: #FFF;
      padding-bottom: 15px;
      img{
        max-width: 25px;
        margin-right: 20px;
      }
    }
  }
</style>
