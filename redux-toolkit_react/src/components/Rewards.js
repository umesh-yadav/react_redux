import {increment} from '../reducers/reward'
import {useSelector, useDispatch} from 'react-redux';


const Reward = () =>{
     const points = useSelector(state=> state.reward.points);
   const dispatch = useDispatch();
   
    return (
        <div>
            <h3>Reward : {points}</h3>
            <button onClick={()=>dispatch(increment())}>Reward Increment +</button>
        </div>
    )
}
export default Reward;