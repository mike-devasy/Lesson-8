<template>
    <div class="container">
        <div class="selector">
            <div class="selector__item" @click="onSelectCategory('notebooks')">
                <img src="https://content.rozetka.com.ua/goods/images/big/323437245.jpg" alt="note" />
                <p>Ноутбукі</p>
            </div>
            <div class="selector__item" @click="onSelectCategory('powerStations')">
                <img src="https://content1.rozetka.com.ua/goods/images/big/290782931.jpg" alt="note" />
                <p>Зарядні станції</p>
            </div>
            <div class="selector__item" @click="onSelectCategory('carBatteries')">
                <img src="https://content2.rozetka.com.ua/goods/images/big/12539318.jpg" alt="acum" />
                <p>Автомобільні акумулятори</p>
            </div>
            <div class="selector__item" @click="onSelectCategory('highPressureDevices')">
                <img src="https://content2.rozetka.com.ua/goods/images/big/335978922.jpg" alt="pressure" />
                <p>Апарати високого тиску</p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'SelectorPanel',
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
