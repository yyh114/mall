<template>
	<div id="home">
		<nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
		<TabCont :titles='["流行","新款","精选"]' class="tab-cont tab-cont1" @tabClick="tabClick" ref="tabControl1" v-show="isfixed"/>
		<Scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll" :pull-up-load="true" @pullingUp="loadMore">
		<HomeSwiper :banners='banner' @swiperImageLoad="swiperImageLoad"></HomeSwiper>
		<RecommendView :recommend="recommend"></RecommendView>
		<FeatureView></FeatureView>
		
		<TabCont :titles='["流行","新款","精选"]' class="tab-cont" @tabClick="tabClick" ref="tabControl2" v-show="!isfixed"/>
		<GoodsList :goods="UpcurrentIndex"></GoodsList>
		</Scroll>
		

		<BackTop @click.native="BackTop" v-show="isShowBack"></BackTop>
	</div>
</template>

<script>
	
	import HomeSwiper from './childComps/HomeSwiper.vue'
	import RecommendView from './childComps/RecommendView.vue'
	import FeatureView from './childComps/FeatureView.vue'
	
	import NavBar from 'components/common/navbar/NavBar.vue'
	import TabCont from 'components/content/tabCont/TabCont.vue'
	import GoodsList from 'components/content/goods/GoodsList.vue'
	import Scroll from 'components/common/scroll/Scroll.vue'
	
	
	import {getHomeMultidata,getHomeGoods} from 'network/home.js'
	import {itemListenerMixin,backTopMixin} from 'common/mixin.js'
	export default{
		name:'Home',
		data(){
			return{
				banner:[],
				recommend:[],
				goods:{
					'pop':{page:0,list:[]},
					'new':{page:0,list:[]},
					'sell':{page:0,list:[]}
				},
				currentType:'pop',
				tabOffsetTop:0,
				isfixed:false,
				savaY:0
			}
		},
		mixins:[itemListenerMixin,backTopMixin],
		components:{
			HomeSwiper,
			RecommendView,
			FeatureView,
			NavBar,
			TabCont,
			GoodsList,
			Scroll
		},
		created() {
			this.getHomeMultidata()
			
			this.getHomeGoods('pop')
			this.getHomeGoods('new')
			this.getHomeGoods('sell')
		},
		mounted() {
		},
		computed:{
			UpcurrentIndex(){
				return this.goods[this.currentType].list
			}
		},
		methods:{
			tabClick(index){
				switch(index){
					case 0:
					this.currentType = 'pop'
					break
					case 1:
					this.currentType = 'new'
					break
					case 2:
					this.currentType = 'sell'
				}
				this.$refs.tabControl1.currentIndex = index;
				this.$refs.tabControl2.currentIndex = index;
			},
			loadMore(){
				this.getHomeGoods(this.currentType)
			},
			getHomeMultidata(){
				// 123
				getHomeMultidata().then(res => {
					this.banner = res.data.banner.list;
					this.recommend = res.data.recommend.list;
				})
			},
			
			getHomeGoods(type) {
			  const page = this.goods[type].page + 1
			  getHomeGoods(type, page).then(res => {
				  // console.log(res);
			    this.goods[type].list.push(...res.data.list)
			    this.goods[type].page += 1
			
			    // 完成上拉加载更多
			    this.$refs.scroll.finishPullUp()
			  })
			},
			contentScroll(position){
				// this.isShowBack = Math.abs(position.y) > 1000
				this.BackTopShow(position)
				// console.log(position.y);
				this.isfixed = Math.abs(position.y)>this.tabOffsetTop
			},
			swiperImageLoad(){
				this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
				// console.log(this.tabOffsetTop);
			}		
		},
		activated() {
			this.$refs.scroll.scrollTo(0,this.savaY,0);
			this.$refs.scroll.scrollrRef();
		},
		deactivated() {
			this.savaY = this.$refs.scroll.getScrollY();
			
			this.$bus.$off('itemImgLoad',this.itemImgList)
		}
		
	}
</script>

<style scoped>
	#home{
		/* padding-top: 44px; */
	/* 	padding-bottom: 49px; */
	height: 100vh;
	position: relative;
	}
	.home-nav{
		background-color: var(--color-tint);
		color: #FFFFFF;
	}
	.content{
	/* 	height: calc(100% - 83px);
		overflow: hidden; */
		
		/* position: absolute;
		top: 44px;
		bottom: 49px;
		left: 0;
		right: 0; */
		overflow: hidden;
		
		position: absolute;
		top: 44px;
		bottom: 49px;
		left: 0;
		right: 0;
	}
	.tab-cont{
		/* background-color: white; */
		position: relative;
		z-index: 9999;
	}
	.tab-cont1{
		margin-top: 44px;
	}
</style>
