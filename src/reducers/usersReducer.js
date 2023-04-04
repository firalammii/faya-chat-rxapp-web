
import { userActionTypes } from '../actions/actionTypes.js';
const { FETCH_USERS, CREATE_USER, LOGIN, LOGOUT, ACTIVE_FRIEND } = userActionTypes;

const initialState = {
    users: [],
    currentUser: JSON.parse(localStorage.getItem('currentUser')) || null,
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
            // const { displayName, email, pp, _id } = action.payload;
            // localStorage.setItem('currentUser', JSON.stringify(action.payload));
            return { ...state, currentUser: action.payload }
        }
        case LOGOUT: {
            localStorage.removeItem('currentUser');
            localStorage.removeItem('activeFriend');
            return { ...state, currentUser: null };
        }
        case ACTIVE_FRIEND: {
            // localStorage.setItem('activeFriend', JSON.stringify(action.payload));
            return { ...state, activeFriend: action.payload };
        }
        default: return state;
    }
};
