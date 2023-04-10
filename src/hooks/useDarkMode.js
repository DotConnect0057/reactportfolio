import React, { useCallback, useState, useEffect } from 'react'
import { useStateContext } from '../context/ContextProvider'


export const useDarkMode = () => {

    const {isDarkMode, setIsDarkMode} = useStateContext();

    const toggle = useCallback(() => {
        setIsDarkMode((prev) => !prev)
    }
    , []);


    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [isDarkMode])

    return {isDarkMode, toggle}

}