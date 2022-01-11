import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {

 

    return (
        <div id="navbar">
            <Link id="appetizer-link" className="nav-link" to={"/appetizers"}>Appetizers</Link>
            <Link id="entrees-link" className="nav-link" to={"/entrees"}>Entrées</Link>
            <Link id="desserts-link" className="nav-link" to={"/desserts"}>Desserts</Link>
            <Link id="drinks-link" className="nav-link" to={"/drinks"}>Drinks</Link>
            
        </div>
    )
}
