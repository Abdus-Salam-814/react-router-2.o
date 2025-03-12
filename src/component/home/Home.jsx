import { Link, Outlet, useNavigation } from "react-router";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import "./home.css"
import RefForm from "../../RefForm/RefForm";

const Home = () => {

    const navigation = useNavigation()
    return (
        <div>
            <Header></Header>
           
        {
            navigation.state === 'loading' ? 
            <p>loding........</p>:
        <div className="mx-auto p-12">
                <Outlet/>
            </div>
        }
            
            <Footer></Footer>
        </div>
    );
};

export default Home;