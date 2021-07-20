import Vue from 'vue'
import Vuex from 'vuex'
import { VideosService } from '@/store/videos/videoServices'
import { UIMenusService } from '@/store/UiMenus/UIMenusService'
import { FormService } from '@/store/forms/FormService'
import { LoadersServices } from '@/store/loaders/LoadersServices'
import { AuthService } from '@/store/auth/authService'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    VideosService,
    UIMenusService,
    FormService,
    LoadersServices,
    AuthService
  }
})
