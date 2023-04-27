
import * as usersApi from '../api/usersApi.js';

import { userActionTypes } from './actionTypes.js';
const { FETCH_USERS, CREATE_USER, UPDATE_USER, DELETE_USER, } = userActionTypes;

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