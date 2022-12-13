import { itemsCounterAndTotalPrice } from "../utilities/functions"

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
            return {
                ...state,
                products: [...state.products],
                ...itemsCounterAndTotalPrice(state.products),
                checkout: false
            }
        case "INCREASE":
            //find index of prodcut for increase quantity
            const index = state.products.findIndex(item => item.id === action.payload.id)
            //get clone of products
            const updatedProducts = [...state.products]
            //get clone of product
            const updatedItem = {...updatedProducts[index]}
            //increase product
            updatedItem.quantity++
            updatedProducts[index] = updatedItem
            
            return {
                ...state,
                products: updatedProducts,
                ...itemsCounterAndTotalPrice(updatedProducts),
            }
        case "DECREASE":
            //find index of product for decrease quantity
            const index2 = state.products.findIndex(item => item.id === action.payload.id)
            //get clone of products
            const cloneOfProducts = [...state.products]
            //get clone of product
            const cloneOfproduct = {...cloneOfProducts[index2]}
            //decrease product
            cloneOfproduct.quantity--
            cloneOfProducts[index2] = cloneOfproduct

            return {
                ...state,
                products: cloneOfProducts,
                ...itemsCounterAndTotalPrice(cloneOfProducts)
            }
        case "REMOVE":
            //get new products without this item
            const newProducts = state.products.filter(item => item.id !== action.payload.id)
            return {
                ...state,
                products: [...newProducts],
                ...itemsCounterAndTotalPrice(newProducts),
            }
        case "CHECKOUT":
            return {
                products: [],
                totalPrice: 0, 
                itemsCounter: 0, 
                checkout: true,
            }
        case "CLEAR":
            return {
                products: [],
                totalPrice: 0, 
                itemsCounter: 0, 
                checkout: false,
            }
        default:
            return state
    }
}

export default reducer
