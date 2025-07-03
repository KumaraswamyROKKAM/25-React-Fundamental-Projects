import React,{useState} from 'react'

 const ShowMoreText = ({text}) =>
{
    const [expanded, setExpanded] = useState(false);
    

    return(
        <div>
            <div>
               <center> <h1>Project 11 (Show More or Less)</h1></center>
            </div>
            {text.length <= 100 ? <div>{text}</div>:<div>
            {expanded ?<p>{text}</p>:<div>
                <p>{text.substring(0,100)}...</p></div>}
             </div>}

            <button onClick={() => {setExpanded(!expanded)}}>
                {expanded ? "Show Less" : "Show More"}
            </button>
           
        </div>
    )
}

export default ShowMoreText;
