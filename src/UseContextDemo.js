import React from 'react'

const dataDetails = 
{
     firstName:"surya",
     lastName:"Rokkam",
     email:"surya@gmail.com"
}
export const ContextDemo=React.createContext();

export const UseContextDemo = ({children}) =>
{
    return <ContextDemo.Provider value={dataDetails}>{children}</ContextDemo.Provider>
}