import React from 'react'

function CountryDetails({country}) {
    
  return (
    <div className='details-cont'>
        <div className='left'>
            <img src={country.flag} alt='poster'/>
        </div>
        <div className='right'>
            <div className='heading'>{country.name}</div>
            <div className='details flex'>
                <div  >
                <div>Native Name: <span>{country.nativeName}</span></div>
                <div>Population: <span>{country.population}</span></div>
                <div>Region: <span>{country.region}</span></div>
                <div>SubRegion: <span>{country.subregion}</span></div>
                <div>Capital: <span>{country.capital}</span></div>
                </div>
                <div>
                <div>Top Level Domain: <span>{country.topdomain}</span></div>
                <div>Currencies: <span>{country.currencies?country.currencies.map(ele=>ele.name).join():""}</span></div>
                <div>Language: <span>{country.languages?country.languages.map(ele=>ele.name).join():""}</span></div>
                </div>
            </div>
            <div>Border :</div>
        </div>
    </div>
  )
}

export default CountryDetails