<template lang="html">
    <div class="container">
        <div v-if="selected" class="card">
            <button class="btn btn-action s-circle"
                    @click='$store.commit("selectOff")'
            ><i class="icon icon-arrow-right"></i>
            </button>
            <div class="card-image">
                <img :src="obj.img" class="img-responsive">
                <div class="card-title h5">{{ obj.name }}</div>
            </div>
            <div class="card-body">
                <ul class="block">
                    <li>Город: {{ obj.city }}</li>
                    <div class="divider"></div>
                    <li>Адрес: {{ obj.address }}</li>
                    <div class="divider"></div>
                    <li>Студии: от {{ obj.studioRoom.cost.toLocaleString() }} руб.</li>
                    <li>1-комнатные: от {{ obj.oneRoom.cost.toLocaleString() }} руб.</li>
                    <li>2-комнатныe: от {{ obj.twoRoom.cost.toLocaleString() }} руб.</li>
                    <li>3-комнатныe: от {{ obj.threeRoom.cost.toLocaleString() }} руб.</li>
                    <li>4-комнатныe: от {{ obj.fourRoom.cost.toLocaleString() }} руб.</li>
                    <div class="divider"></div>
                    <li>Заселение: {{ obj.dateSettlement.quarter }}-й квартал {{ obj.dateSettlement.year }}</li>
                </ul>
                <div class="buttons">
                    <button class="btn btn-primary">На страницу объекта</button>
                </div>
            </div>
        </div>
        <Sort v-show="!selected"></Sort>
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
                    name: 'lol',
                    adress: '',
                    coords: '',
                    cost: ''
                }
            };
        },
        methods: {
            markerSelect(el) {
                this.obj = {...el};
                this.$store.commit("selectOn");
            }
        },
        mounted() {
            bus.$on("markerSelect", (el) => {
                this.markerSelect(el)
            });
            this.$store.commit("selectOff");
        },
        computed: {
            ...mapState(["markers", "map", "filtered", "selected"])
        },
        components: {
            Sort
        }
    }
</script>

<style lang="scss" scoped>
    .container {
        max-height: calc(100vh - 60px);
        overflow-y: scroll;
    }

    .card {
        text-align: left;

        .card-image {
            position: relative;
        }

        .card-title.h5 {
            position: absolute;
            bottom: 0px;
            padding: 10px 20px;
            background: #0007;
            width: 100%;
            color: #fff;
            text-align: left;
            font-size: 24px;
        }

        .card-body {
            text-align: left;

            ul {
                li {
                    list-style: none;
                }
            }

            .buttons {
                width: 100%;

                button {
                    width: 100%;
                    margin-bottom: 10px;
                }
            }
        }
    }
</style>
