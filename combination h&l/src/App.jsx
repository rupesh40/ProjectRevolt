import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import LoginRegisterUser from './components/login&registration/LoginRegisterUser.jsx'
import GridLoginRegister from './components/login&registration/GridLoginRegister.jsx'
import {BrowserRouter,Route,Switch}from 'react-router-dom'
import Navigation from './components/login&registration/Navigation.jsx'
import Main from './components/login&registration/main.jsx'
import Home from './components/Home/Home.js'
//import Temp from './temp.js'
import Interface from './components/login&registration/Interface.jsx'
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
    <Route path="/Home" exact component={Home}/>
    <Route path="/Interface" exact component={Interface}/>
    <Route path="/h" exact component={Home}/>
    <Route path="/" exact component={Main}/>
    </BrowserRouter>
 </div>
  );
  
}
}
export default App;
