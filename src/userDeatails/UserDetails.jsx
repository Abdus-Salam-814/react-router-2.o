import { Link, useLoaderData, useNavigate } from "react-router";

const UserDetails = () => {
    const userData = useLoaderData();
    const {name, username, email, phone, website} = userData;
    const nevigate = useNavigate()
    const heandelGoBack = ()=>{
        nevigate(-1)
    }
    
    return (
        <div className="text-center">
            <h1>User Details: </h1>
            <h3 className="font-bold">{name}</h3>
            <h3 className="font-semibold">{username}</h3>
            <h3>{email}</h3>
            <h3>{phone}</h3>
            <h3>{website}</h3>

            <Link to={'/'} >
            <button className="bg-gray-300 rounded-2xl py-2 px-4" >Home</button>
            </Link>
            <button onClick={heandelGoBack} className="bg-gray-500 rounded-2xl py-2 px-4">Go Back</button>
            
        </div>
    );
};

export default UserDetails;