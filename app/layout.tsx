"use client";

import { Provider } from "react-redux";
import { store } from "./store/store";

function appLayout({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default appLayout;