const reducer = (state, action) => {
    switch(action.type) {
        //add product to cart for the first one
        case "ADD_TO_CART":
            console.log(state);
            if(!state.products.find(item => item.id === action.payload.id)) {
                state.products.push({
                    ...action.payload,
                    quantity: 1,
                })
            }
            return {...state, products: [...state.products]}
        case "INCREASE":
            console.log(state);
            //find index of prodcut for increase quantity
            const index = state.products.findIndex(item => item.id === action.payload.id)
            //get clone of products
            const updatedProducts = [...state.products]
            //get clone of product
            const updatedItem = {...updatedProducts[index]}
            //increase product
            updatedItem.quantity++
            updatedProducts[index] = updatedItem
            
            return {...state, products: updatedProducts}

        default:
            return state
    }
}

export default reducer