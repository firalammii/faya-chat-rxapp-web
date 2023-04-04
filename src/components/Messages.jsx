import React, { useEffect, useState } from 'react';
import Message from './Message';
import { Message2 } from './Message';
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

    return (

        activeChat && activeChat.messages.length > 0 &&
        activeChat.messages.map(message => {
            const myMessage = currentUser._id === message.sender;
            console.log(myMessage);
            return (
                <div key={message.id} className='messages'>
                    {
                        myMessage ? <Message2 message={message} user={currentUser} />
                            : <Message
                                message={message}
                                user={activeChat.users.filter(user => user._id !== currentUser._id)}
                            />
                    }
                </div>
            );
        })
    );
};
//01425919938000
export default Messages;