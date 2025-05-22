import { useState } from 'react';
import './styles2.css';
import {FaStar} from 'react-icons/fa'
const RatingStar = ({noOfStars}) =>
{
    const [ratingIndex,setRatingIndex]=useState(0)
    const [hover,setHover]=useState(0);

    const handleClick = (indexVal) =>
    {
       setRatingIndex(indexVal)
    }
    const handleMouseMove = (indexVal) =>
    {
        setHover(indexVal)
    }
    const handleMouseLeave = (indexVal) =>
    {
       setHover(ratingIndex)
    }
    return(
        <div>
            <center>
                <h1>Project 3</h1>
            </center>
        
        <div>
            <center>
            {[...Array(noOfStars)].map((_,index)=>
            {
                index+=1;
                return(
                    <FaStar 
                    className={index <= hover?"active":"inActive"}
                    key = {index}
                    onClick={()=>handleClick(index)}
                    onMouseMove={()=>handleMouseMove(index)}
                    onMouseLeave={()=>handleMouseLeave(index)}

                    />
                )

            })}
            </center>
           </div>
        </div>
    )
}
export default RatingStar;