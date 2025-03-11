import React, { use } from 'react';
import { useLoaderData, useLocation } from 'react-router';
import { Link, NavLink } from 'react-router';



const Header = () => {

    const location = useLocation();
    // console.log(location.pathname);
   
    return (
        <div>
            <ul className='flex gap-6'>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/users'}>Users</NavLink>
                <NavLink to={'/form'}>Form</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/photo'}>Photo</NavLink>
                <NavLink to={'/photo33'}>Photo</NavLink>
                <Link to={'/fun'}>Fun</Link>
             
            </ul>
            
        </div>
    );
};

export default Header;