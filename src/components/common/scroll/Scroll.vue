<template>
	<div class="wrapper" ref="warpper">
		<div class="content">
			<slot></slot>	
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	export default{
		name:'Scroll',
		props:{
			probeType:{
				type:Number,
				default:0
			},
			pullUpLoad:{
				type:Boolean,
				default:true
			}
		},
		data(){
			return{
				scroll:null
			}
		},
		mounted() {
			// console.log(this.pullUpLoad);
	
				this.scroll = new BScroll(this.$refs.warpper,{
					probeType:this.probeType,
					pullUpLoad:this.pullUpLoad,
					click:true
				})
				// console.log(this.scroll);
				this.scroll.on('scroll',(position)=>{
					this.$emit('scroll',position)
				})
				
				this.scroll.on('pullingUp',()=>{
					this.$emit('pullingUp')
				})
				
			
		},
		methods:{
			scrollTo(x,y,time){
				this.scroll && this.scroll.scrollTo(x,y,time);
			},
			scrollrRef(){
				this.scroll && this.scroll.refresh();
				// console.log('121212')
			},
			finishPullUp(){
				this.scroll && this.scroll.finishPullUp();
			},
			getScrollY(){
				return this.scroll ? this.scroll.y : 0
			}
		}
	}
</script>

<style scoped>
	
</style>
