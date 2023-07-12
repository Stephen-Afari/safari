import {createContext, useState, useEffect} from 'react'
import { useReducer } from 'react'
import { useActionData } from 'react-router-dom'
import { createAction } from '../utils/reducer/reducer.utils'

const clearCartItem = (cartItems,cartItemToClear)=>{
return cartItems.filter((cartItem)=> cartItem.id !== cartItemToClear.id
)
}
const removeCarItem = (cartItems, cartItemToRemove)=>{
    //find matching cartItem
    const existingCartItem = cartItems.find((cartItem)=> cartItem.id === cartItemToRemove.id)
    //check if quantity is equal to 1 and remove
    if(existingCartItem.quantity === 1){
        return cartItems.filter((cartItem)=> cartItem.id !== cartItemToRemove.id)
    }
// if qty >1, reduce it by 1
return cartItems.map((cartItem)=> 
cartItem.id === cartItemToRemove.id ? {...cartItem, quantity: cartItem.quantity -1}: cartItem
)
}

const addCartItem = (cartItems, productToAdd) =>{
    const existingCartItem = cartItems.find(cartItem => cartItem.id === productToAdd.id)
    if(existingCartItem){
        return cartItems.map(cartItem => cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity +1}: cartItem)
    }
    return [...cartItems, {...productToAdd, quantity:1}]
}

export const CartContext = createContext({

    
    isCartOpen: false,
    setIsCartOpen: ()=>{},
    cartItems: [],
    addItemToCart: ()=>{},
    cartCount: 0,
    removeItemToCart: ()=>{},
    clearItemFromCart: ()=>{},
    cartTotal: 0
})

const INITIAL_STATE= {
    isCartOpen: false,
    cartItems:[],
    cartCount:0,
    cartTotal:0
}
const CART_ACTION_TYPES = {
    SET_CART_ITEMS: 'SET_CART_ITEMS',
    SET_IS_CART_OPEN: 'SET_IS_CART_OPEN'
}

export const cartReducer = (state, action)=>{
    const {type, payload} = action;
    switch(type){
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload
            };
        case CART_ACTION_TYPES.SET_IS_CART_OPEN:          
            return {
                ...state,
                isCartOpen: payload,
            }

        default: throw new Error (`unhandled type of ${type} in cart reducer`)
        
    }
}
export const CartProvider =({children})=>{
    // const [isCartOpen,setIsCartOpen]= useState(false)
    // const [cartItems, setCartItems]= useState([])
    // const [cartCount, setCartCount] = useState(0)
    // const [cartTotal, setCartTotal] = useState(0)
    // useEffect(()=>{
    //     const newCount = cartItems.reduce((total,cartItem)=> total + cartItem.quantity,0)
    //     setCartCount(newCount)
    // },[cartItems])
    // useEffect(()=>{
    //     const cartTotal = cartItems.reduce((total, cartItem)=> total + cartItem.quantity* cartItem.price,0)
    //     setCartTotal(cartTotal)
    // },[cartItems])
    const [{cartItems, isCartOpen, cartCount, cartTotal},dispatch] = useReducer(cartReducer,INITIAL_STATE)
    const updateCartReducer = (newCartItems)=>{
        const newCartCount = cartItems.reduce((total,cartItem)=> total + cartItem.quantity,0)
        const newCartTotal = cartItems.reduce((total, cartItem)=> total + cartItem.quantity* cartItem.price,0)

    dispatch (
        createAction(CART_ACTION_TYPES.SET_CART_ITEMS,{
            cartItems: newCartItems,
            cartCount: newCartCount,
            cartTotal: newCartTotal
        }))
    }
    

    const addItemToCart = (productToAdd)=> {
        const newCartItem = addCartItem(cartItems,productToAdd);
        updateCartReducer(newCartItem)
    } 
    const removeItemToCart = (cartItemToRemove)=> 
   { const removeItem = removeCarItem(cartItems, cartItemToRemove)
    updateCartReducer(removeItem)
}
    const clearItemFromCart = (cartItemToClear)=> {
        const clearItem = clearCartItem(cartItems,cartItemToClear)
        updateCartReducer(clearItem)
    }
    
const setIsCartOpen = (bool)=>{
    dispatch(
        createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN,bool)
    )
}
    const value = {isCartOpen, removeItemToCart,setIsCartOpen, addItemToCart, cartItems, cartCount,clearItemFromCart, cartTotal}

    return(<CartContext.Provider value = {value}>{children}</CartContext.Provider>)
}