<template>
	<div>
		<TabBar>
			<tab-bar-item link='/home' activeColor='#d81e06'>
				<img slot="item-icon" src="~assets/img/tabbar/home.svg">
				<img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg">
				<div slot="item-name">首页</div>
			</tab-bar-item>
			<tab-bar-item link='/category' activeColor='#d81e06'>
				<img slot="item-icon" src="~assets/img/tabbar/category.svg">
				<img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg">
				<div slot="item-name">分类</div>
			</tab-bar-item>
			<tab-bar-item link='/cart' activeColor='#d81e06'>
				<img slot="item-icon" src="~assets/img/tabbar/shopcart.svg">
				<img slot="item-icon-active" src="~assets/img/tabbar/shopcart_active.svg">
				<div slot="item-name">购物车</div>
			</tab-bar-item>
			<tab-bar-item link='/user' activeColor='#d81e06'>
				<img slot="item-icon" src="~assets/img/tabbar/profile.svg">
				<img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg">
				<div slot="item-name">我的</div>
			</tab-bar-item>
		</TabBar>
	</div>
</template>

<script>
	import TabBar from 'components/common/tabbar/TabBar.vue'
	import TabBarItem from 'components/common/tabbar/TabBarItem.vue'
	
	export default{
		name:'MinTabBar',
		components:{
			TabBar,
			TabBarItem
		}
	}
</script>

<style>
</style>
