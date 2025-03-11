import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='text-center text-3xl font-black'>
            <h2>Oops!!!</h2>
            <p>Page Not Found</p>
            <Link to={`/`}><button >Home</button></Link>
        </div>
    );
};

export default ErrorPage;