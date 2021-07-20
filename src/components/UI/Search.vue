<template>
  <form class="search-video-form" method="get">
    <div class="form-control">
      <input type="text" name="video-title" placeholder="Buscar..." />
    </div>
    <div class="form-control">
      <button type="submit" class="search-video">
        Buscar
      </button>
    </div>
  </form>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class Search extends Vue {
}
</script>
<style lang="scss" scoped>
  .search-video-form{
    display: flex;
    align-items: center;
    justify-content: center;
    .form-control{
      &:nth-of-type(1){
        flex-grow: 1;
        input{
          width: 100%;
        }
      }
    }
  }
</style>
