import React from 'react'
import{useNavigate} from 'react-router-dom'
function Navbar() {
    let navigate=useNavigate()
    
  return (
    <div className='navbar'>
        <button onClick={()=>navigate('/')}>Back</button>
        <div>Where in the world ?</div>
        <div>theme</div>
    </div>
  )
}

export default Navbar