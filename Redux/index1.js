import { createStore } from "redux";

const store = createStore(reducer);


function reducer(state={amount:5}, action){
    if(action.type==='incr'){
        return {amount: state.amount+1}
    }
    return state;
}

store.dispatch({type:'incr', amount:2});

console.log(store.getState());

