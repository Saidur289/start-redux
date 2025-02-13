// defineing variable 
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const ADD_USER = 'ADD_USER'
// state 
const initialCounterState = {
    count: 0,
}
const initialUserState = {
    users: [{name: 'saidur rahman'}]
}


// action  have two state 
// action have two things object and payload
const incrementCounter = () => {
    return {
        type: INCREMENT
    }
}
const decrementCounter = () => {
    return {
        type: DECREMENT
    }
}
const addUser = () => {
    return {
        type: ADD_USER,
        payload: {name: 'saidur'}
    }
}
// 1. state
// 2.dispatch action 
// 3. reducer
const counterReducer = (state = initialCounterState, action) => {
    switch(action.type){
        case INCREMENT :
        return {
            ...state,
            count: state.count + 1
        }
        case DECREMENT :
            return {
                ...state,
                count: state.count - 1
            }
            default:
                state;
    }
}