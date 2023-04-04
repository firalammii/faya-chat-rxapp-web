import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Chats from './chats'
import { setActiveFriend, updateUser } from '../actions/usersAction';
import { createChat, fetchChats, setActiveChat } from '../actions/chatsActionDispatcher';

const Sidebar = () => {
    const [searchedFriends, setSerchedFriends] = useState([]);
    const [searchKey, setSearchKey] = useState('');

    useEffect(() => {
        if (!searchKey) setSerchedFriends([]);
        else handleSearch();
    }, [searchKey]);

    useEffect(() => {
        dispatch(fetchChats());
    }, [])

    const handleKeyDown = (e) => {
        e.code === 'Enter' && handleSearch();
    };

    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users);
    // console.log(users);
    const currentUser = useSelector(state => state.users.currentUser);
    // console.log(currentUser);
    const allChats = useSelector(state => state.chats.chats);
    // console.log(allChats);
    const userChats = allChats.filter(chat => {
        console.log(chat.users);
        return chat.users.map(user => user._id === currentUser._id);

    });
    console.log('userChats', userChats)





    const handleSearch = async () => {
        try {
            const withoutCurrentUser = await users.filter(user => user._id !== currentUser._id);
            const withSearchKey = await withoutCurrentUser.filter(user => user.displayName.match(searchKey));
            setSerchedFriends(withSearchKey);
        } catch (error) {
            console.log(error);
        }
    };

    const startChat = (friend) => {
        dispatch(setActiveFriend(friend));
        const chatObj = {
            admin: currentUser._id,
            messages: [],
            users: [friend, currentUser]
        }
        dispatch(createChat(chatObj));
    };

    return (
        <div className='sidebar'>
            <div className='search-bar'>
                <input
                    className='search-input'
                    type="text"
                    placeholder='search contact'
                    value={searchKey}
                    onChange={(e) => setSearchKey(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
            </div>

            <div className='chat-friends'>
                {
                    searchedFriends.length > 0 ?
                        searchedFriends.map(friend => {
                            return (
                                <div key={friend._id} className="chat" >
                                    <img src={friend.pp} alt='' />
                                    <div className='username-n-last-message'>
                                        <span className='username'>{friend.displayName}</span>
                                        {/* <p className='last-message'>Hello</p> */}
                                    </div>
                                    <AddCircleOutlineIcon className='start-chat-icon' titleAccess='start chat' onClick={() => startChat(friend)} /> 
                                </div>
                            );
                        })
                        : searchKey && <CircularProgress />
                    //when i have sth to search it overrides the ealier display 
                }
                {
                    userChats && userChats.length > 0 &&
                    userChats.map(chat => {
                        return (
                            chat.users.map(user => {
                                if (user._id !== currentUser._id)
                                    return (
                                        <div key={user._id} className="chat" onClick={() => dispatch(setActiveChat(chat))}>
                                            <img src={user.pp} alt='' />
                                            <div className='username-n-last-message'>
                                                <span className='username'>{user.displayName}</span>
                                                {/* <p className='last-message'>{chat.messages[chat.messages.length - 1].message}</p> */}
                                            </div>
                                        </div>
                                    );
                            })
                        )
                    })
                }
                {/* <Chats /> */}
            </div>
        </div>
    );
};

export default Sidebar;
