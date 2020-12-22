<template>
	<div class="tab-content">
		<div v-for="item in catevalue.list" class="tab-item">
			<img :src="item.image" @load="imgLoad"/>
			<p>{{item.title}}</p>
		</div>
	</div>
</template>

<script>
	export default{
		name:'TabContent',
		props:{
			catevalue:{
				type:Object,
				default(){
					return {}
				}
			}
		},
		mounted(){
			// console.log(this.subcategories)
		},
		methods:{
			imgLoad(){
				this.$emit('imgLoad')
			}
		}
	}
</script>

<style scoped>
	img{
		width: 45px;
		height: 45px;
	}
	.tab-content{
		display: flex;
		flex-wrap: wrap;
	}
	.tab-item{
		padding: 10px;
		text-align: center;
		color: #999;
		flex: 33%;
	}
</style>
