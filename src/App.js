import React from 'react';
import { Link, Route, Router, Switch } from 'react-router-dom';
//pages
import HomePage from './pages/homepage/homepage';
import LoginPage from './pages/loginPage/loginPage';
import ShopPage from './pages/shopPage/shopPage';
//components
import Header from './components/header/header';
//
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/login" component={LoginPage} />
      </Switch>
    </div>
  )
}

export default App;
