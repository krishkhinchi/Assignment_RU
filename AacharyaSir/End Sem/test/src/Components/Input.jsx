import React, {useState} from 'react'

function Input() {
const [name, setName] = useState('')
  return (
    <div>
        <input type="text" placeholder="Enter your name" value={name} onChange={(e)=>setName(e.target.value)}/>
        <button onClick={()=>{setName('')}}>Clear</button>
        <h1>{name}</h1>
    </div>
  )
}

export default Input