import React from 'react';

const TypingArea = () => {
    return (

        <form className='typing-form'>
            <input
                className='type-input'
                type='text'
            />
            <button>send</button>
        </form>
    );
};

export default TypingArea;