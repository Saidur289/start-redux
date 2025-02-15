const { default: axios } = require('axios')
const {createStore, applyMiddleware} = require('redux')
const { default: logger } = require('redux-logger')
const thunk = require('redux-thunk').default
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
// const INCREMENT = 'INCREMENT'
// const DECREMENT = 'DECREMENT'
// const RESET = "RESET"
// const INCREMENT_BY_VALUE = 'INCREMENT_BY_VALUE'
// // CREATE STATE 
// const initialCounterState = {
//     count: 0,
// }
// // ACTION START HERE  
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
// const resetCounter = () => {
//     return {
//         type: RESET
//     }
// }
// const incrementCounterByValue =(value) => {
//     return {
//         type: INCREMENT_BY_VALUE,
//         payload: value
//     }
// }
// // CREATE REDUCERS 
// const counterReducer = (state = initialCounterState, action) => {
//     switch (action.type) {
//         case INCREMENT:
//             return {
//                 ...state, count: state.count + 1
//             }
            
//            case DECREMENT:
//             return {
//                 ...state, count : state.count - 1
//             }
//             case INCREMENT_BY_VALUE:
//                 return{
//                     ...state, count: state.count + action.payload
//                 }
//             case RESET:
//                 return{
//                     ...state, count: 0
//                 }
    
//         default:
//             state;
//     }
// }
// // CREATE STORE 
// const store = createStore(counterReducer)
// store.subscribe(() => {
//     console.log(store.getState());
// })
// // store.dispatch(incrementCounter())
// // store.dispatch(decrementCounter())
// // store.dispatch(resetCounter())
// store.dispatch(incrementCounterByValue(5))
// store.dispatch(incrementCounterByValue(10))
// example - 3
// const ADD_USER = "ADD_USER"
// const initialUserState = {
//     users: ['saidur'],
//     count: 1
// }
// const addUser = (user) => {
//     return {
//         type: ADD_USER,
//         payload: user
//     }
// }
// const usersReducers = (state = initialUserState, action) => {
//     switch (action.type) {
//         case ADD_USER:
            
//             return {
//                 users: [...state.users, action.payload],
//                 count: state.count + 1
//             }
    
//         default:
//             state;
//     }
// }
// const store = createStore(usersReducers)
// store.subscribe(() => {
//     console.log(store.getState())
// })
// store.dispatch(addUser('Rahman'))
// store.dispatch(addUser('sahed'))
// example - 4 
// define constant 
// const ADD_PRODUCT = 'ADD_PRODUCT'
// const GET_PRODUCT = 'GET_PRODUCT'
// const GET_CART = 'GET_CART'
// const ADD_CART = 'ADD_CART'
// // DECLARE STATE 
// const initialProductState = {
//     product: ['sugar', 'gram'],
//     count: 2
// }
// const initialCartsState = {
//     carts: ['pen', 'pencil'],
//     count: 2
// }
// // CREATE ACTION 
// const getProduct = () => {
//     return{
//         type: GET_PRODUCT
//     }
// }
// const AddProduct = (product) => {
//     return{
//         type: ADD_PRODUCT,
//         payload: product
//     }
// }
// const getCarts = () => {
//     return{
//         type: GET_CART
//     }
// }
// const AddCarts = (cart) => {
//     return{
//         type: ADD_CART,
//         payload: cart
//     }
// }
// // CREATE REDUCERS 
// const productReducers = (state = initialProductState, action) => {
//     switch (action.type) {
//         case GET_PRODUCT:
            
//             return{
//                 ...state
//             }
//             case ADD_PRODUCT:
//                 return{
//                     products: [...state.product, action.payload],
//                     count: state.count + 1
//                 }
    
//         default:
//             return state
//     }
// }
// const cartsReducers = (state = initialCartsState, action) => {
//     switch (action.type) {
//         case GET_CART:
            
//             return{
//                 ...state
//             }
//             case ADD_CART:
//                 return{
//                     products: [...state.carts, action.payload],
//                     count: state.count + 1
//                 }
    
//         default:
//             return state
//     }
// }
// const rootReducer = combineReducers({
//     productR: productReducers,
//     cartsR: cartsReducers
// })
// const store = createStore(rootReducer)
// store.subscribe(() => {
//     console.log(store.getState());
// })
// store.dispatch(getProduct())
// store.dispatch(AddCarts('kire jogon'))
// example - 5 middleware example with product 
// const ADD_PRODUCT = 'ADD_PRODUCT'
// const GET_PRODUCT = 'GET_PRODUCT'
// const initialProductState = {
//         product: ['sugar', 'gram'],
//         count: 2
//     }
// const getProduct = () => {
//     return{
//         type: GET_PRODUCT
//     }
// }
// const AddProduct = (product) => {
//     return{
//         type: ADD_PRODUCT,
//         payload: product
//     }
// }
// const productReducers = (state = initialProductState, action) => {
//     switch (action.type) {
//         case GET_PRODUCT:
            
//             return{
//                 ...state
//             }
//             case ADD_PRODUCT:
//                 return{
//                     products: [...state.product, action.payload],
//                     count: state.count + 1
//                 }
    
//         default:
//             return state
//     }
// }
// const store = createStore(productReducers, applyMiddleware(logger))
// store.subscribe(() => {
//     console.log(store.getState());
// })
// store.dispatch(getProduct())
// store.dispatch(AddProduct('kire jogon'))
// example fetch data redux thunk 
// NEED AXIOS AND THUNK 
const GET_TODOS_REQUEST = 'GET_TODOS_REQUEST'
const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS'
const GET_TODOS_FAILED = 'GET_TODOS_FAILED'
const API_URL = 'https://jsonplaceholder.typicode.com/posts'
// STATE 
const initialTodosState = {
    todos: [],
    isLoading: false,
    error: null
}
// action 
const getTodosRequest = () => {
    return{
        type: GET_TODOS_REQUEST
    }
}
const getTodosFailed = (error) => {
    return{
        type: GET_TODOS_FAILED,
        payload: error
    }
}
const getTodosSuccess = (todos) => {
    return{
        type: GET_TODOS_SUCCESS,
        payload: todos
    }
}
// Reducers 
const todosReducers = (state=initialTodosState, action) => {
    switch (action.type) {
        case GET_TODOS_REQUEST:
            
            
                return{
                    ...state, isLoading: true
                }
            
            case GET_TODOS_SUCCESS:
                return{
                    ...state, isLoading: false, todos: action.payload
                }
                case GET_TODOS_FAILED:
                    return{
                        ...state, isLoading: false, error: action.payload
                    }
    
        default:
            return state;
    }
}
const fetchData = () => {
    return(dispatch) => {
        dispatch(getTodosRequest())
        axios.get(API_URL)
        .then(res => {
            // console.log(res.data);
            const todos  = res.data 
            const title = todos.map((todo) => todo.title)
            dispatch(getTodosSuccess(title))
        })
        .catch((error) => {
            const errorMsg = error.message
            dispatch(getTodosFailed(errorMsg))
        })
    }

}
const store = createStore(todosReducers, applyMiddleware(thunk))
store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(fetchData())
