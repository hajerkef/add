import React, { useState } from 'react'
import Swal from 'sweetalert2'
import 'bootstrap/dist/css/bootstrap.css';

export default function Addfilm({onAdd}) {
const [newFilm,setNewfilm]=useState(
  {
 
  nomf:'',
  datecreat:0,
  typef:'',
  descriptionf:'',
  image:''
})
const fc=()=>{
  if(newFilm.nomf==''||newFilm.datecreat==''||newFilm.typef==''||newFilm.descriptionf==''||newFilm.image==''){
    Swal.fire({
      title: "The Internet?",
      text: "That thing is still around?",
      icon: "question"
    });
  }

  onAdd(newFilm)
setNewfilm({
  nomf:'',
  datecreat:0,
  typef:'',
  descriptionf:'',
  image:''
}

)

}


  










  return (
    <div>
      <form className="form-floating">
  <input type="text" class="form-control" id="floatingInputValue" placeholder="name@example.com" value="test@example.com"/>
  <label for="floatingInputValue">Input with value</label>
</form>
<form className="form-floating">
  <input type="text" class="form-control" id="floatingInputValue" placeholder="name@example.com" value={newFilm.nomf} onChange={(e)=>setNewfilm({...newFilm, nomf: e.target.value})}/>
  <label for="floatingInputValue">name</label>
</form>
<form className="form-floating">
  <input type="text" class="form-control" id="floatingInputValue" placeholder="name@example.com" value={newFilm.typef} onChange={(e)=>setNewfilm({...newFilm, typef: e.target.value})}/>
  <label for="floatingInputValue">type</label>
</form>
<form className="form-floating">
  <input type="text" class="form-control" id="floatingInputValue" placeholder="name@example.com" value={newFilm.datecreat} onChange={(e)=>setNewfilm({...newFilm, datecreat: e.target.value})}/>
  <label for="floatingInputValue">date</label>
</form>    <form className="form-floating">
  <input type="text" class="form-control" id="floatingInputValue" placeholder="name@example.com" value={newFilm.image} onChange={(e)=>setNewfilm({...newFilm, image: e.target.value})}/>

  <label for="floatingInputValue">image</label>
</form>
<button type="button" class="btn" onClick={fc}>add</button>
    </div>
  )
}

