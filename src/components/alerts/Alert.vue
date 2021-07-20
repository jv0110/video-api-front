<template>
  <div class="warning" :class="type">
    <div class="warning-header">
      <button type="button" class="close-warning">x</button>
    </div>
    <div class="warning-message">
      {{ message }}
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component
export default class Alert extends Vue {
   @Prop({ required: true, type: String }) message!: string
   @Prop({ required: true, type: String }) type!: string
}
</script>
<style lang="scss" scoped>
  .warning{
    border-radius: 8px;
    padding: 5px 20px 20px;
    max-width: 380px;
    margin: 0 auto;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
    font-weight: 800;
    margin-bottom: 20px;
    .warning-header{
      padding-bottom: 2px;
      text-align: right;
      .close-warning{
        font-weight: 800;
        font-size: 16px;
      }
    }
    &.danger{
      background-color: #ed5042;
      color: #8f1e14;
      .close-warning{
        color: #8f1e14;
      }
    }
    &.warning{
      background-color: #edb047;
      color: #855c15;
      .close-warning{
        color: #855c15;
      }
    }
    &.success{
      background-color: #a0f177;
      color: #244a11;
      .close-warning{
        color: #244a11;
      }
    }
  }
</style>
