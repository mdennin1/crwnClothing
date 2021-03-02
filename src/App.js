import React from 'react';
import { Link, Route, Router, Switch } from 'react-router-dom';
//pages
import HomePage from './pages/homepage/homepage';
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
      </Switch>
    </div>
  )
}

export default App;
