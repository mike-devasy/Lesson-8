<template>
	<div class="car-items">
		<item-car v-for="car in getFilteredCarsList" :key="car.id" :item-car-data="car"/>
		
	</div>
</template>

<script>
 import {mapGetters} from 'vuex'
import ItemCar from './ItemCar.vue'
	export default {
		name:'CarPanel',
  components: { ItemCar },
	computed:{
		 ...mapGetters(['getCarsList', 'getFilteredCarsList']),
	
	 }
	}
</script>

<style lang="scss" scoped>

</style>