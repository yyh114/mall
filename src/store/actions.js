export default {
		addCart(context,payload){
			return new Promise((resolve,reject) =>{
				let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
				
				if(oldProduct){
					context.commit('addCountr',oldProduct)
					resolve('商品数量+1')
				}else{
					context.commit('addToCart',payload)
					resolve('添加商品成功')
				}
			})
		}
	}