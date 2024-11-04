import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./home/Home";
import Details from "./details/Details";
import Cart from "./cart/Cart";
import Categories from "./categories/Categories";
import Products from "./products/Products";
import Wishlist from "./wishlist/Wishlist";

const RouteController = () => {
    return useRoutes([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/products/details/:id",
            element: <Details />,
        },
        {
            path: "/cart",
            element: <Cart />,
        },
        {
            path: "category/:id",
            element: <Categories />,
        },
        {
            path: "/products",
            element: <Products />,
        },
        {
            path: "/wishlist",
            element: <Wishlist />,
        },
    ]);
};

export default RouteController;
