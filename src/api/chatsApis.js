import axios from "axios";
import baseUrl from "./base-url";

export const fetchChats = () => axios.get(`${baseUrl}/chats`);
export const createChat = (chatObj) => axios.post(`${baseUrl}/chats`, chatObj);
export const addMessage = (chatId, msgObj) => axios.put(`${baseUrl}/chats/addmsg/${chatId}`, msgObj);
export const updateChat = (chatId, chatObj) => axios.patch(`${baseUrl}/chats/update/${chatId}`, chatObj);
export const deleteChat = (id) => axios.delete(`${baseUrl}/chats/${id}`);

export const fetchCurrChat = (chatId) => axios.get(`${baseUrl}/chats/findchat/${chatId}`);