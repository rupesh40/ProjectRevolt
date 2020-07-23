import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import LoginRegisterUser from './components/User/LoginRegisterUser.jsx'
import GridLoginRegister from './components/Grid/GridLoginRegister.jsx'
import {BrowserRouter,Route, Switch}from 'react-router-dom'
import Navigation from './components/Navigation.jsx'
import Main from './components/FirstScreen/main.jsx'
import DashNavigation from './components/User/Home/DashNavigation.jsx'
import DashNavigationGrid from './components/Grid/HomeGrid/DashNavigationGrid.jsx'
import Temp from './components/Grid/GridLog/Temp.jsx'
import ProtectedRoute from "./protectedRoutes.js"
class App extends React.Component {
  state={
    called:false
  }
  call=()=>{
    this.setState({called:true})
    console.log(this.state.called) 
  }
  render(){
    
    return ( 
    <div >
    
<BrowserRouter>
<Switch>
    <Route path="/loginU" exact component={LoginRegisterUser}/>
    <Route path="/loginG" exact component={GridLoginRegister}/>
    <Route path="/DashNavigationGrid" exact component={DashNavigationGrid}/>
    <Route path="/Temp" exact component={Temp}/>
    <ProtectedRoute path="/DashNavigation"  component={DashNavigation}/>
    <Route path="/" exact component={Main}/>
    
    <Route path="/LogOut" exact component={Main}/>
    </Switch>
    </BrowserRouter>
 </div>
  );
  
}
}
export default App;
// <Route path="/Home" exact component={Home}/>
//  <Route path="/Interface" exact component={Interface}/>
// <Route path="/About" exact component={About}/>
//     <Route path="/ChargingStation" exact component={ChargingStation}/>
//     <Route path="/Network" exact component={Network}/>
//     <Route path="/Services" exact component={Services}/>
//     <Route path="/Trip" exact component={Trip}/>
// <Route path="/HomeNavigation" exact component={HomeNavigation}/>