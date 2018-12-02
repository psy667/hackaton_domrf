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
        data() {
            return {
                oneRoom: false,
                twoRoom: false,
                threeRoom: false,
                fourRoom: false,
                studio: false
            }
        },
        methods: {
            changeApartaments() {
                this.$store.commit("addFilter", {
                    apartaments: [
                        {
                            type: "Студии",
                            count: this.studio
                        },
                        {
                            type: "Однокомнатные",
                            count: this.oneRoom
                        },
                        {
                            type: "Двухкомнатные",
                            count: this.twoRoom
                        },
                        {
                            type: "Трехкомнатные",
                            count: this.threeRoom
                        },
                        {
                            type: "Четырехкомнатные",
                            count: this.fourRoom
                        }
                    ]
                })
            }
        }
    }
</script>

<style scoped>

</style>