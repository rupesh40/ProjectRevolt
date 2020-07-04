import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import LoginRegisterUser from './components/login&registration/LoginRegisterUser.jsx'
import GridLoginRegister from './components/login&registration/GridLoginRegister.jsx'
import {BrowserRouter,Route,Switch}from 'react-router-dom'
import Navigation from './components/Navigation.jsx'
import Main from './components/login&registration/Main/main.jsx'
import Home from './components/Home/Home.js'
//import Temp from './temp.js'
import Interface from './components/login&registration/Interface.jsx'
import HomeNavigation from './components/Home/HomeNavigation.jsx';
import About from './components/Home/About.js';
import ChargingStation from './components/Home/ChargingStation.js';
import Network from './components/Home/Network.js';
import Services from './components/Home/Services.jsx';
import Trip from './components/Home/Trip.jsx';
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
    <Route path="/loginU" exact component={LoginRegisterUser}/>
    <Route path="/loginG" exact component={GridLoginRegister}/>
    <Route path="/" exact component={Navigation}/>
    <Route path="/Interface" exact component={Interface}/>
    <Route path="/HomeNavigation" exact component={HomeNavigation}/>
    <Route path="/" exact component={Main}/>
    <Route path="/About" exact component={About}/>
    <Route path="/ChargingStation" exact component={ChargingStation}/>
    <Route path="/Network" exact component={Network}/>
    <Route path="/Services" exact component={Services}/>
    <Route path="/Trip" exact component={Trip}/>
    <Route path="/LogOut" exact component={Main}/>
    
    </BrowserRouter>
 </div>
  );
  
}
}
export default App;
// <Route path="/Home" exact component={Home}/>