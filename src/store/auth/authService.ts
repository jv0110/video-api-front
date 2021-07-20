/* eslint-disable */
import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import { UserLogin, UserSignIn } from '@/types/types'
import http from '@/services/http'

@Module({ namespaced: true, name: 'AuthService' })
export class AuthService extends VuexModule {
  @Action
  public login (user: UserLogin):void {
    this.context.commit('LoadersServices/showLoader', null, { root: true })
    http.post('/api/login', user)
      .then(res => {
        localStorage.setItem('token', res.data.token)
        this.context.commit('LoadersServices/hideLoader', null, { root: true })
      }).catch(err => {
        console.log(err)
      })
  }

  @Mutation
  logout ():void {
    localStorage.removeItem('token')
  }

  @Action
  register (data: UserSignIn):void {
    this.context.commit('LoadersServices/showLoader', null, { root: true })
    http.post('/api/register', data)
      .then(() => {
        this.context.commit('LoadersServices/hideLoader', null, { root: true })
        window.location.replace(`${window.location.hostname}/login`)
      })
  }
}
