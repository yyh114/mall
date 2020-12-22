<template>
	<div class="recommend">
		<div v-for="item in recommend" class="recommend-item">
			<a :href="item.link">
				<img :src="item.image"/>
				<div>{{item.title}}</div>
			</a>
		</div>
	</div>
</template>

<script>
	export default{
		name:'RecommonView',
		props:{
			recommend:{
				type:Array,
				default(){
					return []
				}
			}
		}
	}
</script>

<style scoped>
	.recommend{
		display: flex;
		text-align: center;
		border-bottom: 10px solid #eee;
		padding: 10px 0 20px 0;
	}
	.recommend-item{
		flex: 1;
		font-size: 12px;
	}
	.recommend-item img{
		width: 70px;
		height: 70px;
		margin-bottom: 10px;
	}
</style>
