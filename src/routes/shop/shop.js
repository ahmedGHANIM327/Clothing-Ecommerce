import {Fragment, useContext } from 'react'

import './shop.scss'
import CategoriesPreview from '../categories-preview/categories-preview'
import Category from '../../components/category-shop/category-shop'
import { Routes,Route } from 'react-router-dom'

export default function Shop() {

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  )
}