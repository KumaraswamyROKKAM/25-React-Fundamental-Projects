import React,{useState} from "react";

const Demo = () =>
{
    const [list,setList]=useState([])
    const [message,setMessage]=useState("");
    const [idVal,setIdVal]=useState("");
    const [status,setStatus]=useState(true);

    const handleAdd = (e) =>
    {
        e.preventDefault();
        let listObj={
            id:new Date().getTime().toString(),
            text:message
        }
        setList([...list,listObj]);
        setMessage("");
        

    }

    const handleDelete = (id) =>
    {
        let tempList= list.filter((eachObj)=>
        {
            return eachObj.id !== id;
        })
        setList(tempList);
    }

    const handleEdit= (id,text)=>
    {
        setMessage(text);
        setIdVal(id);
        setStatus(false);
    }

    const handleEditbtn =(e) =>
    {
        e.preventDefault();
        let id=idVal;

        let tempLists=list.map((eachObj)=>
        {
            if(id === eachObj.id)
            {
                return {
                    id:id,
                    text:message
                }
                
            }
            return eachObj;
        })

        setList(tempLists);
        setMessage("");
        setIdVal("");
        setStatus(true);
    }


    return(
        <center>
            <input type="text" name="message" id="message" value={message} placeholder="enter message" onChange={(e)=>setMessage(e.target.value)}>
            </input>{status ?<button onClick={handleAdd}>Add</button> : <button onClick={handleEditbtn}>Edit</button>}
            <hr></hr>
            {list.length === 0 ? <h1>No Items</h1> :
            <div>
                {console.log(list)}

                {
                    list.map((eachObj)=>
                    {
                        const {id,text}=eachObj;
                        return(
                            < li key={id}>
                             {text}
                             <span>
                                <button onClick={()=>handleEdit(id,text)}>Edit</button>
                                <button onClick={()=>handleDelete(id)}>delete</button>
                             </span>
                            </li>
                        )
                    })
                }
            </div>
             }
        </center>
    )
}

export default Demo;