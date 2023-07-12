import './product-card.styles.scss'
import Button from '../button/button.component';
import './product-card.styles.scss'
//import { useContext } from 'react';
//import {CartContext} from '../../contexts/cart.context'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { addItemToCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';
import { useDispatch } from 'react-redux';

const ProductCard = (({product})=>{
const {name,price,imageCover} = product;
const dispatch = useDispatch()
const cartItems = useSelector(selectCartItems)
//const {addItemToCart} = useContext(CartContext)

const addProductToCart = ()=> dispatch(addItemToCart(cartItems,product))
return (
    <div className='product-card-container'>
        <img src={imageCover} alt= {name}/>
        <div className='footer'>
        <span className={name}>
                {name}
            </span>
            <span className={price}>
                {price}
            </span>
        </div>
        <Button buttonType='inverted' onClick = {addProductToCart}>Add</Button>
    </div>
    
)


})

export default ProductCard;