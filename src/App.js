import React from 'react';
import Header from './components/Header'
import AddingItem from './components/AddingItem'
import Dashboard from './components/Dashboard'
import Home from './components/Home'
import Login from './components/Login'
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className = 'container-fluid'>
    <Header/>
    <Switch>
    <Route path = '/' component = {Login} exact/>
    <Route path = '/Home' component = {Home}/>
    <Route path = '/Stats' component = {Dashboard}/>
    <Route path = '/AddingItem' component = {AddingItem}/>
    </Switch>
    </div>
    )
}

export default App;
