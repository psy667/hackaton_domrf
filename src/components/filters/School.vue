<template>
    <div>
        <label class="form-checkbox">
            <input v-model="school" @change="changeSchool" type="checkbox">
            <i class="form-icon"></i> Школа
        </label>
    </div>
</template>

<script>
    export default {
        name: "School",
        data(){
            return{
                school:false
            }
        },
        methods:{
            changeSchool(){
                this.$store.commit("addFilter", {school:this.school})
            }
        }
    }
</script>

<style scoped>

</style>