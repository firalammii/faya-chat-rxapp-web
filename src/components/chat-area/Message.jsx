import React from 'react';

const Message = () => {
    return (
        <div className='message'>
            <img src="https://media.istockphoto.com/id/621603944/photo/beautiful-teenage-girl.jpg?s=612x612&w=0&k=20&c=p9e5SFhooPXyv0QuIvxxpstwVqADywMM09uftuUV0VI=" alt="" />
            <div className='last-message-n-time'>
                <p>last message last messagelast message last message last message last message last message last message last message last message last message last message last message</p>
                <span className='time'>just now</span>
            </div>
        </div>
    );
};

export const Message2 = () => {
    return (
        <div className='message1'>

            <div className='last-message-n-time'>
                <p>last message last message last message last message last message last message last message last message last message last message</p>
                <span className='time'>just now</span>
            </div>
            <img src="https://media.istockphoto.com/id/621603944/photo/beautiful-teenage-girl.jpg?s=612x612&w=0&k=20&c=p9e5SFhooPXyv0QuIvxxpstwVqADywMM09uftuUV0VI=" alt="" />
        </div>
    );
};

export default Message;