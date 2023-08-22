import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { incrementBonus } from "../actions";

const Bonus = () =>{

    const amount = useSelector(state=> state.account.amount);
  const points = useSelector(state=>state.bonus.points);
  const dispatch = useDispatch();

    return (
        <div>
            <h1>Bonus Component:</h1>
            <h3>Total Point : {points} </h3>
            <button onClick={()=>dispatch(incrementBonus())}>Bonus Increment +</button>
        </div>
    )
}
 export default Bonus;