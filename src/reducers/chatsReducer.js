
import { chatsActionTypes } from "../actions/actionTypes";
const { FETCH_CHATS, CREATE_CHAT, UPDATE_CHAT, DELETE_CHAT } = chatsActionTypes;

export const chatsReducer = (chats = [], actions) => {

    switch (actions.type) {

        case FETCH_CHATS: {
            return actions.payload;
        }
        case CREATE_CHAT: {
            return [...chats, actions.payload];

        }
        case UPDATE_CHAT: {
            return chats.map(chat => {
                if (chat._id === actions.payload._id) return actions.payload;
                else return chat;
            });

        }
        case DELETE_CHAT: {
            return chats.filter(chat => chat._id !== actions.payload._id);
        }

        default: return chats;
    }
};