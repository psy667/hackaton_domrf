<template>
  <div class="home">
    <Map class='map'></Map>
    <Sidebar></Sidebar>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import Map from '@/components/Map.vue'
import Sidebar from '@/components/Sidebar.vue'

export default {
  name: 'home',
  components: {
    Map, Sidebar
  }
}
</script>
<style lang='scss'>
  .home{
    display: flex;
  }
  .map{
    width: 100%;
  }
</style>
