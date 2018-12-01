<template>
    <div>
        <p>Ценовой диапозон:</p>
        <label class="form-label" for="cost-from">От:</label>
        <input class="form-input" @change="changeCost" v-model="costFrom" type="text" id="cost-from" placeholder="От">
        <label class="form-label" for="cost-to">До:</label>
        <input class="form-input" @change="changeCost" v-model="costTo" type="text" id="cost-to" placeholder="До">
    </div>
</template>

<script>
    export default {
        name: "Cost",
        data(){
            return{
                costFrom:null,
                costTo:null
            }
        },
        methods:{
            changeCost(){
                this.$store.commit("addFilter", {costFrom:this.costFrom,costTo:this.costTo});
            }
        }
    }
</script>

<style scoped>

</style>