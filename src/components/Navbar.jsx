import React, { useContext } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { logout } from '../actions/usersAction';
import { Context } from '../context-API/ContextProvider';

const Navbar = () => {

    const { currUser, logout } = useContext(Context);

    // const currUser = useSelector(state => state.users.currUser);
    // console.log('currUser:', currUser);

    const image = currUser?.pp ? <img src={currUser?.pp} alt='' className='img' />
        : <div className='img'>{currUser?.username?.slice(0, 2).toUpperCase()}</div>;

    return (
        <div className='navbar'>
            <span className="logo">Chat App</span>
            <div className="display-name-n-btn">
                <div className='image'>{image}</div>
                <p className="username">{currUser?.username}</p>
                <button className="logout" onClick={() => logout()}>Log out</button>
            </div>
        </div>
    );
}

export default Navbar;