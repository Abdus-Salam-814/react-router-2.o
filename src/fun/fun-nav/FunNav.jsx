import { Link } from "react-router";

const FunNav = () => {
    return (
        <div>
            <ul>
                <Link to={'/fun1'}>Fun 1</Link>
                <Link to={'/fun2'}>Fun 2</Link>
                <Link to={'/fun3'}>Fun 3</Link>
                <Link to={'/fun4'}>Fun 4</Link>
            </ul>
        </div>
    );
};

export default FunNav;