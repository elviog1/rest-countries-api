import React, { useEffect, useRef, useState } from 'react'
import { useAllQuery, useFilterByRegionQuery } from '../features/countryApi'
import '../styles/Search.css'
import CardCountry from './CardCountry'
export default function Search() {
    const [ country, setCountry] = useState() // se guarda todos los paises
    const [search,setSearch] = useState() // se guarda lo que escribo en el input
    const [region,setRegion] = useState() // se guarda la region seleccionada

    const selectRef = useRef("")
    const searchRef = useRef("")
    
    const searching = ()=>{
        setSearch(searchRef.current.value) // devuelve el valor del input search
    }
    const selectRegion = ()=>{
        setRegion(selectRef.current.value) // devuelve el valor de la region
    }
    
    let {data} = useAllQuery(search ? "name/" +search : "all") // si no tengo nada, devuelve todo, sino los q tengan esas letras

    useEffect(()=>{
        if(data){ 
            setCountry(data) 
        }
    },[data])

  return (
    <div className='search-container'>
        <div className='inputs'>
            <input placeholder='Search for a country...' className='searchInput' type="search" ref={searchRef} onChange={searching}/>
            {/* <select className='dropdown' ref={selectRef} onChange={selectRegion} >
                <option defaultValue="region" className='dropdown-option' disabled selected>Filter by Region</option>
                <option defaultValue="Africa" className='dropdown-option'>Africa</option>
                <option defaultValue="america" className='dropdown-option'>america</option>
                <option defaultValue="Asia" className='dropdown-option'>Asia</option>
                <option defaultValue="Europe" className='dropdown-option'>Europe</option>
                <option defaultValue="Oceania" className='dropdown-option'>Oceania</option>
            </select> */}
        </div>
        <div className='search-allcard'>
            <CardCountry country={country} />
        </div>
    </div>
  )
}
