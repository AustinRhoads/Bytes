const initial_state = {
    random_entrees: localStorage.getItem("random_entrees") || [],
}



const EntreeReducer = (state = initial_state, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default EntreeReducer;