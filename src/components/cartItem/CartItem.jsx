import { addToCart, removeFromCart } from "../../redux/slices/userSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    const handleAddToCart = item => {
        dispatch(addToCart({ ...item, quantity: 1 }));
    };
    const handleRemoveFromCart = item => {
        dispatch(removeFromCart(item));
    };

    return (
        <li className="w-full bg-zinc-900 flex items-center justify-between p-4 rounded-lg shadow-md mb-4  transition-colors duration-200 ease-in-out">
            <img
                src={item.images[0]}
                alt="item"
                className="w-20 h-20 rounded-lg object-cover shadow-sm"
            />

            <div className="flex flex-col ml-4 w-1/3">
                <h2
                    className="text-white font-semibold text-lg truncate"
                    title={item.title}>
                    {item.title}
                </h2>
                <p className="text-gray-400 text-sm mt-1">
                    {item.category.name}
                </p>
            </div>

            <div className="w-[50px] text-white font-semibold text-lg text-center mx-2">
                <p>${item.price.toFixed(2)}</p>
            </div>

            <div className="w-[100px] flex items-center  justify-between">
                <button
                    onClick={() => handleRemoveFromCart(item)}
                    className="px-3 py-1 bg-zinc-700 rounded-md text-white hover:bg-zinc-950 transition-all duration-200">
                    -
                </button>
                <p className="text-white font-medium text-lg w-[10px]">
                    {item.quantity}
                </p>
                <button
                    onClick={() => handleAddToCart(item)}
                    className="px-3 py-1 bg-purple-800 hover:bg-purple-900 rounded-md text-white transition-all duration-200">
                    +
                </button>
            </div>
            <div className="w-1/6 text-white font-semibold text-lg text-right">
                ${(item.price * item.quantity).toFixed(2)}
            </div>
        </li>
    );
};

export default CartItem;
