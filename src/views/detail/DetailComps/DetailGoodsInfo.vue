<template>
	<div class="goods-info" v-if="Object.keys(detailinfo).length !== 0">
		
		<div class="info-desc clear-fix">
			<div class="start"></div>
			<div class="desc">
				{{detailinfo.desc}}
			</div>
			<div class="end"></div>
		</div>
		
		<div class="info-key" v-if="detailinfo.detailImage">
			{{detailinfo.detailImage[0].key}}
		</div>
		
		<div class="info-list" v-if="detailinfo.detailImage">
			<img v-for="(itme,index) in detailinfo.detailImage[0].list" :key="index" :src="itme" @load="imageLoad"/>
		</div>
	</div>
</template>

<script>
	export default {
		name:'DetailGoodsInfo',
		props:{
			detailinfo:{
				type:Object,
				default(){
					return {}
				}
			}
		},
		data(){
			return{
				counter:0,
				imagesLength:0
			}
		},
		watch:{
			// detailImage(){
			// 	this.imagesLength = this.detailinfo.detailImage[0].list.length;
			// }
		},
		methods:{
			// imageLoad(){
			// 	if(++this.counter === this.imagesLength){
			// 		this.$emit('imageLoad')
			// 	}
			// }
			imageLoad(){
				this.$emit('detailGoodsLoad')
				// console.log('111')
			}
		}
	}
</script>

<style scoped>
.goods-info{
	padding: 20px 0;
	border-bottom: 5px solid #f2f5f8;
}
.info-desc{
	padding: 0 15px;
}
.info-desc .start,.info-desc .end{
	width: 90px;
	height: 1px;
	background-color: #a3a3a5;
	position: relative;
}
.start{
	float: left;
}
.end{
	float: right;
}
.info-desc .start::before,.info-desc .end::after{
	content: "";
	position: absolute;
	width: 5;
	height: 5px;
	background-color: #333;
	bottom: 0px;
}
.info-desc .end::after{
	right: 0;
}
.info .start{
	padding: 15px 0;
	font-size: 14px;
}
.info-key{
	margin: 10px 0 10px 15px;
	color: #333;
	font-size: 15px;
}
.info-list img{
	width: 100%;
}
</style>