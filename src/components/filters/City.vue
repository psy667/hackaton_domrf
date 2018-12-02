<template>
    <div>
        <label class="form-label h5" for="city-input">Город</label>
        <input @change="changeCity" class="form-input" type="text" id="city-input" v-model="city" placeholder="Город">
    </div>
</template>

<script>
    export default {
        name: "city",
        data(){
            return{
                city:""
            }
        },
        methods:{
            changeCity(){
                // this.$store.commit("changeCity",this.city)
                this.$store.commit("addFilter", {city:this.city});
            }
        }
    }
</script>

<style scoped>

</style>
