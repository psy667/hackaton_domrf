<template>
    <div>
        <label class="form-label h5" for="city-input">Город</label>
        <input @change="changeCity" class="form-input" type="text" id="city-input" v-model="city" placeholder="Город">
        <ul class='dropdown' v-if='allCities.length != getCities.length'>
          <li  v-for='x in getCities'
              @click='city = x'
              >{{ x }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "city",
        data(){
            return{
                city:"",
                cities: [],
                allCities: [
                  'Воронеж',
                  'Вологда',
                  'Волгоград',
                  'Москва'
              ]
            }
        },
        methods:{
            changeCity(){
                // this.$store.commit("changeCity",this.city)
                this.$store.commit("addFilter", {city:this.city});
            }
        },
        computed: {
          getCities(){
            let context = this;
            return this.allCities.filter(function(item){
              return !item.search(context.city);
            });
          }
        }

    }
</script>

<style scoped>
  .dropdown li{
    list-style: none;
  }
</style>
