<template>
    <div>
        <label class="form-label">Типы квартир</label>
        <label class="form-checkbox">
            <input v-model="oneRoom" @change="changeApartaments" type="checkbox">
            <i class="form-icon"></i> Однокомнатные
        </label>
        <label class="form-checkbox">
            <input v-model="twoRoom" @change="changeApartaments" type="checkbox">
            <i class="form-icon"></i> Двухкомнатные
        </label>
        <label class="form-checkbox">
            <input v-model="threeRoom" @change="changeApartaments" type="checkbox">
            <i class="form-icon"></i> Трехкомнатные
        </label>
        <label class="form-checkbox">
            <input v-model="fourRoom" @change="changeApartaments" type="checkbox">
            <i class="form-icon"></i> Четырехкомнатные
        </label>
        <label class="form-checkbox">
            <input v-model="studio" @change="changeApartaments" type="checkbox">
            <i class="form-icon"></i> Студии
        </label>
    </div>
</template>

<script>
    export default {
        name: "Apartaments",
        data(){
            return{
                oneRoom:false,
                twoRoom:false,
                threeRoom:false,
                fourRoom:false,
                studio:false
            }
        },
        methods:{
            changeApartaments(){
                this.$store.commit("addFilter",{
                    oneRoom:this.oneRoom,
                    twoRoom:this.twoRoom,
                    threeRoom:this.threeRoom,
                    fourRoom:this.fourRoom,
                    studio:this.studio
                })
            }
        }
    }
</script>

<style scoped>

</style>