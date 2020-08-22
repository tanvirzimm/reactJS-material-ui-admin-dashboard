import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';





function App() {
  
  return (
    <div>
      
      <Dashboard></Dashboard>
      
    </div>
  );
}

export default App;
