import HigherOComponent from "./HigherOComponent";

const MouseOverCounter = (props) =>{
    return(
        <div>Mouse Over Counter
            <h1>{props.value}</h1>
            <button onMouseOver={props.submit}>Over It</button>
        </div>
    )
}
export default HigherOComponent(MouseOverCounter)