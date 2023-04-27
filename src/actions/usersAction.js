
import * as usersApi from '../api/usersApi.js';

import { userActionTypes } from './actionTypes.js';
const { FETCH_USERS, CREATE_USER, UPDATE_USER, DELETE_USER, LOGIN, LOGOUT, ACTIVE_FRIEND } = userActionTypes;

export const fetchUsers = () => async (dispatch) => {
    try {
        const { data } = await usersApi.fetchUsers();
        dispatch({ type: FETCH_USERS, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const createUser = (user) => async (dispatch) => {
    try {
        const { data } = await usersApi.createUser(user);
        dispatch({ type: CREATE_USER, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const updateUser = (id, userObj) => async (dispatch) => {
    console.log(id);
    try {
        const { data } = await usersApi.updateUser(id, userObj);
        dispatch({ type: UPDATE_USER, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const deleteUser = (id) => async (dispatch) => {
    try {
        const { data } = await usersApi.deleteUser(id);
        dispatch({ type: DELETE_USER, payload: data });
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
export const setActiveFriend = (friend) => async (dispatch) => {
    dispatch({ type: ACTIVE_FRIEND, payload: friend });
}


