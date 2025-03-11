import { useLoaderData } from "react-router";
import User from "../user/user";

const Users = () => {

    const users = useLoaderData();
    console.log(users);
    return (
        <div>
            <h1>Our Users: {users.length}</h1>

            <div className="grid grid-cols-3 gap-4">
                {
                    users.map( user => <User key={user.id} user={user}></User>)
                }
            </div>

        </div>
    );
};

export default Users;