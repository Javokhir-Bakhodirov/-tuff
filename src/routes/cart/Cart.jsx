import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../../components/cartItem/CartItem";

const Cart = () => {
    const cart = useSelector(state => state.user.cart);

    const calculateTotal = () => {
        if (!Array.isArray(cart)) return 0;
        return cart
            .reduce((acc, item) => acc + item.quantity * item.price, 0)
            .toFixed(2);
    };

    return (
        <div className="w-[77%] min-h-[400px] bg-zinc-800 rounded-lg shadow-md p-8 flex flex-col">
            <div>
                <h2 className="text-white text-xl font-bold">Your Cart</h2>
            </div>

            {cart.length ? (
                <ul className="cart-list overflow-auto flex-grow">
                    {cart.map(item => (
                        <CartItem key={item.id} item={item} />
                    ))}
                </ul>
            ) : (
                <div className="flex-grow flex items-center justify-center">
                    <p className="text-white">Your cart is empty</p>
                </div>
            )}

            <div className="mt-4 border-t border-gray-700 pt-4 flex justify-between items-center">
                <p className="text-white text-lg font-semibold">Total:</p>
                <p className="text-white text-lg font-semibold">
                    ${calculateTotal()}
                </p>
            </div>
        </div>
    );
};

export default Cart;
