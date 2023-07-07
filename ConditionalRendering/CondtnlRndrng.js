import React from 'react'

const CondtnlRndrng = () => {
    const value=true;
    const morecode=true;
  return (
    <div><h1>Conditional-Rendering</h1>
    <p>if value is true then "yes" or if value is false then "no"<br/>
    because of "ternary" operator.</p>
        {
            value ? <h3>Yes</h3> : <h3>No</h3>
        }
    <p>if morecode is true then the code is shown or if morecode is false the code doesn't shows<br/>
    because of "and" operator.</p>
        {
            morecode && <h3>there is more code</h3>
        }
    </div>
  )
}

export default CondtnlRndrng