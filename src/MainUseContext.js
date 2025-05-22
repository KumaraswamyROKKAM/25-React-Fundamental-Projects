import React from 'react'

const details =[
    {
        firstName:"surya",
        lastName:"Rokkam",
        email:"surya@gmail.com"
   },
   {
    firstName:"ram",
    lastName:"sam",
    email:"ram@gmail.com"
},
{
    firstName:"sam",
    lastName:"jam",
    email:"sam@gmail.com"
},
{
    firstName:"kim",
    lastName:"kom",
    email:"kim@gmail.com"
}
]
export const mainContext=React.createContext();

export const MainUseContext = ({children}) =>
{
    return <mainContext.Provider value={details}>{children}</mainContext.Provider>
}