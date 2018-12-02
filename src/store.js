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
                if (state.filter[key]) {
                    let context = state.filter[key];
                    window.console.log(state.filter);
                    state.filtered = state.filtered.filter(item => {
                        // window.console.log(typeof context, context);
                        switch (typeof (item[key])) {
                            case "string":
                                return item[key] == context;
                                break;
                            case "boolean":
                                return item[key];
                                break;
                            // case "array":
                            //     window.console.log("lol");
                            //
                            //     for(let i=0;i<item[key].length; i++){
                            //         window.console.log("lol");
                            //     }
                            //     break;
                            case "object":
                                for (let index in item[key]) {
                                    let flag=false;
                                    if(typeof item[key][index]=="object"){
                                        for(let iter in item[key][index]){
                                            window.console.log(item[key][index][iter],context[index][iter]);
                                            if(context[index][iter]){
                                                if(typeof item[key][index][iter]=="number"){
                                                    if(!!item[key][index][iter]===!!context[index][iter]){
                                                            return true;
                                                    }
                                                }
                                                if(typeof item[key][index][iter]=="string"){
                                                    if(item[key][index][iter]===context[index][iter]){
                                                        if(flag){
                                                            return true;
                                                        }
                                                        flag=true;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    else{
                                        if (context[index]) {
                                            if(item[key][index] === context[index]){
                                                return true;
                                            }
                                            return false;
                                        }
                                    }
                                }
                                return false;
                            default:
                                break;
                        }
                        return item[key];
                    })
                }
            }
            window.console.log(state.filtered);
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
