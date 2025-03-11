import { Link, useNavigate } from "react-router";

const User = ({user}) => {

    const {name, username, id, email, address} = user;
    const {street, suite, city} = address;
    const navigate = useNavigate();
    const heandelShowDetails = ()=>{
        navigate(`/user/${id}`)
    }

    return (
        <div className="border-2 p-6 rounded shadow-2xl shadow-amber-50 bg-gray-300">
            <h1 className="font-bold">{name}</h1>
            <h1 className="font-semibold">{username}</h1>
         <Link to={`/user/${id}`}><button className="bg-blue-200 p-4 cursor-pointer rounded-2xl hover:">Show Details</button></Link> 
         <button onClick={heandelShowDetails} className="bg-amber-50 p-4 ml-4 rounded">Show button hendel Details</button>
        </div>
    );
};

export default User;