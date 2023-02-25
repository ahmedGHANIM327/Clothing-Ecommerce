import './category-item.scss';

import { useNavigate } from 'react-router-dom';

const CategoryItem = ({ category }) => {
  const { imageUrl, title } = category;

  let navigate = useNavigate()
  const handleNavigation = () => {
    navigate("/shop/"+title)
    window.scrollTo(0, 0)
  }
  
  return (
    <div className='category-container'>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        onClick={handleNavigation}
      />
      <div className='category-body-container' onClick={handleNavigation}>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;