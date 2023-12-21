import React, { useState } from 'react'
import Addfilm from './Addfilm'
import 'bootstrap/dist/css/bootstrap.css'
import datafilm from './Ffilm'
import Searchfilm from './Searchfilm'
export default function Film() {

const [films,setfilms]=useState(datafilm)

const handle=(newFilm)=>{
  const updateFilm=[...films,{...newFilm,id:films.length+1}]
  setfilms(updateFilm)
}

  return (
    <div>
        {
            films.map((fm)=>(
                <div class="card" style={{width:'18rem'}} key={fm.id}>
  <img src={fm.image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"> {fm.nomf}</li>
    <li class="list-group-item">  {fm.typef}</li>
    <li class="list-group-item"> {fm.descriptionf} </li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>


            )


            )




        }
      <Addfilm onAdd={handle}/>
      <Searchfilm/>
    </div>

  )
}
