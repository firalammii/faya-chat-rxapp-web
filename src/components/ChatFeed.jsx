import React, { useState } from 'react';
import Messages from './Messages';
import Navbar from './ChatFeedNavbar';
import TypingArea from './TypingArea';

const ChatFeed = () => {
    const [msgSent, setMsgSent] = useState(false);
    function toggleMsgSent () {
        setMsgSent(prevs => !prevs);
    }
    return (
        <div className='chat-feed'>
            <Navbar />
            <Messages />
            <TypingArea toggleMsgSent={toggleMsgSent} />
        </div>
    );
};

export default ChatFeed;