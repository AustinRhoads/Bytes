const initial_state = {
    randomDrinks: JSON.parse(localStorage.getItem("random_drinks")) || [],
}



const DrinkReducer = (state = initial_state, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default DrinkReducer;