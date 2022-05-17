import logo from './logo.svg';
import './App.css';
import Accounts from './components/Accounts';
import {Provider} from "react-redux";
import store from "./redux/store"
import NewAccounts from './components/NewAccounts';

function App() {

  
  return (

    <Provider store={store}>
      <div className="App">
      <NewAccounts/>
      </div>
    </Provider>

  );
}

export default App;
