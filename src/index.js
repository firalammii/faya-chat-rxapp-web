import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import store from "./store/store";
import ContextProvider from "./context-API/ContextProvider";
import App from "./App";

ReactDOM.createRoot(document.getElementById('root'))
    .render(
        <Provider store={store}>
            <ContextProvider>
                {/* <StrictMode> */}
                    <App />
                {/* </StrictMode> */}
            </ContextProvider>

        </Provider>

);