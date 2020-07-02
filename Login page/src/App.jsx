import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import App1 from './App1.jsx'
import {BrowserRouter,Route,Switch}from 'react-router-dom'
import Nav1 from './nav.jsx'
import Main from './main.jsx'

class App extends React.Component {
  render(){
  return (
    <div >
<BrowserRouter>

    <Route path="/"  component={Nav1}/>
    <Route path="/login" exact component={App1}/>
    <Route path="/" exact component={Main}/>

    </BrowserRouter>
 </div>
  );
  
}
}
export default App;
