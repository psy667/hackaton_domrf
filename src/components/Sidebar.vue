<template lang="html">
    <div class="container">
        <div v-if="selected" class="card" >
          <button class="btn btn-action s-circle"
                  @click='$store.commit("selectOff")'><i class="icon icon-arrow-right"></i>
          </button>
          <div class="card-image">
            <img src="https://0.pik.ru.cdn.pik-service.ru/specialoffers/0/180/6_36b545a33d449e9fee28a4779f63b6d6.jpg" class="img-responsive">
<div class="card-title h5">{{ obj.name }}</div>
          </div>
          <div class="card-body">
            <ul class="block">
              <li>Город: {{ obj.city }}</li>
              <div class="divider"></div>
              <li>Адрес: {{ obj.adress }}</li>
              <div class="divider"></div>
              <li>Студии: от {{ obj.apartaments[0].cost }} руб.</li>
              <li>1-комнатные: от {{ obj.apartaments[1].cost }} руб.</li>
              <li>2-комнатныe: от {{ obj.apartaments[2].cost }} руб.</li>
              <li>3-комнатныe: от {{ obj.apartaments[3].cost }} руб.</li>
              <li>4-комнатныe: от {{ obj.apartaments[4].cost }} руб.</li>
              <div class="divider"></div>
              <li>Заселение:  {{ obj.dateSettlement.quarter }}-й квартал {{ obj.dateSettlement.year }}</li>
            </ul>

              <div class="buttons">
                <button class="btn btn-primary">На страницу объекта</button>
              </div>



          </div>
        </div>
        <Sort v-show="!selected"></Sort>
        <!--<ul v-else class='menu'>-->
        <!--<li v-for='obj in markers' class='menu-item'-->
        <!--@click='markerSelect(obj)'>-->
        <!--<a href="#">{{ obj.name }}</a>-->

        <!--</li>-->
        <!--</ul>-->
        <pre v-for='i in filtered' :key="i.id">{{ i.id }}</pre>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import {bus} from '../other_files/bus'
    import Sort from './Sort'

    export default {
        name: "Sidebar",
        data() {
            return {
                obj: {
                    name: '',
                    adress: '',
                    coords: '',
                    cost: ''
                }
            };
        },
        methods: {
            markerSelect(el) {

                this.obj = {
                    ...el
                };
                window.console.log(this.obj.apartaments[0].cost);
                this.$store.commit("selectOn");
            }
        },
        mounted() {
            bus.$on("markerSelect", (el) => {
                this.markerSelect(el)
            });
        },
        computed: {
            ...mapState({
                markers: state => state.markers,
                selected: state => state.selected,
                filtered: state => state.filtered,
                filter: state => state.filter
            })
        },
        components:{
            Sort
        }
    }
</script>

<style lang="scss" scoped>
    .hide{
        display: none;
    }
    .show{
        display: block;
    }

    .container {

        height: 500px;
    }
    .card{

      .card-image{
        position: relative;
      }
      .card-title.h5{
        position: absolute;
        bottom: 0px;
        padding: 10px 20px;
        background: #0007;
        width: 100%;
        // margin-top: -50px;
        color: #fff;
        text-align: left;
        font-size: 24px;
      }

      .card-body{
        text-align: left;
        ul{
          li{
            list-style: none;
          }
        }
        .buttons{
          width: 100%;
          button{
            width: 100%;
            margin-bottom: 10px;
          }
        }
      }
    }
</style>
