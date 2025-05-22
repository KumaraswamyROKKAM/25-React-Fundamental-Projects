import MenuItem from "./MenuItem";
import './stylesP6.css'
import React,{useState} from 'react'


const ItemView = ({item}) =>
{
    const [open,setOpen]=useState(false);


    const handleParent = () =>
        {
            setOpen(!open)
        }
          return(
            <div >
              <div className="itemPlus" onClick={handleParent}>
              <li >{item.label}</li> 
               {
                item && item.children && item.children.length ?<span >{open ?<span>-</span>:<span>+</span>} </span>:null
               }
               </div>
               
                {open ?
              <div>
               {
                item && item.children && item.children.length ? <div><MenuItem list={item.children} /></div>:null
               }
               </div>:null}
            </div>
          )
}
export default ItemView;