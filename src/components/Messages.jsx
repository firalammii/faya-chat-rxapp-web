/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useRef, } from 'react';
import { useDispatch } from 'react-redux';

import { MyMessage } from './MessageShow';
import { TheirMessage } from './MessageShow';
import { Context } from '../context-API/ContextProvider';
import { fetchChats } from '../actions/chatsActionDispatcher';

const Messages = () => {

    const messagesEndRef = useRef(null);

    const dispatch = useDispatch();
    const { currChat, currUser } = useContext(Context);

    useEffect(() => {
        dispatch(fetchChats());
    }, [currChat, currUser]);

    // const currChat = useSelector(state => state.chats.currChat);
    // console.log('currChat:', currChat);

    // const currUser = useSelector(state => state.users.currUser);
    // console.log('currUser:', currUser);

    const chatFriend = currChat?.users.filter(friend => friend._id !== currUser._id)[0];
    // console.log('chatFriend:', chatFriend);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [currChat]);

    return (
        currChat && currChat?.messages.length > 0 &&
        currChat?.messages.map(message => {
            // console.log('message:', message)
            const myMessage = currUser._id === message.sender;
            // console.log(myMessage);
            return (
                <div
                    key={message._id}
                    className='messages'
                    ref={messagesEndRef}
                >
                    {
                        myMessage ?
                            <MyMessage
                                message={message} 
                                user={currUser}
                            />
                            : <TheirMessage
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