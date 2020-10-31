import React,{useState } from 'react';
import Sidebar from "./Sidebar"
import './App.css';
import Header from './Header';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "./Chat";
import Login from "./Login";
import { useStateValue } from './StateProvider';
function App() {
 
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="App">
      <Router>
        {!user ? (
          
          <Login />
        ) : (
        <>
          <Header />
          <div className="app__body">
            <Sidebar />

            <Switch>
              <Route path="/room/:roomId">
                <Chat />
              </Route>
              <Route path="/">
                <h2>Welcome to slack</h2>
              </Route>
            </Switch>
          </div>
        </>
        )}

      </Router>
      
    </div>
  );
}

export default App;
