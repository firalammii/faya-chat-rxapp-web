import React from 'react';
import SearchMessages from './SearchMessages';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import CallIcon from '@mui/icons-material/Call';

const Navbar = () => {
    return (
        <div className='chat-feed-navbar'>
            <div className='chat-friend'>
                <img src='https://images.pexels.com/photos/935948/pexels-photo-935948.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' height={40} />
                <span className='chat-friend'>Taylor</span>
            </div>
            <SearchMessages />
            <VideoCallIcon />
            <CallIcon />
        </div>
    );
};

export default Navbar;