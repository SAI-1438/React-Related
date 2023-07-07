import React, {useCallback, useState} from 'react'
import SimpleChild  from './SimpleChild';


const ExUseCallBack=()=>{
  const [value,setValue]=useState(0);
    const multiply=useCallback(()=>{setValue(value+1)},[value]);
  return (
    <div>UseCallBack: 
        <h1>{value}</h1>
        <button onClick={multiply}>Increment</button>
        <SimpleChild multi={multiply}/>
    </div>
  )
}

export default ExUseCallBack