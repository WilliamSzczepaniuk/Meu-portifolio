import { createContext } from "react";
import { useState } from "react";
import { About } from "../../components/About";

export const contentContext = createContext()

export const ContentProvider = ({children}) => {
    const [actualComponent, setActualComponent] = useState(About)


    return (
        <contentContext.Provider value={{actualComponent, setActualComponent}}>{children}</contentContext.Provider>
    )
}