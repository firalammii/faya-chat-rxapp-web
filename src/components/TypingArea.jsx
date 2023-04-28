import React, { useContext, useState } from 'react';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import InsertPhotoRoundedIcon from '@mui/icons-material/InsertPhotoRounded';
import SendIcon from '@mui/icons-material/Send';
import { useDispatch, } from 'react-redux';
import { createMessage } from '../actions/messagesActionDispatcher';
import { Context } from '../context-API/ContextProvider';

const TypingArea = () => {

    const [text, setText] = useState('');
    const { currChat, updateCurrChat, currUser } = useContext(Context)

    const dispatch = useDispatch();

    // const currUser = useSelector(state => state.users.currUser);
    // console.log('currUser:', currUser);

    // const currChat = useSelector(state => state.chats.currChat);
    // console.log('currChat:', currChat);

    const sendMessage = async (e) => {
        e.preventDefault();
        if (currChat && currUser) {
            console.log('sending ...');
            const msgObj = {
                chatId: currChat._id,
                message: text,
                sender: currUser._id,
                attachments: [],
                createdOn: new Date(),
            };
            const savedMsg = await dispatch(createMessage(msgObj));
            setText('');
            updateCurrChat(savedMsg);
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
                <button >
                    <SendIcon titleAccess='send' />
                </button>
            </form>
        </div>
    );
};

export default TypingArea;