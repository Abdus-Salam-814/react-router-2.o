import { useEffect, useRef } from "react";

const RefForm = () => {
const nameRef = useRef(null);
const emailRef = useRef(null);
const passwordRef = useRef(null);

useEffect(() => {
    nameRef.current.focus();
   
}, [] )

const onSubmitHendal = e =>{
    e.preventDefault();
    console.log(nameRef.current.value)
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value)


}

    return (
        <div className="text-center">
             <form onSubmit={onSubmitHendal} >
                <input
                    
                    placeholder="Enter name"
                    ref={nameRef}
                    className="bg-gray-100 p-4 mt-6"
                    type="text"
                    name="name"
                    id=""
                />
                <br />
                <input
                    ref={emailRef}
                    defaultValue={'abdus@op.io'}
                    className="bg-gray-100 p-4 mt-6"
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    id=""
                />
                <br />
                <input
                    ref={passwordRef}
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
                {/* {
                    error && <p className="text-red-400 mt-6">{error}</p>
                } */}
            </form>
        </div>
    );
};

export default RefForm;