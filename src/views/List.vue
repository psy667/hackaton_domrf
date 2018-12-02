<template>
  <div class="columns">
    <ListItems class="col-8"></ListItems>
    <Sort class="col-4" ></Sort>
  </div>
</template>

<script>
  import ListItems from '@/components/ListItems'
  import Sort from '@/components/Sort'

  export default{
      name:"list",
      data(){
          return{
          }
      },
      components:{
          ListItems,
          Sort
      }
  }
</script>

<style lang="scss" scoped>

</style>
