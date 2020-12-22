<template>
	<div id="bar">
		<slot></slot>
	</div>
</template>

<script>
	export default{
		name:'TabBar',
		data(){
			return{
				// list:[
				// 	{
				// 		name:'home',
				// 		img:'../assets/img/international.svg',
				// 		text:'首页'
				// 	},
				// 	{
				// 		name:'category',
				// 		img:'../assets/img/list.svg',
				// 		text:'分类'
				// 	},
				// 	{
				// 		name:'shopcate',
				// 		img:'../assets/img/cart_empty.svg',
				// 		text:'购物车'
				// 	},
				// 	{
				// 		name:'user',
				// 		img:'../assets/img/user.svg',
				// 		text:'我的'
				// 	}
				// ]
			}
		}
		
	}
</script>

<style>
	#bar{
		display: flex;
		height: 49px;
		background-color: #f6f6f6;
		z-index: 99;
		
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		box-shadow: 0 -1px 1px rgba(100,100,100,0.2);
	}
</style>
