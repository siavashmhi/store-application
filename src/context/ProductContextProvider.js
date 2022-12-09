import {createContext, useContext, useReducer} from 'react';
import reducer from './productReducer';
const ProductsContext = createContext()
const DispatchProducts = createContext()
const initialState = { products: [], totalPrice: 0}

const ProductContextProvider = ({children}) => {
    const [products, dispatch] = useReducer(reducer, initialState)

    return (
        <ProductsContext.Provider value={products}>
            <DispatchProducts.Provider value={dispatch}>
                {children}
            </DispatchProducts.Provider>
        </ProductsContext.Provider>
    );
};

export default ProductContextProvider;

export const useProducts = () => useContext(ProductsContext)
export const useDispatchProducts = () => useContext(DispatchProducts)