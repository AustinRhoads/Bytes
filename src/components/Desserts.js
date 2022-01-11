import React, {useEffect} from 'react'

export default function Desserts(props) {

    useEffect(() => {
        const li = document.querySelector('#desserts-link');
        props.selectLink(li)
     })

    return (
        <div>
            <h1>Desserts</h1>
            
        </div>
    )
}
