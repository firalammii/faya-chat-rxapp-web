import { configureStore } from '@reduxjs/toolkit';
import { usersReducer } from '../reducers/usersReducer';
// import { messagesReducer } from '../reducers/messagesReducer';
import { chatsReducer } from '../reducers/chatsReducer'

const store = configureStore({
    reducer: {
        users: usersReducer,
        // messages: messagesReducer,
        chats: chatsReducer,
    }
});

export default store;