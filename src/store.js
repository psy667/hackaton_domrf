import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        selected: false,
        map: true,
        markers: [{
            id: 1,
            visible:true,
            name: "дом 76",
            city: "Барнаул",
            adress: "Проспект Комсомольский,д 122А",
            coords: [ 53.356673, 83.780332 ],
            apartaments: [
                {
                    type: "Студия",
                    count: 8,
                    cost: 800000,
                    square: 35
                },
                {
                    type: "Однокомнатные",
                    count: 0,
                    cost: 0,
                    square: 0
                },
                {
                    type: "Двухкомнатные",
                    count: 6,
                    cost: 1500000,
                    square: 65
                },
                {
                    type: "Трехкомнатные",
                    count: 2,
                    cost: 2000000,
                    square: 90
                },
                {
                    type: "Четырехкомнатные",
                    count: 2,
                    cost: 2500000,
                    square: 115
                }

            ],
            underground: false,
            school: false,
            kindergarten: false,
            parking: false,
            dateSettlement: {
                quarter: 3,
                year: 2019
            }
        },
        {
            id: 2,
            visible:true,
            name: "дом 2",
            city: "Воронеж",
            adress: "Московский проспект,д 91",
            coords: [ 51.703246, 39.179851 ],
            apartaments: [
                {
                    type: "Студия",
                    count: 10,
                    cost: 1000000,
                    square: 40
                },
                {
                    type: "Однокомнатные",
                    count: 10,
                    cost: 1500000,
                    square: 45
                },
                {
                    type: "Двухкомнатные",
                    count: 8,
                    cost: 2000000,
                    square: 70
                },
                {
                    type: "Трехкомнатные",
                    count: 4,
                    cost: 2500000,
                    square: 100
                },
                {
                    type: "Четырехкомнатные",
                    count: 4,
                    cost: 3000000,
                    square: 130
                }

            ],
            underground: true,
            school: true,
            kindergarten: false,
            parking: true,
            dateSettlement: {
                quarter: 2,
                year: 2019
            }
        },
        {
            id: 3,
            visible:true,
            name: "дом 3",
            city: "Воронеж",
            adress: "ул Антонова-Овсеенко,д 19",
            coords: [ 51.709517, 39.140301 ],
            apartaments: [
                {
                    type: "Студия",
                    count: 0,
                    cost: 0,
                    square: 0
                },
                {
                    type: "Однокомнатные",
                    count: 6,
                    cost: 1200000,
                    square: 55
                },
                {
                    type: "Двухкомнатные",
                    count: 8,
                    cost: 1700000,
                    square: 68
                },
                {
                    type: "Трехкомнатные",
                    count: 6,
                    cost: 2200000,
                    square: 99
                },
                {
                    type: "Четырехкомнатные",
                    count: 0,
                    cost: 0,
                    square: 0
                }

            ],
            underground: true,
            school: true,
            kindergarten: true,
            parking: false,
            dateSettlement: {
                quarter: 4,
                year: 2019
            }
        },
        {
            id: 4,
            visible:true,
            name: "дом 4",
            city: "Воронеж",
            adress: "ул Новосибирская,д 61А",
            coords: [ 51.595587, 39.240578 ],
            apartaments: [
                {
                    type: "Студия",
                    count: 8,
                    cost: 750000,
                    square: 30
                },
                {
                    type: "Однокомнатные",
                    count: 8,
                    cost: 900000,
                    square: 35
                },
                {
                    type: "Двухкомнатные",
                    count: 6,
                    cost: 1300000,
                    square: 60
                },
                {
                    type: "Трехкомнатные",
                    count: 2,
                    cost: 1800000,
                    square: 85
                },
                {
                    type: "Четырехкомнатные",
                    count: 0,
                    cost: 0,
                    square: 0
                }

            ],
            underground: false,
            school: false,
            kindergarten: false,
            parking: true,
            dateSettlement: {
                quarter: 1,
                year: 2020
            }
        },
        {
            id: 5,
            visible:true,
            name: "дом 5",
            city: "Липецк",
            adress: "ул Москаленко,д 1",
            coords: [ 52.587693, 39.513042 ],
            apartaments: [
                {
                    type: "Студия",
                    count: 0,
                    cost: 0,
                    square: 0
                },
                {
                    type: "Однокомнатные",
                    count: 12,
                    cost: 1050000,
                    square: 40
                },
                {
                    type: "Двухкомнатные",
                    count: 8,
                    cost: 1550000,
                    square: 65
                },
                {
                    type: "Трехкомнатные",
                    count: 4,
                    cost: 2050000,
                    square: 110
                },
                {
                    type: "Четырехкомнатные",
                    count: 2,
                    cost: 2550000,
                    square: 130
                }
            ],
            underground: false,
            school: true,
            kindergarten: true,
            parking: true,
            dateSettlement: {
                quarter: 1,
                year: 2019
            }
        }],
        filter:{
            school:false,
            underground: false,
            city:""
        },
        filtered: []
    },
    mutations: {
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
    actions: {}
})
