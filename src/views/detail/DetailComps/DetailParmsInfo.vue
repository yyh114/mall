<template>
	<div class="param-info" v-if="parmsinfo.length !== 0">
		<table v-for="(item,index) in parmsinfo.tables" :key="index" class="info-size">
			<tr v-for="(tr,inder) in item" :key="inder">
				<td v-for="(td,inded) in tr" :key="inded">{{td}}</td>
			</tr>
		</table>
		<table class="info-param">
			<tr v-for="(item,index) in parmsinfo.set" :key="index">
				<td class="param-key">{{item.key}}</td>
				<td class="info-value">{{item.value}}</td>
			</tr>
		</table>
		<div class="info-img" v-if="parmsinfo.image">
			<img :src="parmsinfo.image[0]"/>
		</div>
	</div>
</template>

<script>
	export default{
		name:'DetailParmsInfo',
		props:{
			parmsinfo:{
				type:Object,
				default(){
					return {}
				}
			}
		}
	}
</script>

<style scoped>
	.param-info{
		padding: 20px 15px;
		font-size: 14px;
		border-bottom: 5px solid #F2F5F8;
	}
	.param-info table{
		width: 100%;
		border-collapse: collapse;
		
	}
	.param-info table tr{
		height: 42px;
	}
	.param-info table tr td{
		border-bottom: 1px solid rgba(100,100,100,0.1);
	}
	.param-key{
		width: 95px;
	}
	.info-param{
		border-top: 1px solid rgba(0,0,0,0.1);
	}
	.info-value{
		color: #ed4868;
	}
	.info-img img{
		width: 100%;
	}
</style>
