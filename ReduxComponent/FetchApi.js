import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { fetch } from '../REDUX/CounterSlice';

const FetchApi = () => {
    const dispatch=useDispatch();
    const data=useSelector((state)=>state.counter);
  return (
    <>Fetch-API:---

    {data.isLoading ? <div>Loading.....</div> : data.data && 
      data.data.map((item,index)=>{
        return(
          <ul key={index}>
            <li>{item.title}</li>
          </ul>
        )
      })}

    <button onClick={()=>dispatch(fetch())}>Fetch API</button>
    </>
  )
}

export default FetchApi