<template>
  <div id="app">
    <router-view />

    <Loader v-if="activeLoader" />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { getModule } from 'vuex-module-decorators'
import Loader from '@/components/loaders/loader.vue'
// services
import { LoadersServices } from '@/store/loaders/LoadersServices'

@Component({
  components: {
    Loader
  }
})
export default class App extends Vue {
  private loaders = getModule(LoadersServices, this.$store)

  get activeLoader ():boolean {
    return this.loaders.activeLoader
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.new-video-btn{
  display: block;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  color: #FFF;
  font-weight: 600;
  font-size: 34px;
  padding: 30px;
  border-radius: 50%;
  position: fixed;
  bottom: 30px;
  right: 30px;
  border: none;
  background-color: rgb(224, 20, 20);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover{
    opacity: 0.9;
  }
}
</style>
