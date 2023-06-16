import './cart-dropdown.scss'
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import {useNavigate} from 'react-router-dom'


const CartDropdown = ()=>{
    const {cartItems}= useContext(CartContext);
    //console.log(cartItems)
    const navigate = useNavigate();
    
    const goToCheckoutHandler = ()=>{
        navigate('/checkout')
    }
    return (
        <div className='cart-dropdown-container'>
            {/* <div className='cart-Items'/> */}
            {cartItems.length ? (cartItems.map(item => 
                <CartItem key={item.id} cartItem={item}/>)): <span>Your Cart is empty</span>}
                
            <Button onClick={goToCheckoutHandler}> CHECKOUT </Button>

            
        </div>
    )
}
export default CartDropdown;