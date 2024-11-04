import Banner from "../../components/banner/Banner";
import laptop from "../../img/laptop.png";
import Poster from "../../components/poster/Poster";
import { useDispatch } from "react-redux";
import { useGetProductsQuery } from "../../redux/api/productsApi";
import { useEffect } from "react";
import { setProducts } from "../../redux/slices/productsSlice";
import Main from "../../components/main/Main";

const Home = () => {
    const dispatch = useDispatch();
    const { data, isSuccess } = useGetProductsQuery();
    const lessData = data?.filter(item => item.price <= 50) || [];

    useEffect(() => {
        if (isSuccess && data) {
            dispatch(setProducts(data));
        }
    }, [data, isSuccess, dispatch]);

    return (
        <>
            <Banner
                img={laptop}
                title="ASUS ROG Strix G16 Gaming Laptop, NVIDIA® GeForce RTX™ 4060."
                saleCount={30}
            />

            <Poster title="New Arrivals" list={data} amount={5} />
            <Main />
            <Poster title="Less than 50$" list={lessData} amount={5} />
        </>
    );
};

export default Home;
