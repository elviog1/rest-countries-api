import React from 'react'

import '../styles/Detail.css'
export default function CardDetail(props) {
    const country = props.country
    
    const nativeName =country ? country[0].name.nativeName : country
    const nativeOfficial =nativeName ? Object.values(nativeName)[0].common : nativeName

    const currencies = country ? country[0].currencies : country
    const currencieName =currencies ? Object.values(currencies)[0].name :currencies

    const languages = country ? country[0].languages : country
    const arrayLanguages = languages ? Object.values(languages) : languages

    const printCard = (item) =>(
        <div className='card-detail-container' key={item.name.common}>
            <div className='card-detail-imgbox'>
                <img className='card-detail-img' src={item.flags.svg} />
            </div>
            <div className='card-detail-info'>
                <p className='card-detail-country'>{item.name.common}</p>
                <div className='card-detail-description'>
                    <div className='detail-description-column'>
                        <p className='detail-description-p'><span className='bold'>Native Name:</span> {nativeOfficial}</p>
                        <p className='detail-description-p'><span className='bold'>Population:</span> {item.population}</p>
                        <p className='detail-description-p'><span className='bold'>Region:</span> {item.region}</p>
                        <p className='detail-description-p'><span className='bold'>Sub Region:</span> {item.subregion}</p>
                        <p className='detail-description-p'><span className='bold'>Capital:</span> {item.capital?.map(item => item)}</p>
                    </div>
                    <div className='detail-description-column'>
                        <p className='detail-description-p'><span className='bold'>Top Level Domain:</span> {item.tld?.map(item=>item)}</p>
                        <p className='detail-description-p'><span className='bold'>Currencies:</span> {currencieName}</p>
                        <p className='detail-description-p'><span className='bold'>Languages:</span> {arrayLanguages.map(item => item) + " "}</p>
                    </div>
                    
                </div>
                    <div className='card-detail-border'>
                        <p className='card-detail-border-p'><span className='bold'>Border Countries:</span> </p>
                        <span className='card-detail-borderCountry'>{ item.borders?.map(item => item ) + " " }</span>
                    </div>
            </div>
        </div>
    )

  return (
    <div>
        {country?.map(printCard)}
    </div>
  )
}
