import "./StylesP9.css";
import React, { useState,useEffect } from 'react'

const Scroll = (props) =>
{
    const {url}=props
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState("");
    const [scrollPercentage,setScrollPercentage]=useState(0);

    const fetchFunction = async(fetchUrl) =>
    {
        setLoading(true)
        try{
            const response= await fetch(fetchUrl);
            const data=await response.json();
            
            setData(data.products);
            setLoading(false)
        }
        catch(e)
        {
            setLoading(false)
            setError(e.message);
        }
    }

    const handleScrollPercentage = () =>
    {
        
        const howMuchScrolled= (document.body.scrollTop || document.documentElement.scrollTop);
        const height = document.documentElement.scrollHeight-document.documentElement.clientHeight;

        setScrollPercentage((howMuchScrolled/height)*100);

        
    }

    useEffect(() => {
    fetchFunction(url)
    },[])

    useEffect(()=>
    {
       window.addEventListener('scroll',handleScrollPercentage)

       return()=>
       {
        window.removeEventListener('scroll', () =>{})
       }
    },[])
    console.log(scrollPercentage)
    return(
        <div>
            <div className="scrollContainer">
            <h1>scroll Indicator</h1>
            <div className="scrollTracking">
                <div className="ScrollProgressBar" style={{width: `${scrollPercentage}%`}}></div>
            </div>
            </div>
            
            
            <center><h1>Project 9 (Scroll Indicator)</h1></center>
            {loading ?<div><h1><center>Loading...</center></h1></div>:null}
            <div className="containerP9">
                <center>
                {data && data.length > 0 ?<div>
                    {data.map((eachItem)=>
                    {
                        const {id,title}=eachItem;
                        return(
                            <div key={id}>
                                <p>{title}</p>
                                </div>
                        )
                    })}
                    </div>:null}
                    </center>
            </div>
        </div>
    )
}

export default Scroll;