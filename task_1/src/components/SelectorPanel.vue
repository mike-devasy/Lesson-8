<template>
    <div class="container">
        <div class="selector">
            <div v-for="item in getSelectorList" :key="item.id"  class="selector__item" @click="onSelectCategory(item.id)">
                <img :src='item.imgSrc' alt="note" />
                <p>{{ item.title }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'SelectorPanel',
		computed:{
			...mapGetters(['getSelectorList'])

		},
    methods: {
        ...mapActions(['onSelectCategory']),
    },
}
</script>

<style lang="css" scoped>
.container {
    background-color: rgb(234, 238, 243);
    margin-left: 50px;
    max-width: 1450px;
    padding: 30px;
}
.selector {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
		
}
.selector__item {
	cursor: pointer;
}
.selector__item img {
    max-width: 50%;
}
</style>
