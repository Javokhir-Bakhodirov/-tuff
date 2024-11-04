import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../../utils";
import Card from "../../components/card/Card";
import { useGetFilteredProductsQuery } from "../../redux/api/productsApi";

const Categories = () => {
    const { id } = useParams();

    // Initialize filters with categoryId from params
    const [filters, setFilters] = useState({
        price_min: "",
        price_max: "",
        categoryId: id,
    });

    // Update the query whenever filters change
    const { data, isSuccess } = useGetFilteredProductsQuery(filters);

    // Update categoryId in filters when id in URL changes
    useEffect(() => {
        setFilters(prev => ({ ...prev, categoryId: id }));
    }, [id]);

    const handleChange = e => {
        const { name, value } = e.target;
        setFilters(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <section className="pt-7">
            <Container>
                <div className="w-full bg-zinc-800 p-6 rounded-lg shadow-md pt-[45px] min-w-[1250px] min-h-[658px]">
                    <div className="title">
                        {isSuccess && data.length > 0 && (
                            <h2 className=" text-white font-bold text-xl text-center mb-[30px]">
                                {data[0].category.name}
                            </h2>
                        )}
                    </div>
                    <div className="filter-bar p-4 w-[500px] rounded-lg mb-4 flex gap-4">
                        <input
                            type="number"
                            name="price_min"
                            placeholder="Min Price"
                            value={filters.price_min}
                            onChange={handleChange}
                            className="input bg-zinc-900 input-bordered w-full"
                        />
                        <input
                            type="number"
                            name="price_max"
                            placeholder="Max Price"
                            value={filters.price_max}
                            onChange={handleChange}
                            className="input bg-zinc-900 input-bordered w-full"
                        />
                    </div>
                    <ul className="grid grid-cols-5 gap-4">
                        {isSuccess &&
                            data.map(item => (
                                <Card item={item} key={item.id} />
                            ))}
                    </ul>
                </div>
            </Container>
        </section>
    );
};

export default Categories;
