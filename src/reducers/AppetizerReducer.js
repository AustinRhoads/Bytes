const initial_state = {
    randomAppetizers: JSON.parse(localStorage.getItem("random_appetizers")) || [],
}



const AppetizerReducer = (state = initial_state, action) => {
    switch(action.type){
        case "RANDOM_APPETIZERS":
            return {...state, randomAppetizers: action.payload.recipes}
        default:
            return state;
    }
}

export default AppetizerReducer;