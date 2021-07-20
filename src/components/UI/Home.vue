<template>
  <div class="wrap">
    <Header />
    <div class="home-wrapper">
      <SideMenuResume />
      <SideMenuFull />
      <Videos />
    </div>
    <NewVideoForm v-if="newFormOpen"/>
    <button type="button" class="new-video-btn" @click="openNewVideoForm()">+</button>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { getModule } from 'vuex-module-decorators'
import Header from '@/components/UI/Header.vue'
import SideMenuResume from '@/components/UI/SideMenuResume.vue'
import SideMenuFull from '@/components/UI/SideMenuFull.vue'
import Videos from '../videos/Videos.vue'
import NewVideoForm from '@/components/forms/NewVideo.vue'
// services
import { FormService } from '@/store/forms/FormService'
@Component({
  components: {
    Header,
    SideMenuResume,
    Videos,
    SideMenuFull,
    NewVideoForm
  }
})
export default class Home extends Vue {
  private formService = getModule(FormService, this.$store)

  get newFormOpen ():boolean {
    return this.formService.newVideoFormOpen
  }

  private openNewVideoForm ():void {
    this.formService.openNewVideoForm()
  }
}
</script>
<style lang="scss" scoped>
  .home-wrapper{
    display: flex;
  }
</style>
