<template>
    <div class="columns">
        <ListItems class="column col-8"></ListItems>
        <Sidebar class="column col-4"></Sidebar>
    </div>
</template>

<script>
    import ListItems from '@/components/ListItems'
    import Sidebar from '@/components/Sidebar'

    export default {
        name: "list",
        components: {
            ListItems,
            Sidebar
        }
    }
</script>

<style lang="scss" scoped>
    .container.column.col-4 {
        text-align: left;
    }
</style>
