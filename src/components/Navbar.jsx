import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/usersAction';

const Navbar = () => {

    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.users.currentUser);
    const image = currentUser.pp ? <img src={currentUser.pp} alt='' className='img' />
        : <div className='img'>{currentUser.username.slice(0, 2).toUpperCase()}</div>;

    return (
        <div className='navbar'>
            <span className="logo">Chat App</span>
            <div className="display-name-n-btn">
                <div className='image'>{image}</div>
                <p className="username">{currentUser.username}</p>
                <button className="logout" onClick={() => dispatch(logout())}>Log out</button>
            </div>
        </div>
    );
}

export default Navbar;