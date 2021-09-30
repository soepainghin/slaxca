import React from 'react'
import "../App.css"

function Footer(props) {
    return (
        <footer>

        <div class={props.style}>
            <p className="text-center text-capitalize"> @copy by ajay 2021</p>
        </div>
        </footer>
    )
}

export default Footer
