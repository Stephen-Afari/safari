
// import { useContext } from 'react';
// import { CategoriesContext, CategoriesProvider } from '../../../contexts/categories.context';
// import ProductCard from '../../product-card/product-card.component';
import './tour.styles.scss'
// import { Fragment } from 'react';
// import CategoryPreview from '../../category-preview/category-preview.component';
import { Route, Routes } from 'react-router-dom';
import CategoriesPreview from '../category-preview/category-preview.component';
import Category from '../category/category.component'

const Tour = ()=>{

return (
  <div >
   <Routes>
    <Route index element= {<CategoriesPreview/>}></Route>
    <Route path=':category' element= {<Category/>}></Route>
   </Routes>

  </div>
)
 
}

export default Tour;