import './category-preview.styles.scss'

import { Fragment, useContext } from 'react'
import CategoryPreview from '../../category-preview/category-preview.component'
import { CategoriesContext } from '../../../contexts/categories.context'


const CategoriesPreview = ()=>{
    //hook into the product context
const {categoriesMap} = useContext(CategoriesContext)

return (
  <Fragment >
    {Object.keys(categoriesMap).map((title)=>{
      const products = categoriesMap[title];
      return (
        <CategoryPreview title={title} products={products} key={title}/>
      )
    })}

  </Fragment>
)
 
}
export default CategoriesPreview;