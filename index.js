const {createStore} = require('redux')
// defineing variable 
// const INCREMENT = 'INCREMENT'
// const DECREMENT = 'DECREMENT'
// const ADD_USER = 'ADD_USER'
// // state 
// const initialCounterState = {
//     count: 0,
// }
// const initialUserState = {
//     users: [{name: 'saidur rahman'}]
// }


// // action  have two state 
// // action have two things object and payload
// const incrementCounter = () => {
//     return {
//         type: INCREMENT
//     }
// }
// const decrementCounter = () => {
//     return {
//         type: DECREMENT
//     }
// }
// const addUser = () => {
//     return {
//         type: ADD_USER,
//         payload: {name: 'saidur'}
//     }
// }
// // 1. state
// // 2.dispatch action 
// // 3. reducer
// const counterReducer = (state = initialCounterState, action) => {
//     switch(action.type){
//         case INCREMENT :
//         return {
//             ...state,
//             count: state.count + 1
//         }
//         case DECREMENT :
//             return {
//                 ...state,
//                 count: state.count - 1
//             }
//             default:
//                 state;
//     }
// }
// // create store 
// const store = createStore(counterReducer)
// store.subscribe(() => {
//     console.log(store.getState());
// })
// // dispatch 
// store.dispatch(incrementCounter())
// store.dispatch(incrementCounter())
// store.dispatch(incrementCounter())
// store.dispatch(decrementCounter())
// example - 2 recap 
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const RESET = "RESET"
// CREATE STATE 
const initialCounterState = {
    count: 0,
}
// ACTION START HERE  
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
const resetCounter = () => {
    return {
        type: RESET
    }
}
// CREATE REDUCERS 
const counterReducer = (state = initialCounterState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state, count: state.count + 1
            }
            
           case DECREMENT:
            return {
                ...state, count : state.count - 1
            }
            case RESET:
                return{
                    ...state, count: 0
                }
    
        default:
            state;
    }
}
// CREATE STORE 
const store = createStore(counterReducer)
store.subscribe(() => {
    console.log(store.getState());
})
store.dispatch(incrementCounter())
store.dispatch(decrementCounter())
store.dispatch(resetCounter())