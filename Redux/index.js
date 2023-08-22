import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import axios from 'axios';
import thunk from 'redux-thunk';

//action name constants
const increment = 'account/increment';
// const init = 'account/init';
const decrement = 'account/decrement';
const incrementByAmount = 'account/incrementByAmount';
const getAccUserPending = 'account/getUser/pending';
const getAccUserFulfilled = 'account/getUser/fulfilled';
const getAccUserRejected = 'account/getUser/rejected';
const incrBonus = 'bonus/incBonus';

//store

const store = createStore(
    combineReducers({
        account: accountReducer,
        bonus: bonusReducer
    }),
    applyMiddleware(logger.default, thunk.default));
const history = [];


//reducer
function accountReducer(state = { amount: 1 }, action) {
    switch (action.type) {
        case getAccUserFulfilled:
            //immutability
            return { amount: action.payload, pending: false };
        case getAccUserRejected:
            //immutability
            return { ...state, error : action.error, pending: false };

        case getAccUserPending:
                //immutability
            return { ...state, pending: true };
    

        case getAccUserPending:
                //immutability
          return { amount: action.payload };
        case increment:
            //immutability
            return { amount: state.amount + 1 }

        case decrement:
            //immutability
            return { amount: state.amount - 1 }

        case incrementByAmount:
            //immutability
            return { amount: state.amount + action.payload }

        default:
            return state;
    }

}

function bonusReducer(state = { points: 1 }, action) {
    switch (action.type) {
        case incBonus:
            return { points: state.points + 1 };
        case incrementByAmount:
            if (action.payload >= 400)
                return { points: state.points + 1 };
        default:
            return state;
    }
}

// //global state
// store.subscribe(()=>{
//     history.push(store.getState());
//     console.log(history);
// })

//Async api call
function getAccountUserFulfilled(value) {
    return { type: getAccUserFulfilled, payload: value };
}

function getAccountUserRejected(error) {
    return { type: getAccUserRejected, error:error };
}

function getAccountUserPending() {
    return { type: getAccUserPending };
}

//getUser();
//action creators
function getUserAccount(id) {
    return async (dispatch, getState) => {
        try{
            dispatch(getAccountUserPending());
            const { data } = await axios.get(`http://localhost:3000/account/${id}`);
            dispatch(getAccountUserFulfilled(data.amount));
    
        } catch(error){
            dispatch(getAccountUserRejected(error.message));
        }
 
    }
}

function incr() {
    return { type: increment };
}

function decr() {
    return { type: decrement };
}

function incrByAmount(value) {
    return { type: incrementByAmount, payload: value };
}

function incBonus() {
    return { type: incrBonus };
}

setTimeout(() => {
    store.dispatch(getUserAccount(2));
    // store.dispatch(incrByAmount(300));
    // store.dispatch(incBonus());
}, 1000);

console.log(store.getState().bonus);