
import { userActionTypes } from '../actions/actionTypes.js';
const { FETCH_USERS, CREATE_USER, LOGIN, LOGOUT } = userActionTypes;

const initialState = {
    users: [],
    currentUser: null
};





export const usersReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case FETCH_USERS: {
            return { ...state, users: actions.payload };
        }
        case CREATE_USER: {
            return {
                ...state,
                users: [...state.users, actions.payload]
            };
        }

        case LOGIN: {
            return { ...state, currentUser: actions.payload };
        }
        case LOGOUT: {
            return { ...state, currentUser: null };
        }
        default: return state;
    }
};



// export const usersReducer = (users = [], actions) => {
//     switch (actions.type) {
//         case FETCH_USERS: {
//             return actions.payload;
//         }
//         case CREATE_USER: {
//             return [...users, actions.payload];
//         }
//         default: return users;
//     }
// };