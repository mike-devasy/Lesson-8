<template>
	<div class="card">
		<div class="card__image">
			<img :src="itemCarData.imgSrc" alt="car">
		</div>
<div class="card__content content-card">
<div class="content-card__title">{{itemCarData.make}}   {{itemCarData.model}}   {{ itemCarData.year }}</div>
<div class="content-card__price"><span>${{ itemCarData.price }}</span>  {{priceGrn }}грн</div>
<div class="content-card__description description-card">
<p class="description-card__mileage">Пробіг :{{itemCarData.mileage}}км</p>
<p class="description-card__ city">Місто:{{itemCarData.city}}</p>
<p class="description-card__fuel">Тип палива:{{itemCarData.fuel}}</p>
<p class="description-card__ gearbox">Трансмісія:{{itemCarData.gearbox}}</p>
</div>
</div>
	</div>
</template>

<script>
	export default {
		name:'ItemCar',
		props: {
			itemCarData: {
				type: Object,
				default:()=>({}) 
			},
		
		},
		computed:{
				priceGrn(){
					return  this.itemCarData.price * 38
				}
			} 
	}
</script>

<style lang="css" scoped>
.card {
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 900px;
	gap: 20px;
	margin: 20px;
	background-color: rgb(236, 231, 231);
	/* height: 300px; */
}
	.card__image {
		width: 350px;
		/* flex:0 1 70% */
}
	.card__image img {
		max-width: 100%;
}

.card__content {
	padding: 15px 35px 0px 0px;

}

.content-card__price {
	display: flex;
	justify-content: space-between;
	font-size: 24px;
	margin-bottom: 15px;
}
.content-card__price span{
	color: red;
}
	.content-card__title {
		display: flex;
		white-space: nowrap;
	font-size: 28px;
margin-bottom: 15px;
}

.content-card_description {
}

.description-card {
	text-align-last: left;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	font-size: 22px;
  column-gap:30px;

}
.description-card__mileage {
	margin: 10px 0;

}

.description-card__city{
	margin: 10px 0;

}

.description-card__fuel {
	margin: 10px 0;

}

.city {
	margin: 10px 0;

}
.gearbox {
	margin: 10px 0;

}

</style>