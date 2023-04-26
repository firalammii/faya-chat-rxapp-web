import { configureStore } from '@reduxjs/toolkit';
import { usersReducer } from '../reducers/usersReducer';
import { messageReducer } from '../reducers/messagesReducer';
import { chatsReducer } from '../reducers/chatsReducer'

const store = configureStore({
    reducer: {
        users: usersReducer,
        messages: messageReducer,
        chats: chatsReducer,
    }
});

export default store;