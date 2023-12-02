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
		getFilteredCarsList:(state) =>state.carsData.filter((car) => isSelectToFilter(car, state.filtersObj) )
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
 