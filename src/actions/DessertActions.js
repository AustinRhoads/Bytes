import SEARCH_ROUTES from "../constants/SearchRoutes"




const DESSERT_ACTIONS = {
    GET_RANDOM_DESSERTS: () => {
        return(dispatch) => {
            console.log("dessert actions")
                  fetch(SEARCH_ROUTES.AUTO_DESSERTS_URL).then(resp => resp.json()).then(obj => {
                     // console.log(obj)
                    localStorage.setItem("random_desserts", JSON.stringify(obj.recipes))
                    dispatch({type: "RANDOM_DESSERTS", payload: obj})
                  })

            
        }
    
    }
}

export default DESSERT_ACTIONS;