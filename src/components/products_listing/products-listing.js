import './products-listing.scss'

import ProductCard from '../product-card/product-card'

const ProductsListing = ({products}) => {

    return (
        <div className='products_listing_container'>
            <div className='products_header'>
                <h4>{products.length} PRODUCTS</h4>
            </div>
            <div className='products_listing'>
                {products && products.map((item) => {
                    return <ProductCard key={item.id} product={item} />
                })}
            </div>
        </div>
        
    )
}

export default ProductsListing