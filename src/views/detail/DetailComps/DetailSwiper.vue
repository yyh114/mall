<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="item in topImages">
		<a href="www.yyh114.com">
      <img :src="item" alt="" @load="imageMore">
	  </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'

  export default {
    name: "DetailSwiper",
    components: {
      Swiper,
      SwiperItem
    },
	data(){
		return{
			isImageLoad:false
		}
	},
    props: {
      topImages: {
        type: Array,
        default() {
          return []
        }
      }
    },
	methods:{
		imageMore(){
			if(!this.isImageLoad){
				this.$emit('imageMore')
				// 不能多加载
				this.isImageLoad = true
			}
		}
	}
  }
</script>

<style scoped>
  .detail-swiper {
    height: 300px;
    overflow: hidden;
  }
</style>