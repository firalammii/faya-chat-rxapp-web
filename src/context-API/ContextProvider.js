/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useState, useEffect } from "react";
import { useDispatch, } from "react-redux";

import { fetchChats } from "../actions/chatsActionDispatcher";
import { fetchMessages } from "../actions/messagesActionDispatcher";
import { fetchUsers } from "../actions/usersAction";

export const Context = createContext();

const ContextProvider = ({ children }) => {
    const [currChat, setCurrChat] = useState();
    const [currUser, setCurrUser] = useState(JSON.parse(localStorage.getItem('currUser')) || null);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
        dispatch(fetchChats());
        dispatch(fetchMessages());
    }, []);

    const updateCurrChat = (msgObj) => {
        setCurrChat({ ...currChat, messages: [...currChat.messages, msgObj] });
    };

    function changeCurrChat (chat) {
        dispatch(fetchChats());
        dispatch(fetchMessages());
        dispatch(fetchUsers());
        setCurrChat(chat);
    }
    function login (user) {
        const partialUserInfo = { ...user, pwd: '**********' };
        localStorage.setItem('currUser', JSON.stringify(partialUserInfo));
        setCurrUser(user);
    }
    function logout () {
        localStorage.removeItem('currUser');
        setCurrUser(null);
    }

    // const users = useSelector(state => state.users.users);
    // console.log('users:', users);

    // const chats = useSelector(state => state.chats.chats);
    // console.log('chats:', chats);

    // const messages = useSelector(state => state.messages.messages);
    // console.log('messages:', messages);

    return (
        <Context.Provider
            value={
                {
                    currChat, changeCurrChat, updateCurrChat,
                    currUser, login, logout
                }
            }
        >
            {children}
        </Context.Provider>
    );
};

export default ContextProvider;