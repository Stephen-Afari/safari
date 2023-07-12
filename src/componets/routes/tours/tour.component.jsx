
// import { useContext } from 'react';
// import { CategoriesContext, CategoriesProvider } from '../../../contexts/categories.context';
// import ProductCard from '../../product-card/product-card.component';
import './tour.styles.scss'
// import { Fragment } from 'react';
// import CategoryPreview from '../../category-preview/category-preview.component';
import { Route, Routes } from 'react-router-dom';
import CategoriesPreview from '../category-preview/category-preview.component';
import Category from '../category/category.component'
import { useEffect } from 'react';
import { setCategoriesMap } from '../../../store/categories/category.action';
import { getCategoriesAndDocuments } from '../../data.utils/json.utils';
import {useDispatch} from 'react-redux'
// import documents from "../../tour-data2.json";

const Tour = ()=>{
const  dispatch = useDispatch();
  useEffect(()=> {
    const categories = getCategoriesAndDocuments()
         console.log( categories)
        //This ensures that the newly created categoriesMap is set into the initial empty object
        dispatch(setCategoriesMap(categories))
        
} ,[])
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