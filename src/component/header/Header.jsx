import React from 'react';
import { Link } from 'react-router';

const Header = () => {
    return (
        <div>
            <ul className='flex gap-6'>
                <Link to={'/'}>Home</Link>
                <Link to={'/users'}>Users</Link>
                <Link to={'/about'}>About</Link>
                <Link to={'/photo'}>Photo</Link>
                <Link to={'/fun'}>Fun</Link>
            </ul>
            
        </div>
    );
};

export default Header;