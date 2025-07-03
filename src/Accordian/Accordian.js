import React, { useState } from 'react'
import data from './Data'
import './styles1.css'
const Accordian = () =>
{
    const [openIdList,setOpenIdList]=useState([]);
    const [status,setStatus]=useState(false);
    const [specific,setSpecific]=useState();

    const handleClick = (id) =>
    {
        if(status){
        const exist=openIdList.some((eachItem)=>eachItem.id == id);
        if(exist)
        {
            var newList=openIdList.filter((eachItem)=>eachItem.id !== id)
        }
        else
        newList =[...openIdList,{id}];

        setOpenIdList(newList)
    }
    else
    {
         setSpecific(id==specific ?null :id)
    }
    }

    const handleMultiple = () =>
    {
        setStatus(true)
    }
    return(
        <div>
            <center><h1>Project 1 (Accordian)</h1></center>
            <div>
                <center>
                    <div >
                        <button onClick={handleMultiple} className='btn'>enabel Multiple Selection</button>

                        {data.map((eachItem)=>
                        {
                            const {id,Qusetion,Answer}=eachItem;
                            return(
                                <div onClick={()=>handleClick(id)} key={id} className='container1'>
                                <li >
                                    <div>{Qusetion}</div>
                                    <span>+</span>
                                    <div>
                                        {
                                            status?(openIdList.map((item)=>
                                            {
                                                

                                                return(
                                                    <div key={item.id}>
                                                        {
                                                       item.id == id ?<div>{Answer}</div>:null
                                                    }
                                                    </div>
                                                )

                                            })):(specific==id?<div>{Answer}</div>:null)
                                        
                                       
                                            }

                                    </div>
                                </li>
                                </div>
                            )
                        })}
                    </div>
                </center>
            </div>
        </div>
    )
}
export default Accordian;