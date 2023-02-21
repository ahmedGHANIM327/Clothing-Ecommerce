import { useParams } from "react-router-dom";

import { useContext, useEffect ,useState} from "react";

import { CategoriesContext } from "../../context/categories.context";

import ProductCard from "../product-card/product-card";

import './category-shop.scss'

const Category = () => {
    const {category} = useParams();

    const {categoriesMap} = useContext(CategoriesContext);
    //console.log(categoriesMap)

    const [categoryProducts, setCategoryProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setCategoryProducts(categoriesMap[category])
    } ,[category,categoriesMap])

    return (
        <div className="section-container">
            <h1>{category.toUpperCase()}</h1>
            <div className="category-products">
                {categoryProducts && categoryProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )

}

export default Category;