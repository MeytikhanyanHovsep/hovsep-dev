"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

interface AppContextType {
    lang: boolean;
    setLang: (lang: boolean) => void;
    toggleLang: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
    const [lang, setLang] = useState<boolean>(false);

    const toggleLang = () => {
        setLang((prev) => !prev);
    };

    return (
        <AppContext.Provider value={{ lang, setLang, toggleLang }}>
            {children}
        </AppContext.Provider>
    );
};

export const useApp = () => {
    const context = useContext(AppContext);
    if (!context) throw new Error("useApp must be used within AppProvider");
    return context;
};
