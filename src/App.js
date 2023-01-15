import './App.scss';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Example from './components/Example';
function App() {
  const dispatch = useDispatch();
  const balances = useSelector(state => {
    console.log(state);
    return state.money;
  });
  return (
      <div className='App'>
        <h1>{balances}</h1>
        <button onClick={() => dispatch({ type: 'ADD_MONEY', payload: 4 })}>+</button>
        <button onClick={() => dispatch({ type: 'ADD_MONEY', payload:-4 })}>-</button>
        <Example/>
      </div>
  );
}

export default App;
