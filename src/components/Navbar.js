import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <Link to={"/appetizers"}>Appetizers</Link>
            <Link to={"/entrees"}>Entrees</Link>
            <Link to={"/desserts"}>Desserts</Link>
            <Link to={"/drinks"}>Drinks</Link>
            
        </div>
    )
}
