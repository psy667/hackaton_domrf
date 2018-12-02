<template>
    <div class="form-group filters">
        <span class='h5'>Количество: {{ searchCount }}</span>
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
        <button class='btn btn-primary filter-button' @click="filterOut">Фильтровать</button>
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
    import Underground from './filters/Underground'

    import {mapState} from 'vuex'

    export default {
        name: "Sort",
        data() {
            return {}
        },
        methods: {
            filterOut() {
                this.$store.commit("filterOut");
            }
        },
        computed: {
            ...mapState(["markers", "map", "filtered", "selected"]),
            searchCount() {
                return this.filtered.length;
            }
        },
        components: {
            Apartaments,
            City,
            Cost,
            DateSettlement,
            Kindergarten,
            Parking,
            School,
            Underground
        }
    }
</script>

<style lang="scss" scoped>
  .container{
    text-align: left;
  }
  .filters{
      padding-bottom: 100px;
  }
  .filter-button{
      width: calc(33% - .4rem - 15px);
      height: 50px;
      position: fixed;
      bottom: 10px;
  }
</style>
