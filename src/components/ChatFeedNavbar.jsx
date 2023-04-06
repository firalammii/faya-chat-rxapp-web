import React from 'react';
import SearchMessages from './SearchMessages';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import CallIcon from '@mui/icons-material/Call';
import { useSelector } from 'react-redux';

const Navbar = () => {

    const activeChat = useSelector(state => state.chats.activeChat);
    console.log('activeChat', activeChat);
    const currentUser = useSelector(state => state.users.currentUser)

    return (
        <div className='chat-feed-navbar'>
            {
                activeChat && activeChat.users.length > 0 ?
                    <>
                    {
                        activeChat.users.filter(user => user._id !== currentUser._id).map(friend => {
                            // console.log(friend);
                            return (
                                <div key={friend._id} className='chat-friend' >
                                    <img src={friend.pp} alt='' height={40} />
                                    <span className='chat-friend'>{friend.displayName}</span>
                                </div>
                            );
                        })
                    }
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