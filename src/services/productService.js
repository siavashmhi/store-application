import http from "./httpService";

const getProductsFromDb = () => {
    return http.get('/product')
}

export default getProductsFromDb