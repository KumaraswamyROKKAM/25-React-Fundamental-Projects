import React,{useState} from 'react'
import './Tabs.css'

const Tabs = (props) =>
{
    const {TabsContent}=props;

    const [indexVal,setIndexVal]=useState(0)

    const handleOnClick = (index) =>
    {
        setIndexVal(index);
        
    }
    return(
        <div className='containerP91'>
            <div className='P91TabCon'>
                {TabsContent.map((eachItem,index)=>
                {
                    const {lable, content}=eachItem;
                    return(
                        <div  key={index}>
                            <button onClick={()=>handleOnClick(index)} className= {index=== indexVal? "tabActiveButton":"tabButton"}>{lable}</button>
                        </div>
                )
                })}
            </div>
            <div className='P91Content'>
                
                {TabsContent && TabsContent[indexVal].content}
            </div>       
     </div>
    )
}
export default Tabs