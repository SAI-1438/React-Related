import React, {useState} from 'react'

const StateUplift = (props) => {
    const [value,setValue] =useState('');
    const handleSubmit=()=>{
        // console.log((value));
        props.callback(value);
        setValue('');
    }
  return (
    <div>StateUplift
        <label>Name:</label>
        <input type='text' name='name' value={value} onChange={(e)=>setValue(e.target.value)}/>
        <button onClick={handleSubmit}>Click</button>
    </div>
  )
}

export default StateUplift