import React from 'react'

function Country({country}) {
    console.log(country);
  return (
    <div className='country'>
        <div className='img-cont'>
            <img src={country.flag}
            alt='country'/>
        </div>
        <div className='title'><span>{country.name}</span></div>
        <div className='subtitle'>Population:<span>{country.population}</span></div>
        <div className='subtitle'>Region:<span>{country.region}</span></div>
        <div className='subtitle'>Capital:<span>{country.capital}</span></div>
    </div>
  )
}

export default Country