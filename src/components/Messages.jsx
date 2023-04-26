import React, { useContext, useEffect, useRef, useState } from 'react';
import { MyMessage } from './MessageShow';
import { TheirMessage } from './MessageShow';
import { useSelector, useDispatch } from 'react-redux';
import { fetchChats } from '../actions/chatsActionDispatcher';
import { Context } from '../context-API/ContextProvider';

const Messages = () => {

    const messagesEndRef = useRef(null);

    const { currChat, updateCurrChat } = useContext(Context);
    console.log('currChat', currChat);

    const currentUser = useSelector(state => state.users.currentUser);
    const chatFriend = currChat?.users.filter(friend => friend._id !== currentUser._id)[0];

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [currChat]);

    return (
        currChat && currChat.messages.length > 0 &&
        currChat.messages.map(message => {
            // console.log(message)
            const myMessage = currentUser._id === message.sender;
            // console.log(myMessage);
            return (
                <div className='messages' ref={messagesEndRef}>
                    {
                        myMessage ?
                            <MyMessage
                                key={message.id}
                                message={message} 
                                user={currentUser}
                            />
                            : <TheirMessage
                                key={message.text}
                                message={message}
                                user={chatFriend}
                            />
                    }
                </div>
            );
        })
    );
};
//01425919938000
export default Messages;