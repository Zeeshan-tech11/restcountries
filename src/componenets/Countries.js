import React, { useEffect, useState } from 'react'
import Country from './Country'
function Countries(props) {
  let{setCountryDetails}=props
  let [isLoading,setLoading]=useState(true)
  // origional data fetched from api
  let [data,setData]=useState([])

  // data to display
  let countriesState={
    countries:[],
    page:0,
    pages:0,
  }
  let [displayData,setCountries]=useState(countriesState)
  //fetching data
  useEffect(()=>{
    fetch('https://restcountries.com/v2/all')
    .then(res=>res.json())
    .then (data=>{
      setData(data)
      let pages=parseInt(Math.ceil(data.length)/8);
      let countries=data
      setCountries({
        countries,
        page:0,
        pages
      })
      setLoading(false)
      console.log(pages);
    })
  },[])
  
  const handleClick=(e)=>{
    let v=e.target.value;
    console.log(v);
    setCountries({
      ...displayData,
      page:v
    })
  }
  let {countries,page,pages}=displayData
  let arraypage=[]
  for(let i=0;i<pages;i++){
    arraypage.push(i)
  }
  let[search,setSearch]=useState('');
  
  const handleChange=(e)=>{
    let v=e.target.value
    setSearch(v)
    console.log(v);
    filterSearch(v)

  }

  const regions={}
  data.forEach(country=>{
    regions[country['region']]=1
  })
  let [region,setRegion]=useState('all')
  useEffect(()=>{
    filterSearch("")
},[region])
  const handleSelect=(e)=>{
    console.log(e.target.value,'..handlesele');
    setRegion(e.target.value)
    

  }
  const filterSearch=(input)=>{
    let filterd=[]
    if(region==='all'){

       filterd=data.filter((country)=>country.name.toLowerCase().includes(input.toLowerCase()))
    }
    else{
       filterd=data.filter((country)=>country.name.toLowerCase().includes(input.toLowerCase()) && country.region===region)
    }
    let pages=parseInt(Math.ceil(filterd.length)/8);
    console.log(filterd,'....');
    
    setCountries({
      ...displayData,
      countries:filterd,
      pages
    })
  }
  if(isLoading){
    return <h1>Fetching Data from API .........</h1>
  }else{
  return (
    <>
    <div className='search-box'>
      <input value={search} onChange={handleChange} type="text" placeholder='search for country'></input>
      <select onChange={(e)=>handleSelect(e)}>
        <option value='all'>All Regions</option>
        {Object.keys(regions).map((region,idx)=>(
          <option value={region} key={idx}>{region}</option>
        ))}
      </select>
    </div>
    <div className='countries'>
        {countries.slice(page*8,page*8+8).map((country,idx)=>(
          <div onClick={()=>setCountryDetails(country)}>
          <Country country={country} key={idx}/>
          </div>
        ))}
    </div>
    <div className='btns'>
    { 
       arraypage.map((i)=>(
        <button key={i} value={i} onClick={(e)=>handleClick(e)}>{countries[i*8].name[0]}</button>
       ))
    }
    </div>
    </>
  )
  }
}

export default Countries