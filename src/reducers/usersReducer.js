
import { userActionTypes } from '../actions/actionTypes.js';
const { FETCH_USERS, CREATE_USER, LOGIN, LOGOUT, ACTIVE_FRIEND } = userActionTypes;

const initialState = {
    users: [],
    currUser: JSON.parse(localStorage.getItem('currUser')) || null,
    activeFriend: JSON.parse(localStorage.getItem('activeFriend')) || null,
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
        case LOGIN: {
            const partialUserInfo = { ...action.payload, pwd: '**********' };
            localStorage.setItem('currUser', JSON.stringify(partialUserInfo));
            return { ...state, currUser: action.payload }
        }
        case LOGOUT: {
            localStorage.removeItem('currUser');
            localStorage.removeItem('activeFriend');
            return { ...state, currUser: null };
        }
        case ACTIVE_FRIEND: {
            // localStorage.setItem('activeFriend', JSON.stringify(action.payload));
            return { ...state, activeFriend: action.payload };
        }
        default: return state;
    }
};