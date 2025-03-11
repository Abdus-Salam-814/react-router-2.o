import { Outlet } from "react-router";
import Footer from "../component/footer/Footer";
import FunNav from './fun-nav/FunNav';
const Funs = () => {

    return (
        <div>
            <FunNav></FunNav>
                <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Funs;