<template>
  <div class="">


    <div class="card" v-for='obj in markers'>
      <div class="card-image">
        <img src="https://0.pik.ru.cdn.pik-service.ru/specialoffers/0/180/6_36b545a33d449e9fee28a4779f63b6d6.jpg" class="img-responsive">
      </div>
      <div class="card-body">
        <div class="block">
          <div class="card-title h3">{{ obj.name }}</div>
          <div class="card-title h4">Стоимость: от {{ obj.apartaments[0].cost }} руб.</div>
        </div>
        <div class="block">
          <div class="text-gray">{{ obj.adress }}</div>
          <div class="buttons">
            <button class="btn btn-primary">На страницу объекта</button>
            <button class="btn">Подробнее<i class="icon icon-arrow-down"></i></button>
          </div>
        </div>


      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default{
      name:"list",
      data(){
          return{
            text: "hello"
          }
      },
      computed: {
          ...mapState({
              markers: state => state.markers
          })
      }
  }
</script>

<style lang="scss" scoped>
  .card{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    max-width: 960px;
    margin: auto;
    margin-bottom: 20px;
    border-radius: 5px;
    box-shadow: 0 3px 20px -5px #0003;
    .card-image{
      width: 20%;
    }
    .card-body{
      width: 80%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .block{
        display: flex;
        justify-content: space-between;
      }
      .buttons button:first-child{
        margin-right: 10px;
      }
    }

  }
</style>
