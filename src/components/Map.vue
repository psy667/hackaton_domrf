<template>
    <div>
        <yandex-map
                :coords="[54.62896654088406, 39.731893822753904]"
                zoom="10"
                style="width: 100%; height: 600px;"
                :cluster-options="{
    1: {clusterDisableClickZoom: false}
  }"
                :behaviors="['default']"
                :controls="['searchControl', 'typeSelector']"
                :placemarks="placemarks"
                map-type="map"
                @map-was-initialized="initHandler"
        >
            <ymap-marker v-for='marker in markers'
                    marker-id="marker.id"
                    marker-type="placemark"
                    :coords="marker.coords"
                    hint-content="Hint content 1"
                    :balloon="{header: 'header', body: 'body', footer: 'footer'}"
                    :icon="{color: 'green', glyph: 'cinema'}"
                    cluster-name="1"
            ></ymap-marker>


        </yandex-map>
    </div>
</template>

<script>
    import Vue from 'vue'
    import YmapPlugin from 'vue-yandex-maps'

    Vue.use(YmapPlugin);

    export default {
        name: "Map",
        data(){
            return{
                placemarks: [
                    {
                        coords: [54.8, 39.8],
                        properties: {}, // define properties here
                        options: {}, // define options here
                        clusterName: "1",
                        balloonTemplate: '<div>"Your custom template"</div>',
                        callbacks: { click: function() {} }
                    }
                ]
            }
        },
        methods:{

        }
    }
</script>

<style scoped>

</style>
