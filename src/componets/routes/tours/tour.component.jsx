
import { useContext } from 'react';
import { ProductContext } from '../../../contexts/product.context';
import ProductCard from '../../product-card/product-card.component';
import './tour.styles.scss'

const Tour = ()=>{
    //hook into the product context
const {products} = useContext(ProductContext)
return(
     <div className='products-container'>
     {products.map((product)=>(
       <ProductCard key={product.id} product={product}/>
     )
            
        )}
        </div>  
    
)
}

export default Tour;