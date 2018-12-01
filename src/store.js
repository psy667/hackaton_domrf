import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        markers: [
            {
                id: 1,
                name: 'дом 1',
                adress: 'Барнаул, проспект Комсомольский,д 122А',
                coords: [53.356673,83.780332],
                cost: 100
            },
            {
                id: 2,
                name: 'дом 2',
                adress: 'Воронеж, московский проспект, 91',
                coords: [51.703246,39.179851],
                cost: 500
            },
            {
                id: 3,
                name: 'дом 3',
                adress: 'Воронеж, ул Антонова-Овсеенко, 19',
                coords: [51.709517,39.140301],
                cost: 40000
            },
            {
                id: 4,
                name: 'дом 4',
                adress: 'Воронеж, ул Новосибирская, 61А',
                coords: [51.595587,39.240578],
                cost: 1235
            },
            {
                id: 5,
                name: 'дом 5',
                adress: 'Липецк, ул Москаленко, д 1',
                coords: [52.587693,39.513042],
                cost: 64322
            },
        ]
    },
    mutations: {},
    actions: {}
})
