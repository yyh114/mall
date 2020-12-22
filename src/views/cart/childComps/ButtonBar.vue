<template>
	<div class="buttom-ment">
		<div class="buttom-content">
			<CheckButton :is-active="isSelectAll" class="buttom-check" @click.native="CheckButton"></CheckButton>
			<span>全选</span>
		</div>
		<span class="price">
			合计:{{totalPrice}}
		</span>
		<span class="price-length" @click="totalClick">
			去计算({{totalLength}})
		</span>
	</div>
</template>

<script>
	import CheckButton from './CheckButton.vue'
	import {mapGetters} from 'vuex'
	export default{
		name:'ButtonBar',
		components:{
			CheckButton
		},
		computed:{
			...mapGetters(['cartList']),
			totalPrice(){
				return this.cartList.filter(item => {
					return item.checked
				}).reduce((preValue,item) => {
					return preValue + item.price * item.count
				},0).toFixed(2)
			},
			totalLength(){
				return this.cartList.filter(item => {
					return item.checked
				}).length
			},
			isSelectAll(){
				// 使用filter函数判断,但是当数组没有数据时 默认值为0,取反后则默认全选状态,所以不合理
				// return !(this.cartList.filter(item => !item.checked).length)
				
				// find函数返回 true或者false
				// return !this.cartList.find(item => !item.checked)
				
				// 当cartList等于0时,全选按钮等于false
				if(this.cartList.length === 0) return false
				// item等于cartList的每一个元素,当有item的checked属性为false的时候,全选按钮等于false
				// 否则,全选按钮等于ture
				for(let item of this.cartList){
					if(!item.checked){
						return false
					}
				}
				return true
			}
		},
		methods:{
			CheckButton(){
				// 当this.isSelectAll符合判断条件时,则说明cartList全部为true,所以直接取反即可
				if(this.isSelectAll){
					this.cartList.forEach(item => item.checked = false)
				}else{
					// 当else触发时,说明cartList有未被选择的,所以forEach直接设置值等于true即可
					this.cartList.forEach(item => item.checked = true)
				}
			},
			totalClick(){
				if(!this.isSelectAll){
					this.$toast.show('购物车空空如也...',2000)
				}
			}
		}
		
	}
</script>

<style scoped>
	.buttom-ment{
		position: fixed;
		bottom: 49px;
		width: 100%;
		height: 44px;
		line-height: 44px;
		background-color: #E9E9E9;
		display: flex;
	}
	.buttom-content{
		display: flex;
		align-items: center;
	}
	.buttom-check{
		width: 20px;
		height: 20px;
		line-height: 20px;
		margin: 0 5px 0 10px;
	}
	.price{
		color: #666;
		font-size: 16px;
		margin-left: 15px;
		flex: 1;
	}
	.price-length{
		background-color: orange;
		color: #fff;
		float: right;
		width: 100px;
		text-align: center;
	}
</style>
