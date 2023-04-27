
import { userActionTypes } from '../actions/actionTypes.js';
const { FETCH_USERS, CREATE_USER, UPDATE_USER, DELETE_USER } = userActionTypes;

const initialState = {
    users: [],
};

export const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_USERS: {
            return { ...state, users: action.payload };
        }
        case CREATE_USER: {
            return {
                ...state,
                users: [...state.users, action.payload]
            };
        }
        case UPDATE_USER: {
            const nusers = state.users.map(user => {
                if (user._id === action.payload._id) return action.payload;
                else return user;
            });
            return { ...state, users: nusers };
        }
        case DELETE_USER: {
            const nusers = state.users.filter(user => user._id !== action.payload._id);
            return { ...state, users: nusers };
        }

        default: return state;
    }
};