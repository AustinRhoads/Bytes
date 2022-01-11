import React, {useEffect} from 'react'

export default function Drinks(props) {

    useEffect(() => {
        const li = document.querySelector('#drinks-link');
        props.selectLink(li)
     })

    return (
        <div>
            <h1>Drinks</h1>
            
        </div>
    )
}
