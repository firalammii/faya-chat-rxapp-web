import React, { useState } from 'react';
import Chats from './Chats';
import Search from './Search';

const Sidebar = () => {
    const [friends, setFriends] = useState([]);
    return (
        <div className='sidebar'>
            <Search setFriends={setFriends} />
            <Chats friends={friends} />
        </div>
    );
};

export default Sidebar;