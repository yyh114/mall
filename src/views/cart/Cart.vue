<template>
	<div class="cart">
		<NavBar class="cart-navbar">
			<div slot="center">购物车({{length}})</div>
		</NavBar>
		<CartList class="cart-list"></CartList>
		
	</div>
</template>

<script>
	
	import NavBar from 'components/common/navbar/NavBar.vue'
	import CartList from './childComps/CartList.vue'
	
	
	import {mapGetters} from 'vuex'
	
	export default{
		name:'Cart',
		components:{
			NavBar,
			CartList
		},
		computed:{
			// 数组模式:不可取名
			// ...mapGetters(['CartLength'])
			...mapGetters({
				'length':'CartLength'
			})
		}
	}
</script>

<style scoped>
	.cart-navbar{
		background-color: var(--color-tint);
		color: #FFFFFF;
		/* font-weight: bold; */
	}
	.cart-list{
		padding-top: 44px;
	}
</style>
