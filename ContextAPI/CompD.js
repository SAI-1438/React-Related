import React from 'react'
import {useContext} from 'react'
import { Data } from './CompA'

const CompD = () => {
    const contextdata=useContext(Data)
  return (
    <div>CompD
        <h1>{contextdata}</h1>
    </div>
  )
}

export default CompD