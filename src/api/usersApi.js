import axios from "axios";

const API_URL = 'http://localhost:3000/users';
// const API_URL = 'https://faya-chat-app-api.onrender.com/users';

export const fetchUsers = () => axios.get(API_URL);
export const createUser = (user) => axios.post(API_URL, user);