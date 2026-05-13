import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        const exists = cart.find(item => item.product_id === product.product_id);

        if (!exists) {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    const removeFromCart = (id) => {
        setCart(cart.filter(item => item.product_id !== id));
    };

    const updateQuantity = (id, qty) => {
        setCart(cart.map(item =>
            item.product_id === id
                ? { ...item, quantity: qty }
                : item
        ));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
            {children}
        </CartContext.Provider>
    );
};