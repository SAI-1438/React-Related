import React from 'react'
import {useContext} from 'react'
import { Data } from './CompA'

const CompC = () => {
    const contextdata=useContext(Data)
  return (
    <div>CompC
        <h1>{contextdata}</h1>
    </div>
  )
}

export default CompC