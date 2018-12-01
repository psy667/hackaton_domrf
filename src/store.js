import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        markers: [
            {
                id: 1,
                coords: [39.8973298432, 54.2348723],
                content:"точка 1",
                type:"placemark"
            },
            {
                id: 2,
                coords: [54.8973298432, 19.2348723],
                content:"точка 2",
                type:"placemark"
            }
        ]
    },
    mutations: {},
    actions: {}
})
