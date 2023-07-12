import './category-preview.styles.scss'

import { Fragment} from 'react'
import CategoryPreview from '../../category-preview/category-preview.component'
//import { CategoriesContext } from '../../../contexts/categories.context'
import {  useSelector } from 'react-redux/es/hooks/useSelector'
import { selectCategoriesMap } from '../../../store/categories/category.selector'


const CategoriesPreview = ()=>{
    //hook into the product context
  const categoriesMap = useSelector(selectCategoriesMap)
// const {categoriesMap} = useContext(CategoriesContext)

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