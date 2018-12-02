<template>
    <div>
        <label class="form-checkbox">
            <input type="checkbox" @change="changeParking" v-model="parking">
            <i class="form-icon"></i> Парковка
        </label>
    </div>
</template>

<script>
    export default {
        name: "Parking",
        data() {
            return {
                parking: false
            }
        },
        methods: {
            changeParking() {
                this.$store.commit("addFilter", {parking: this.parking});
            }
        }
    }
</script>

<style scoped></style>
