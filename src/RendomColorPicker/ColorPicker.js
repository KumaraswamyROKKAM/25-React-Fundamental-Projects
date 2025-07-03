import React, { useEffect, useState } from 'react'

const ColorPicker = ()=>
{
    const [StatusColor,setStatusColor]=useState("");
    const [color,setColor]=useState("#000000");

    const randomNumberPicker = (limit) =>
    {
        return Math.floor(Math.random()*limit);
    }

    const hexRandomPicker = () =>
    {
        
        const hex=[0,1,2,3,4,5,6,7,8,9,'A',"B","C","D","E","F"];
        var hexColor="#";
        for(let i=0;i<6;i++)
        {
            hexColor+=hex[randomNumberPicker(hex.length)]
        }
        setColor(hexColor)

    }
    const rgbRandomPicker = () =>
    {
        const r=randomNumberPicker(256);
        const g=randomNumberPicker(256);
        const b=randomNumberPicker(256);
        setColor(`rgb(${r},${g},${b})`)
        

        
    }
    useEffect(()=>
    {
        StatusColor === "Hex" ? hexRandomPicker() :rgbRandomPicker();
        

    },[StatusColor])

    return(
        <div>
            <center><h1>Project 2 (ColorPicker)</h1></center>
        
        <div style={
            { width:"100%",
                height:"50vh",
                background:color
            }
        }>
           
            <button onClick={()=>setStatusColor("Hex")}>Hex Color</button>
            <button onClick={()=>setStatusColor("Rgb")}>RGB color</button>
            <button onClick={StatusColor === 'Hex' ? hexRandomPicker : rgbRandomPicker}>Pick Random Color</button>
        <div
        style={{
            alignItems:"center",
            color:"white",
            display:"flex",
            justifyContent:"center",
            textAlign:"center",
            fontSize:"2rem"
        }}>
            <div>{StatusColor === "Hex" ?<div>HEX:</div>:<div>RGB:</div>}</div>
            {color}
        </div>
        
        </div>
        </div>
        
    )
}
export default ColorPicker;