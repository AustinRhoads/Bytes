import React, {useEffect} from 'react'

export default function Appetizers(props) {

    useEffect(() => {
       const li = document.querySelector('#appetizer-link');
       props.selectLink(li)
    })

    return (
        <div>
            <h1>Apps</h1>
            
        </div>
    )
}
