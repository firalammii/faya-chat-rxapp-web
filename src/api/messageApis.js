import axios from "axios";
import baseUrl from "./base-url";

export const fetchMessages = () => axios.get(`${baseUrl}/messages`);
export const createMessage = (msgObj) => axios.post(`${baseUrl}/messages`, msgObj);
export const updateMessage = (id, msgObj) => axios.patch(`${baseUrl}/messages/${id}`, msgObj);
export const deleteMessage = (id) => axios.delete(`${baseUrl}/messages/${id}`);