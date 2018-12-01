<template>
    <div>
        <yandex-map
                :coords="[54.62896654088406, 39.731893822753904]"
                zoom="10"
                style="width: 100%; height: 600px;"
                :cluster-options="{
    1: {clusterDisableClickZoom: true}
  }"
                :behaviors="['ruler']"
                :controls="['trafficControl']"
                :placemarks="placemarks"
                map-type="map"
                @map-was-initialized="initHandler"
        >
            <ymap-marker
                    marker-id="1"
                    marker-type="placemark"
                    :coords="[54.7, 39.7]"
                    hint-content="Hint content 1"
                    :balloon="{header: 'header', body: 'body', footer: 'footer'}"
                    :icon="{color: 'green', glyph: 'cinema'}"
                    cluster-name="1"
            ></ymap-marker>
            <ymap-marker
                    marker-id="2"
                    marker-type="placemark"
                    :coords="[54.6, 39.8]"
                    hint-content="Hint content 1"
                    :balloon="{header: 'header', body: 'body', footer: 'footer'}"
                    :icon="{color: 'green', glyph: 'cinema'}"
                    cluster-name="1"
            ></ymap-marker>

            <ymap-marker
                    marker-id="3"
                    marker-type="circle"
                    :coords="[54.62896654088406, 39.731893822753904]"
                    circle-radius="1600"
                    hint-content="Hint content 1"
                    :marker-fill="{color: '#000000', opacity: 0.4}"
                    :marker-stroke="{color: '#ff0000', width: 5}"
                    :balloon="{header: 'header', body: 'body', footer: 'footer'}"
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