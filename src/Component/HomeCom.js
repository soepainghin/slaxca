import React from 'react'
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import "../App.css"

function HomeCom(props) {
    return (
      
             <div className="bigbox">
            <div class="container">
  <div class="row">
    <div class="col">
       <div className="box">
           <h1 className="text-capitalize">{props.head}</h1>
           <h2 className="text-capitalize text-primary">Ajay Kumar</h2>
           <p>{props.desc}</p>
           <NavLink  className="navv" to={props.redirect}>
           <Button variant="outlined">{props.button}</Button></NavLink>
       </div>
    </div>
    <div class="col">
      <img src={props.img} alt="" />
    </div>
  </div>
        </div>
        </div>
      
    )
}

export default HomeCom
