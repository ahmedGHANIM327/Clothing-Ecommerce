// Router DOM
import { useParams } from 'react-router-dom';

// Components
import PageTitle from '../../components/page-title/page-title';
import ProductsListing from '../../components/products_listing/products-listing';

// Redux context
// Redux
import { useSelector } from 'react-redux';

// User Redux
import { selectProducts } from '../../store-redux/products/product.selector';

const CategoriesPreview = () => {
  const {category} = useParams();

  // All products
  const productsMap = useSelector(selectProducts)

  return (
    <div>
      <PageTitle page_title={category}/>
      <div className='section-container'>
        {productsMap && <ProductsListing products={productsMap.filter((item) => item.category === category)}/>}
      </div>
    </div>
  );
};

export default CategoriesPreview;