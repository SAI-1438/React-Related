import React, {useState} from 'react'

const HigherOComponent=(ValueCom)=>{
    function HocCom(){
        const [value,setValue]=useState(0);
        const handleSubmit=()=>{
            setValue(value+1);
        }
        return(
            <div>
                <h1>Higher Order Component---</h1>
                <ValueCom value={value} submit={handleSubmit}/>
            </div>
        )
    }
    return HocCom
}
export default HigherOComponent; 