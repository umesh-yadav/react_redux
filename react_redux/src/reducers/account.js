import { decr, decrByAmt, getAccUserFulfilled, getAccUserPending, getAccUserRejected, incr, incrByAmt } from "../actions";

export default function accountReducer(state={amount:2}, action){
    switch(action.type){
        case getAccUserFulfilled :
            return {amount: action.payload, pending: false};
        case getAccUserRejected :
            return {...state, error: action.error, pending: false};
        case getAccUserPending :
            return {...state, pending : true};
        case incr:
            return {amount : state.amount + 1};
        case decr : 
            if(state.amount<=0)
            {
                alert("amount cannot be less than 0");
                return {amount: state.amount, error: "amount cann't be less than 0"}
            }
            return {amount : state.amount - 1};
        case incrByAmt : 
            return {amount: state.amount + action.payload};
        case decrByAmt:
            if(state.amount - action.payload <0){
                alert("amount cannot be negative. Please choose a different amount");
                return {amount: state.amount, error: "amount cannot be negative"};
            }
            return {amount: state.amount - action.payload};
        default:
            return state;
    }
}