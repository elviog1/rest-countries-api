import React from 'react'
import { Link } from 'react-router-dom'
import Detail from '../pages/Detail'
import '../styles/Search.css'
export default function CardCountry(props) {
    const country = props.country
    const printCard = (item) =>(
        <Link className='link' to={"/detail/" + item.name.common} key={item.name.common}>
            <div className='card-container' >
                <img className='card-img' src={item.flags.svg} />
                <div className='card-description'>
                    <h2 className='card-info'>{item.name.common}</h2>
                    <p className='card-info'><span className='bold'>Population: </span>{item.population}</p>
                    <p className='card-info'><span className='bold'>Region: </span>{item.region}</p>
                    <p className='card-info'><span className='bold'>Capital: </span>{item.capital}</p>
                </div>
            </div>
        </Link>

    )

  return (
    <div className='search-allcard'>
       {country?.map(printCard)}
    </div>
  )
}
