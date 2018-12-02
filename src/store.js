import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        selected: false,
        map: true,
        markers: {},
        filter:{
            school:false,
            underground: false,
            city:""
        },
        filtered: []
    },
    mutations: {
        getData(state, data){
          state.markers = data.obj;

        },
        selectOff(state) {
            state.selected=false;
        },
        selectOn(state) {
            state.selected=true;
        },
        addFilter(state, option){
            state.filter={...state.filter, ...option};
        },
        filterOut(state){
          state.map = false;
          state.filtered = state.markers;

          for (let key in state.filter) {
            if (state.filter[key]) {
              let context = state.filter[key];
              state.filtered = state.filtered.filter(function(item) {
                switch (typeof(item[key])) {
                  case "string":
                    return item[key] == context;
                    break;
                  case "boolean":
                    return item[key];
                    break;
                  // case "number":
                  //   return item[key];
                  //   break;
                  default:

                }
                  return item[key];
              })
            }
            state.map = true;
          }
        }
        // changeBasic(state, option){
        //     state.markers.filter(marker => (marker[option] === option) ? marker.visible=true : marker.visible=false);
        // },
        // changeParking(state, parking){
        //     state.markers.filter(marker => (marker.parking === parking) ? marker.visible=true : marker.visible=false);
        // },
        // changeSchool(state, school){
        //     state.markers.filter(marker => (marker.school === school) ? marker.visible=true : marker.visible=false);
        // },
        // changeKindergarten(state, kindergarten){
        //     state.markers.filter(marker => (marker.kindergarten === kindergarten) ? marker.visible=true : marker.visible=false);
        // },
        // changeMetro(state, metro){
        //     state.markers.filter(marker => (marker.metro === metro) ? marker.visible=true : marker.visible=false);
        // }
    },
    actions: {
      filterOut(context){
        context.commit('filterOut');
      },
      getData(context){
        let url = 'http://demo4779301.mockable.io/';

        fetch(url).then(response => response.json()).then(data => {
          console.log(data);
          context.commit('getData', data);
          context.commit('filterOut');
        });
      }
    }
})
