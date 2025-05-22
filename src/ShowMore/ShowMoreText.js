import React,{useState} from 'react'

 const ShowMoreText = ({text}) =>
{
    const [expanded, setExpanded] = useState(false);
    

    return(
        <div>
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
