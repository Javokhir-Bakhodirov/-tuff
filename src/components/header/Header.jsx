import { BiShoppingBag } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import React from "react";
import Container from "../../utils";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Search from "../search/Search";

const Header = () => {
    const cart = useSelector(state => state.user.cart);

    const calculateQuantity = () => {
        if (!Array.isArray(cart)) return 0;
        return cart.reduce((acc, item) => acc + item.quantity, 0);
    };
    return (
        <header className="site-header sticky top-0 z-50 ">
            <div className="w-full h-full backdrop-blur-3xl  -z-10  absolute"></div>
            <Container>
                <div className="header flex items-center justify-between">
                    <div className="logo">
                        <Link
                            to="/"
                            className="text-purple-800 font-bold text-3xl">
                            {" "}
                            $<span className="text-white text-2xl">
                                TUFF
                            </span>{" "}
                        </Link>
                    </div>
                    <div className=" flex items-center gap-2">
                        <div className="avatar">
                            <RxAvatar className="text-3xl text-zinc-300  rounded-full " />
                        </div>
                        <div className="userName text-md font-semibold text-white">
                            John Doe
                        </div>
                    </div>
                    <Search />

                    <div className=" flex items-center gap-4">
                        <Link to="/wishlist">
                            {" "}
                            <AiOutlineHeart className="text-3xl text-zinc-300 cursor-pointer" />
                        </Link>
                        <Link to="/cart" className="relative">
                            <div className="indicator">
                                <span className="indicator-item text-white bg-purple-800 border-none indicator-bottom badge badge-secondary font-bold">
                                    {calculateQuantity()}
                                </span>
                                <BiShoppingBag className="text-3xl text-zinc-300 cursor-pointer relative" />{" "}
                            </div>
                        </Link>
                    </div>
                </div>
            </Container>
            <div className="w-full h-full blur-xl bg-zinc-900"></div>
        </header>
    );
};

export default Header;
