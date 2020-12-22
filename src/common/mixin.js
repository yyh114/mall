import {
	deuce
} from 'common/uts.js'
import BackTop from 'components/content/backTop/BackTop.vue'
export const itemListenerMixin = {
	data() {
		return {
			itemImgList: null,
			newrefresh: null
		}
	},
	mounted() {
		this.newrefresh = deuce(this.$refs.scroll.scrollrRef, 50)
		this.itemImgList = () => {
			this.newrefresh()
			// console.log('1111')
		}
		this.$bus.$on('itemImgLoad', this.itemImgList)

	}
}

export const backTopMixin = {
	data() {
		return {
			isShowBack: false,
		}
	},
	components:{
		BackTop
	},
	methods:{
		BackTop(){
			// this.$refs.scroll.scroll.scrollTo(0,0,500);
			this.$refs.scroll.scrollTo(0,0,500);
		},
		BackTopShow(position){
			this.isShowBack = Math.abs(position.y) > 1000
		}
	}
}
