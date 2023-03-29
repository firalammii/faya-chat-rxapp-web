
import * as api from '../api/usersApi.js';

import { userActionTypes } from './actionTypes.js';
const { FETCH_USERS, CREATE_USER, LOGIN, LOGOUT } = userActionTypes;

export const fetchUsers = () => async (dispatch) => {
    try {
        const { data } = await api.fetchUsers();
        dispatch({ type: FETCH_USERS, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const createUser = (user) => async (dispatch) => {
    try {
        const { data } = await api.createUser(user);
        dispatch({ type: CREATE_USER, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const login = (user) => async (dispatch) => {
    dispatch({ type: LOGIN, payload: user });
};
export const logout = (user) => async (dispatch) => {
    dispatch({ type: LOGOUT, payload: user });
}


