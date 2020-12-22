import Toast from './Toast.vue'
const obj = {
	
}

obj.install=function(Vue){
	const toastControl = Vue.extend(Toast);
	const toast = new toastControl();
	toast.$mount(document.createElement('div'));
	document.body.appendChild(toast.$el);
	Vue.prototype.$toast = toast;
}


export default obj