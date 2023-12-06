import { createStore } from "vuex";
import { carsList} from '@/constants/cars_data'
import { isSelectToFilter } from '@/constants/helpers';

 const store = createStore({
  state() {
		return{
			carsData:[...carsList],
			filtersObj:{}
		}
	},
  getters: {
		getCarsList:({carsData}) => carsData,
		getFilteredCarsList:(state) =>state.carsData.filter((car) => isSelectToFilter(car, state.filtersObj) ),
		getBrandsList:(state, getters) => [...new Set(getters.getCarsList.map((car) => car.make))].sort(),
		getModelsList:(state, getters) => [...new Set(getters.getCarsList.filter((car) => car.make === state.filtersObj.make).map((car) => car.model))]
	},

  mutations: {
		changeFilter(state, filtersObj){
			state.filtersObj = filtersObj
		}
	},
  actions: {
		changeFilter({commit}, filtersObj){
			commit('changeFilter', filtersObj)
		}
	},
  modules: {},
});
export default store 
 