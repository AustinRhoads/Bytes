import React, { useEffect } from 'react'

export default function SearchPage(props) {

    
    useEffect(() => {
        const li = document.querySelector('#search-link');
        props.selectLink(li)

       
     })

    return (
        <div id="search-page">
            <h1>Search page</h1>
            
        </div>
    )
};
