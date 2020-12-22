<template>
	<div class="navbar">
		<div class="navbar_left"><slot name="left"></slot></div>
		<div class="navbar_center"><slot name="center"></slot></div>
		<div class="navbar_right"><slot name="right"></slot></div>
	</div>
</template>

<script>
</script>

<style scoped>
	.navbar{
		display: flex;
		height: 44px;
		line-height: 44px;
		text-align: center;
		 box-shadow: 0 1px 1px rgba(100,100,100,.1);
		
		
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 9999;
	}
	.navbar_left,.navbar_right{
		width: 60px;
	}
	.navbar_center{
		flex: 1;
	}
</style>
