import React, {useMemo,useState} from 'react'

const PureComponent = () => {
    const [count,setCount]=useState(0);
    const counter=useMemo(()=>count,[count])
    const handleclick=()=>{
        setCount(count+1);
    }
  return (
    <div>PureComponent
      <h1>{counter}</h1>
        <button onClick={handleclick}>Click here</button>
    </div>
  )
}

export default PureComponent