import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './pages/Home/Header/Header';
import Home from './pages/Home/Home/Home';
import Error from './pages/Error/Error';
import Login from './pages/Login/Login/Login';
import SignUp from './pages/Login/SignUp/SignUp';
import Menu from './pages/Menus/Menu/Menu';

function App() {
  return (
    <div className="App">

      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/menu'>
            <Menu></Menu>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/signup'>
            <SignUp></SignUp>
          </Route>

          <Route path='*'>
            <Error></Error>
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
