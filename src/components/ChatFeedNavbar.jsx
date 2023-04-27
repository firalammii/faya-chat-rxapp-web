
import { useContext } from 'react';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import CallIcon from '@mui/icons-material/Call';

import SearchMessages from './SearchMessages';
import { Context } from '../context-API/ContextProvider';

const Navbar = () => {
    const { currChat, currUser } = useContext(Context);

    // const currChat = useSelector(state => state.chats.currChat);
    // console.log('currChat', currChat);

    // const currUser = useSelector(state => state.users.currUser)
    // console.log('currUser', currUser);

    return (
        <div className='chat-feed-navbar'>
            {
                currChat?.users?.length > 0 ?
                    <>
                    {
                            currChat.users.filter(user => user._id !== currUser._id)
                                .map(friend => {
                                // console.log('friend:', friend);
                                const image = friend.pp ? <img src={friend.pp} alt='' className='img' />
                                    : <div className='img'>{friend?.username?.slice(0, 2).toUpperCase()}</div>;
                            return (
                                <div key={friend._id} className='chat-friend' >
                                    <div className='image'>{image}</div>
                                    <span className='chat-friend'>{friend.username}</span>
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