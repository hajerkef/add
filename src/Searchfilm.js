import React, { useState } from 'react'
import datafilm from './Ffilm'

export default function Searchfilm() {
    const [sfilms,setSfilms]=useState(datafilm)
    const handleChange=(e)=>{
        const filter=sfilms. filter(
            fl=>fl.name.sfilms.include(e.target.value)
        )
        setSfilms(filter)


    }

  return (
    <div>
        <input type='text' className='search' placeholder='search film' onInput={handleChange}/>
      
    </div>
  )
}
