import React, {useState,useMemo} from 'react'


function UseMemo() {
    const [value,setValue] =useState(0)
    const [valuetwo,setValuetwo] =useState(0)
    const exPensive=useMemo(function exPensive(){console.log("hai")},[]);

  return (
    <div> Example of UseMemo: {exPensive} <h4>{value}<br/>{valuetwo}</h4>
        <button onClick={()=>setValue(value+1)}>Increment</button>
        <button onClick={()=>setValuetwo(valuetwo-1)}>Decrement</button>
    </div>
  )
}

export default UseMemo