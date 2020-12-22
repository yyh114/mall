<template>
	<scroll id="tab-menu" ref="scroll">
		<div class="menu-list">
			<div class="menu-list-item" v-for="(item,index) in categories"
			 :key="index" :class="{'active':index === currentIndex}" @click="itemClick(index)">
				{{item.title}}
			</div>
		</div>
	</scroll>
</template>

<script>
	import scroll from 'components/common/scroll/Scroll.vue'
	export default{
		name:'TabMenu',
		mounted() {
		},
		data(){
			return{
				currentIndex:0
			}
		},
		props:{
			categories:{
				type:Array
			}
		},
		components:{
			scroll
		},
		watch:{
			categories:{
				handler(n,o){
					if(n !== o){
						this.$nextTick(() => {
							this.$refs.scroll.scrollrRef()
						})
					}
				},
				deep:true,
				immediate: true
			}
		},
		methods:{
			itemClick(index){
				this.currentIndex = index
				this.$emit('seleItem',index)
			}
		}
	}
</script>

<style scoped>
	#tab-menu{
		background-color: #f6f6f6;
		height: 100%;
		width: 100px;
		box-sizing: border-box;
		
	}
	.menu-list-item{
		height: 45px;
		line-height: 45px;
		text-align: center;
		font-size: 14px;
		/* background-color: red; */
	}
	.active{
		font-weight: 700;
		color: var(--color-high-text);
		background-color: #fff;
		border-left: 3px solid var(--color-high-text);
	}
</style>
