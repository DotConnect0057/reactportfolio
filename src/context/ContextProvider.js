import React, { createContext, useContext, useState } from 'react'

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
    const [ isDarkMode, setIsDarkMode ] = useState(true);

    return (
        <StateContext.Provider
            value={{ isDarkMode, setIsDarkMode
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);