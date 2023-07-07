import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, multiply } from '../App/CounterSlice';

const CounterComp = () => {
   const data = useSelector((state)=>state.counter.value);
   const dispatch=useDispatch()
  //  const dataid = useSelector((state)=>state.counter.Id);
  //  const dataName = useSelector((state)=>state.counter.Name);
  //  const dataAge = useSelector((state)=>state.counter.Age);
  return (
    <div><h1>Redux-Counter:---</h1>
        <h2>{data}</h2>
        {/* <h2>{dataid}</h2> */}
        {/* <h2>{dataName}</h2> */}
        {/* <h2>{dataAge}</h2> */}
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <br/>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
        <br/>
        <button onClick={()=>dispatch(multiply())}>Multiply</button>
    </div>
  )
}

export default CounterComp