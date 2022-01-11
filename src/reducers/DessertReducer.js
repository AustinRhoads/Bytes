const initial_state = {
    randomDesserts: JSON.parse(localStorage.getItem("random_desserts")) || [],
}



const DessertReducer = (state = initial_state, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default DessertReducer;