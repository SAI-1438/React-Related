import React,{useReducer} from 'react'


const UseReduce = () => {
    const intialstate=0;
const reducer=(state,action)=>{
    switch(action){
        case"Incre": return state+1;
        case "Decre": return state-1;
        case "Multi": return state*2;
        default:return state;
    }
}
    const [Count,dispatch]=useReducer(reducer,intialstate);
  return (
    <div>UseReduce:{Count}
    <br/>
    <button onClick={()=>dispatch("Incre")}>Increment</button>
    <button onClick={()=>dispatch("Decre")}>Decrement</button>
    <button onClick={()=>dispatch("Multi")}>Multiply</button>
    </div>
  )
}

export default UseReduce