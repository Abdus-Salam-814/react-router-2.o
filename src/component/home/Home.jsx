import { Link, Outlet } from "react-router";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Home = () => {
    return (
        <div>
            <Header></Header>
            

            <div className="mx-auto p-12">
                <Outlet/>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;