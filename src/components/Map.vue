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
                map-type="map"
        >
            <ymap-marker v-for='marker in markers'
                    :marker-id="marker.id"
                         :marker-type="marker.type"
                    :coords="marker.coords"
                    :hint-content="marker.content"
                    :balloon="{header: 'header', body: 'body', footer: 'footer'}"
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

            }
        },
        computed: mapState({
            markers: state => state.markers
        }),
        methods:{

        }
    }
</script>

<style scoped>

</style>
