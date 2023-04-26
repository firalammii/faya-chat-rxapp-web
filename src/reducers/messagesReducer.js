
import { messagesActionTypes } from "../actions/actionTypes";
const { CREATE_MESSAGE, UPDATE_MESSAGE, DELETE_MESSAGE, FETCH_MESSAGES } = messagesActionTypes;

const initialState = {
    messages: [],
};
export const messageReducer = (state = initialState, actions) => {

    switch (actions.type) {

        case FETCH_MESSAGES: {
            return { ...state, messages: actions.payload };
        }
        case CREATE_MESSAGE: {
            return {
                ...state,
                messages: [
                    ...state.messages,
                    actions.payload
                ]
            };
        }
        case UPDATE_MESSAGE: {
            const nmessages = state.messages.map(message => {
                if (message._id === actions.payload._id) return actions.payload;
                else return message;
            });
            return { ...state, messages: nmessages };
        }
        case DELETE_MESSAGE: {
            const nmessages = state.messages.filter(message => message._id !== actions.payload._id);
            return { ...state, messages: nmessages };
        }

        default: return state;
    }
};



// import { messagesActionTypes } from "../actions/actionTypes";
// const { CREATE_MESSAGE, UPDATE_MESSAGE, DELETE_MESSAGE, FETCH_MESSAGES } = messagesActionTypes;

export const messagesReducer = (messages = [], actions) => {

    switch (actions.type) {

        case FETCH_MESSAGES: {
            return actions.payload;
        }
        case CREATE_MESSAGE: {
            return [...messages, actions.payload];

        }
        case UPDATE_MESSAGE: {
            return messages.map(message => {
                if (message._id === actions.payload._id) return actions.payload;
                else return message;
            });

        }
        case DELETE_MESSAGE: {
            return messages.filter(message => message._id !== actions.payload._id);
        }

        default: return messages;
    }
};