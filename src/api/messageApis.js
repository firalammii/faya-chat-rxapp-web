import axios from "axios";

const API_URL = 'http://localhost:3000/messages';
// const API_URL = 'https://faya-chat-app-api.onrender.com/messages';

export const fetchMessages = () => axios.get(API_URL);
export const createMessage = (msgObj) => axios.post(API_URL, msgObj);
export const updateMessage = (id, msgObj) => axios.patch(`${API_URL}/${id}`, msgObj);
export const deleteMessage = (id) => axios.delete(`${API_URL}/${id}`);