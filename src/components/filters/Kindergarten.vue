<template>
    <div>
        <label class="form-checkbox">
            <input v-model="kindergarten" @change="changeKindergarten" type="checkbox">
            <i class="form-icon"></i> Детский сад
        </label>
    </div>
</template>

<script>
    export default {
        name: "Kindergarten",
        data(){
            return{
                kindergarten:false
            }
        },
        methods:{
            changeKindergarten(){
                this.$store.commit("addFilter", {kindergarten:this.kindergarten})
            }
        }

    }
</script>

<style scoped>

</style>