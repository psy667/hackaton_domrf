<template>
    <div class='container'>
        <div class="card" v-for='obj in filtered' :key="obj.id">
            <div class="card-image">
                <img :src="obj.img" class="img-responsive">
            </div>
            <div class="card-body">
                <div class="block">
                    <div class="card-title h3">{{ obj.name }}</div>
                    <div class="card-title h4">Стоимость: от {{ obj.oneRoom.cost.toLocaleString() }} руб.</div>
                </div>
                <div class="block">
                    <div class="">{{ obj.address }}</div>
                    <div class="buttons">
                        <button class="btn btn-primary">На страницу объекта</button>
                        <button class="btn" @click='markerSelect(obj)'>Подробнее<i class="icon icon-arrow-down"></i></button>
                    </div>
                </div>


            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import {bus} from '../other_files/bus'

    export default {
        name: "ListItems",
        data(){
            return{
              obj: {
                  name: 'lol',
                  adress: '',
                  coords: '',
                  cost: ''
              }
            }
        },
        methods: {
          markerSelect(el) {
              bus.$emit("markerSelect", el);
          }
        },

        computed: {
            ...mapState({
                markers: state => state.markers,
                selected: state => state.selected,
                filtered: state => state.filtered,
                filter: state => state.filter
            })
        }

    }
</script>

<style lang="scss" scoped>
    .container{
      overflow-y: scroll;
      height: 100vh;
    }
    .card{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin: auto;
        margin-bottom: 20px;
        border-radius: 5px;
        box-shadow: 0 3px 20px -5px #0003;

        .card-image{
            width: 20%;
            height: 150px;
            overflow-y: hidden;
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
