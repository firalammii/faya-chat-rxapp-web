import React from 'react';

const Navbar = () => {
    return (
        <div className='navbar'>
            <span className="logo">Chat App</span>
            <div className="display-name-n-btn">
                <img src="https://images.pexels.com/photos/1139319/pexels-photo-1139319.jpeg?auto=compress&cs=tinysrgb&w=600" alt="m" />
                <p className="username">firalammii</p>
                <button className="logout">Log out</button>
            </div>
        </div>
    );
};

export default Navbar;