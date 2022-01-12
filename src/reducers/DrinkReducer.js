const initial_state = {
    randomDrinks: JSON.parse(localStorage.getItem("random_drinks")) || [],
}



const DrinkReducer = (state = initial_state, action) => {
    switch(action.type){
        case "RANDOM_DRINKS":
            return {...state, randomDrinks: action.payload}
        default:
            return state;
    }
}

export default DrinkReducer;