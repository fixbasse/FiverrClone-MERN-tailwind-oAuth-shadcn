import React, { createContext, useContext, useState } from 'react'

export type LoadingContextTypes = {
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>> | null;
};

export const LoadingContext = createContext<LoadingContextTypes | null>({
    isLoading: false,
    setIsLoading: null,
});

export const LoadingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <LoadingContext.Provider
            value={{ isLoading, setIsLoading }}
        >
            {children}
        </LoadingContext.Provider>
    );
};

export const useLoading = () => {
    const context = useContext(LoadingContext);
    if (!context) throw new Error("useLoading error!");
};
