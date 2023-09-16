import './App.css';
import React from 'react';
import Home from './screens/Home';
import Login from './screens/Login'
import Signup from './screens/Signup'
import MyOrder from './screens/MyOrder'
import {
  BrowserRouter as Router,
  Routes,
  Route
  } from "react-router-dom";

import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

import { CartProvider } from './components/ContextReducer'
function App() {
  return (
  
   
<CartProvider>     
   <Router>
        <div>
          <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/creatuser" element={<Signup/>}/>
          <Route exact path="/myOrder" element={<MyOrder />}/>
          </Routes>
        </div>
      </Router>
      </CartProvider>
    
  );
}
export default App;
