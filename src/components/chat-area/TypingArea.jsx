import React from 'react';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import SendIcon from '@mui/icons-material/Send';

const TypingArea = () => {
    return (

        <form className='typing-form'>
            <input
                className='type-input'
                type='text'

            />
            <InsertPhotoIcon />
            <AttachFileIcon />
            <button><SendIcon /> send</button>
        </form>
    );
};

export default TypingArea;