import { useState } from "react";

const StateForm = () => {
    const [name, setName] = useState(`abdus salam`);
    const [email, setEmail] = useState(null);
    const [pass, setPass] = useState(null);
    const [error, setError] = useState('')

    const onSubmitHendel = (e) => {
        e.preventDefault();
        if(pass.length < 6){
            setError('Please give password 6 caricter or longer.')
        }else{
            setError('');
            console.log(name, email, pass);
        }
       


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
                    value={name}
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
                {
                    error && <p className="text-red-400 mt-6">{error}</p>
                }
            </form>
           
        </div>
    );
};

export default StateForm;
