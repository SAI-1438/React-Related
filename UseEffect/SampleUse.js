import axios from 'axios'
import React, {useEffect,useState} from 'react'


const SampleUse = () => {
    const [data,setData]=useState([])
    // const [api,setapi]=useState(0)
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response)=>setData(response.data))
        .catch((error)=>console.log(error));
    },[]);
  return (
    <div>SampleUse
        {
            data.map((item)=>{
                return(
                    <div key={item.id} >
                        {item.id}.{item.title}
                    </div>
                )
            })
        }
    </div>
  )
}

export default SampleUse