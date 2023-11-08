import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <>
        <div className='errorPage'>
            <div className='errorImage'>
                <img src={require('./Images/Error.jpg')} alt='error message'/>
            </div>
            <div className='errorInfo'>
                <Link className='linkback' to={"/"}>Back to HomePage</Link>
            </div>
        </div>
    </>
  )
}
