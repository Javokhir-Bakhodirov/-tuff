import React from "react";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
    return (
        <div
            key={item.id}
            className="bg-zinc-900 rounded-lg p-4 grid grid-row-1 min-w-[228px] ">
            <Link to={`/products/details/${item.id}`}>
                <img
                    src={item.images[0]}
                    alt=""
                    className="w-full h-72 object-cover rounded-lg"
                />
            </Link>
            <div className="mt-4 grid grid-row-2 ">
                <h3 className="text-zinc-100 text-lg font-semibold line-clamp-2  ">
                    {item.title}
                </h3>
                <div className="flex items-end space-x-2 ">
                    <p className="text-purple-800 font-semibold text-xl mt-[15px]">
                        ${item.price}{" "}
                    </p>
                    <p className="text-zinc-400 text-md line-through  ">
                        ${item.price + item.price * 0.2}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Card;
