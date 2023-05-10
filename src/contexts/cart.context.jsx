import {createContext, useState, useEffect} from 'react'

const clearCartItem = (cartIems,cartItemToClear)=>{
return cartIems.filter((cartItem)=> cartItem.id !== cartItemToClear.id
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

export const CartProvider =({children})=>{
    const [isCartOpen,setIsCartOpen]= useState(false)
    const [cartItems, setCartItems]= useState([])
    const [cartCount, setCartCount] = useState(0)
    const [cartTotal, setCartTotal] = useState(0)
    useEffect(()=>{
        const newCount = cartItems.reduce((total,cartItem)=> total + cartItem.quantity,0)
        setCartCount(newCount)
    },[cartItems])
    useEffect(()=>{
        const cartTotal = cartItems.reduce((total, cartItem)=> total + cartItem.quantity* cartItem.price,0)
        setCartTotal(cartTotal)
    },[cartItems])

    const addItemToCart = (productToAdd)=> setCartItems(addCartItem(cartItems,productToAdd))
    const removeItemToCart = (cartItemToRemove)=> 
    setCartItems(removeCarItem(cartItems, cartItemToRemove))
    const clearItemFromCart = (cartItemToClear)=> setCartItems(clearCartItem(cartItems,cartItemToClear))
    
   
    const value = {removeItemToCart,isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount, setCartCount,clearItemFromCart, cartTotal, setCartTotal}

    return(<CartContext.Provider value = {value}>{children}</CartContext.Provider>)
}