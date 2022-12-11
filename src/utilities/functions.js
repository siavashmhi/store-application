function checkInCart(cart, product) {
    if(cart.products) {
        const check = cart.products.findIndex(c => c.id === product.id)
        if(check < 0) {
            return false
        } else {
            return true
        }
    }
} 


export { checkInCart }