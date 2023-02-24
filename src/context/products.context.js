import { createContext, useState ,useEffect} from "react";

import { getProducts } from "../utils/firebase/firebase";

export const ProductsContext = createContext({
    productsMap: []
});

export const ProductsProvider = ({children}) => {
    const [productsMap,setProductsMap] = useState([])

    useEffect(() => {
        const getProductsMap = async () => {
            const productMap = await getProducts();
            setProductsMap(Object.values(productMap))
            console.log(productsMap);
        }
        getProductsMap();
    },[])

    const value = {productsMap}
    return (
        <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    )
}