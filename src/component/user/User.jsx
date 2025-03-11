const User = ({user}) => {
    const {name, username, email, address} = user;
    const {street, suite, city} = address;
    return (
        <div className="border-2 p-6 rounded shadow-2xl shadow-amber-50 bg-gray-300">
            <h1 className="font-bold">{name}</h1>
            <h1 className="font-semibold">{username}</h1>
            <h1>{email}</h1>
            <h1>{street}</h1>
            <h1>{suite}</h1>
            <h1>{city}</h1>
        </div>
    );
};

export default User;