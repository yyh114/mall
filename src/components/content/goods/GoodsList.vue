<template>
	<div class="goodslist">
		<goods-list-item v-for="(item,index) in goods" :key="index" :goods-item="item"></goods-list-item>
	</div>
</template>

<script>
	
	import GoodsListItem from './GoodsListItem.vue'
	
	export default{
		name:'GoodsList',
		components:{
			GoodsListItem
		},
		props:{
			goods:{
				type:Array,
				default(){
					return []
				}
			}
		}
	}
</script>

<style scoped>
	.goodslist{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		width: 100%;
		
		padding: 2px;
	}
</style>
