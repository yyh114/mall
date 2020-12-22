<template>
	<div class="category">
		<NavBar class="nav-bar"><div slot="center">分类</div></NavBar>
		<div class="content">
			<TabMenu :categories="categories"@seleItem="seleItem"></TabMenu>
			<Scroll id="tab-content" ref="scroll">
				
				<div>
					<TabContent :catevalue="categoryData[0].subcategories" @imgLoad="imgLoad"></TabContent>
				</div>
				
			</Scroll>
		</div>
	</div>
</template>

<script>
	import NavBar from 'components/common/navbar/NavBar.vue'
	import TabMenu from './childComps/TabMenu.vue'
	import TabContent from './childComps/TabContent.vue'
	import Scroll from 'components/common/scroll/Scroll.vue'
		
		
	import {getCateGory,getSubcategory} from 'network/category.js'
	export default{
		name:'Category',
		created() {
			this.setcategory()
			this.$nextTick(() => {
				console.log(this.categoryData)
			})
		},
		data(){
			return{
				categories:[],
				categoryData:{
				},
				currentIndex:0
			}
		},
		components:{
			NavBar,
			TabMenu,
			TabContent,
			Scroll
		},
		methods:{
			setcategory(){
				getCateGory().then(res => {
					console.log(res)
					this.categories = res.data.category.list
					
					for(let i=0;i<this.categories.length;i++){
						this.categoryData[i]={
							subcategories: {}
						}
					}
					
					this.setsubcategory(0)
				})
			},
			seleItem(index){
				this.setsubcategory(index);
			},
			setsubcategory(index) {
			  this.currentIndex = index;
			  const mailKey = this.categories[index].maitKey;
			  getSubcategory(mailKey).then(res => {
			    this.categoryData[index].subcategories = res.data
				this.categoryData = {...this.categoryData}
				// console.log(this.categoryData)
			  })
			},
			imgLoad(){
				this.$refs.scroll.scrollrRef()
			}
		}
	}
</script>

<style scoped>
	.category{
		height: 100vh;
	}
	.nav-bar{
		background-color: var(--color-tint);
		color: white;
	}
	.content{
		position: absolute;
		top: 44px;
		bottom: 49px;
		left: 0;
		right: 0;
		
		display: flex;
	}
	#tab-content {
	  height: 100%;
	  flex: 1;
	}
</style>
