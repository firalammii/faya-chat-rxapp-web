
import * as chatsApi from '../api/chatsApis.js';

import { chatsActionTypes } from "./actionTypes";
const { FETCH_CHATS, CREATE_CHAT, UPDATE_CHAT, DELETE_CHAT, SELECT_CHAT, ADD_MESSAGE } = chatsActionTypes;

export const fetchChats = () => async (dispatch) => {
    try {
        const { data } = await chatsApi.fetchChats();
        dispatch({ type: FETCH_CHATS, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const createChat = (chatObj) => async (dispatch) => {
    try {
        const { data } = await chatsApi.createChat(chatObj);
        dispatch({ type: CREATE_CHAT, payload: data });
        // const { data } = await chatsApi.createChat(chatObj);
    } catch (error) {
        console.log(error);
    }
};

export const addMessage = (chatId, msgObj) => async (dispatch) => {
    try {
        const { data } = await chatsApi.addMessage(chatId, msgObj);
        dispatch({ type: ADD_MESSAGE, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const updateChat = (chatId, chatObj) => async (dispatch) => {
    try {
        const { data } = await chatsApi.updateChat(chatId, chatObj);
        dispatch({ type: UPDATE_CHAT, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const deleteChat = (id) => async (dispatch) => {
    try {
        const { data } = await chatsApi.deleteChat(id);
        dispatch({ type: DELETE_CHAT, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const setActiveChat = (chat) => async (dispatch) => {
    dispatch({ type: SELECT_CHAT, payload: chat });
};

export const fetchCurrChat = (chatId) => async (dispatch) => {
    try {
        const { data } = await chatsApi.fetchCurrChat(chatId);
        dispatch({ type: SELECT_CHAT, payload: data });
    } catch (error) {
        console.log(error);
    }
};
