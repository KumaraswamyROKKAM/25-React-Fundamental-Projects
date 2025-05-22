
import ItemView from "./ItemView"
const MenuItem = ({list = []}) =>
{
    return(
        <div>
           
            {list && list.length ?<div>
                {list.map((eachItem,index)=>
                {
                    return(<ul key={index}>
                        <ItemView item={eachItem}/>
                        </ul>)
                })}
               
                </div>
                :<div>no item</div>}

        </div>
    )
}

export default MenuItem;