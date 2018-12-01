<template>
    <div>
        <yandex-map
                :coords="[51.703246,39.179851]"
                zoom="10"
                style="width: 100%; height: 600px;"
                :cluster-options="{
                  1: {clusterDisableClickZoom: false}
                }"
                :behaviors="['default']"
                :controls="['searchControl', 'typeSelector']"
                map-type="map"
        >
            <ymap-marker v-for='marker in markers'
                         :callbacks="{ click(){myExec(marker)} }"
                         :balloonTemplate="balloonTemplate"
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
    import {bus} from "../bus";

    Vue.use(YmapPlugin);

    export default {
        name: "Map",
        data() {
            return {

            }
        },
        computed: {
            ...mapState({
                markers: state => state.markers
            }),
            balloonTemplate() {

                return `
              <h1 class="red">Hi, everyone!</h1>
              <p>I am here: ${this.placemarks}</p>
              <img src="http://via.placeholder.com/350x140">
            `
            }
        },
        mounted() {

        },
        methods: {
            myExec(el) {
                bus.$emit("markerSelect", el);
            }

        }
    }
</script>

<style scoped>

</style>
