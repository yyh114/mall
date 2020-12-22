<template>
	<div id="detail-navbar">
		<NavBar class="detail-navbar">
			<div slot="left" class="title-back" @click="backClick">
				<img src="~assets/img/common/back.svg" alt="">
			</div>
			<div slot="center" class="title">
				<div class="title-item" v-for="(item,index) in titles"
				 :class="{'active':index === currentIndex}" @click="itemClick(index)">
					{{item}}
				</div>
			</div>
		</NavBar>
	</div>
</template>

<script>
	
	import NavBar from 'components/common/navbar/NavBar.vue'
	
	export default{
		name:'DetaiNavBar',
		data(){
			return{
				titles:['商品','参数','评论','推荐'],
				currentIndex:0
			}
		},
		components:{
			NavBar
		},
		methods:{
			backClick(){
				// this.$router.go(-1);
				this.$router.back();
			},
			itemClick(index){
				this.currentIndex = index
				this.$emit('titleClick',index)
			}
		}
	}
</script>

<style scoped>
	.detail-navbar{
		background-color: #FFFFFF;
	}
	.title{
		display: flex;
	}
	.title-item{
		flex: 1;
		font-size: 14px;
		text-align: center;
	}
	.title-back img{
		margin-top: 13px;
	}
	.active{
		color: var(--color-high-text);
	}
</style>
