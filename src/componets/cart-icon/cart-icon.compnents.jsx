import {ReactComponent as TourIcon} from '../../assets/shopping-bag.svg'
// import { CartContext } from '../../contexts/cart.context'
import './cart-icon.styles.scss'
// import { useContext } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { selectCartIsOpen } from '../../store/cart/cart.selector'
import { selectCartCount } from '../../store/cart/cart.selector'
import { setIsCartOpen } from '../../store/cart/cart.action'

const CartIcon = ()=>{

const isCartOpen = useSelector(selectCartIsOpen)
const cartCount = useSelector(selectCartCount)
const dispatch = useDispatch()

    // const {setIsCartOpen} = useContext(CartContext)

const toggleIsCartOpen = ()=> dispatch(setIsCartOpen(!isCartOpen))
    return (
        <div className='cart-icon-container' onClick={toggleIsCartOpen}>
            <TourIcon className='shopping-icon'/>
            <span className='item-count'>{cartCount}</span>
        </div>
    )
}

export default CartIcon;