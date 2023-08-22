
import {useSelector, useDispatch} from 'react-redux';
import {increment} from '../slices/bonusSlice';

const Bonus = () =>{
     const points = useSelector(state=> state.bonus.points);
   const dispatch = useDispatch();
   
    return (
        <div>
            <h3>Bonus : {points}</h3>
            <button onClick={()=>dispatch(increment())}>Bonus Increment +</button>
        </div>
    )
}
export default Bonus;