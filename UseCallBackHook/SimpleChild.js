import React from 'react'

const SimpleChild = (props) => {
  console.log("hello");
  return (
    <div>SimpleChild
      <button onClick={props.multi}>Incre</button>
    </div>
  )
}

export default SimpleChild

