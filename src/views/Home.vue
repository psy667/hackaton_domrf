<template>
    <div class="home columns">
        <Map class='map column col-8'></Map>
        <Sidebar class='column col-4'></Sidebar>
    </div>
</template>

<script>
    import Map from '@/components/Map.vue'
    import Sidebar from '@/components/Sidebar.vue'

    export default {
        name: 'home',
        components: {
            Map, Sidebar
        }
    }
</script>

<style lang='scss' scoped>
    .container.column.col-4 {
        text-align: left;
    }
</style>
