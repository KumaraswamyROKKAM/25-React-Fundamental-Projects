import { useEffect, useState } from 'react'
import './style5.css'

const url = "https://picsum.photos/v2/list?page=1&limit="

const LoadMore = ()  =>
{
    const [list,setList]=useState([])
    const [limit,setLimit]=useState(10)
    const [loading,setLoading]=useState(false)

    const fetchFunction = async (url) =>
    {
        setLoading(true)
        try{
            const response= await fetch(url);
            const data =await response.json()
           
            setList(data)
            setLoading(false)
         }
        catch(e)
        {
           
            setLoading(false)
        }
    }

    useEffect(()=>
    {
        const finalUrl=`${url}${limit}`
        fetchFunction(finalUrl)
    },[limit])

    const loadFunction = ()=>
    {
        setLimit(limit+10)
    }

    return(
        <div>
            <h1><center>Project 5</center></h1>
            {loading ? <div><center><h3>Loading...</h3></center></div>:null}
        <div className='containerP-5'>
            {list.map((eachItem,index)=>
            {
                const {id,download_url}=eachItem
                return(
                    <div key={id}>
                        <img src={download_url} alt='photo' className='photos'></img>
                    </div>
                )
            })}
            </div>
            {list.length <=50 ?
            <center><button className='LoadBtn' onClick={loadFunction}>Load More</button></center>:
            <center><h4 className='EndMessage'>You Reached The End </h4></center>}
        </div>
    )
}

export default LoadMore;