<template>
    <div>
        <yandex-map
                :coords="[54.62896654088406, 39.731893822753904]"
                zoom="5"
                style="width: 100%; height: 600px;"
                :cluster-options="{
    1: {clusterDisableClickZoom: false}
  }"
                :placemarks="placemarks"
                :behaviors="['default']"
                :controls="['searchControl', 'typeSelector']"
                map-type="map"
        >
            <ymap-marker v-for='marker in markers'
                         @click="markerSelect"
                    :marker-id="marker.id"
                         marker-type="placemark"
                    :coords="marker.coords"
                    :hint-content="marker.name"
                    :balloon="{header: marker.name, body: marker.cost, footer: marker.adress}"
                    :icon="{color: 'green', glyph: 'cinema'}"
                    cluster-name="1"
                         :key="marker.id"
            ></ymap-marker>


        </yandex-map>
    </div>
</template>

<script>
    import Vue from 'vue'
    import YmapPlugin from 'vue-yandex-maps'
    import {mapState} from 'vuex'

    Vue.use(YmapPlugin);

    export default {
        name: "Map",
        data(){
            return{
                placemarks: [
                    {
                        coords: [54.8, 39.8],
                        properties: {}, // define properties here
                        options: {

                        }, // define options here
                        clusterName: "1",
                        balloonTemplate: '<div>"Your custom template"</div>',
                        callbacks: { click: this.markerSelect() }
                    }
                ]
            }
        },
        computed: mapState({
            markers: state => state.markers
        }),
        mounted(){
            window.console.log(YmapPlugin.Events);
        },
        methods:{
            markerSelect(){
                window.console.log("!");
            }
        }
    }
</script>

<style scoped>

</style>
