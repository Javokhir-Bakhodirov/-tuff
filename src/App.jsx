import { useEffect } from "react";
import Header from "./components/header/Header";
import RouteController from "./routes";
import Aside from "./components/aside/Aside";
import Container from "./utils";
import { useLocation } from "react-router-dom";
import Footer from "./components/footer/Footer";
const App = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, [pathname]);
    return (
        <>
            <Header />
            <Container>
                <div className="flex flex-wrap w-full  justify-between">
                    {" "}
                    <Aside />
                    <RouteController />
                </div>
            </Container>
            <Footer />
        </>
    );
};

export default App;
