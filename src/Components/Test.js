import React, { useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
export default function Test() {
    
    let {userID} = useParams() 
    let data = [
        {
            name: "Miqael",
            id: 1,
        },
        {
            name: "Miqa",
            id: 2,
        },
        {
            name: "Mi",
            id: 3,
        },
        {
            name: "Mael",
            id: 4,
        },
]
    let [con, setCon] = useState()
    userID = con
    const filt = data.find(dat => (dat.id == userID))
    console.log(con)
  return (
    <div>
        {con !== undefined ? <h1>{filt.name}</h1> : null}
        <button onClick={() => {
            setCon(2)
            
        }}>CLICK</button>
    </div>
  )
}
