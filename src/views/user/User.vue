<template>
	<div class="user">
		<NavBar class="navbar"><div slot="center">我的</div></NavBar>
		<UserInfo></UserInfo>
		
		<section class="account">
		  <div class="account-item">
		    <div class="number">
		      <span class="balance">0.00</span>元
		    </div>
		    <div class="account-info">我的余额</div>
		  </div>
		  <div class="account-item">
		    <div class="number">
		      <span class="balance">0</span>个
		    </div>
		    <div class="account-info">我的优惠</div>
		  </div>
		  <div class="account-item">
		    <div class="number">
		      <span class="balance">0</span>分
		    </div>
		    <div class="account-info">我的积分</div>
		  </div>
		</section>
		<div class="bottom-list">
			<div v-for="item in orderList" class="list-item">{{item.info}}</div>
		</div>
		<div>
			<div v-for="item in serviceList" class="list-item">{{item.info}}</div>
		</div>
	</div>
</template>

<script>
	import NavBar from 'components/common/navbar/NavBar.vue'
	import UserInfo from './childComps/UserInfo.vue'
	export default{
		name:'User',
		components:{
			NavBar,
			UserInfo
		},
		data(){
			return{
				orderList: [
				  {info: '我的消息'},
				  {info: '积分商城'},
				  {info: '会员卡'},
				],
				serviceList: [
				  {info: '我的购物车'},
				  {info: '下载购物APP'},
				]
			}
		}
	}
</script>

<style scoped>
	.user{
		height: 100vh;
		padding-top: 49px;
	}
	.navbar{
		background-color: var(--color-tint);
		color: white;
	}
	
	.account {
	  display: flex;
	  border-bottom: 10px solid #F2F5F8;
	}
	
	.account-item {
	  width: 100%;
	  background-color: #fff;
	  margin-right: 1px;
	  text-align: center;
	}
	
	.account-item:last-of-type {
	  margin-right: 0;
	}
	
	.account-item {
	  color: #666;
	  font-size: 13px;
	  padding: 18px;
	}
	
	.account-item .balance {
	  font-size: 24px;
	  font-weight: 700;
	  color: #ff5f3e;
	}
	
	.account-info {
	  margin-top: 6px;
	}
	
	.order-list, .service-list {
	  margin-top: 12px;
	}
	
	.bottom-list{
		border-bottom: 10px solid #F2F5F8;
	}
	.list-item{
		margin: 0 10px 0 10px;
		height: 35px;
		line-height: 35px;
		border-bottom: 1px solid #F2F5F8;
		font-size: 14px;
	}
</style>
