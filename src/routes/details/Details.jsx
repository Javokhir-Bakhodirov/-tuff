import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    useGetRelatedCategoryQuery,
    useGetSingleProductQuery,
} from "../../redux/api/productsApi";
import Poster from "../../components/poster/Poster";
import { setRelated } from "../../redux/slices/productsSlice";
import {
    addToCart,
    removeFromCart,
    addToWishlist,
} from "../../redux/slices/userSlice";

const Details = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [currentImg, setCurrentImg] = useState();
    const { data, isSuccess } = useGetSingleProductQuery(id);
    const categoryId = data?.category?.id;
    const { data: relatedCategoryData, isSuccess: categoryIdSuccess } =
        useGetRelatedCategoryQuery(categoryId, {
            skip: !categoryId,
        });
    const related = useSelector(state => state.products.related);
    const cart = useSelector(state => state.user.cart || []);

    const [isOpen, setIsOpen] = useState(false);
    const sizes = ["S", "M", "L", "XL", "XXL"];

    useEffect(() => {
        if (relatedCategoryData && categoryIdSuccess) {
            dispatch(setRelated(relatedCategoryData));
        }
    }, [relatedCategoryData, categoryIdSuccess, dispatch, id]);

    useEffect(() => {
        if (isSuccess && data.images?.length > 0) {
            setCurrentImg(data.images[0]);
        }
    }, [isSuccess, data]);

    const changeImg = image => {
        setCurrentImg(image);
    };

    const handleRemoveFromCart = item => {
        dispatch(removeFromCart(item));
    };

    const handleAddToCart = item => {
        setIsOpen(true);
        dispatch(addToCart(item));
    };

    const handleAddToWishlist = item => {
        dispatch(addToWishlist(item));
    };

    const productInCart = Array.isArray(cart)
        ? cart.find(item => item.id === data?.id)
        : undefined;
    const quantity = productInCart?.quantity || 0;

    if (!isSuccess) {
        return (
            <div className="loading bg-primary fixed inset-0 flex items-center justify-center">
                Loading...
            </div>
        );
    }

    return (
        <>
            <section className="w-[77%] shadow-md">
                <div className="bg-zinc-800 w-full rounded-xl flex p-8 space-x-6">
                    <div className="img">
                        <img
                            className="rounded-lg"
                            src={currentImg || "default-image-url.jpg"}
                            alt="Product"
                            width={323}
                            height={323}
                        />
                    </div>
                    <div className="images_list grid grid-cols-1 gap-2 justify-between">
                        {data.images?.map((image, index) => (
                            <img
                                onClick={() => changeImg(image)}
                                className="rounded-lg cursor-pointer"
                                key={index}
                                src={image}
                                width={100}
                                height={100}
                                alt="Thumbnail"
                            />
                        ))}
                    </div>
                    <div className="info-block flex flex-col space-y-[10px]">
                        <h2 className="line-clamp-1 text-white font-normal text-xl">
                            {data.title}
                        </h2>
                        <p className="font-[500] text-white text-xl">
                            ${data.price}
                        </p>
                        <p className="text-[13px]">
                            Color:{" "}
                            <span className="text-white font-bold text-[14px]">
                                White
                            </span>
                        </p>
                        <div className="size-info">
                            <p className="text-[13px]">
                                Size:{" "}
                                {sizes.map((size, index) => (
                                    <span
                                        key={index}
                                        className="text-white font-bold text-[14px] mx-1">
                                        {size}
                                    </span>
                                ))}
                            </p>
                        </div>
                        <p className="text-white w-[370px] line-clamp-3 text-sm mt-4">
                            {data.description}
                        </p>
                        <div className="buttons grid grid-cols-2 gap-[15px]">
                            {isOpen || quantity > 0 ? (
                                <div className="w-[100px] flex items-center justify-between">
                                    <button
                                        onClick={() =>
                                            handleRemoveFromCart(data)
                                        }
                                        className="px-3 py-1 bg-zinc-700 rounded-md text-white hover:bg-zinc-950 transition-all duration-200">
                                        -
                                    </button>
                                    <p className="text-white font-medium text-lg w-[10px]">
                                        {quantity}
                                    </p>
                                    <button
                                        onClick={() => handleAddToCart(data)}
                                        className="px-3 py-1 bg-purple-800 hover:bg-purple-900 rounded-md text-white transition-all duration-200">
                                        +
                                    </button>
                                </div>
                            ) : (
                                <button
                                    onClick={() => handleAddToCart(data)}
                                    className="btn text-white bg-purple-800 hover:bg-purple-900 border-transparent hover:border-transparent capitalize">
                                    Add to Cart
                                </button>
                            )}
                            <button
                                onClick={() => handleAddToWishlist(data)}
                                className="btn text-white bg-zinc-600 hover:bg-zinc-700 border-transparent hover:border-transparent capitalize">
                                Add to Wishlist
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <Poster title="You might like" list={related} amount={5} />
        </>
    );
};

export default Details;
