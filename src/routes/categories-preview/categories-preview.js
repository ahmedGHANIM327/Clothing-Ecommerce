// Router DOM
import { useParams } from 'react-router-dom';

// Context
import { ProductsContext } from '../../context/products.context';

// React Hooks
import { useContext} from 'react';

// Components
import PageTitle from '../../components/page-title/page-title';
import ProductsListing from '../../components/products_listing/products-listing';

const CategoriesPreview = () => {
  const {category} = useParams();

  // All products
  const {productsMap} = useContext(ProductsContext)

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