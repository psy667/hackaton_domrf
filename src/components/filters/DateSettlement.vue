<template>
    <div>
        <select @change="changeDate" v-model="date" class="form-select">
            <option :value="false">Любой год</option>
            <option>2019</option>
            <option>2020</option>
            <option>2021</option>
            <option>2023</option>
            <option>2024</option>
        </select>
    </div>
</template>

<script>
    export default {
        name: "DateSettlement",
        data(){
            return{
                date:false
            }
        },
        computed:{
          compDate(){
              return (!this.date) ? false : +this.date
            }
        },
        methods:{
            changeDate(){
                this.$store.commit("addFilter", {dateSettlement:{year:this.compDate}})
            }
        }
    }
</script>

<style scoped>

</style>