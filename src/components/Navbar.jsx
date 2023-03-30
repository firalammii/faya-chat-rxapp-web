import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/usersAction';

const Navbar = () => {

    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.users.currentUser);
    const alt = currentUser.displayName.slice(0, 2).toUpperCase()

    return (
        <div className='navbar'>
            <span className="logo">Chat App</span>
            <div className="display-name-n-btn">
                <img src={currentUser.pp} alt={alt} />
                <p className="username">{currentUser.displayName}</p>
                <button className="logout" onClick={() => dispatch(logout())}>Log out</button>
            </div>
        </div>
    );
}

export default Navbar;