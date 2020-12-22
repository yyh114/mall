<template>
	<div class="base-info">
		<div class="info-title">
			{{goods.title}}
		</div>
		<div class="info-price">
			<span class="new-price">
				{{goods.newPrice}}
			</span>
			<span class="old-price">
				{{goods.oldPrice}}
			</span>
			<span class="disc">
				{{goods.discount}}
			</span>
		</div>
		<div class="col" v-if="goods.columns">
			<span>{{goods.columns[0]}}</span>
			<span>{{goods.columns[1]}}</span>
			<span>{{goods.services[goods.services.length-1].name}}</span>
		</div>
		<div class="info-services" v-if="goods.services">
			<span class="services-item"  v-for="index in goods.services.length-1" :key="index">
				<img :src="goods.services[index-1].icon" alt="">
				<span>{{goods.services[index-1].name}}</span>
			</span>
		</div>
	</div>
</template>

<script>
	export default{
		name:'DetailBaseInfo',
		props:{
			goods:{
				type:Object,
				default(){
					return {}
				}
			}
		}
	}
</script>

<style scoped>
	.base-info{
		margin-top: 15px;
		color: #999;
		padding: 0 8px;
		border-bottom: 5px solid #f2f5f8;
	}
	.info-title{
		color: #222;
	}
	.info-price{
		margin-top: 10px;
	}
	.info-price .new-price{
		font-size: 24px;
		color: var(--color-high-text);
	}
	.info-price .old-price{
		font-size: 13px;
		margin-left: 5px;
		text-decoration: line-through;
	}
	.info-price .disc{
		font-size: 12px;
		padding: 2px 8px;
		color: #fff;
		background-color: var(--color-high-text);
		border-radius: 8px;
		margin-left: 5px;
		
		position: relative;
		top: -8px;
	}
	.col{
		display: flex;
		justify-content: space-between;
		font-size: 13px;
		margin-top: 15px;
		line-height: 30px;
		border-bottom: 1px solid rgba(100,100,100,0.1);
	}
	.info-services{
		display: flex;
		justify-content: space-between;
		line-height: 60px;
	}
	.info-services img{
		width: 14px;
		height: 14px;
		position: relative;
		top: 2px;
	}
	.info-services span{
		font-size: 13px;
		color: #333;
	}
</style>
