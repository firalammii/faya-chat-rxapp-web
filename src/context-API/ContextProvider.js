import { createContext, useState } from "react";
import { useSelector } from "react-redux";

export const Context = createContext();

const ContextProvider = ({ children }) => {
    const [currChat, setCurrChat] = useState();

    const updateCurrChat = (msgObj) => {
        setCurrChat({ ...currChat, messages: [...currChat.messages, msgObj] });
    };

    const users = useSelector(state => state.users.users);
    console.log('users:', users);
    const chats = useSelector(state => state.chats.chats);
    console.log('chats:', chats);

    return (
        <Context.Provider
            value={
                { currChat, setCurrChat, updateCurrChat }
            }
        >
            {children}
        </Context.Provider>
    );
};

export default ContextProvider;