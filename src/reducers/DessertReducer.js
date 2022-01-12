const initial_state = {
    randomDesserts: JSON.parse(localStorage.getItem("random_desserts")) || [],
}



const DessertReducer = (state = initial_state, action) => {
    switch(action.type){
        case "RANDOM_DESSERTS":
            return {...state, randomDesserts: action.payload}
        default:
            return state;
    }
}

export default DessertReducer;