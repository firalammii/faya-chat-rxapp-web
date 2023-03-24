import React from 'react';
import Message from './Message';
import { Message2 } from './Message';

const Messages = () => {
    return (
        <div className='messages'>
            <Message />
            <Message2 />
            <Message2 />
            <Message />
            <Message2 />
            <Message />

        </div>
    );
};

export default Messages;