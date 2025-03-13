const ReUseForm = ({formTitle, handleSubmit, btnText}) => {

    const handleLocalSubmit = e =>{
        e.preventDefault();
        const data ={
            name: e.target.name.value,
            email: e.target.email.value,
        }
        handleSubmit(data);
    }

    return (

        <div>
            <h2 className="text-4xl font-bold">{formTitle}</h2>
                <form onSubmit={handleLocalSubmit} >
         <input placeholder="Enter sumthing" className="bg-gray-100 p-4 mt-6" type="text" name="name" id="" />
         <br />
         <input className="bg-gray-100 p-4 mt-6" type="email" name="email" placeholder="Enter email" id="" />
         <br />
         <input className="bg-amber-50 p-4 cursor-pointer shadow-2xl shadow-amber-100 hover:bg-blue-300 hover:duration-100 rounded hover:text-white mt-4 mb-8" type="submit" value={btnText} />
         </form>
        </div>
    );
};

export default ReUseForm;