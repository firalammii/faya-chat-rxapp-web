import React from 'react';
import SearchMessages from './SearchMessages';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import CallIcon from '@mui/icons-material/Call';
import { useSelector } from 'react-redux';

const Navbar = () => {

    const activeFriend = useSelector(state => state.users.activeFriend);

    return (
        <div className='chat-feed-navbar'>
            {
                activeFriend ? <>
                    <div className='chat-friend'>
                        <img src={activeFriend.pp} alt='' height={40} />
                        <span className='chat-friend'>{activeFriend.displayName}</span>
                    </div>
                    <SearchMessages />
                    <VideoCallIcon />
                    <CallIcon />
                </>
                    : <p>select a friend to chat with</p>

            }
        </div>
    );
};

export default Navbar;