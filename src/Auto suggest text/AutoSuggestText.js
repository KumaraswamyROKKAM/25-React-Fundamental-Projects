import { useEffect, useState } from "react";

const AutoSuggestText = () =>
{
    const [userData,setUserData]=useState({})
    const [error,setError]= useState("")
    const [loading,setLoading]=useState(false);

    const fetchData = async (url) =>
    {
        try{
        setLoading(true)
        const response= await fetch(url);
        const data= await response.json();
        if(data)
        {
            console.log(data)
            setLoading(false)
            setError("");
            setUserData(data.users.map((eachItem)=>eachItem.firstName))
            
        }
        else
        console.log("sdjfksj")
        }
        catch(err)
        {
            setLoading(false)
            setError("not found")
        }
        

    }

    useEffect(()=>
    {
       fetchData("https://dummyjson.com/users")
    },[])
    return(
        <div>
            <h1><center> Project 14 (Auto Search Text)</center></h1>
            <div>
                  {Object.entries(userData).map((eachUser,index)=>
                {
                    return(
                        < >
                        <div key={index}>
                         {eachUser}
                         </div>
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default AutoSuggestText;