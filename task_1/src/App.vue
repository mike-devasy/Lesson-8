<template>
	<div>
		<selector-panel />
		<items-panel />
	</div>
</template>

<script>
import ItemsPanel from './components/ItemsPanel.vue';
import SelectorPanel from './components/SelectorPanel.vue';
export default {
  name: "App",
  components: {
		SelectorPanel,
    ItemsPanel,
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
</style>
