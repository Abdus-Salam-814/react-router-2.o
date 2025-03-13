import React from 'react';
import ReUseForm from './ReUseForm';

const ShowReuseForm = ({ formTitle,  btnText, }) => {

    const handleSinUpSubmit = data =>{
        console.log('sin Up Data:', data)

    }

    const handelProfileUpdateData = data =>{
        console.log('Profile Update Data:', data)
    }

    const handelMySinInData = data =>{
        console.log('my sin in data:', data)
    }

    return (
        <div>
            <ReUseForm handleSubmit={handleSinUpSubmit} formTitle={formTitle}  >
                
       <div className="">
        <h2>SinUp Now</h2>
        <p>Please Give You correct Infomration. </p>
        </div>         
                 </ReUseForm>
            
            
            <ReUseForm handleSubmit={handelProfileUpdateData} formTitle={'Profile Update'} btnText={btnText}  />


            <ReUseForm handleSubmit={handelMySinInData} formTitle={'My Login Form'} btnText={'Log In'}  />
            

        </div>
    );
};

export default ShowReuseForm;