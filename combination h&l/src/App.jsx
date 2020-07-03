import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import App1 from './components/login/App1.jsx'
import {BrowserRouter,Route,Switch}from 'react-router-dom'
import Nav1 from './nav.jsx'
import Main from './main.jsx'
import Home from './Home1.js'
import Temp from './temp.js'
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
    <Route path="/" exact component={Nav1}/>
    <Route path="/login" exact component={App1}  call={this.call} />
    <Route path="/Home" exact component={Home}/>
    <Route path="/Temp" exact component={Temp}/>
    <Route path="/" exact component={Main}/>
    </BrowserRouter>
 </div>
  );
  
}
}
export default App;
