<template>
    <div class="items">
        <div  v-for="item in getListWithCategory" :key="item.id" class="item">
            <div class="item__image">
                <img :src="item.imgSrc" alt="photo" />
            </div>
            <div class="item__content">
                <p class="item__title">{{ item.title }}</p>
                <p class="item__price">{{ item.price }} ₴</p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'ItemsPanel',
    computed: {
        ...mapGetters(['getListWithCategory']),
    },
}
</script>

<style lang="css" scoped>
.items {
    margin-top: 30px;
    margin-left: 50px;
    padding: 30px;
    max-width: 1450px;
    display: grid;
    gap: 10px;
    background-color: rgb(234, 238, 243);

    grid-template-columns: repeat(4, auto);
}

.item {
    display: flex;
    background-color: white;
    padding: 10px;
    width: 300px;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
}

.item__image {
    width: 180px;
}
.item__image img {
    max-width: 100%;
}

.item__content {
    font-size: 14px;
    padding: 20px;
    margin-left: 0;
}
</style>