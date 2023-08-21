import axios from "axios";
//action name constaints

export const incr = 'account/increment';
export const decr = 'account/decrement';
export const incrByAmt = 'account/incrementByAmount';
export const getAccUserPending = 'account/getUser/pending';
export const getAccUserRejected = 'account/getUser/rejected';
export const getAccUserFulfilled = 'account/getUser/fulfilled';
export const incBonus = 'bonus/increment';
export const decrByAmt = 'account/decrementByAmount';

//action creators
export function getUserAccount(id) {
    return async (dispatch, getState) =>{
        try{
            dispatch(getAccountUserPending());
            const {data} = await axios.get('http://localhost:8000/accounts/1');
            console.log("data from : " +data);
            dispatch(getAccountUserFulfilled(data.amount));
        } catch(error){
            console.log(error);
            dispatch(getAccountUserRejected(error.message));
        }
    }
}

export function getAccountUserFulfilled(value){
    return {type: getAccUserFulfilled, payload: value};
}

export function getAccountUserRejected(error){
    return {type: getAccUserRejected, error: error};
}

export function getAccountUserPending(){
    return {type: getAccUserPending};
}

export function increment(){
    return {type: incr};
}

export function decrement(){
    return {type: decr};
}

export function incrementByAmount(value){
    return {type: incrByAmt, payload: value}
}

export function incrementBonus(){
    return {type: incBonus };
}

export function decrementByAmount(value){
    return {type: decrByAmt, payload: value};
}