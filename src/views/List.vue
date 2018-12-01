<template>
  <div class="list">
    <div v-for="marker in markers" :key="marker.id">
      <pre>{{ marker }}</pre>
    </div>
  </div>
</template>

<script>
    import {mapState} from 'vuex'

  export default{
      name:"list",
      data(){
          return{

          }
      },
      computed: {
          ...mapState({
              markers: state => state.markers
          })
      }
  }
</script>

<style lang="scss">

</style>
