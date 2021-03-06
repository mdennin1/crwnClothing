import React, { useEffect, useState } from 'react';
import { Link, Route, Router, Switch } from 'react-router-dom';
//pages
import HomePage from './pages/homepage/homepage';
import LoginPage from './pages/loginPage/loginPage';
import ShopPage from './pages/shopPage/shopPage';
//components
import Header from './components/header/header';
//utils
import { auth, firebaseApp } from './firebase/firebase';
//
// class App extends React.Component{
//   constructor(){
//     super();
//     this.state = {
//       currentUser: null,
//     }
//   }
//   unsubscribeFromAuth = null;
//   componentDidMount(){
//     this.unsubscribeFromAuth = auth.onAuthStateChanged(user =>{
//       this.setState({currentUser: user});
//       console.log(this.state);
//     });
//   }
//   componentWillUnmount(){
//     this.unsubscribeFromAuth();
//   }
//   //
//   render(){
//     return (
//       <div className="App">
//         <Header currentUser={this.state.currentUser}/>
//         <Switch>
//           <Route exact path="/" component={HomePage} />
//           <Route exact path="/shop" component={ShopPage} />
//           <Route exact path="/login" component={LoginPage} />
//         </Switch>
//       </div>
//     ) 
//   }
// }
///
function App() {
  const [currentUser, setCurrentUser] = useState();
  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged(user =>setCurrentUser(user));
    console.log(currentUser);
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