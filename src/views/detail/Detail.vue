<template>
	<div id="detail">
		<DetailNavBar @titleClick="titleClick" ref="detailNav"></DetailNavBar>
		<Scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll">
			<DetailSwiper :topImages="topImages" class="detai-swiper" @imageMore="imageMore"></DetailSwiper>
			<DetailBaseInfo :goods="goods"></DetailBaseInfo>
			<DetailShopInfo :shop="shop"></DetailShopInfo>
			<DetailGoodsInfo :detailinfo="detailinfo" @detailGoodsLoad="detailGoodsLoad"></DetailGoodsInfo>
			<DetailParmsInfo :parmsinfo="parmsinfo" ref="parms"></DetailParmsInfo>
			<DetailCommentInfo :commentInfo="commentInfo" ref="comment"></DetailCommentInfo>
			<GoodsList :goods="recommentd" ref="recomment"></GoodsList>
		</Scroll>
		
		<DetailButtonBar @addCart="addToCart"></DetailButtonBar>
		<BackTop @click.native="BackTop" v-show="isShowBack"></BackTop>
	</div>
</template>

<script>
	
	import {mapActions} from 'vuex'
	
	import {
		getDetail,
		Goods,
		Shop,
		GoodsParms,
		getRecommends
	} from 'network/detail.js'
	import {deuce} from 'common/uts.js'
	import DetailNavBar from './DetailComps/DetailNavBar.vue'
	import DetailSwiper from './DetailComps/DetailSwiper.vue'
	import DetailBaseInfo from './DetailComps/DetailBaseInfo.vue'
	import DetailShopInfo from './DetailComps/DetailShopInfo.vue'
	import DetailGoodsInfo from './DetailComps/DetailGoodsInfo.vue'
	import DetailParmsInfo from './DetailComps/DetailParmsInfo.vue'
	import DetailCommentInfo from './DetailComps/detailCommentInfo.vue'
	import DetailButtonBar from './DetailComps/DetailButtonBar.vue'
	
	import Scroll from 'components/common/scroll/Scroll.vue'
	import GoodsList from 'components/content/goods/GoodsList.vue'
	
	import {itemListenerMixin,backTopMixin} from 'common/mixin.js'
	
	export default {
		name: 'Detail',
		data() {
			return {
				iid: null,
				topImages: [],
				goods: {},
				shop: {},
				detailinfo:{},
				parmsinfo:{},
				commentInfo:{},
				recommentd:[],
				themeTopYs:[],
				getThemeTopY:null,
				currentIndex:0
			}
		},
		mixins:[itemListenerMixin,backTopMixin],
		created() {
			this.iid = this.$route.params.iid
			// console.log(this.$route.params.iid)
			// console.log(this.iid)
			getDetail(this.iid).then(res => {
				// console.log(res)
				// console.log(res.result.itemInfo.topImages)
				const data = res.result;
				this.topImages = data.itemInfo.topImages

				this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

				this.shop = new Shop(data.shopInfo)
				
				this.detailinfo = data.detailInfo
				
				this.parmsinfo = new GoodsParms(data.itemParams.info,data.itemParams.rule)
				
				if(data.rate.cRate !== 0){
					this.commentInfo = data.rate.list[0]
				}			
			}),
			getRecommends().then(res => {
				this.recommentd = res.data.list
				// console.log(this.recommentd)
			})
			
			this.getThemeTopY = deuce(() => {
				this.themeTopYs = []
				this.themeTopYs.push(0)
				this.themeTopYs.push(this.$refs.parms.$el.offsetTop)
				this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
				this.themeTopYs.push(this.$refs.recomment.$el.offsetTop)
				
				this.themeTopYs.push(Number.MAX_VALUE)
				// console.log(this.themeTopYs)
			},200)
		},
		methods: {
			...mapActions(['addCart']),
			imageMore() {
				this.$refs.scroll.scrollrRef();
				// console.log('加载')
			},
			detailGoodsLoad(){
				// this.$refs.scroll.scrollrRef();
				this.newrefresh();
				
				this.getThemeTopY();
			},
			titleClick(index){
				this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],500)
				// console.log(index);
			},
			contentScroll(position){
				const positionYc = Math.abs(position.y)
				// console.log(positionYc)
				const Yclength = this.themeTopYs.length
				// console.log(Yclength)
				
				// for (let i=0; i<Yclength; i++) {
				// 	if(this.currentIndex !== i && (i < Yclength -1 && positionYc > this.themeTopYs[i] && positionYc <= this.themeTopYs[i+1]) || 
				// 	(i === Yclength -1 && positionYc > this.themeTopYs[i])){
				// 		console.log(i)
				// 		this.currentIndex = i
				// 		this.$refs.detailNav.currentIndex = i
				// 	}
				// }
				
				for(let i=0; i<Yclength -1; i++){
					if(this.currentIndex !== i && (positionYc >= this.themeTopYs[i] && positionYc < this.themeTopYs[i+1])){
						this.currentIndex = i
						this.$refs.detailNav.currentIndex = this.currentIndex
					}
				}
				
				this.BackTopShow(position)
				// this.isShowBack = Math.abs(position.y) > 1000
			},
			addToCart(){
				const cartList = {}
				cartList.image = this.topImages[0]
				cartList.title = this.goods.title
				cartList.desc = this.goods.desc
				cartList.price = this.goods.realpPrice
				cartList.iid = this.iid
				
				// 使用Promise方法返回值
				// this.$store.dispatch('addCart',cartList).then(res => {
				// 	console.log(res)
				// })
				this.addCart(cartList).then(res => {
					console.log(res)
					this.$toast.show(res,2000)
				})
			}
		},
		components: {
			DetailNavBar,
			DetailSwiper,
			DetailBaseInfo,
			DetailShopInfo,
			DetailGoodsInfo,
			DetailParmsInfo,
			DetailCommentInfo,
			DetailButtonBar,
			Scroll,
			GoodsList
		},
		mounted() {
			// this.$nextTick(()=>{
			// 	this.themeTopYs = []
			// 	this.themeTopYs.push(0)
			// 	this.themeTopYs.push(this.$refs.parms.$el.offsetTop)
			// 	this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
			// 	this.themeTopYs.push(this.$refs.recomment.$el.offsetTop)
			// 	console.log(this.themeTopYs)
			// })
		},
		destroyed() {
			this.$bus.$off('itemImgLoad',this.itemImgList)
		}
	}
</script>

<style scoped>
	#detail {
		/* padding-top: 44px; */
		position: relative;
		z-index: 999;
		background-color: #FFFFFF;
		height: 100vh;
	}

	/* .detail-nav {
	  position: relative;
	  z-index: 9;
	  background-color: #fff;
	} */

	.content {
		/* height: calc(100% - 44px); */
		overflow: hidden;
		
		position: absolute;
		top: 44px;
		bottom: 57px;
		left: 0;
		right: 0;
	}
</style>
