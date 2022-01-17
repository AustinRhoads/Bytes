import React from 'react'
import {Link} from 'react-router-dom'
import search_image from "../public/images/basil_search.png"

export default function Navbar() {

 

    return (
        <div id="navbar">
            <Link id="appetizer-link" className="nav-link" to={"/appetizers"}>Appetizers</Link>
            <Link id="entrees-link" className="nav-link" to={"/entrees"}>Entrées</Link>
            <Link id="desserts-link" className="nav-link" to={"/desserts"}>Desserts</Link>
            <Link id="drinks-link" className="nav-link" to={"/drinks"}>Drinks</Link>
            <Link id="search-link" className="nav-link" to={"/recipes"}><img alt="yahoo" id="search-img" src={search_image}></img></Link>
        </div>
    )
}
