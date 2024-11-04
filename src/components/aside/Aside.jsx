import React, { useEffect } from "react";
import { useGetCategoryQuery } from "../../redux/api/categoryApi";
import { useDispatch, useSelector } from "react-redux";
import { setCategories } from "../../redux/slices/categorySlice";
import { Link, NavLink, useLocation } from "react-router-dom";
import Banner from "../banner/Banner";
import laptop from "../../img/laptop.png";

const Aside = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const { categories } = useSelector(({ categories }) => categories);

    const { data, isSuccess, isLoading } = useGetCategoryQuery();

    useEffect(() => {
        if (isSuccess && data) {
            dispatch(setCategories(data));
        }
    }, [data, isSuccess, dispatch]);

    return (
        <>
            <section className="px-6 py-8 bg-zinc-800 w-[20%] rounded-lg shadow-md max-h-[400px]">
                <div className="aside_title mb-4">
                    {isLoading ? (
                        <h2 className="skeleton w-32 h-6 bg-zinc-700 rounded"></h2>
                    ) : (
                        <h2 className="text-zinc-100 text-xl font-semibold">
                            Categories
                        </h2>
                    )}
                </div>
                <ul className="category_list">
                    {isLoading
                        ? Array(5)
                              .fill(0)
                              .map((_, index) => (
                                  <li
                                      key={index}
                                      className="skeleton my-1 bg-zinc-700 w-[50%] h-5 rounded-md"></li>
                              ))
                        : categories.slice(0, 5).map(category => (
                              <NavLink
                                  key={category.id}
                                  to={`/category/${category.id}`}
                                  className={`block px-4 py-[3px] relative hover:text-white transition duration-200 ${
                                      location.pathname ===
                                      `/category/${category.id}`
                                          ? "text-purple-600 active-link"
                                          : "text-zinc-600"
                                  }`}>
                                  <li className="cat-item">{category.name}</li>
                                  <div className="underline"></div>
                              </NavLink>
                          ))}
                </ul>

                <div className="help mt-[105px]">
                    <Link
                        className={`block px-4 hover:text-white transition duration-200 ${
                            location.pathname === `/help`
                                ? "text-purple-600"
                                : "text-zinc-600"
                        }`}
                        to="/help">
                        Help
                    </Link>
                </div>
            </section>
            {!["/", "/cart"].includes(location.pathname) &&
                !location.pathname.includes("details") && (
                    <Banner
                        img={laptop}
                        title="ASUS ROG Strix G16 Gaming Laptop, NVIDIA® GeForce RTX™ 4060."
                        saleCount={30}
                    />
                )}
        </>
    );
};

export default Aside;
