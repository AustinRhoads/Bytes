import React, {useEffect} from 'react'
import TitleCard from './TitleCard'
import cuid from 'cuid'

export default function Appetizers(props) {

    const display_random_appetizers = () => {

        //if(props.randomAppetizers.length > 0){
        //    return props.randomAppetizers.map(res => {
        //        if(res.image){
        //          return  <TitleCard key={cuid()} recipe={res} recipe_name={res.title} id={res.id} image={res.image}/>
        //        }
        //        
        //    } )
        //    
        //  }
        if(props.randomAppetizers.length > 0){
            for(let x = 0; x < props.randomAppetizers.length; x++){
                if(!props.randomAppetizers[x].image){
                    props.randomAppetizers.splice(x, 1)
                }
            }
            return(
                <div>
                    {props.randomAppetizers.map(res => { 
                        
                            return <TitleCard key={cuid()} recipe={res} recipe_name={res.title} id={res.id} image={res.image}/> 
                        } 
                    )}
                </div>
            )
        }

    }

    useEffect(() => {
       const li = document.querySelector('#appetizer-link');
       props.selectLink(li)
    })

    return (
        <div>
            <div className = "display-titlecards">
                {display_random_appetizers()}
            </div>
        </div>
    )
}
