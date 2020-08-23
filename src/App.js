import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Admin from './Components/Admin/Admin';





function App() {
  const [user,setUser] = useState(false);

  const handleUser = (status) => {
           if(status === 'logedIn'){
             setUser(true);
           }
           else if(status === "logOut"){
             setUser(false);
           }
  }
  return (
    <div>
       

      

          
            
             {
               user ?   <Dashboard handleUser={handleUser}></Dashboard> : <Admin handleUser={handleUser}></Admin>
             } 
          
            
         
       
      
       
    </div>
  );
}

export default App;
