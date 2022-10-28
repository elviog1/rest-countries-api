import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import CardDetail from '../components/CardDetail'
import Header from '../components/Header'
import { useGetOneCountryQuery } from '../features/countryApi'
import '../styles/Detail.css'
export default function Detail() {
    const {name} = useParams()
    const [country,setCountry] =useState()
    const {data} = useGetOneCountryQuery(name)
    useEffect(()=>{
        if(data){
            setCountry(data)
            console.log(data)
        }
    },[data])

    let navigate = useNavigate()
    const back = ()=>{
        navigate("/")
    }
    
    
  return (
    <div className='detail-container'>
        {/* <Header /> */}
        <div className='detail-main'>
            <div className='detail-main'>
                <div className='detail-button'>
                    <button className='detail-back' onClick={back}> Back </button>
                </div>
                <CardDetail country={country}/>
            </div>
        </div>
    </div>
  )
}
