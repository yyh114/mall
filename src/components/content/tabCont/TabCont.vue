<template>
	<div class="tab-cont">
		<div class="tab-cont-item" v-for="(item,index) in titles" 
		:class="{active:index === currentIndex}" @click="tabClick(index)">
			<span>{{item}}</span>
		</div>
	</div>
</template>

<script>
	export default{
		name:"tabCont",
		props:{
			titles:{
				type:Array,
				default(){
					return []
				}
			}
		},
		data(){
			return{
				currentIndex:0
			}
		},
		methods:{
			tabClick(index){
				this.currentIndex = index
				this.$emit('tabClick',index)
			}
		}
	}
</script>

<style scoped>
	.tab-cont{
		display: flex;
		height: 40px;
		line-height: 40px;
		text-align: center;
		font-size: 14px;
		background-color: white;
		
		z-index: 9998;
	}
	.tab-cont-item{
		flex: 1;
	}
	.tab-cont-item span{
		padding: 5px;
	}
	.active{
		color: var(--color-high-text);
	}
	.active span{
		border-bottom: 2px solid var(--color-tint);
	}
</style>
