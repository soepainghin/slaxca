import React from "react";
import {NavLink} from "react-router-dom"
import Button from '@mui/material/Button';
import "../App.css"


function Card(props) {
  return (
    <div class="col-4">
      <div class="card" >
        <img className="imgphoto" src={props.url} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{props.name}</h5>
          <p class="card-text">
           {props.desc}
          </p>
          <NavLink className="navv" to="/" ><Button className="button" variant="outlined">{props.button}</Button></NavLink>
        </div>
      </div>
    </div>
  );
}

export default Card;

