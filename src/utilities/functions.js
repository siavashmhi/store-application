import trashIcon from '../assets/images/trash.svg'
import { NavLink } from 'react-router-dom'

//check product in cart
function checkInCart(products, product) {
    if(products) {
        const check = products.findIndex(c => c.id === product.id)
        if(check < 0) {
            return false
        } else {
            return true
        }
    }
} 

//for calculate count of products and total price in cart
const itemsCounterAndTotalPrice = items => {
    const itemsCounter = items.reduce((total, product) => total + product.quantity, 0);
    let totalPrice = items.reduce((total, product) => total + (product.price * product.quantity), 0).toFixed(2);
    return {itemsCounter, totalPrice}
}

//for render products in map function in cart component
const renderProductsInCart = (item, dispatch) => {
    return (
        <div key={item.id} className='productItem'> 
            <div className='productImage'>
                <img src={item.image} alt="img"/>
            </div>
            <div className="productDesc">
                <p>{item.name}</p>
                <span>$ {item.price * item.quantity}</span>
            </div>
            <div className='productBtnContainer'>
                {
                    item.quantity > 1 ? 
                    <button onClick={() => dispatch({type: "DECREASE", payload: item})}>-</button> 
                    : <button onClick={() => dispatch({type: "REMOVE", payload: item})}>
                        <img src={trashIcon} alt="icon" style={{width: "20px"}}/>
                    </button>
                    
                }
                <button>{item.quantity}</button>
                <button onClick={() => dispatch({type: "INCREASE", payload: item})}>+</button>
            </div>
        </div>
    )
}

export { checkInCart, itemsCounterAndTotalPrice, renderProductsInCart }