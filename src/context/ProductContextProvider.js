import {createContext, useContext, useReducer} from 'react';
import { initialState, reducer} from './productReducer';
const ProductsContext = createContext()
const DispatchProducts = createContext()

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
export const useDispatch = () => useContext(DispatchProducts)