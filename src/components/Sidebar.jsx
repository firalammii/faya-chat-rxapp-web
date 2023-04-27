/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { createChat, fetchChats } from '../actions/chatsActionDispatcher';
import { Context } from '../context-API/ContextProvider';

const Sidebar = () => {

    const [searchedFriends, setSerchedFriends] = useState([]);
    const [searchKey, setSearchKey] = useState('');

    const dispatch = useDispatch();
    const { currChat, currUser, changeCurrChat } = useContext(Context)

    const users = useSelector(state => state.users.users);
    // console.log('users:', users);

    // const currChat = useSelector(state => state.chats.currChat);
    // console.log('currChat:', currChat);

    // const currUser = useSelector(state => state.users.currUser);
    // console.log('currUser:', currUser);

    const allChats = useSelector(state => state.chats.chats);
    // console.log('allChats:', allChats);

    useEffect(() => {
        if (!searchKey) setSerchedFriends([]);
        else handleSearch();
    }, [searchKey]);

    const handleKeyDown = (e) => {
        e.code === 'Enter' && handleSearch();
    };

    const userChats = allChats.filter(chat => chat.users[0]._id === currUser._id || chat.users[1]._id === currUser._id)
    console.log('userChats:', userChats)

    const handleSearch = async () => {
        try {
            const withoutcurrUser = await users.filter(user => user._id !== currUser._id);
            const withSearchKey = await withoutcurrUser.filter(user => user.username.match(searchKey));
            setSerchedFriends(withSearchKey);
        } catch (error) {
            console.log(error);
        }
    };

    const startChat = (friend) => {
        const chatObj = {
            messages: [],
            users: [friend, currUser]
        }
        dispatch(createChat(chatObj));
        dispatch(fetchChats());
        setSearchKey('');
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
                                    {<img src={friend.pp} alt='' />}
                                    <div className='username-n-last-message'>
                                        <span className='username'>{friend.username}</span>
                                        {/* <p className='last-message'>Hello</p> */}
                                    </div>
                                    <AddCircleOutlineIcon
                                        className='start-chat-icon'
                                        titleAccess='start chat'
                                        onClick={() => startChat(friend)}
                                    /> 
                                </div>
                            );
                        })
                        : searchKey && <CircularProgress />
                    //when i have sth to search it overrides the ealier display 
                }

                {
                    currChat?.users.map(user => {
                        if (user._id !== currUser._id) {
                            const image = user.pp ? <img src={user.pp} alt='' className='img' />
                                : <div className='img'>{user?.username?.slice(0, 2).toUpperCase()}</div>;
                            return (
                                <div key={user._id} className="chat">
                                    <div className='image'>{image}</div>
                                    <div className='username-n-last-message'>
                                        <span className='username'>{user.username}</span>
                                        {/* <p className='last-message'>{chat.messages[chat.messages.length - 1].message}</p> */}
                                    </div>
                                </div>
                            );
                        }
                        else return null;
                    })
                }

                {
                    userChats?.filter(userchat => userchat._id !== currChat?._id)
                        .map(chat => {
                        return (
                            chat.users.map(user => {
                                const image = user.pp ? <img src={user.pp} alt='' className='img' />
                                    : <div className='img'>{user.username.slice(0, 2).toUpperCase()}</div>;
                                if (user._id !== currUser._id)
                                    return (
                                        <div
                                            key={user._id}
                                            className="chat"
                                            onClick={() => changeCurrChat(chat)}
                                        >
                                            <div className='image'>{image}</div>
                                            <div className='username-n-last-message'>
                                                <span className='username'>{user.username}</span>
                                                {/* <p className='last-message'>{chat.messages[chat.messages.length - 1].message}</p> */}
                                            </div>
                                        </div>
                                    );
                                else return null;
                            })
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Sidebar;
