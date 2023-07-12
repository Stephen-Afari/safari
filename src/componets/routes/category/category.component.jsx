import './category.styles.scss'

import { useContext, useState, useEffect } from 'react';

import {useParams} from 'react-router-dom';
import ProductCard from '../../product-card/product-card.component';
import {useSelector} from 'react-redux'
import { selectCategoriesMap } from '../../../store/categories/category.selector';
import { Fragment } from 'react';


const Category = ()=>{
const {category} = useParams();
const categoriesMap = useSelector(selectCategoriesMap)
//const {categoriesMap} = useContext(CategoriesContext)
const [products, setProducts]= useState(categoriesMap[category])
useEffect(()=>{
    setProducts(categoriesMap[category])
},[category,categoriesMap])

return (
    <Fragment>
<h2 className='category-title'>{category}</h2>
    <div className='category-container'>
       
        {
            products && products.map((product)=>
            <ProductCard product={product} key={product.id} />
           
            )
        }
    </div>
    </Fragment>
    
)
}

export default Category;

