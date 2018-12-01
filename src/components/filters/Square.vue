<template>
    <div>
        <p>Диапозон площади:</p>
        <label class="form-label" for="square-from">От:</label>
        <input @change="changeSquare" v-model="squareFrom" class="form-input" type="text" id="square-from" placeholder="От">
        <label class="form-label" for="square-to">До:</label>
        <input @change="changeSquare" v-model="squareTo" class="form-input" type="text" id="square-to" placeholder="До">
    </div>
</template>

<script>
    export default {
        name: "Square",
        data(){
            return{
                squareFrom:false,
                squareTo:false
            }
        },
        methods:{
            changeSquare(){
                this.$store.commit("addFilter", {squareFrom:this.squareFrom,squareTo:this.squareTo})
            }
        }
    }
</script>

<style scoped>

</style>