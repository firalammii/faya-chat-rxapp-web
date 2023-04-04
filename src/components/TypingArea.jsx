import React, { useState } from 'react';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import InsertPhotoRoundedIcon from '@mui/icons-material/InsertPhotoRounded';
import SendIcon from '@mui/icons-material/Send';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { createMessage } from '../actions/messagesActionDispatcher';
import { createChat, updateChat } from '../actions/chatsActionDispatcher';

const TypingArea = () => {

    const [text, setText] = useState('');

    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.users.currentUser);
    // const activeFriend = useSelector(state => state.users.activeFriend);
    const activeChat = useSelector(state => state.chats.activeChat);
    // console.log(activeChat);

    const sendMessage = (e) => {
        e.preventDefault();
        console.log('sending ...');
        const msgObj = {
            id: uuidv4(),
            chatId: activeChat._id,
            message: text,
            sender: currentUser._id,
            attachments: []
        };
        // const chatObj = {
        //     ...activeChat,
        //     messages: [
        //         ...activeChat.messages,
        //         msgObj
        //     ]
        // };
        // dispatch(createMessage(msgObj));
        // dispatch(updateChat(activeChat._id, msgObj));

        dispatch(updateChat(activeChat._id, msgObj));
        setText('');
    }

    return (
        <div className='typing-area'>
            <form className='typing-form' onSubmit={sendMessage}>
                <input
                    className='type-input'
                    type='text'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <InsertPhotoRoundedIcon titleAccess='add foto' className='photo' />
                <AttachFileIcon titleAccess='add file' className='attach' />
                <button ><SendIcon titleAccess='send' /> </button>
            </form>
        </div>
    );
};

export default TypingArea;