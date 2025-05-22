import React,{useContext} from 'react'
import { ContextDemo } from './UseContextDemo';
import { UseContextDemo } from "./UseContextDemo";
import { mainContext } from './MainUseContext';
const UseContextDemo2 = () =>
{
    const data= useContext(ContextDemo);
    const data2=useContext(mainContext);
    
    
    return(
        <h1>
           <center>
            {data2.map((eachObj)=>
            {
                const {firstName,lastName,email}=eachObj;
            
              return(
                <>
                       {firstName}<br>
            </br>
            {lastName}<br></br>
            {email}<br></br>
                </>
              )
        })}
           </center>
        </h1>
    )
}
export default UseContextDemo2;