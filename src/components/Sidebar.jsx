import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CircularProgress } from '@mui/material';
import Chats from './chats'

const Sidebar = () => {
    const [friends, setFriends] = useState([]);
    const [searchKey, setSearchKey] = useState('');

    useEffect(() => {
        if (!searchKey) setFriends([]);
        else handleSearch();
    }, [searchKey]);

    const handleKeyDown = (e) => {
        e.code === 'Enter' && handleSearch();
    };

    const users = useSelector(state => state.users.users);
    console.log(users);
    const currentUser = useSelector(state => state.users.currentUser);
    // console.log(currentUser);
    const handleSearch = async () => {
        try {
            const withoutCurrentUser = await users.filter(user => user._id !== currentUser._id);
            // console.log(withoutCurrentUser)
            const withSearchKey = await withoutCurrentUser.filter(user => user.displayName.match(searchKey));
            setFriends(withSearchKey);
        } catch (error) {
            console.log(error);
        }
    };

    const addToChatList = (chat) => {
        // chat:{
        //     users: 
        // }

    }

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
                    friends.length > 0 ?
                        friends.map(user => <div key={user._id} className="chat" onClick={addToChatList}>
                        <img src={user.pp} alt='' />
                        <div className='username-n-last-message'>
                            <span className='username'>{user.displayName}</span>
                            <p className='last-message'>Hello</p>
                        </div>
                    </div>)
                        : searchKey && <CircularProgress />
                    //when i have sth to search it overrides the ealier display 
                }
                {
                    users && users.chats && users.chats.length &&
                    users.chats.map(chat => {
                        return (
                            <div key={chat.uuid} className="chat">
                                <img src={chat.pp} alt='' />
                                <div className='username-n-last-message'>
                                    <span className='username'>chat.displayName</span>
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
