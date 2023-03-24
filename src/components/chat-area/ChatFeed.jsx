import React from 'react';
import Messages from './Messages';
import Navbar from './Navbar';
import TypingArea from './TypingArea';

const ChatFeed = () => {
    return (
        <div className='chat-feed'>
            <Navbar />
            <Messages />
            <TypingArea />
        </div>
    );
};

export default ChatFeed;