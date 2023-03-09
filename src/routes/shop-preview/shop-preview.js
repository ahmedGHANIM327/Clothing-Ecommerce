// CSS & Material-UI
import './shop-preview.scss'
import { Grid } from '@mui/material'

// React Hooks
import {useEffect, useState } from 'react';

// Components
import PageTitle from '../../components/page-title/page-title'
import ProductsListing from '../../components/products_listing/products-listing';
import ShopFilters from '../../components/shop-filters/shop-filters';

// Redux context
// Redux
import { useSelector } from 'react-redux';

// User Redux
import { selectProducts } from '../../store-redux/products/product.selector';

const ShopPreview = () => {

    // All products
    const productsMap = useSelector(selectProducts)

    // Filterable products
    const [filterableProducts,setFilterableProducts] = useState(productsMap);

    // Categories Filter
    const [categorieValue, setCategorieValue] = useState('all');
    const onChangeCategorie = async (event) => {
        const currentCat = event.target.value
        setCategorieValue(currentCat);
        //console.log(currentCat);
    };

    // Product Search Filter
    const [productaNameSearch,setProductNameSearch] = useState("");

    const handleChangeProduct = (event) => {
        const currentVale = event.target.value;
        setProductNameSearch(currentVale)
    }

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
        setProductNameSearch('');
    },[categorieValue,productsMap])

    
    useEffect(() => {
        let serachValue = productaNameSearch.toLowerCase()
        if(serachValue !== "")
        {
            const newFiltrableProducts = filterableProducts.filter((item) => item.name.toLowerCase().includes(serachValue));
            setFilterableProducts(newFiltrableProducts);
        }
        else
        {
            setFilterableProducts(productsMap);
        }
    },[productaNameSearch])


    return (
        <div className='shop_preview_container'>
            <PageTitle page_title={"Shop"}/>
            <Grid container className='section-container' rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item md={3} sm={12} xs={12}>
                    <ShopFilters categorieValue={categorieValue} onChangeCategorie={onChangeCategorie} handleChangeProduct={handleChangeProduct} productaNameSearch={productaNameSearch}/>
                </Grid>
                <Grid item md={9} sm={12} xs={12}>
                    <ProductsListing products={filterableProducts}/>
                </Grid>    
            </Grid>
        </div>
    )
}

export default ShopPreview