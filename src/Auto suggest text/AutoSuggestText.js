import { useEffect, useState } from "react";

const AutoSuggestText = () =>
{
    const [userData,setUserData]=useState([])
    const [error,setError]= useState("")
    const [loading,setLoading]=useState(false);
    const [searchItem,setSearchItem]=useState("")
    const [suggestedText,setSuggestedText]=useState([])


    const fetchData = async (url) =>
    {
        try{
        setLoading(true)
        const response= await fetch(url);
        const data= await response.json();
        if(data)
        {
           
            setLoading(false)
            setError("");
            setUserData(data.users.map((eachItem)=>eachItem.firstName))
            
        }
    }
        catch(err)
        {
            setLoading(false)
            setError("not found error")
        }
        

    }

    const searchFunction = () =>
    {
        const filtered = userData.filter((eachItem)=>
        {
           return eachItem.toLowerCase().includes(searchItem.toLowerCase())
        })

        setSuggestedText(filtered)

    }

    useEffect(()=>
    {
         
       fetchData("https://dummyjson.com/users")
        
    },[])

    useEffect(()=>
    {
       if(searchItem.length > 0)
        {
            searchFunction()
        }
        else
        {setSuggestedText([])} 
    },[userData,searchItem])
    return(
        <div>
            <h1><center> Project 14 (Auto Search Text)</center></h1>
            <div>
                        < >
                         <div>
                            <input type="text"
                             value={searchItem}
                             onChange={(e)=>setSearchItem(e.target.value)}
                             />
                         </div>
                         {error ? <h2>error......</h2> :
                          <div>{loading ? <h2> loading....</h2> :
                         <div>
                            {
                                suggestedText.length > 0  ? <div>
                                    
                                   {suggestedText.map((eachItem,index)=>
                                {
                                  
                                    return(
                                          <div key={index}>
                                            <h3><center>{eachItem}</center></h3>
                                          </div>
                                    
                                    )
                                })}
                            </div>: <h3><center>No Data Found
                                </center></h3>
                            }
                         </div>
                            }  
                            
                         
                            </div>}
                        </>
                   
            </div>
        </div>
    )
}

export default AutoSuggestText;