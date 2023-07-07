import HigherOComponent from "./HigherOComponent";

const ClickCounter = (props) =>{
    return(
        <div>Click Counter
            <h1>{props.value}</h1>
            <button onClick={props.submit}>Click It</button>
        </div>
    )
}
export default HigherOComponent(ClickCounter)