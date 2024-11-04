import React from "react";
import Container from "../../utils";
import { Link } from "react-router-dom";
import Card from "../card/Card";
import { useLocation } from "react-router-dom";

const Poster = ({ title, list, amount }) => {
    const location = useLocation();

    const listSlice = list?.slice(0, amount);

    return (
        <section className=" pt-[60px] w-full">
            <Container>
                <div className="bg-zinc-800 rounded-lg p-4">
                    <h2 className="text-zinc-100 text-xl font-semibold text-center">
                        {title}
                    </h2>
                    <div className="grid grid-cols-5 gap-4 mt-4 carousel rounded-box">
                        {listSlice?.map(item => (
                            <Card item={item} key={item.id} />
                        ))}
                    </div>
                    <div className="flex items-center justify-center">
                        {list && (
                            <Link
                                className="btn mt-[40px] text-white bg-purple-800 border-none hover:bg-purple-900"
                                to={
                                    location.pathname.includes("/details")
                                        ? `/category/${list[0]?.category.id}`
                                        : "/products"
                                }>
                                See all
                            </Link>
                        )}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Poster;
