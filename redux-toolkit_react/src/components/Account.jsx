import { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, incrementByAmount, decrementByAmount} from '../slices/accountSlice';

const Account = () =>{
    const amount = useSelector(state=>state.account.amount);
    const points = useSelector(state=> state.bonus.points);
    const [value, setValue] = useState(0);
   const dispatch = useDispatch();
   
    return (
        <div>
            <h3>Amount: $ {amount}</h3>
            <button onClick={()=> dispatch(increment())}>Increment +</button>
            <button onClick={()=> dispatch(decrement())}>Decrement -</button>
            <input type='number' onChange={(e)=>setValue(e.target.valueAsNumber)} placeholder='Enter amount'/>
            <button onClick={()=>dispatch(incrementByAmount(value))}>Increment By +{value}</button>
            <button onClick={()=>dispatch(decrementByAmount(value))}>Decrement By -{value} </button>
        </div>
    )
}

export default Account;