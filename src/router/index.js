import Vue from 'vue'
import VueRouter from 'vue-router'
 
 Vue.use(VueRouter)
 
 const routes = [
	 {
		path:'',
		redirect:'/home'
	 },
	 {
		 path:'/home',
		 component:() => import('../views/home/Home.vue')
	 },
	 {
		 path:'/cart',
		 component:() => import('../views/cart/Cart.vue')
	 },
	 {
		 path:'/category',
		 component:() => import('../views/category/Category.vue')
	 },
	 {
		 path:'/user',
		 component:() => import('../views/user/User.vue')
	 },
	 {
		 path:'/detail/:iid',
		 component:() => import('../views/detail/Detail.vue')
	 }
 ]
 const router = new VueRouter({
	 routes,
	 mode:'history'
 })
 
 export default router
 