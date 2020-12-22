<template>
	<div class="cart-list">
		<Scroll class="content">
			<CartItem v-for="(item,index) in cartList" :key="index" :cart-list="item"></CartItem>
		</Scroll>
		<ButtonBar></ButtonBar>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex'
	import CartItem from './CartItem.vue'
	import ButtonBar from './ButtonBar.vue'
	
	import Scroll from 'components/common/scroll/Scroll.vue'
	
	export default{
		name:'CartList',
		components:{
			CartItem,
			ButtonBar,
			Scroll
		},
		computed:{
			...mapGetters(['cartList'])
		}
	}
</script>

<style scoped>
	.cart-list{
		height: 100vh;
	}
	.content{
		height: calc(100% - 49px);
		overflow: hidden;
	}
</style>
