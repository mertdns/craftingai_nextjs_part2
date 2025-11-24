"use client";

import { Provider } from "react-redux";
import { store } from "./store/store";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});


function appLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="tr" className="h-full scroll-smooth">
            <head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" />
            </head>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased h-full bg-gradient-to-r from-slate-900 to-slate-700`}>
                <Provider store={store}>
                    {children}
                </Provider>
            </body>
        </html>
    )
}

export default appLayout;