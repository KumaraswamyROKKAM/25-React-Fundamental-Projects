import "./PopUp.css"
const PopUp = ({id,header,body,footer,onChange}) =>
{
    return(
        <div  className="containerP101">
           <div className="P10Header">
            {header ? header: "Header"}
            <button onClick={onChange}>&times;</button>
           </div>
           <div className="P10Body">
            {body ? body:"this is body"}
           </div>
           <div className="P10Footer">
            {
                footer ? footer:"this is footer"
            }
           </div>
        </div>
    )
}

export default PopUp;