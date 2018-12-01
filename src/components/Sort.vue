<template>
    <div class="form-group">
        <apartaments></apartaments>
        <city></city>
        <cost></cost>
        <date-settlement></date-settlement>
        <kindergarten></kindergarten>
        <parking></parking>
        <school></school>
        <square></square>
        <underground></underground>
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

</style>
