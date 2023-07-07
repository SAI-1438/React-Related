import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { fetch } from './ReduxSlice';

const ReduxApi = () => {
    const dispatch=useDispatch();
    const data=useSelector((state)=>state.counters);
  return (
    <>Redux(Fetch-API):---

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

export default ReduxApi