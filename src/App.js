import React, { useEffect, useMemo, useState } from 'react'
import Countries from './componenets/Countries'
import Navbar from './componenets/Navbar'
import CountryDetails from './componenets/CountryDetails'
import {Routes,Route,useNavigate} from 'react-router-dom'
import Error from './componenets/Error'
function App() {
  let [country,setCountryDetails]=useState({})
  let navigate=useNavigate()
  useMemo(()=>{
    navigate('/details')
  },[country])
  // how to call after udating state
  return (
    
    
    <div>
    <Navbar/>
      <Routes>
      <Route path='/' element={
      <Countries setCountryDetails={setCountryDetails}/>}>
      </Route>
        <Route path='/details' element={<CountryDetails country={country}/>}
      >
      </Route>
      <Route path='/error' element={<Error/>}></Route>
      </Routes>
    </div>
  
  )
}

export default App