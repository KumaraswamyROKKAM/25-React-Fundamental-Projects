
import React from 'react'
import useLocalStorage from './UseLocalStorage';

import "./StylesP8.css"

const ChangeMode = () =>
{
    const[Theme,setTheme]=useLocalStorage('theme','dark')

    const handleClick = () =>
    {
        setTheme(Theme === "light"?"dark":"light")
    }
    return(
        <div>
            <div>
               <center><h1> Project 8 (Light-Dark-Theme)</h1></center>
            </div>
        <div>
            
        </div>
        <div >
        <div className='containerP8' data-theme={Theme}> 
            <h1>hello world</h1>
            <button onClick={handleClick}>Change Theme</button>
        </div>
        </div>
        </div>
        
    )
}

export default ChangeMode;