<template>
    <div>
        <yandex-map
                v-if="map"
                :coords="[51.65,39.15]"
                zoom="13"
                style="width: 100%; height: 100vh;"
                :cluster-options="{
                  1: {clusterDisableClickZoom: false}
                }"
                :behaviors="['default']"
                :controls="['typeSelector']"
                map-type="map"
        >
            <ymap-marker v-for='marker in filtered'
                         :callbacks="{ click(){markerSelect(marker)} }"
                         :v-show="marker.visible"
                         :marker-id="marker.id"
                         marker-type="placemark"
                         :coords="marker.coords"
                         :hint-content="marker.name"
                         :icon="{
                            layout: 'default#image',
                            imageHref: marker.img,
                            imageSize: [50, 50]
                          }"
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
    import {bus} from "../other_files/bus";

    Vue.use(YmapPlugin);

    export default {
        name: "Map",
        computed: {
            ...mapState(["markers", "map", "filtered"])
        },
        methods: {
            markerSelect(el) {
                bus.$emit("markerSelect", el);
            }
        }
    }
</script>

<style scoped></style>
