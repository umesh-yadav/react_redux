import React, { useState } from "react";
import { useSelector,useDispatch } from 'react-redux';
import { decrement, decrementByAmount, getUserAccount, increment, incrementByAmount } from "../actions";
const Account = () =>{

const [value, setValue] = useState(0);
const amount = useSelector(state=> state.account.amount);
  const points = useSelector(state=>state.bonus.points);
  const dispatch = useDispatch();

    return (
        <div>
            <h3>Amount: ${amount}</h3>
            <h3>Points: ${points}</h3>
            <button onClick={()=>dispatch(increment())}>Increment +</button>
            <button onClick={()=>dispatch(decrement())}>Decrement -</button>
            <input onChange={(e)=> setValue(e.target.valueAsNumber)} type="number" placeholder="type number" />
            <button onClick={()=>dispatch(incrementByAmount(value))}>Increment by {value}+</button>
             
            <button onClick={()=>{
                dispatch(decrementByAmount(value)) 
                }}>Decrement by {value}-</button>
            <button onClick={ ()=>dispatch(getUserAccount(1))}>Login User</button>
        </div>
    )
}

export default Account;