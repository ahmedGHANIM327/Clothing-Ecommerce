// CSS & Material-UI
import './shop-preview.scss'
import { Grid } from '@mui/material'

// React Hooks
import { useContext , useEffect, useState } from 'react';

// Contexts
import { ProductsContext } from '../../context/products.context';

// Components
import PageTitle from '../../components/page-title/page-title'
import ProductsListing from '../../components/products_listing/products-listing';
import ShopFilters from '../../components/shop-filters/shop-filters';

const ShopPreview = () => {

    // All products
    const {productsMap} = useContext(ProductsContext)

    // Filterable products
    const [filterableProducts,setFilterableProducts] = useState(productsMap);

    // Categories Filter
    const [categorieValue, setCategorieValue] = useState('all');
    const onChangeCategorie = async (event) => {
        const currentCat = event.target.value
        setCategorieValue(currentCat);
        //console.log(currentCat);
    };

    // Render when changing categorie filter
    useEffect(() => {
        if(categorieValue !== "all")
        {
            const newFiltrableProducts = productsMap.filter((item) => item.category === categorieValue);
            setFilterableProducts(newFiltrableProducts);
        }
        else
        {
            setFilterableProducts(productsMap);
        }
    },[categorieValue,productsMap])

    return (
        <div className='shop_preview_container'>
            <PageTitle page_title={"Shop"}/>
            <Grid container className='section-container' rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item md={3} sm={12} xs={12}>
                    <ShopFilters categorieValue={categorieValue} onChangeCategorie={onChangeCategorie}/>
                </Grid>
                <Grid item md={9} sm={12} xs={12}>
                    <ProductsListing products={filterableProducts}/>
                </Grid>    
            </Grid>
        </div>
    )
}

export default ShopPreview