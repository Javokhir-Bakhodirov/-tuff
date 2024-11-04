import { useState } from "react";
import Container from "../../utils";
import { useGetFilteredProductsQuery } from "../../redux/api/productsApi";
import Card from "../../components/card/Card";

const Products = () => {
    const [filters, setFilters] = useState({
        price_min: "",
        price_max: "",
    });

    const { data, isSuccess } = useGetFilteredProductsQuery(filters);

    const handleChange = e => {
        const { name, value } = e.target;
        setFilters(prev => ({
            ...prev,
            [name]: value,
        }));
    };
    return (
        <section className="pt-[45px]">
            <Container>
                <div className="p-8  bg-zinc-800  rounded-lg min-w-[1250px] ">
                    <div className="mb-[34px]">
                        <h2 className="text-center text-white text-xl font-bold">
                            Products
                        </h2>
                    </div>
                    <div className="filter-bar p-4 w-[500px]  rounded-lg mb-4 flex gap-4">
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
                            className="input bg-zinc-900  input-bordered w-full"
                        />
                    </div>

                    <ul className="grid grid-cols-5 gap-4 min-w-full ">
                        {data &&
                            data.map(item => {
                                return <Card item={item} key={item.key} />;
                            })}
                    </ul>
                </div>
            </Container>
        </section>
    );
};

export default Products;
