import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './containers/Login/Login';
import Home from './containers/Home/Home';
import Profile from './containers/Profile/Profile';
import Header from './components/Header/Header';
import Cart from './containers/Cart/Cart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Header />
          
          <Switch>
          
            <Route path="/" exact component={Home}/>
            <Route path="/login" exact component={Login}/>
            <Route path="/profile" exact component={Profile}/>
            <Route path="/cart" exact component={Cart}/>

          
          </Switch>
          
          
      </BrowserRouter>

    </div>
  );
}

export default App;
