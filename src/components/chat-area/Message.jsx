import React, { useContext } from 'react';


const Message = () => {
    return (
        <div className='message-obj'>
            <img src="https://media.istockphoto.com/id/621603944/photo/beautiful-teenage-girl.jpg?s=612x612&w=0&k=20&c=p9e5SFhooPXyv0QuIvxxpstwVqADywMM09uftuUV0VI=" alt="" />
            <div className='message-n-time'>
                <p className='message'>last message last message last message last message last message last message</p>
                <span className='time'>just now</span>
            </div>
        </div>
    );
};

export const Message2 = () => {
    const { currentUser } = {}
    return (
        <div className='message1'>
            <div className='last-message-n-time'>
                <p>last message last message last message last message last message</p>
                <span className='time'>just now</span>
            </div>
            {/* <img src={currentUser.photoURL} alt="" /> */}
        </div>
    );
};

export default Message;

// 8063290258