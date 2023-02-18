import { useContext } from 'react'

import './shop.scss'

import { ProductContext } from '../../context/products.context'

import ProductCard from '../../components/product-card/product-card'

export default function Shop() {

    const {products} = useContext(ProductContext)

  return (
    <div className='section-container products-container'>
        {products.map((product) => (
            <ProductCard key={product.id} product={product} />
        ))}
    </div>
  )
}