import './checkout.styles.scss'
//import { useContext } from 'react'
//import { CartContext } from '../../../contexts/cart.context'
import CheckoutItem from '../../checkout-item/checkout-item.component'
// import { UseSelector} from 'react-redux/es/hooks/useSelector'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { selectCartItems, selectCartTotal } from '../../../store/cart/cart.selector'


const Checkout = ()=>{
//const {cartItems, cartTotal}= useContext(CartContext)
const cartItems = useSelector(selectCartItems)
const cartTotal = useSelector(selectCartTotal)

    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
            </div>
            
    {cartItems.map((cartItem)=>{
        // const {id, name, quantity} = cartItem
        return(
            <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
            // <div key={id}>
            //     <h2>{name}</h2>
            //     <span>{quantity}</span>
            //     <br/>
            // <span onClick={()=> addItemToCart(cartItem)}>increment</span>
            // <span onClick={()=> removeItemToCart(cartItem)}>decrement</span>
            // </div>
        )
    })}
    <span className='Total'>Total: ${cartTotal}</span>
        </div>
    )
}

export default Checkout