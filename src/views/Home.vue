<template>
  <div class="home columns">
    <Map class='map column col-8'></Map>
    <Sidebar class='column col-4'></Sidebar>
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

</style>
