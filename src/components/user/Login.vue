<template>
  <div class="wrapper">
    <Alert :message="'Mensagem aqui'" :type="'success'" v-if="alertActive"/>

    <form id="login">
      <div class="form-control">
        <input type="email" name="email" placeholder="email" maxlength="50"/>
      </div>
      <div class="form-control">
        <input type="password" name="password" placeholder="password" max="255" />
      </div>
      <div class="form-control">
        <button type="button" class="login-btn">Login</button>
      </div>
    </form>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Alert from '@/components/alerts/Alert.vue'

@Component({
  components: {
    Alert
  }
})
export default class Login extends Vue {
  private alertActive = false
}
</script>
<style lang="scss" scoped>
  .wrapper{
    padding: 30px 0;
    border: 2px solid red;
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    #login{
      max-width: 520px;
      width: 100%;
      border: 5px solid rgb(45, 141, 197);
      padding: 40px;
      border-radius: 6px;
      input{
        width: 100%;
        padding: 16px;
        font-size: 18px;
        margin-bottom: 14px;
        border-radius: 6px;
      }
      button{
        color: #FFF;
        font-weight: 600;
        width: 100%;
        padding: 16px;
      }
    }
  }
</style>
