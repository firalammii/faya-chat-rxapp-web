import React from 'react';
import ChatFeed from './ChatFeed';
import Sidebar from './Sidebar';

const SideBarNchatFeed = () => {
    return (
        <div className='container-sidebar-n-chatfeed'>
            <Sidebar />
            <ChatFeed />
        </div>
    );
};

export default SideBarNchatFeed;