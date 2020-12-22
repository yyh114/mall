export default {
		// addCartList(state,payload){
		// 	第一种方法
		// 	let oldproduce = null
		// 	for(let item of state.cartList){
		// 		if(item.iid === payload.iid){
		// 			oldproduce = item
		// 		}
		// 	}
			
		// 	if(oldproduce){
		// 		oldproduce.count += 1
		// 	}else{
		// 		payload.count = 1
		// 		state.cartList.push(payload)
		// 	}		
		// 	let oldProduct = state.cartList.find(item => item.iid === payload.iid)
			
		// 	if(oldProduct){
		// 		oldProduct.count += 1
		// 	}else{
		// 		payload.count = 1
		// 		state.cartList.push(payload)
		// 	}
		// }
		addCountr(state,oldProduct){
			oldProduct.count += 1
		},
		addToCart(state,payload){
			payload.count = 1
			payload.checked = true
			state.cartList.push(payload)
		}
	}