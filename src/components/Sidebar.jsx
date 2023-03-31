import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress } from '@mui/material';
import Chats from './chats'
import { setActiveFriend, updateUser } from '../actions/usersAction';
import { createChat } from '../actions/chatsActionDispatcher';

const Sidebar = () => {
    const [searchedFriends, setSerchedFriends] = useState([]);
    const [searchKey, setSearchKey] = useState('');

    useEffect(() => {
        if (!searchKey) setSerchedFriends([]);
        else handleSearch();
    }, [searchKey]);

    const handleKeyDown = (e) => {
        e.code === 'Enter' && handleSearch();
    };

    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users);
    console.log(users);
    const currentUser = useSelector(state => state.users.currentUser);
    const activeFriend = useSelector(state => state.users.activeFriend);
    console.log(currentUser);
    // const activeChat = useSelector(state => state.users.activeChat);

    const handleSearch = async () => {
        try {
            const withoutCurrentUser = await users.filter(user => user._id !== currentUser._id);
            const withSearchKey = await withoutCurrentUser.filter(user => user.displayName.match(searchKey));
            setSerchedFriends(withSearchKey);
        } catch (error) {
            console.log(error);
        }
    };

    const onSearchResultClick = (friend) => {
        console.log(currentUser);
        dispatch(setActiveFriend(friend));

        const chatObj = {
            // admin: currentUser,
            users: friend._id,
        };
        // dispatch(createChat(chatObj));
        const user = {
            ...currentUser,
            chats: [...currentUser.chats, friend._id]
        }
        dispatch(updateUser(currentUser._id, user));
        dispatch(updateUser(activeFriend._id, currentUser));
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
                                <div key={friend._id} className="chat" onClick={() => onSearchResultClick(friend)}>
                                    <img src={friend.pp} alt='' />
                                    <div className='username-n-last-message'>
                                        <span className='username'>{friend.displayName}</span>
                                        <p className='last-message'>Hello</p>
                                    </div>
                                </div>
                            );
                        })
                        : searchKey && <CircularProgress />
                    //when i have sth to search it overrides the ealier display 
                }
                {
                    users && users.chats && users.chats.length &&
                    users.chats.map(chat => {
                        return (
                            <div key={chat.friend.id} className="chat">
                                <img src={chat.friend.pp} alt='' />
                                <div className='username-n-last-message'>
                                    <span className='username'>chat.friend.displayName</span>
                                    <p className='last-message'>hy</p>
                                </div>
                            </div>
                        );
                    })
                }


                {/* <Chats /> */}

            </div>
        </div>
    );
};

export default Sidebar;
