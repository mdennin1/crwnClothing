import React, { useEffect, useState } from 'react';
import { Link, Route, Router, Switch } from 'react-router-dom';
//pages
import HomePage from './pages/homepage/homepage';
import LoginPage from './pages/loginPage/loginPage';
import ShopPage from './pages/shopPage/shopPage';
//components
import Header from './components/header/header';
//utils
import { auth, createUserProfileDocument, firebase } from './firebase/firebase';
//
function App() {
  const [currentUser, setCurrentUser] = useState();
  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged(async userAuth =>{
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot=>{
          console.log(`current user snapshot: ${JSON.stringify(snapshot.data())}`, 'color: green');
          setCurrentUser({...snapshot.data()})
        });
      }
      setCurrentUser(null);
    });
    console.log(`currentUser: ${JSON.stringify(currentUser)}`);
    return unsubscribe;
  }, []);
  return (
    <div className="App">
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/login" component={LoginPage} />
      </Switch>
    </div>
  )
}
//
export default App;