import React from "react";
import { useSelector } from "react-redux";
import Card from "../../components/card/Card";

const Wishlist = () => {
    const wishlist = useSelector(state => state.user.wishlist);

    return (
        <>
            <div className="bg-zinc-800 p-4 rounded-lg w-full mt-[50px]   ">
                <div>
                    <h2 className="text-white text-2xl font-bold text-center">
                        Your Wishlist
                    </h2>
                </div>
                {wishlist && wishlist.length > 0 ? (
                    <ul className="grid grid-cols-4 gap-4 ">
                        {wishlist.map(item => (
                            <Card item={item} key={item.id} />
                        ))}
                    </ul>
                ) : (
                    <div className="flex-grow flex items-center justify-center">
                        <p className="text-white">Your wishlist is empty</p>
                    </div>
                )}
            </div>
        </>
    );
};

export default Wishlist;
