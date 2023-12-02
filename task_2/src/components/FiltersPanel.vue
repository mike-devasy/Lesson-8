<template>
    <aside class="filters-container">
        <h4 class="filters-container__title">Тип транспорту</h4>
        <select v-model="filtersObj.type">
            <option selected value="Легкові">Легкові</option>
            <option value="Вантажівки">Вантажівки</option>
        </select>
        <h4 class="filters-container__title">Тип кузову</h4>
        <div class="filters-container__body">
					<label>
							<input v-model="filtersObj.bodyType" value="Седан" type="radio" />
							Седан
					</label>
					<label>
							<input v-model="filtersObj.bodyType" value="Позащляховик" type="radio" />
							Позащляховик/Кросовер
					</label>
					<label>
							<input v-model="filtersObj.bodyType" value="Мінівен" type="radio" />
							Мінівен
					</label>
					<label>
							<input v-model="filtersObj.bodyType" value="Універсал" type="radio" />
							Універсал
					</label>
					<label>
							<input v-model="filtersObj.bodyType" value="Хетчбек" type="radio" />
							Хетчбек
					</label>
				</div>
        <h4 class="filters-container__title">Марка</h4>
        <select v-model="filtersObj.make">
            <option v-for="brand in brandsList" :key="brand" :value="brand">{{ brand }}</option>
        </select>
        <h4 class="filters-container__title">Модель</h4>
        <select v-model="filtersObj.model">
            <option v-for="model in modelsList" :key="model" :value="model">{{ model }}</option>
        </select>
				<h4 class="filters-container__title">Рік віпуску</h4>
        <div class="select-year">
            <select v-model="filtersObj.startYear" class="select-year__item">
                <option disabled selected >Від</option> 
                <option v-for="year in carYearList" :key="year" :value="year">{{ year }}</option>
            </select>
            <select v-model="filtersObj.endYear" class="select-year__item">
                <option disabled selected >До</option>
                <option v-for="year in carYearList" :key="year" :value="year">{{ year }}</option>
            </select>
        </div>
    </aside>
</template>

<script>
/* eslint-disable */
import { handleError } from 'vue'
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'FiltersPanel',
    data() {
        return {
            filtersObj: {
							startYear:null,
							endYear:null
						},
        }
    },
    computed: {
        ...mapGetters(['getCarsList', 'getFilteredCarsList']),
        brandsList() {
            return [...new Set(this.getCarsList.map((car) => car.make))].sort()
        },
        modelsList() {
            return [...new Set(this.getCarsList.filter((car) => car.make === this.filtersObj.make).map((car) => car.model))];
        },
				carYearList(){
				const currentYear = new Date().getFullYear() + 1
				const carsYearList = []
				for(let year = currentYear; year > 1970; year--){
					carsYearList.push(year)
				}
				return carsYearList
				}
    },
    watch: {
        filtersObj: {
            handler(newValue) {
                this.changeFilter(newValue)
            },
            deep: true,
        },
    },

    methods: {
        ...mapActions(['changeFilter']),
    },
}
</script>

<style lang="css" scoped>
.filters-container{
width: 300px;
}
.filters-container__title{
font-size: 25px;
}
.filters-container__body{
	padding-left: 40px;
	display: flex;
flex-direction: column;
align-items: start;
gap: 10px;
}
select{
	border-radius:3px;
	font-size: 20px;
	height: 30px;
width: 70%;
}
select option{
	height: 20px;
	color:red;
	border-radius: none;
	outline:none;
}
 
.select-year__item {
	width: 100px;
	margin-right: 10px;
}
label{
font-size: 18px;
}
input{
display:inline-block;
appearance: none;
width: 20px; 
    height: 20px; 
    border: 2px solid #555; 
    outline: none; 
}
input:checked{
	background-color: #c5c4c4;
}
h4{

}
</style>
