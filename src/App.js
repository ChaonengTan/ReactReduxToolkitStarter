import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import { setValue } from './features/userSlice';

function App() {
  const dispatch = useDispatch()
  const data = useSelector(e => e.user.value)

  return (
    <div className="App">
      {data ? data.name : ''}
      <input onChange={e => {
        dispatch(setValue({ name: e.target.value }))
      }}></input>
    </div>
  );
}

export default App;
