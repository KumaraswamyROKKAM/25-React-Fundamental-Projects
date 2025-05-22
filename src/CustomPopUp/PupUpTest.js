import React,{useState} from 'react'
import PopUp from './PopUp'
const PopUpTest = () =>
{
    const [open,setOpen]=useState(false)

    const handleOnClick = () =>
    {
        setOpen(!open)
    }
    const handleChange = () =>
    {
        setOpen(false)
    }
    return(

        <div>
            <div>
                <h1><center>Project 10 (Custom PopUp)</center></h1>
            </div>
             <div className='containerP10'>
             <button onClick={handleOnClick}>Open PopUp</button>

             {open && <PopUp onChange={handleChange}/>}
             </div>

        </div>
    )
}
export default PopUpTest;