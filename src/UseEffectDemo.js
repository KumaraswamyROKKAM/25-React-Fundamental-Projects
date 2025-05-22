
import React,{useState,useEffect} from 'react';
const url="https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const UseEffectDemo = () =>
{

  const [list,setList]=useState([]);
  const [searchEle,setSearchEle]=useState("");
  const [isLoading,setLoading]=useState(false);
  const [isError,setIsError]=useState({status:false,message:""})
  const [status,setStatus] = useState(0)
  


  const fetchApi = async(url) =>
  {
   
    setIsError({status:false,message:""})
    setLoading(true);
    try{
    const response= await fetch(url);
    const {drinks}=await response.json();
    setList(drinks);
    setLoading(false);
    setIsError({status:false,message:""})
    if(!drinks || drinks == 'no data found' )
      {
        throw new Error("dataaa nottt founddd")
      }

    }
    catch(error){
      
      setIsError({status:true,message:error.message || "data not sfound"})
    setLoading(false);
    }
  }

  useEffect(() => {
    console.log(searchEle)
    const finalUrl=`${url}${searchEle}`
    fetchApi(finalUrl);
  }, [status])
  
  const handleSearch = (e) =>
  {
    e.preventDefault();
    
    setSearchEle(searchEle);
    setStatus(status+1)
  }

  return(
    <>
    <center>
    <form>
      <input type="text" name="search" id="search" value={searchEle} placeholder='search' onChange={(e)=>setSearchEle(e.target.value)}></input>
      <button onClick={handleSearch}>Search</button>
    </form>
    <hr></hr>

    {isLoading && <h1>Loading...</h1>}
    {isError?.status && <h1>{isError.message}</h1>}
    
    </center>
     
      {!isLoading && !isError?.status &&  <div className='container'>
      
      {
        list.map((eachObj)=>
        {
          const {idDrink,strDrink,strDrinkThumb}=eachObj;
          return(
            <center key={idDrink}>
              <ol  >
                <img src={strDrinkThumb}></img>
                <h5>{strDrink}</h5>
  
              </ol>
            </center>
          )
        })
      }
     </div>}
    </>
  )
}
export default UseEffectDemo;