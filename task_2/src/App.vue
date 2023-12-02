<template>
	<div class="container">
		<filters-panel/>
		<car-panel />
	</div>

 </template>
 
 <script>
 import CarPanel from './components/CarPanel.vue';
import FiltersPanel from './components/FiltersPanel.vue';
 export default {
 name: "App",
	 components: {
		 CarPanel,
FiltersPanel
	 },
 
 };
 </script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container{
	display: flex;
}
</style>
 