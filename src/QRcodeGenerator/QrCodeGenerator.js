import React, { useState } from 'react'

import QRCode from 'react-qr-code'
import './stylesP7.css'

const QrCodeGenerator = () =>
{
    const [input,setInput] = useState("")
    const [status,setStatus]=useState();

    const handleClick = () =>
    {
           setStatus(input);
           setInput("");
    }
    return(
        <div >
         <center> <h1>Project 7 (QR code generator)</h1>
         <div className='Qr-container'><div>
            <input type="text" name="message" id="message" value={input} placeholder="Enter a Message" onChange={(e)=>setInput(e.target.value)}></input>
            <button disabled={input && input.trim !== ""? false :true} onClick={handleClick}>generator</button>
         </div><br></br>
         {status ? <div><div>
            <QRCode 
           id='qr-code-value'
           value={status}
            size={400}/>
         </div></div>: <h1> Enter something...</h1>}
         </div></center>
        </div>

    )
}

export default QrCodeGenerator