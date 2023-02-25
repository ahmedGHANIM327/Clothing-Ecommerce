// SCSS Styles
import './shop.scss'

// React Router Tools
import { Routes,Route } from 'react-router-dom'

// Components
import ShopPreview from '../shop-preview/shop-preview'
import CategoriesPreview from '../categories-preview/categories-preview'

export default function Shop() {

  return (
    <Routes>
      <Route index element={<ShopPreview />} />
      <Route path=':category' element={<CategoriesPreview />} />
    </Routes>
  )
}