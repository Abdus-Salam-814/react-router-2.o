

const Form = () => {
    const heandleSubmit = e =>{
        e.preventDefault()
        console.log('submiteded')
        console.log(e.target.name.value)
        console.log(e.target.email.value)
    }
    return (
        <div className="flex flex-col justify-center items-center">
         <form onSubmit={heandleSubmit}>
         <input placeholder="Enter sumthing" className="bg-gray-100 p-4 mt-6" type="text" name="name" id="" />
         <br />
         <input className="bg-gray-100 p-4 mt-6" type="email" name="email" placeholder="Enter email" id="" />
         <br />
         <input className="bg-amber-50 p-4 cursor-pointer shadow-2xl shadow-amber-100 hover:bg-blue-300 hover:duration-100 rounded hover:text-white" type="submit" value="Submit" />
         </form>
        </div>
    );
};

export default Form;