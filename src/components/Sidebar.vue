<template lang="html">
  <div class="container">
    <h3>{{ obj.name }}</h3>
    <div class="adress">
      Адрес: {{ obj.adress }}
    </div>
    <div class="cost">
      Стоимость: {{ obj.cost }}
    </div>
  </div>
</template>

<script>
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
    }
}
</script>

<style lang="scss" scoped>
  .container{
    width: 200px;
    height: 500px;
  }
</style>
