import SEARCH_ROUTES from "../constants/SearchRoutes"




const APPETIZER_ACTIONS = {
    GET_RANDOM_APPETIZERS: () => {
        return(dispatch) => {
            console.log("appetizer actions")
                  fetch(SEARCH_ROUTES.AUTO_APPS_URL).then(resp => resp.json()).then(obj => {
                     // console.log(obj)
                    localStorage.setItem("random_appetizers", JSON.stringify(obj.recipes))
                    dispatch({type: "RANDOM_APPETIZERS", payload: obj})
                  })

            
        }
    
    }
}

export default APPETIZER_ACTIONS;