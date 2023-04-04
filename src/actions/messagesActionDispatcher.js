
import * as msgApi from '../api/messageApis.js';
import { chatsActionTypes } from "./actionTypes";
import { messagesActionTypes } from "./actionTypes";

const { FETCH_MESSAGES, CREATE_MESSAGE, UPDATE_MESSAGE, DELETE_MESSAGE } = messagesActionTypes;
const { UPDATE_CHAT } = chatsActionTypes;



export const fetchMessages = () => async (dispatch) => {
    try {
        const { data } = await msgApi.fetchMessages();
        dispatch({ type: FETCH_MESSAGES, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const createMessage = (msgObj) => async (dispatch) => {
    try {
        const { data } = await msgApi.createMessage(msgObj);
        // dispatch(updateUser())
        console.log(data);
        dispatch({ type: UPDATE_CHAT, payload: data });
    } catch (error) {
        console.log(error);
    }
};
// export const createMessage = (msgObj) => async (dispatch) => {
//     try {
//         const { data } = await msgApi.createMessage(msgObj);
//         // dispatch(updateUser())
//         console.log(data);
//         dispatch({ type: CREATE_MESSAGE, payload: data });
//     } catch (error) {
//         console.log(error);
//     }
// };

export const updateMessage = (id, msgObj) => async (dispatch) => {
    try {
        const { data } = await msgApi.updateMessage(id, msgObj);
        dispatch({ type: UPDATE_MESSAGE, payload: data });
    } catch (error) {
        console.log(error);
    }
};
export const deleteMessage = (id) => async (dispatch) => {
    try {
        const { data } = await msgApi.deleteMessage(id);
        dispatch({ type: DELETE_MESSAGE, payload: data });
    } catch (error) {
        console.log(error);
    }
};





