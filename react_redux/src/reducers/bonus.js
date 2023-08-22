import {incBonus, incrByAmt} from '../actions/index';


export default function bonusReducer (state ={points:1}, action){
    switch(action.type){
        case incBonus:
            return {points: state.points + 1};
        case incrByAmt:
            if(action.payload>=100)
            return {points: state.points + 1};
        default:
            return state;
   
        }
}