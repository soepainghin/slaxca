import React from 'react'
import {NavLink} from "react-router-dom"

function Page404() {
    return (
        <div className="container text-center">
        
            <h1 className="text-capitalize ">oops page not found</h1>
           
            <NavLink to="/"><button>go back</button></NavLink>
        </div>
    )
}

export default Page404
