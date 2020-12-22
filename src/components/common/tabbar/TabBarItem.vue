<template>
	<div class="item" @click="itemClick">
		<div v-if="!isActive"><slot name="item-icon"></slot></div>
		<div v-else><slot name="item-icon-active"></slot></div>
		<div :style="isColor"><slot name="item-name"></slot></div>
	</div>
</template>

<script>
	export default{
		name:'TabBarItem',
		props:{
			link:String,
			activeColor:{
				type:String,
				default:'#d81e06'
			}
		},
		data(){
			return{
				
			}
		},
		computed:{
			isActive(){
				return this.$route.path.indexOf(this.link) !== -1
			},
			isColor(){
				return this.isActive ? {color:this.activeColor} : {}
			}
		},
		methods:{
			itemClick(){
				this.$router.push(this.link)
			}
		}
	}
</script>

<style scoped>
	.item{
		flex: 1;
		text-align: center;
		padding-top: 2px;
	}
	.item img{
		height: 24px;
		width: 24px;
	}
	.active{
		color: #d81e06;
	}
</style>
