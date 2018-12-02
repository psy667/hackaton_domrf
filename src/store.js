import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        selected: false,
        map: false,
        markers: {},
        filter: {},
        filtered: []
    },
    mutations: {
        getData(state, data) {
            state.markers = data.obj;
        },
        selectOff(state) {
            state.selected = false;
        },
        selectOn(state) {
            state.selected = true;
        },
        addFilter(state, option) {
            state.filter = {...state.filter, ...option};
        },
        filterOut(state) {
            state.map = false;
            state.filtered = state.markers;
            for (let key in state.filter) {
                if (!!state.filter[key]) {
                    let context = state.filter[key];
                    state.filtered = state.filtered.filter(item => {
                        switch (typeof (item[key])) {
                            case "string":
                                return item[key] == context;
                                break;
                            case "boolean":
                                return item[key];
                                break;
                            case "object":
                                window.console.log(context);
                                if (Object.keys(context)[0] == "year") {
                                    for (let index in item[key]) {
                                        if (context[index]) {
                                            if (item[key][index] === context[index]) {
                                                return true;
                                            }
                                            return false;
                                        }
                                    }
                                }
                                if (Object.keys(context)[0] == "count") {
                                    for (let index in context) {
                                        if (context.count) {
                                            return item[key].count;
                                        }
                                    }
                                }
                                // if(Object.keys(context)[0] == "count")
                                break;
                            default:
                                break;
                        }
                        return item[key];
                    })
                }
            }
            state.map = true;
        }
    },
    actions: {
        getData(context) {
            let url = 'http://demo4779301.mockable.io/db2';

            fetch(url).then(response => response.json()).then(data => {
                context.commit('getData', data);
                context.commit('filterOut');
            });
        }
    }
})
