import { useEffect } from "react";
import { createContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchChats, fetchCurrChat } from "../actions/chatsActionDispatcher";

export const Context = createContext();

const ContextProvider = ({ children }) => {
    const [currChat, setCurrChat] = useState();
    const [currUser, setCurrUser] = useState();

    const updateCurrChat = (msgObj) => {
        setCurrChat({ ...currChat, messages: [...currChat.messages, msgObj] });
    };

    function changeCurrChat (chat) {
        setCurrChat(chat);
    }

    const dispatch = useDispatch();
    useEffect(() => {
        if (currChat)
            dispatch(fetchChats(currChat._id));
    }, [currChat])

    const users = useSelector(state => state.users.users);
    console.log('users:', users);
    const chats = useSelector(state => state.chats.chats);
    console.log('chats:', chats);
    const messages = useSelector(state => state.messages.messages);
    console.log('messages:', messages);

    return (
        <Context.Provider
            value={
                { currChat, changeCurrChat, updateCurrChat }
            }
        >
            {children}
        </Context.Provider>
    );
};

export default ContextProvider;