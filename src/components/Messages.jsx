import React, { useEffect, useState } from 'react';
import { MyMessage } from './TextDisplayer';
import { TheirMessage } from './TextDisplayer';
import { useSelector, useDispatch } from 'react-redux';
import { fetchChats } from '../actions/chatsActionDispatcher';

const Messages = () => {
    const [currentChat, setCurrentChat] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchChats());


    }, []);

    const activeChat = useSelector(state => state.chats.activeChat);
    const currentUser = useSelector(state => state.users.currentUser);
    // console.log(activeChat)
    const chatFriend = activeChat && activeChat.users.filter(friend => friend._id !== currentUser._id)[0]

    return (
        activeChat && activeChat.messages.length > 0 &&
        activeChat.messages.map(message => {
            const myMessage = currentUser._id === message.sender;
            console.log(myMessage);
            return (
                <div className='messages'>
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