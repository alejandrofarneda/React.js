import { useState, createContext, useContext } from 'react';

const CartContent = createContext();

function CartContentProvider({children}){
    const [cart, setCart ] = useState([])
     return(
         <CartContent.Provider value={[cart, setCart]}>
             {children}
         </CartContent.Provider>
     )
}
export const useCart = () => useContext(CartContent)[0];
export const useSetCart = () => useContext(CartContent)[1];

export default CartContentProvider;