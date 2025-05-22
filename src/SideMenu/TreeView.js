import DataMenu from "./DataMenu.js";
import MenuItem from "./MenuItem.js";
import './stylesP6.css'
const TreeView = () =>
{
    return(
        <div>
          <center> <h1>Project 6</h1></center>
        <div className="TreeView-container1">
        <div className="TreeView-container">
        <MenuItem list={DataMenu}/>
        </div>
        </div>
        </div>
    )
}
export default TreeView;