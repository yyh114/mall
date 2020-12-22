<template>
	<div class="toast" v-if="isShow">
		<div class="toast-text">
			{{messge}}
		</div>
	</div>
</template>

<script>
	export default{
		name:'toast',
		data(){
			return{
				messge:'',
				isShow:false
			}
		},
		methods:{
			show(messge,duration=500){
				this.messge = messge
				this.isShow = true
				
				setTimeout(() => {
					this.messge = ''
					this.isShow = false
				},duration)
			}
		}
	}
</script>

<style scoped>
	.toast{
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		
		padding: 8px 12px;
		border-radius: 18px;
		z-index: 9999;
		color: white;
		background-color: rgba(0,0,0,0.8);
	}
</style>
