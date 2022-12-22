import "./App.css";
import { Home } from "./components/Home";
import {Provider} from 'react-redux';
import {myStore} from './ReduxFolder/store';
import { CountClass } from "./components/CountClass";

function App() {
  // console.log(store);
  return (
    <Provider store={myStore}>
      <div className="App">
      <header className="App-header"><h1>Redux</h1></header>
        <Home/>
        
      </div>
      
    </Provider>
  );
}

export default App;
