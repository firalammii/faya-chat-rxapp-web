import { createContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchChats, updateChat } from "../actions/chatsActionDispatcher";

export const Context = createContext();

const ContextProvider = ({ children }) => {
    const [currChat, setCurrChat] = useState();

    const dispatch = useDispatch();

    const updateCurrChat = (msgObj) => {
        setCurrChat({ ...currChat, messages: [...currChat.messages, msgObj] });
        // dispatch(updateChat(currChat._id, currChat));
    };



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