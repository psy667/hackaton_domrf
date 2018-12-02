<template>
    <div class="form-group">
        <button class='btn btn-primary' @click="filterOut">Фильтровать</button>
        <apartaments></apartaments>
        <div class="divider"></div>
        <city></city>
        <div class="divider"></div>
        <cost></cost>
        <div class="divider"></div>
        <date-settlement></date-settlement>
        <div class="divider"></div>
        <underground></underground>
        <kindergarten></kindergarten>
        <parking></parking>
        <school></school>
        <div class="divider"></div>
        <square></square>


    </div>
</template>

<script>
    import Apartaments from './filters/Apartaments'
    import City from './filters/City'
    import Cost from './filters/Cost'
    import DateSettlement from './filters/DateSettlement'
    import Kindergarten from './filters/Kindergarten'
    import Parking from './filters/Parking'
    import School from './filters/School'
    import Square from './filters/Square'
    import Underground from './filters/Underground'

    export default {
        name: "Sort",
        data(){
          return{

          }
        },
        methods:{
          filterOut(){
              this.$store.commit("filterOut");
          }
        },
        components:{
            Apartaments,
            City,
            Cost,
            DateSettlement,
            Kindergarten,
            Parking,
            School,
            Square,
            Underground
        }
    }
</script>

<style scoped>
  .container{
    text-align: left;
  }
</style>
