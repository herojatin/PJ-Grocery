import React,{createContext,useState,useEffect,useContext} from 'react';


const CartContext = createContext();

export const CartProvider = ({children}) =>{
  const [cart,setCart] = useState(()=> {
    try{
      const savedCart =localStorage.getItem('cart')
      return savedCart ? JSON.parse(savedCart):[]
    }
    catch {
      return []
    }
  })
  // it will save cart to local storage with item id else it will be empty array

  // sync cart to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart',JSON.stringify(cart))
  },[cart]);

  // Add an item to cart or increase its quantity

  const addToCart = (item, quantity = 1)=>{
    setCart(prevCart => {
      const existingItem =prevCart.find(ci=> ci.id === item.id)
      if (existingItem){
        return prevCart.map (ci =>
          ci.id === item.id ? {...ci, quantity: ci.quantity + quantity} : ci
      )
      }
      else {
      return [...prevCart,{...item,quantity}]
    }
    })
  }

  // remove item from cart

  const removeFromCart = itemId =>{
    setCart(prevCart => prevCart.filter(ci => ci.id !== itemId))
  }

  // update item quantity in cart
  const updateQuantity = (itemId, newQuantity)=>{
    if(newQuantity <1 )return;
    setCart (prevCart =>
      prevCart.map(ci=>
        ci.id === itemId ? {...ci, quantity: newQuantity} : ci))
  }

  // clear the cart
  const clearCart = () => {
    setCart ([])
  }

  //calcu;ate the total cost
  const getCartTotal = () => cart.reduce((total,ci)=> total + ci.price * ci.quantity,0)
  
  // calculate total items in cart
  const cartCount  = cart.reduce((count,ci) => count +ci.quantity,0)

  return(
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getCartTotal,
      cartCount,
    }}>
      {children}
    </CartContext.Provider>
  )

  }

//custom hook for cart context
export const useCart = () =>{
  const context = useContext(CartContext);
  if(!context){
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
