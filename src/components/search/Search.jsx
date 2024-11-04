import { useState } from "react";
import { useGetFilteredProductsQuery } from "../../redux/api/productsApi";
import { Link } from "react-router-dom";

const Search = () => {
    const [filters, setFilters] = useState({
        title: "",
    });

    // Fetch filtered products based on title
    const { data, isSuccess } = useGetFilteredProductsQuery(filters);

    const handleChange = e => {
        const { name, value } = e.target;
        setFilters(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <div className="dropdown">
            <label className="input input-bordered flex text-zinc-400 items-center gap-2 bg-zinc-800">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70">
                    <path
                        fillRule="evenodd"
                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clipRule="evenodd"
                    />
                </svg>
                <input
                    onChange={handleChange}
                    type="text"
                    name="title"
                    value={filters.title}
                    className="grow"
                    placeholder="Search..."
                />
            </label>
            {isSuccess && data?.length > 0 && (
                <ul
                    tabIndex={0}
                    className=" mt-[4px] dropdown-content menu grid grid-cols-1 bg-zinc-700 gap-[5px] rounded-box z-[1] w-full p-2 shadow max-h-[390px] overflow-auto overscroll-none ">
                    {data.map(item => (
                        <li key={item.id} className="">
                            <Link
                                to={`/products/details/${item.id}`}
                                className="flex items-center gap-2">
                                <img
                                    src={item.images[0]}
                                    alt={item.title}
                                    className="w-10 h-10 object-cover rounded"
                                />
                                <h2 className="text-sm text-white">
                                    {item.title}
                                </h2>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Search;
