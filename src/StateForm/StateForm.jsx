import { useState } from "react";

const StateForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const onSubmitHendel = (e) => {
        e.preventDefault();
        console.log(name, email, pass);
    };

    const onChangeHandelName = (e) => {
        setName(e.target.value);
    };

    const onChangeHandelEmail = (e) => {
        setEmail(e.target.value);
    };

    const onChangeHandelPassword = (e) => {
        setPass(e.target.value);
    };

    return (
        <div>
            <form onSubmit={onSubmitHendel}>
                <input
                    onChange={onChangeHandelName}
                    placeholder="Enter name"
                    className="bg-gray-100 p-4 mt-6"
                    type="text"
                    name="name"
                    id=""
                />
                <br />
                <input
                    onChange={onChangeHandelEmail}
                    className="bg-gray-100 p-4 mt-6"
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    id=""
                />
                <br />
                <input
                    onChange={onChangeHandelPassword}  // এখানে onChange ব্যবহার করা হয়েছে
                    className="bg-gray-100 p-4 mt-6"
                    type="password"
                    name="password"  // এখানে নাম ঠিক করা হয়েছে
                    placeholder="Enter Password"
                    id=""
                />
                <br />
                <input
                    className="bg-amber-50 p-4 cursor-pointer shadow-2xl shadow-amber-100 hover:bg-blue-300 hover:duration-100 rounded hover:text-white mt-4"
                    type="submit"
                    value="Submit"
                />
            </form>
        </div>
    );
};

export default StateForm;
