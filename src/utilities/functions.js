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

const sumItems = items => {
    const itemsCounter = items.reduce((total, product) => total + product.quantity, 0);
    let totalPrice = items.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
    return {itemsCounter, totalPrice}
}


export { checkInCart, sumItems }