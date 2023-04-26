import { createContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchChats, updateChat } from "../actions/chatsActionDispatcher";
import { fetchUsers } from "../actions/usersAction";

export const Context = createContext();

const ContextProvider = ({ children }) => {
    const [currChat, setCurrChat] = useState();

    const dispatch = useDispatch();

    // await dispatch(fetchUsers()); 
    // await dispatch(fetchChats())

    const updateCurrChat = (msgObj) => {
        setCurrChat({ ...currChat, messages: [...currChat.messages, msgObj] });
        // dispatch(updateChat(currChat._id, currChat));
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