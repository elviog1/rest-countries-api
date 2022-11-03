
import React, { useEffect, useRef, useState } from 'react'
import { useAllQuery  } from '../features/countryApi'
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
        const selectValue = selectRef.current.value
        console.log(selectValue)
        if(selectValue.trim()){
            const fetchSelect = async ()=>{
                const response = await fetch(`https://restcountries.com/v3.1/region/${selectValue}`)
                const data = await response.json()
                    console.log(response)
                    if(selectValue === "Region"){
                            try{
                                <CardCountry country={country} />
                                }catch(error){
                                    console.log(error)
                                }
                                return;
                            }
                            setCountry(data)
                        }
                    try{
                        fetchSelect()
                    }catch(error){
                        console.log(error)
                    }  
    }
}
    console.log(region)
    let {data} = useAllQuery(search ? "name/" +search : "all") // si no tengo nada, devuelve todo, sino los q tengan esas letras

    useEffect(()=>{
        if(data){ 
            setCountry(data) 
        }
    },[data])
    

  return (
    <div className='search-container'>
        <div className='inputs '>
            <input placeholder='Search for a country...' className='searchInput' type="search" ref={searchRef} onChange={searching}/>
            <select  className='dropdown' ref={selectRef} onChange={selectRegion} >
                <option value="Region" className='dropdown-option' >Filter by Region</option>
                <option value="Africa" className='dropdown-option'>Africa</option>
                <option value="America" className='dropdown-option'>america</option>
                <option value="Asia" className='dropdown-option'>Asia</option>
                <option value="Europe" className='dropdown-option'>Europe</option>
                <option value="Oceania" className='dropdown-option'>Oceania</option>
            </select>
        </div>
        <div className='search-allcard'>
            <CardCountry country={country} />
        </div>
    </div>
  )
}

