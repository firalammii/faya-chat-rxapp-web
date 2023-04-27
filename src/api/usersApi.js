import axios from "axios";
import baseUrl from "./base-url";

export const fetchUsers = () => axios.get(`${baseUrl}/users`);
export const createUser = (userObj) => axios.post(`${baseUrl}/users`, userObj);
export const updateUser = (id, msgObj) => axios.patch(`${baseUrl}/users/${id}`, msgObj);
// export const updateUser = (id, userObj) => axios.patch(`${baseUrl}/users/${id}`, userObj);
export const deleteUser = (id) => axios.delete(`${baseUrl}/users/${id}`);
