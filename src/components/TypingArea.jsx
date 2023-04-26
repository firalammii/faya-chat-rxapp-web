import React, { useContext, useState } from 'react';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import InsertPhotoRoundedIcon from '@mui/icons-material/InsertPhotoRounded';
import SendIcon from '@mui/icons-material/Send';
import { useDispatch, useSelector } from 'react-redux';
// import { v4 as uuidv4 } from 'uuid';
import { Context } from '../context-API/ContextProvider';
import { createMessage } from '../actions/messagesActionDispatcher';

const TypingArea = () => {

    const [text, setText] = useState('');

    const dispatch = useDispatch();
    const currUser = useSelector(state => state.users.currentUser);
    // const activeFriend = useSelector(state => state.users.activeFriend);
    // const activeChat = useSelector(state => state.chats.activeChat);
    const { currChat, updateCurrChat } = useContext(Context);

    // console.log(activeChat);

    const sendMessage = (e) => {
        e.preventDefault();
        if (currChat) {
            console.log('sending ...');
            const msgObj = {
                chatId: currChat?._id,
                message: text,
                sender: currUser._id,
                attachments: [],
                createdOn: new Date()
            };

            dispatch(createMessage(msgObj));
            setText('');
            updateCurrChat(msgObj);
        }
    }

    return (
        <div className='typing-area' id='typing-area'>
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