import { api } from "./index";

const productsApi = api.injectEndpoints({
    endpoints: build => ({
        getProducts: build.query({
            query: () => ({
                url: `/products`,
                method: "GET",
            }),
        }),
        getSingleProduct: build.query({
            query: id => ({
                url: `/products/${id}`,
                method: "GET",
            }),
        }),
        getRelatedCategory: build.query({
            query: id => ({
                url: `/categories/${id}/products`,
            }),
        }),
        getAllProducts: build.query({
            query: () => ({
                url: "/products",
            }),
        }),
        getFilteredProducts: build.query({
            query: ({ price_min, price_max, categoryId, title } = {}) => {
                let query = `/products?`;
                if (title) query += `title=${title}&`;
                if (price_min) query += `price_min=${price_min}&`;
                if (price_max) query += `price_max=${price_max}&`;
                if (categoryId) query += `categoryId=${categoryId}`;
                return query;
            },
        }),
    }),
});

export const {
    useGetProductsQuery,
    useGetSingleProductQuery,
    useGetRelatedCategoryQuery,
    useGetAllProductsQuery,
    useGetFilteredProductsQuery,
} = productsApi;
