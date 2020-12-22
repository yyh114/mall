<template>
	<div class="check" :class="{active:isActive}">
		<img src="~assets/img/cart/tick.svg"/>
	</div>
</template>

<script>
	export default{
		name:'CheckButton',
		props:{
			isActive:{
				type:Boolean,
				default:false
			}
		}
	}
</script>

<style scoped>
	.check{
		border: 1px solid #ccc;
		border-radius: 50%;
	}
	.active{
		background-color: orange;
		border-color: orange;
	}
</style>
