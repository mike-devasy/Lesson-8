import { createStore } from "vuex";
import{notebooksData, carBatteriesData, highPressureDevicesData,powerStationsData, selectorList} from '@/constants/data'
export default createStore({

  state() { 
		return{
			notebooksData:[...notebooksData],
			carBatteriesData: [...carBatteriesData],
			highPressureDevicesData:[...highPressureDevicesData],
			powerStationsData:[...powerStationsData],
			selectorList:[...selectorList],
			currentCategory:'powerStations',
		}

	},
  getters: {
    getSelectorList:({selectorList}) => selectorList,
		getNotebooksList:({notebooksData}) => notebooksData,
		getCarBatteriesData:({carBatteriesData}) => carBatteriesData,
		getHighPressureDevicesData:({highPressureDevicesData}) => highPressureDevicesData,
		getPowerStationsData:({	powerStationsData}) => 	powerStationsData,
		getListWithCategory({	currentCategory}, getters){
			if( 	currentCategory === 'notebooks') return  getters.getNotebooksList
			else if( 	currentCategory === 'powerStations') return  getters.getPowerStationsData
			else if( 	currentCategory === 'carBatteries') return getters.getCarBatteriesData
			else return  getters.getPowerStationsData
		}
	},
  mutations: {
		chooseCategory(state, category){
			state.currentCategory = category
		}
	},
  actions: {
		onSelectCategory({commit}, category){
			console.log('category');
			console.log(category);
			
    commit('chooseCategory', category)
		}
	},
  modules: {},
});
