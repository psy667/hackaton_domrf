<template>
    <div>
        <label class="form-checkbox">
            <input v-model="underground" @change="changeUnderground" type="checkbox">
            <i class="form-icon"></i> Метро
        </label>
    </div>
</template>

<script>
    export default {
        name: "Underground",
        data(){
            return{
                underground:false
            }
        },
        methods:{
            changeUnderground(){
                this.$store.commit("addFilter", {underground:this.underground})
            }
        }
    }
</script>

<style scoped>

</style>