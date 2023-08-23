
import './App.css';
import Account from './components/Account';
import Bonus from './components/Bonus';
import {useSelector} from 'react-redux';
import Reward from './components/Rewards';
import Admin from './components/Admin';
function App() {

  const amount = useSelector(state => state.account.amount);
  const points = useSelector(state => state.bonus.points);

  return (
    <div className="App">
      <h3>Amount : $ {amount}</h3>
      <h3>Bonus Points : $ {points}</h3>
      <Account />
      <Bonus />
      <Reward />
      <Admin />
    </div>
  );
}

export default App;
