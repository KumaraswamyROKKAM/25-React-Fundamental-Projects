import { useState,useEffect } from "react";
import {BsArrowLeftCircleFill,BsArrowRightCircleFill} from 'react-icons/bs'
import './styles4.css'

const url="https://picsum.photos/v2/list?page=1&limit=";
const ImageSlider = () =>
{
    const [list,setList]=useState([]);
    const [search,setSearch]=useState(false);
    const [limit,setLimit]=useState()
    const [currentIndex,setCurrentIndex]=useState(0)
   
    const fetchData =async(ActiveUrl)=>
    {
        const response=await fetch(ActiveUrl);
        const data=await response.json();
        setList(data)
        
    }

    useEffect(()=>
    {
        const finalUrl = `${url}${limit}`
        
        fetchData(finalUrl);
    },[search])

    const handleSearch = () =>
    {
        setSearch(!search);
    }
    const handlPrevious = () =>
    {
        setCurrentIndex(currentIndex === 0?list.length - 1: currentIndex-1)
    }

    const handleNext = () =>
    {
        setCurrentIndex(currentIndex === list.length-1?0:currentIndex+1)

    }

    const currentSider =(indexVal)=>
    {
        setCurrentIndex(indexVal);
    }

    return(

       <div >
       <center><h1>Project 4 (ImageSlider)</h1></center>

        <div>
            <input type="text" name="limit" id="limit" value={limit} placeholder="Enter limit" onChange={(e)=>setLimit(e.target.value)}></input>
            <button onClick={handleSearch}>Search</button>
            
        </div>
        <div className="container">
        <BsArrowLeftCircleFill onClick={handlPrevious} className="arrow leftArrow" />
       {list.map((eachItem,index)=>
        {
            const{id,download_url}=eachItem;
            return(
                
                <li key={id} className="eachItem">
                <div>
                    <img src={download_url} alt="photo" className={currentIndex === index ? "activeImage" :"inActiveImage"}></img>
                </div>
                </li>
            )
        })}
        <BsArrowRightCircleFill onClick={handleNext} className="arrow rightArrow"/>
        <div className="circle-Indicators">
            {list.map((_,index)=><button  key={index} className={currentIndex === index ? "currentButton" :"hideButton"} onClick={()=>currentSider(index)}>
               

            </button>)}

        </div>
        </div>
        </div>
    )
}
export default ImageSlider;