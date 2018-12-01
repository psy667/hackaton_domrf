<template lang="html">
  <div class="container">
    <div v-if='objSelected'>
        <h3>{{ obj.name }}</h3>
        <div class="adress">
          Адрес: {{ obj.adress }}
        </div>
        <div class="cost">
          Стоимость: {{ obj.cost }}
        </div>
      </div>

    <div v-else>
      <div v-for='obj in markers'>
          {{ obj.name }}
      </div>
    </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'

  import {bus} from '../bus'

export default {
  name: "Sidebar",
  data(){
    return {
      obj: {
        name: '',
        adress: '',
        coords: '',
        cost: ''
      }
    };
  },
    mounted(){
      bus.$on("markerSelect", (id)=>{

      });
    },
    computed: {
      ...mapState({
        markers: state => state.markers,
        selected: state => state.selected
      })
    }
}
</script>

<style lang="scss" scoped>
  .container{
    width: 200px;
    height: 500px;
  }
</style>
