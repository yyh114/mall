<template>
	<div id="cart-item">
		<div class="select">
			<CheckButton :isActive="cartList.checked" @click.native="checkClick"></CheckButton>
		</div>
		<div class="item-img">
			<img :src="cartList.image"/>
		</div>
		<div class="item-info">
			<div class="info-title">{{cartList.title}}</div>
			<div class="info-desc">商品描述:{{cartList.desc}}</div>
			<div class="info-bottom">
				<div class="info-price left">${{cartList.price}}</div>
				<div class="info-count right">x{{cartList.count}}</div>
			</div>
		</div>
	</div>
</template>

<script>
	
	import CheckButton from './CheckButton.vue'
	
	export default{
		name:'CartItem',
		props:{
			cartList:{
				type:Object,
				default(){
					return {}
				}
			}
		},
		components:{
			CheckButton
		},
		methods:{
			checkClick(){
				this.cartList.checked = !this.cartList.checked
			}
		}
	}
</script>

<style scoped>
	#cart-item{
		width: 100%;
		display: flex;
		font-size: 0px;
		padding: 5px;
		border-bottom: 1px solid #ccc;
	}
	.select{
		width: 14%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.info-title, .info-desc{
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.item-img{
		padding: 5px;
	}
	.item-img img{
		width: 80px;
		height: 100px;
		display: block;
		border-radius: 5px;
	}
	.item-info{
		font-size: 17px;
		color: #333;
		padding: 5px 10px;
		position: relative;
		overflow: hidden;
	}
	.item-info .info-desc{
		font-size: 14px;
		color: #666;
		margin-top: 15px;
	}
	.info-bottom{
		margin-top: 10px;
		position: absolute;
		bottom: 10px;
		left: 10px;
		right: 10px;
	}
	.info-bottom .info-price{
		color: orangered;
	}
</style>
