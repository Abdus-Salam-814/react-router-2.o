import useInputState from "../Hooks/useInputState";

const HookForm = () => {
    // const [name, handelNameChange] = useInputState('Rojoni')
    const emailState = useInputState('rojoni@sojoni.go')
    const handelSubmit = e =>{
        e.preventDefault();
        // console.log('form Data', name)
        console.log('form Data', emailState.value)
    }
    return (
        <div>
                <form onSubmit={handelSubmit} >
         {/* <input
         value={name}
         onChange={handelNameChange}
        placeholder="Enter sumthing"
        className="bg-gray-100 p-4 mt-6" 
        type="text" name="name" id="" /> */}
         <br />
         <input 
         {...emailState}
         className="bg-gray-100 p-4 mt-6" 
         type="email" name="email" 
         placeholder="Enter email" id="" />
         <br />
         <input 
         className="bg-amber-50 p-4 cursor-pointer shadow-2xl shadow-amber-100 hover:bg-blue-300 hover:duration-100 rounded hover:text-white" type="submit" value="Submit" />
         </form>
        </div>
    );
};

export default HookForm;