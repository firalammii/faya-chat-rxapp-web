
import { chatsActionTypes } from "../actions/actionTypes";
const { FETCH_CHATS, CREATE_CHAT, UPDATE_CHAT, DELETE_CHAT, SELECT_CHAT, UPDATE_ACTIVE_CHAT, ADD_MESSAGE } = chatsActionTypes;


const initialState = {
    chats: [],
    currChat: null,
};

export const chatsReducer = (state = initialState, action) => {

    switch (action.type) {

        case FETCH_CHATS: {
            return { ...state, chats: action.payload };
        }
        case CREATE_CHAT: {
            return { ...state, chats: [...state.chats, action.payload], currChat: action.payload };

        }
        case UPDATE_CHAT: {
            const nchats = state.chats.map(chat => {
                if (chat._id === action.payload._id) return action.payload;
                else return chat;
            });
            return { ...state, chats: nchats };
        }

        case ADD_MESSAGE: {
            console.log('payload', action.payload);
            const nchats = state.chats.map(chat => {
                if (chat._id === action.payload.chatId)
                    return { ...chat, messages: [...chat.messages, action.payload] };

                return chat;
            });
            console.log('nchats', nchats);
            return { ...state, chats: nchats };
        }

        case UPDATE_ACTIVE_CHAT: {
            return { ...state, currChat: { ...state.currChat, messages: [...state.currChat.messages, action.payload] } }
        }
        case DELETE_CHAT: {
            const nchats = state.chats.filter(chat => chat._id !== action.payload._id);
            return { ...state, chats: nchats };
        }
        case SELECT_CHAT: {
            return { ...state, currChat: action.payload }
        }

        default: return state;
    }
};


// export const chatsReducer = (chats = [], action) => {
// 
//     switch (action.type) {
// 
//         case FETCH_CHATS: {
//             return action.payload;
//         }
//         case CREATE_CHAT: {
//             return [...chats, action.payload];
// 
//         }
//         case UPDATE_CHAT: {
//             return chats.map(chat => {
//                 if (chat._id === action.payload._id) return action.payload;
//                 else return chat;
//             });
// 
//         }
//         case DELETE_CHAT: {
//             return chats.filter(chat => chat._id !== action.payload._id);
//         }
// 
//         default: return chats;
//     }
// };