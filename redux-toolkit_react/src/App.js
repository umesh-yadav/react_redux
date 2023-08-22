
import './App.css';
import Account from './components/Account';
import Bonus from './components/Bonus';
import {useSelector} from 'react-redux';
function App() {

  const amount = useSelector(state => state.account.amount);
  const points = useSelector(state => state.bonus.points);

  return (
    <div className="App">
      <h3>Amount : $ {amount}</h3>
      <h3>Bonus Points : $ {points}</h3>
      <Account />
      <Bonus />
    </div>
  );
}

export default App;
