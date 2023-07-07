import React from 'react'
import CompB from './CompB'
import { createContext } from 'react'

const Data=createContext()

const CompA = () => {
    const Name="sai"
  return (
    <div>CompA
        <Data.Provider value={Name}>
            <CompB/>
        </Data.Provider>
    </div>
  )
}

export default CompA
export {Data}