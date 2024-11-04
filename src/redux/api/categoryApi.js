import { api } from "./index";

const categoryApi = api.injectEndpoints({
    endpoints: build => ({
        getCategory: build.query({
            query: () => ({
                url: "/categories",
                method: "GET",
            }),
        }),
        getCategoryProducts: build.query({
            query: id => ({
                url: `/categories/${id}/products`,
            }),
        }),
    }),
});

export const { useGetCategoryQuery, useGetCategoryProductsQuery } = categoryApi;
