<template>
  <header class="page-header">
    <div class="container">
      <div class="left">
        <button class="open-main-menu" @click="handleClick()">
          <img src="@/assets/icons/bars.png" alt="bars">
        </button>
        <div class="logo-container">
        </div>
      </div>
      <div class="center">
        <Search />
      </div>
     <div class="right actions">
        <ul class="items">
          <li class="item">
            <a href="#" class="item-link">
              <img src="@/assets/icons/camera.png" alt="camera">
            </a>
          </li>
          <li class="item">
            <a href="#" class="item-link">
              <img src="@/assets/icons/grade.png" alt="grade">
            </a>
          </li>
          <li class="item">
            <a href="#" class="item-link">
              <img src="@/assets/icons/bell.png" alt="bell">
            </a>
          </li>
          <li class="item">
            <a href="#" class="item-link" @click="uiMenusService.openAccountManageMenu()">
              <img src="@/assets/icons/user.png" alt="user">
            </a>
          </li>
        </ul>
        <MenuAccount />
      </div>
    </div>
  </header>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { getModule } from 'vuex-module-decorators'
// services
import { UIMenusService } from '@/store/UiMenus/UIMenusService'
// components
import MenuAccount from '@/components/menus/menuAccount.vue'
import Search from './Search.vue'
@Component({
  components: {
    Search,
    MenuAccount
  }
})
export default class Header extends Vue {
  private uiMenusService = getModule(UIMenusService, this.$store)
  public handleClick ():void {
    this.uiMenusService.openMenuFull()
    this.uiMenusService.openMenuResume()
  }
}
</script>
<style lang="scss" scoped>
  .page-header{
    padding: 12px 0;
    background-color: #202020;
    border-bottom: 1px solid #fff;
    .container{
      display: grid;
      grid-template-columns: repeat(14, 1fr);
      gap: .3;
      position: relative;
    }
    .left, .right{
      grid-column: span 4;
    }
    .center{
      grid-column: span 6;
    }
    .left, .right .items{
      display: flex;
      align-items: center;
    }
    .left{
      .open-main-menu{
        background-color: transparent;
        border: none;
        cursor: pointer;
        img{
          max-width: 30px;
        }
      }
    }
    .right{
      .items{
        justify-content: flex-end;
        align-items: center;
        .item{
          padding-left: 30px;
        }
        img{
          max-width: 25px;
        }
      }
    }
  }
</style>
