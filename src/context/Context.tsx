'use client'
import { createContext, useContext, useState } from 'react'
// creating context 
//wrapping our app
//exporting our custom hook

//first define our conetxt

interface IContextValue {
    pageTwoName: string
    setPageTwoName: (pageTwoName: string) => void

}

export const Context = createContext<IContextValue>({} as IContextValue);

//the functinoal component to [ass the provided context to our children]
export const AppWrapper = ({ children, }: Readonly<{ children: React.ReactNode; }>) => {
    const [pageTwoName, setPageTwoName] = useState<string>("");

    return (
        <Context.Provider value={{ pageTwoName, setPageTwoName }}>
            {children}
        </Context.Provider>
    )
}

//our function that gives us access to our context value
export const useAppContext = () => {
    return useContext(Context);
}

